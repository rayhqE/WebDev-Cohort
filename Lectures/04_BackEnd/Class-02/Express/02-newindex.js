const express = require("express");

const app = express();

app.use(express.json());

app.get("/menu", (req, res) =>
  res.json({
    items: ["thali", "birayni"],
  }),
);
app.post("/order", myFunc);
const myFunc = (req, res) => {
  res.status(200).json({
    status: "recieved",
    order: req.body,
  });
};
