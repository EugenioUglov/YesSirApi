const http = require('http');
const express = require('express');

const hostname = '0.0.0.0';
const port = 3000;

var router = express.Router();

router.get('/test/:id', function (req, res) { 
    res.render('test', {output: req.params.id});
});


const server = http.createServer((req, res) => { 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Test done 2');
});

server.listen(port, hostname, () => { 
    console.log('test');
});





let pluralizer = require("./pluralize.js");
console.log(pluralizer.singular("cars"));
console.log(pluralizer.plural("family"));