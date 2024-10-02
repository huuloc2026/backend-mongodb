require("dotenv").config();
const express = require("express");

//

const configViewEngine = require("./config/viewEngine");
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const fileUpload = require("express-fileupload");
const webRoute = require("./routes/web");
const apiroute = require("./routes/api");
const connection = require("./config/database");
const { MongoClient } = require("mongodb");
//file file upload
app.use(fileUpload());
//config template engine
configViewEngine(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// khai bao route
app.use("/", webRoute);

app.use("/v1/api", apiroute);
//

//test connection;
(async () => {
  try {
    // using Mongoose
    await connection();

    // //======================using mongodb driver:===========
    // // Connection URL
    // const url = process.env.DB_HOST;
    // const client = new MongoClient(process.env.DB_HOST_WITH_MONGODBDRIVER);

    // // Database Name
    // const dbName = process.env.DB_DATANAME;

    // // Use connect method to connect to the server
    // await client.connect();
    // console.log("=====>Connected successfully to server through MongoDB Driver");
    // const db = client.db(dbName);
    // const collection = db.collection("customers");

    //==================
    app.listen(port, hostname, () => {
      console.log(`Backend zero app listening at ${hostname} on port ${port}`);
    });
  } catch (error) {
    console.log(">>>>>error", error);
  }
})();

//
