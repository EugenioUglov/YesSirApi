const http = require("http");
const url = require("url");
const express = require("express");
const app = express();

const hostname = "0.0.0.0";
const port = 3000;


let pluralizer = require("./pluralize.js");
  

app.get("/singular", function (req, res) {
  const requestParam = req.query.request;

  res.status(200).send({
    responce: pluralizer.singular(requestParam),
  });
});

app.get("/plural", function (req, res) {
  const requestParam = req.query.request;

  res.status(200).send({
    responce: pluralizer.plural(requestParam),
  });
});

// const server = http.createServer((req, res) => {
//   // let urlParts = url.parse(req.url);

//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Test done 2");
// });




app.listen(3000, () => {
  console.log("sercver listen");
});
