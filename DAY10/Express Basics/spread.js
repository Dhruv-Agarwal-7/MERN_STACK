const reqId = 3;
const reqBody = {
  description: "This is a machine",
  "Date of Manufacturing": "21-2-2024",
  price: 20000,
};

const arr = [
  {
    id: 3,
    title: "Vaccum Cleaner",
    price: 16000,
  },
  {
    id: 5,
    title: "Armani Watch",
    price: 6000,
  },
];

const newArr = arr.map((elem) => {
  if (elem.id === reqId) {
    reqBody.id = reqId;
    const newElem = {
      ...elem.id,
      ...reqBody,
    };
    return newElem;
  } else return elem;
});

console.log(newArr);
