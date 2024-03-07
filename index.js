const { app } = require('./app');

const PORT = 1050;
app.get("/", (req, res) => res.send("Express on Vercel"));
app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
