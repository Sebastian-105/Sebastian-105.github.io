// Import essential libraries
const express = require("express");
const app = express();
const path = require("path");

// const router = express.app();
// eslint-disable-next-line no-undef

app.use(express.static(__dirname + "/"));

// Setup essential routes
app.get("/", function (req, res) {
  // eslint-disable-next-line no-undef
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.get("/assets/*", function (req, res) {
  // eslint-disable-next-line no-undef
  res.sendFile(path.join(__dirname + "/105/error-codes/401.html"));
});
app.get("/about", function (req, res) {
// eslint-disable-next-line no-undef
  res.sendFile(path.join(__dirname + "/105/about-me/index.html"));
});
app.get("/search-result", function (req, res) {
  // eslint-disable-next-line no-undef
  res.sendFile(path.join(__dirname + "/search/result/index.html"));
});
app.get('/hello1', function (req, res) {
  res.status(200).json({
    message: "Hello World!"
  });
});
app.get('*.js', function(req, res){
  res.sendFile(path.join(__dirname + "/105/error-codes/404.html"));

});
app.get('*.css', function(req, res){
  res.sendFile(path.join(__dirname + "/105/error-codes/404.html"));

});
app.get('*.json', function(req, res){
  res.sendFile(path.join(__dirname + "/105/error-codes/404.html"));

});
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname + "/105/error-codes/404.html"));

});


module.exports = { app };
