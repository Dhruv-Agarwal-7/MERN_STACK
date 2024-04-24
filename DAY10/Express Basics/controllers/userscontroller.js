const fsPromises = require("fs/promises");

const err501 = (req, res) => {
  res.status(501);
  res.json({
    status: "fail",
    message: "Route is not yet implemented",
  });
};

module.exports = {
  err501,
};
