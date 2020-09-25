import express from "express";
import bodyParser from "body-parser";
import indexRoutes from "./routes/user.routes";
import cors from 'cors';

const port = process.env.NODE_PORT || 4848;

export function run() {
  const app = express();
  
  app.use(cors());
  app.use(express.json())
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(indexRoutes);

  app.get("/", function (_, res) {
    res.type("text/plain").send("Food can be served");
  });

  return app.listen(port, function () {
    // Port is forwarded by docker to 80.
    console.log(`Listening on http://localhost:${port}`);
  });
}

if (process.env.NODE_ENV !== "testing") {
  run();
}
