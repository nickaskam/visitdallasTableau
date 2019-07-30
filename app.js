var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/sales", function(req, res){
	res.render("saleshome");
});

app.get("/sales/metrics07092019", function(req, res){
	res.render("metrics07092019");
});

app.get("/sales/metrics07112019", function(req, res){
	res.render("metrics07112019");
});

app.get("/sales/definiteslast5years", function(req, res){
	res.render("definitesLast5Years");
});

app.listen(process.env.PORT, process.env.IP);