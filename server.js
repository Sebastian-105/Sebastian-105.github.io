var express = require('express');
var ip = require('ip');
console.log(ip.address());
var app = express();
app.use(express.static('/'));
app.listen(8080);
