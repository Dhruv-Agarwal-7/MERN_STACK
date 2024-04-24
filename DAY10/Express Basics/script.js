const express = require("express");
const productRouter = require("./routes/productroute.js");
const userRouter = require("./routes/userroute.js");

const app = express(); //APP STARTING

app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

app.listen(1400);