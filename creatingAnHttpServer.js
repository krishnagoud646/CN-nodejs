// const { log } = require("console");
const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.write("Welcome to my Application ");
  if (req.url == "/product") {
    res.end("This is Product Page");
  } else if (req.url == "/user") {
    return res.end("This is User Page");
  }
  res.end("Welcome to Nodejs");
});

server.listen(3100, () => {
  console.log("Server is listening on port 3100");
});
