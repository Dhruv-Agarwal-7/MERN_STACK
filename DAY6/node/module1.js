const sum = function (a, b) {
  console.log(a + b);
};

function mul(a, b) {
  return a * b;
}

const name = 'Dhruv';

module.exports = {
  fn1: sum,
  mul,
   'name': name,
};

// module.exports = { sum, mul };
