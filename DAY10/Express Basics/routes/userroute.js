const fsPromises = require("fs/promises");
const express = require("express");
const usersController = require("../controllers/userscontroller.js");

const userRouter = express.Router;

userRouter.route('/')
  .get(usersController.err501)
  .put(usersController.err501)
  .post(usersController.err501)
  .delete(usersController.err501)
  .patch(usersController.err501);

module.exports = userRouter;