const http = require("http");
const url = require("url");
const express = require("express");
const app = express();

const hostname = "0.0.0.0";
const port = 3000;

let pluralizer = require("./pluralize.js");

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://eugeniouglov.github.io"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);
  //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
  res.setHeader("Access-Control-Max-Age", 7200);

  next();
});

app.get("/singular", function (req, res) {
  const requestParam = req.query.request;

  res.status(200).send({
    response: pluralizer.singular(requestParam),
  });
});

app.get("/plural", function (req, res) {
  const requestParam = req.query.request;

  res.status(200).send({
    response: pluralizer.plural(requestParam),
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
