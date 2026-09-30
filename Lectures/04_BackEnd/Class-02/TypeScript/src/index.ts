// console.log("Hello from TS File,Change Something");
// console.log("Hey There");
import { env } from "./env.js";
import http from "node:http";
import { createServerApplication } from "./app/index.js";
async function main() {
  try {
    const server = http.createServer(createServerApplication());
    const PORT: number = env.PORT ? +env.PORT : 8080;
    server.listen(PORT, () => {
      console.log(`Server is running on Port ${PORT}`);
    });
  } catch (error) {
    throw error;
  }
}

main();
