const { log } = require("console");
const fs = require("fs");

// Read File

fs.readFile("data.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

// Write File
fs.writeFile("employee.txt", "New Employee", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File is Written");
  }
});

// Append File

fs.appendFile("employee.txt", "\nSecond Employee", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File is Updated");
  }
});

// Delete File

fs.unlink("employee.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File is Deleted");
  }
});

console.log("This is another function");
