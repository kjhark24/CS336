/**
* lab07 server
* Kyle Harkema
*/
const express = require("express")
const app = express();
const http_status = require("http-status-codes");
const bodyParser = require("body-parser")

const HOST = "localhost";
const PORT = 3000;

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.send("hey there Lab 7!");
});

app.get("/fetch", function(req, res) {
	if(req.query.name)
          res.send({"content" : req.query.name});
});
app.listen(3000, function()
{
	console.log("Example app listening on port 3000");
});
