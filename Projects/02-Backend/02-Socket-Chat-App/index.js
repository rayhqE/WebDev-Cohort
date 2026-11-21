import http from "node:http";
import { Server } from "socket.io";
import path from "path";
import express from "express";
async function main() {
  const app = express();
  app.use(express.static(path.resolve("./public")));

  const server = http.createServer(app);
  const io = new Server();

  io.attach(server);

  io.on("connection", (socket) => {
    console.log(`A new socket has connected`, socket.id);
    socket.on("user:message", (data) => {
      console.log(`Message from socket`, data);
      socket.broadcast.emit("server:message", data);
    });
    socket.on("user:typing", () => {
      socket.broadcast.emit("server:user:typing", { id: socket.id });
    });
  });

  server.listen(9000, () => {
    console.log(`Http Server is running on PORT 9000`);
  });
}

main();
