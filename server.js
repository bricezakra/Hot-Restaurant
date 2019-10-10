var express = require("express");
var path = require("path");
var PORT = process.env.PORT || 3000;
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))
var reserved = [];
var waiting = [];
app.get("/", function(req, res) {
    res.end('Hello');
    res.sendFile(path.join(__dirname, "/public/index.html"));
})
app.listen(PORT, function() {
    console.log("tuned in to port 3000")
})