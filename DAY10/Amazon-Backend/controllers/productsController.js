const productModel = require("../models/productsModel.js");

const getAllProducts = async (req, res) => {
  const {
    sort = "price",
    page = 1,
    pageSize = 3,
    fields = "-info",
    ...q
  } = req.query;

  const sortStr = sort.split(",").join(" ");
  const fieldsStr = fields.split(",").join(" ");

  let query = productModel.find(q);
  query = query.sort(sortStr);

  const skip = pageSize * (page - 1);

  query = query.skip(skip).limit(pageSize);
  query = query.select(fieldsStr);

  const products = await query;

  const totalResults = await productModel.countDocuments();

  const data = await productModel.find(query);
  //   const data = await productModel.find({ title: 'Gucci' },'title price');

  res.json({
    status: "success",
    results: products.length,
    totalResults: totalResults,
    pageSize,
    page,
    data: {
      products: data,
    },
  });
};

const addProduct = async (req, res) => {
  try {
    const { _id, ...reqData } = req.body;
    const data = await productModel.create(req.body);
    console.log(data);
    res.json({
      status: "success",
      results: 1,
      data: {
        products: data,
      },
    });
  } catch (err) {
    res.status(403);
    console.log(err);
    res.json({
      status: "fail",
      message: JSON.stringify(err.errmsg),
    });
  }
};

const replaceProduct = async (req, res) => {
  try {
    const reqID = req.params.id;
    const data = { ...req.body, _id: reqID };
    const result = await productModel.findOneAndReplace({ _id: reqID }, data);
    res.json({
      status: "success",
      data: {
        products: result,
      },
    });
  } catch (err) {
    res.status(500);
    console.log(err);
    res.json({
      status: "fail",
      message: JSON.stringify(err.errmsg),
    });
  }
};

const patchProduct = async (req, res) => {
  try {
    const reqID = req.params.id;
    const data = { ...req.body, _id: reqID };
    // const result = await productModel.findByIdAndUpdate({ _id: reqID }, data, {
    //   new: true,
    // });

    const result = await productModel.findByIdAndUpdate(
      { _id: reqID },
      {
        $push: { ratingValue: { $each: ratingValue } },
        $inc: { ratingCount: 1 },
        $set: {
          averageRating:
            (sumOfRatings +
              ratingValue.length *
                (ratingValue.length - 1) *
                updatedProduct.averageRating) /
            (ratingValue.length * ratingValue.length),
        },
      },
      { new: true }
    );

    res.json({
      status: "success",
      data: {
        products: result,
      },
    });
  } catch (err) {
    res.status(500);
    console.log(err);
    res.json({
      status: "fail",
      message: JSON.stringify(err.errmsg),
    });
  }
};

module.exports = {
  getAllProducts,
  addProduct,
  replaceProduct,
  patchProduct,
};
