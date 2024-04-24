const express = require("express");
const fsPromises = require("fs/promises");
// const productController = require("./controllers/productsController.js");
// const usersController = require("./controllers/userscontroller.js");
const productRouter = require("./routes/productroute.js");
const userRouter = require("./routes/userroute.js");

const app = express(); //APP STARTING

app.use(express.json());

app.use((req, res, next) => {
  const time = new Date().toLocaleString();
  fsPromises.appendFile("./log.txt", req.url + "\t" + time + "\n");
  next();
}); //This function is used for logging

// const productRouter = express.Router();
// const userRouter = express.Router();

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

// productRouter.route('/')
//   .get(productController.getAllProducts)
//   .post(productController.addProduct);

// productRouter.route("/:id")
//   .put(productController.modifyproduct)
//   .delete(productController.deleteproduct);

// userRouter.route("/")
//   .get(usersController.err501)
//   .put(usersController.err501)
//   .post(usersController.err501)
//   .delete(usersController.err501)
//   .patch(usersController.err501);

// app.route("/api/products")
//   .get(productController.getAllProducts)
//   .post(productController.addProduct);

// app.route("/api/products/:id")
//   .put(productController.modifyproduct)
//   .delete(productController.deleteproduct);

// app.route("/api/users")
//   .get(usersController.err501)
//   .put(usersController.err501)
//   .post(usersController.err501)
//   .delete(usersController.err501)
//   .patch(usersController.err501);

// app.get("/api/products", productController.getAllProducts);

// app.post("/api/products", productController.addProduct);

// app.put("/api/products/:id", productController.modifyproduct);

// app.delete("/api/products/:id", productController.deleteproduct);

// app.get("/api/users", usersController.err501);

// app.put("/api/users", usersController.err501);

// app.post("/api/users", usersController.err501);

// app.delete("/api/users", usersController.err501);

// app.patch("/api/users", usersController.err501);

app.listen(1400);
