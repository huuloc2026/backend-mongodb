require("dotenv").config();
const express = require("express");

//

const configViewEngine = require("./config/viewEngine");
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

const webRoute = require("./routes/web");
const connection = require("./config/database");

//config template engine
configViewEngine(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// khai bao route
app.use("/", webRoute);

//

//test connection;
(async () => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Backend zero app listening at ${hostname} on port ${port}`);
    });
  } catch (error) {
    console.log(">>>>>error", error);
  }
})();

//
