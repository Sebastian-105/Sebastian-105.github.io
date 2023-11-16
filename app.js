// Import essential libraries
const express = require("express");
const app = express();
const path = require("path");
const exec = require('child_process').exec;
child = exec('curl https://api.render.com/deploy/srv-cl9r7ldo7jlc73fi3nng?key=boQ4Pt3xQuU',
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});
// const router = express.app();
app.use(express.static(__dirname + "/"));
// Setup essential routes
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.get("/assets/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/401.html"));
});
app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname + "/105/about-me/index.html"));
});
app.get("/search-result", function (req, res) {
  res.sendFile(path.join(__dirname + "/search/result/index.html"));
});
app.get('/hello', function (req, res) {
  res.status(200).json({
    message: "Hello World!"
  });
});

module.exports = { app };