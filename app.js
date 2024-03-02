const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => { 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Test done');
});

server.listen(port, hostname, () => { 
    console.log('test');
});

let pluralizer = require('./pluralize.js');
console.log(pluralizer.singular("cars"));
console.log(pluralizer.plural("family"));