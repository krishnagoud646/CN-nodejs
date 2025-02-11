const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method == "POST") {
    // expecting data from client
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      console.log(body);
      res.end("Data is recieved");
    });
  } else {
    res.end("Welcome to NodeJS");
  }
});

server.listen(3100);

console.log("Server is listening on 3100");
