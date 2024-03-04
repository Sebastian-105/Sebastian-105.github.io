const { app } = require('./app');

const PORT = 1050;
app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
