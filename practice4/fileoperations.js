const fs = require("fs");

//Read a File
console.log("Starting to Read");

const buffer = fs.readFileSync("data.txt", { encoding: "utf-8" });
console.log(buffer);

// Create a File
console.log("This is other operation being performed");
try {
  fs.writeFileSync("employee.txt", "Name: Krishna Goud, Age: 24, Postion: PDE");
} catch (err) {
  console.log(err);
}

// Append File Sync
fs.appendFileSync("employee.txt", "\nName: John, Age:43, position: CEO");

// Deleting the File
try {
  fs.unlinkSync("employee.txt");
} catch (err) {
  console.log("The File doesn't exist");
}
