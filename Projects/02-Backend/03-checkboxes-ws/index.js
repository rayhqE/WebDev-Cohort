import http from "node:http";
import path from "node:path";

import express from "express";
import { Server } from "socket.io";

import { publisher, subscriber } from "./redis-connection.js";

const CHECKBOX_SIZE = 100;
const state = {
  checkboxes: new Array(CHECKBOX_SIZE).fill(false),
};

async function main() {
  const PORT = process.env.PORT ?? 8000;

  const app = express();
  const server = http.createServer(app);

  const io = new Server();
  io.attach(server);

  await subscriber.subscribe("internal-server:checkbox:change");
  subscriber.on("message", (channel, message) => {
    if (channel === "internal-server:checkbox:change") {
      const { index, checked } = JSON.parse(message);
      state.checkboxes[index] = checked;
      io.emit("server:checkbox:change", { index, checked });
    }
  });

  //Socket IO Handlers
  io.on("connection", (socket) => {
    console.log(`Socket Connected`, { id: socket.id });

    socket.on("client:checkbox:change", async (data) => {
      console.log(`[Socket:${socket.id}]:client:checkbox:change`, data);
      await publisher.publish(
        "internal-server:checkbox:change",
        JSON.stringify(data),
      );
    });
  });

  //Express handlers
  app.use(express.static(path.resolve("./public")));
  app.get("/health", (req, res) => res.json({ healthy: true }));

  app.get("/checkboxes", (req, res) => {
    return res.json({ checkboxes: state.checkboxes });
  });

  server.listen(PORT, () => {
    console.log(`Server is running on http:localhost:${PORT}`);
  });
}
main();
