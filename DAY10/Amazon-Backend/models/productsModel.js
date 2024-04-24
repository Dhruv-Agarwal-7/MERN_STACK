const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: String,
  images: [String],
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
  ratingCount: {
    type: Number,
    default: 0,
  },
  ratingValue: [Number],
  averageRating: {
    type: Number,
    default: 0,
  },
  info: {
    category: String,
    brand: String,
    stock: Number,
    specificOffers: [
      {
        title: String,
        description: String,
      },
    ],
    amazonServices: [
      {
        title: String,
        description: String,
      },
    ],
  },
});

const productModel = mongoose.model("Products", productSchema);
module.exports = productModel;

// const testProduct = new productModel({
//   title: "Armani Watch",
//   price: 1000,
// });

// testProduct.save().then((res) => {
//   console.log(res);
// });
