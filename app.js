// Import essential libraries
const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(__dirname + "/"));
// Setup essential routes
app.get("/", function (req, res) {
  // eslint-disable-next-line no-undef
  res.sendFile(path.join(__dirname + "/index.html"));
});
const routes = [
  { path: '/assets/*', file: '/401.html' },
  { path: '/about', file: '/105/about-me/index.html' },
  { path: '/search-result', file: '/search/result/index.html' },
];
routes.forEach((route) => {
  app.get(route.path, function (req, res) {
    res.sendFile(path.join(__dirname + route.file));
  });
});
// const router = express.app();
// eslint-disable-next-line no-undef
// Setup essential routes
app.get('/hello', function (req, res) {
  res.status(200).json({
    message: "Hello World!"
  });
});

module.exports = { app };