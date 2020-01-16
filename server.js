var http = require('http');
var module = require('./modules/module');
var module2 = require('./modules/module2');

//Type 1 

function onRequest(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write(module2.name);
    module2.myFunction();
    response.end();
}

http.createServer(onRequest).listen(8000);


//Type 2

// http.createServer(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     module2.myFunction();
//     response.write(module2.name);
//     response.end();
// }).listen(8000);