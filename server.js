const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var path=require('path');



app.use(express.static(path.join(__dirname,'public')));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(8888, () => {
    console.log("Listen on the port 8888...");
});
