const express = require("express");

function block_1_httpMethods() {
  return new Promise((resolve) => {
    const app = express();
    app.use(express.json());

    const routes = {
      1: {
        name: "Dadar -Andheri Express",
        direction: "North",
      },
      2: {
        name: "Bandra-Kurla Shuttle",
        direction: "East",
      },
    };
    let nextId = 3;
    //list all train
    app.get("/routes", (req, res) => {
      res.json(Object.values(routes));
    });
    //single route by id
    app.get("/routes/:id", (req, res) => {
      // const { id } = req.params;
      // const route = routes[id];
      const route = routes[req.params.id];
      if (!route) return res.status(404).json({ error: "No Train on this id" });
      res.json(route);
    });

    app.post("/routes", (req, res) => {
      //no validation, no zod
      const newRoute = { id: nextId++, ...req.body };
      routes[newRoute.id] = newRoute;
      res.status(201).json(newRoute);
    });

    app.put("/routes/:id", (req, res) => {
      const id = req.params.id;
      if (!routes[id]) {
        return res.status(404).json({ error: "Something went wrong" });
      }
      routes[id] = { id: Number(id), ...req.body };
    });
    app.patch("/routes/:id", (req, res) => {
      const id = req.params.id;
      if (!routes[id]) {
        return res.status(404).json({ error: "Something went wrong" });
      }
      //TODO
      routes[id] = { ...routes[id], ...req.body };
      res.status(200).json({
        message: "Route updated successfully",
        route: routes[id],
      });
    });

    app.delete("/routes/:id", (req, res) => {
      const id = req.params.id;
      if (!routes[id]) {
        return res.status(404).json({ error: "Something went wrong" });
      }
      delete routes[id];
      res.status(204).end();
    });

    const server = app.listen(0, async () => {
      const port = server.address().port;
      const base = `http://127.0.0.1:${port}`;

      try {
        //TODO
        const listRes = await fetch(`${base}/routes`);
        const listData = await listRes.json();
        console.log("GET /routes", JSON.stringify(listData));
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++");

        const createRes = await fetch(`${base}/routes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: "Collaba-Worli",
            direction: "South",
          }),
        });
        const createdData = await createRes.json();
        console.log("POST /routes", JSON.stringify(createdData));
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
function block_2_httpMethods() {
  return new Promise((resolve) => {
    const app = express();
    app.use(express.json());
    // /files/docs/readme.txt
    ///files/assests/style.css

    app.get("/files/filepath", (req, res) => {
      const filepath = req.params.filepath;
      res.json({ filepath, type: "wildcard" });
    });

    app
      .route("/schedule")
      .get((req, res) => {})
      .post((req, res) => {})
      .put((req, res) => {})
      .delete((req, res) => {});

    app.use("/api", (req, res) => {
      //its a prefetch match
    });

    const server = app.listen(0, async () => {
      const port = server.address().port;
      const base = `http://127.0.0.1:${port}`;

      try {
        //TODO
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

async function main() {
  await block_1_httpMethods();
  await block_2_httpMethods();

  process.exit(0);
}
main();
