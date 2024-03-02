const http = require("http");
const url = require("url");
const express = require("express");

const hostname = "0.0.0.0";
const port = 3000;

// router.get("/test/:id", function (req, res) {
//   res.render("test", { output: req.params.id });
// });

const server = http.createServer((req, res) => {
  // let urlParts = url.parse(req.url);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Test done 2");

  // if (req.method === "GET") {
  //   switch (urlParts.pathname) {
  //     case "/test:id":
  //       res.end("Test");
  //       break;

  //     default:
  //       break;
  //   }
  // }
});

server.listen(port, hostname, () => {
  console.log("test");
});

let pluralizer = require("./pluralize.js");
console.log(pluralizer.singular("cars"));
console.log(pluralizer.plural("family"));
