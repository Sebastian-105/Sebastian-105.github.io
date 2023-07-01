
'use strict';

const express = require('express');

// Constants
const PORT = 1050;
const HOST = '1.0.5.0';

// App
const app = express();
app.use(express.static('./'));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);