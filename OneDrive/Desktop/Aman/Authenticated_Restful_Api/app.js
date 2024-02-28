const express = require("express");
const app = express();
const studentRoute = require("./routes/student");
const facultyRoute = require("./routes/faculty");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/restful-auth-apis");

mongoose.connection.on('error', err => {
       console.log('connection failed');
});

mongoose.connection.on('connected', connected => {
    console.log('connection established');
});

app.use("/faculty", facultyRoute);
app.use("/student", studentRoute);

// app.use((req, res, next) => {
//     res.status(200).json({
//         msg: 'app is running'
//     });
// });

app.use((req, res, next) => {
  res.status(404).json({
    error: "404 Not Found",
  });
});

module.exports = app;
