'use strict';
const express = require('express');
// Constants

var app = express();
const PORT = 8080;
const HOST = '0.0.0.0';

app.get('/', (req, res) => 
{
  res.send('Docker and Nodejs');
});

app.listen(PORT, HOST);
console.log(`Running on ${PORT}`);
