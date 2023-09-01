/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');
const http = require('http');
var mongo = require('mongodb');


// Constants
const PORT = 1050;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.static('./'));


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
console.log(`Node.js is working\n- Sebastian-105`)