//Usage of Buffer, A buffer is diplayed as hexadecimal value of an ASCII code

const b = new Buffer.from("Abcdxyz");
console.log(b.toString());
b.write("Other");
console.log(b.toString());
