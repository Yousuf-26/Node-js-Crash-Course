/*

Chapter 5 - web server
- Build a web server
- build a simple server

*/
const http = require("http");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;

const PORT = 3500;

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);
  res.end("Thanks for connecting");
});

server.listen(3000, () => {
  console.log("server running on port " + PORT);
});
