const express = require("express");
const cors = require("cors");
const app = require('express');
app.use(cors());

const PORT = process.env.PORT || 8000;
//let app = express();

//
const apiData = require("./jsondata.json");
app.listen(
    PORT,
    () => console.log('This app is running on ${PORT}')
);
app.get('/endpoint', (req, res) => {
    res.send('<h1>Hello</h1>')
});
app.get('/service', (req, res) => {
    res.send(apiData);
});


//});
/*const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.send('<h1>Hello</h1>');
    } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>404 error</h1>");
    }
});
server.listen(8000, () => {
    console.log("listensing to port 8000");
});*/