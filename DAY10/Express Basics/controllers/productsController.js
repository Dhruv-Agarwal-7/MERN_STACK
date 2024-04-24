const fsPromises = require("fs/promises");

const getAllProducts = async (req, res) => {
  const data = await fsPromises.readFile("./mydata.json", "utf-8");
  const arr = JSON.parse(data);
  res.json({
    status: "success",
    results: arr.length,
    data: {
      products: arr,
    },
  });
};

const addProduct = async (req, res) => {
  // console.log(Object.keys(req));
  const data = req.body;
  if (!data.price || !data.title) {
    res.json({
      status: "fail",
      message: "Title or Price must be provided",
    });
    return; //This will end function execution
  }
  console.log(data);
  const db = await fsPromises.readFile("./mydata.json", "utf-8");
  const arr = JSON.parse(db);
  const len = (await arr).length;

  if (len == 0) data.id = 1;
  else data.id = len + 1;

  arr.push(data);
  console.log(arr);
  fsPromises.writeFile("./mydata.json", JSON.stringify(arr));
  res.json({
    status: "success",
    results: 1,
    data: {
      NewProduct: data,
    },
  });
};

const modifyproduct = async (req, res) => {
  const arr = JSON.parse(await fsPromises.readFile("./mydata.json", "utf-8"));
  // res.send("work in progress....");
  const reqID = parseInt(req.params.id);
  const data = req.body;
  data.id = reqID;
  const newArr = arr.map((elem) => {
    if (elem.id == reqID) return data;
    else return elem;
  });
  fsPromises.writeFile("./mydata.json", JSON.stringify(newArr));
  res.json({
    status: "success",
    results: 1,
    data: {
      NewProduct: data,
    },
  });
};

const deleteproduct = async (req, res) => {
  const arr = JSON.parse(await fsPromises.readFile("./mydata.json", "utf-8"));
  const newArr = arr.filter((elem) => {
    const reqID = parseInt(req.params.id);
    if (elem.id === reqID) return false;
    else return true;
  });
  fsPromises.writeFile("./mydata.json", JSON.stringify(newArr));
  res.status(204);
  res.json({
    status: "deleted",
    results: 1,
  });
};

module.exports = {
  getAllProducts,
  addProduct,
  modifyproduct,
  deleteproduct,
};
