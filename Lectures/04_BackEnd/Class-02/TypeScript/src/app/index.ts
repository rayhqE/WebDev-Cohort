import express from "express";
import type { Application } from "express";
import todoRouter from "./ToDo/routes.js";
export function createServerApplication(): Application {
  const app = express();
  app.use(express.json());
  app.use("/todos", todoRouter);
  return app;
}
