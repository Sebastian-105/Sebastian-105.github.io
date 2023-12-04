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
app.get("/about", function (req, res) {
// eslint-disable-next-line no-undef
  res.sendFile(path.join(__dirname + "/105/about-me/index.html"));
});
app.get("/search-result", function (req, res) {
  // eslint-disable-next-line no-undef
  res.sendFile(path.join(__dirname + "/search/result/index.html"));
});
app.get("/assets/*", function (req, res) {
  // eslint-disable-next-line no-undef
  res.sendFile(path.join(__dirname + "/401.html"));
});
app.get('/hello', function (req, res) {
  res.status(200).json({
    message: "Hello World!"
  });
});

module.exports = { app };