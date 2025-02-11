const readline = require("readline");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface.question("Enter First number", (num1) => {
  interface.question("Enter Second Number", (num2) => {
    const sum = Number(num1) + Number(num2);
    console.log(sum);
  });
});
