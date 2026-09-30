import express from "express";
import type { Application } from "express";
export function createServerApplication(): Application {
  const app = express();
  app.get("/", (req, res) => {
    res.json({ message: "hello ji kese ho" });
  });
  app.get("/hello", (req, res) => {
    res.json({ message: "See you bro bye" });
  });
  return app;
}
