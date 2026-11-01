const express = require("express");

function block_1_basicServer() {
  return new Promise((resolve) => {
    const app = express();
    app.use(express.json());

    app.get("/menu", (_, res) => {
      res.json({
        items: ["thali", "biryani"],
      });
    });

    app.get("/search", (req, res) => {
      const { q, limit } = req.query;
      res.json({
        query: q,
        limit: limit || "10",
      });
    });

    app.get("/menu/:id", (req, res) => {
      const { id } = req.params;
      res.json({
        item: id,
        price: 149,
      });
    });
    app.post("/order", (req, res) => {
      const order = req.body;
      res.status(201).json({
        status: "created",
        order,
      });
    });

    const server = app.listen(0, async () => {
      const port = server.address().port;
      const base = `http://127.0.0.1:${port}`;

      try {
        const menuRes = await fetch(`${base}/menu`);
        const menuData = await menuRes.json();
        console.log("GET /menu", JSON.stringify(menuData));
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++");

        const searchRes = await fetch(`${base}/search?q=biryani&limit`);
        const searchData = await searchRes.json();
        console.log("GET /search", JSON.stringify(searchData));
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++");

        const menuItemRes = await fetch(`${base}/menu/42`);
        const menuItemData = await menuItemRes.json();
        console.log("GET /menu/42", JSON.stringify(menuItemData));
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++");

        const orderRes = await fetch(`${base}/order`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            body: JSON.stringify({
              dish: "biryani",
              quantity: 2,
            }),
          },
        });
        const orderData = await orderRes.json();
        console.log("POST /order", JSON.stringify(orderData));
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
      } catch (error) {
        console.log(error);
      }
      server.close(() => {
        console.log("Block 1 Served....");
        resolve();
      });
    });
  });
}

function block_2_response() {
  return new Promise((resolve) => {
    const app = express();
    app.get("/text", (req, res) => {
      res.send("Hello from ChaiCode");
    });
    app.get("/json", (req, res) => {
      res.json({
        framework: "express",
        version: "5.1.1",
      });
    });
    app.get("/not-found", (req, res) => {
      res.status(404).json({
        error: "Page Not Found",
      });
    });
    app.get("/health", (req, res) => {
      res.sendStatus(200);
    });
    app.get("/old-menu", (req, res) => {
      //add entry in DB to see how many users are still visiting old route
      res.redirect(301, "/new-menu");
    });
    app.get("/xml", (req, res) => {
      res.type("application/xml").send("<dish><name>Biryani</name></dish>");
    });
    app.get("/custom-headers", (req, res) => {
      res.set("X-powered-By", "ChaiCode");
      res.set("X-Request-Id", "C12345B");
      res.json({
        message: "Custom Headers Set",
      });
      //CORS,caching,tracing
    });
    app.get("/no-content", (req, res) => {
      res.status(204).end();
    });
    app.get("/new-menu", (req, res) => {
      res.json({ message: "Welcome to the new menu!" });
    });
    const server = app.listen(0, async () => {
      const port = server.address().port;
      const base = `http://127.0.0.1:${port}`;
      try {
        //TODO
        const textRes = await fetch(`${base}/text`);
        const textData = await textRes.text();
        console.log("GET /text:", textData);
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++");

        const jsonRes = await fetch(`${base}/json`);
        const jsonData = await jsonRes.json();
        console.log("GET /json:", JSON.stringify(jsonData));
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++");

        const notfoundRes = await fetch(`${base}/not-found`);
        const notfoundData = await notfoundRes.json();
        console.log("GET /not-found:", JSON.stringify(notfoundData));
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++");

        const healthRes = await fetch(`${base}/health`);
        const healthData = await healthRes.text();
        console.log("GET /health:", healthData);
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++");

        const oldmenuRes = await fetch(`${base}/old-menu`);
        const oldmenuData = await oldmenuRes.text();
        console.log("GET /old-menu:", oldmenuData);
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++");

        const xmlRes = await fetch(`${base}/xml`);
        const xmlData = await xmlRes.text();
        console.log("GET /xml:", xmlData);
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++");

        const customHeadersRes = await fetch(`${base}/custom-headers`);
        const customHeadersData = await customHeadersRes.json();
        console.log("GET /custom-headers:", JSON.stringify(customHeadersData));
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++");

        const noContentRes = await fetch(`${base}/no-content`);
        const noContentData = await noContentRes.text();
        console.log("GET /no-content:", noContentData);
      } catch (error) {
        console.log(error);
      }
    });
  });
}

async function main() {
  await block_1_basicServer();
  await block_2_response();
  process.exit(0);
}
main();
