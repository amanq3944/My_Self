const express = require("express");
const http = require('http');
const app = require('./app');
const server = http.createServer(app);

const port = process.env.SERVER_PORT | 5500;

// // const app = express();
// const studentRoute = require('./routes/student');

// app.use('/student', studentRoute);

// listen on PORT
server.listen(port, function () {
  console.log("listening on port " + port);
});

