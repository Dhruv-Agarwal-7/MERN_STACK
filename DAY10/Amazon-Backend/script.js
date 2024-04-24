const express = require("express");
const productRouter = require("./routes/productsRoutes");
const app = express();
const test = require("./models/productsModel.js");
const mongoose = require("mongoose");

app.use(express.json());
app.use("/api/products", productRouter);

const url =
  "mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster.va1psvo.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster00";
const databaseUser = "root";
const databasePassword = "abcd1234";
const databaseName = "Amazon-Backend";

let dbLink = url.replace("$_USERNAME_$", databaseUser);
dbLink = dbLink.replace("$_PASSWORD_$", databasePassword);
dbLink = dbLink.replace("$_DB_NAME_$", databaseName);

mongoose
  .connect(dbLink)
  .then(() => console.log("----Database Connected!-----"));

app.listen(1400, () => console.log("----App Started----"));
