const { app } = require('./app');

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
const exec = require('child_process').exec;
child = exec('curl https://api.render.com/deploy/srv-cl9r7ldo7jlc73fi3nng?key=boQ4Pt3xQuU',
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});