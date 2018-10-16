var express = require("express");
var rout = express.Router();

rout.get("/", function(request, response){
  response.end("首页");
});

rout.get("/edit", function(request, response) {
  return response.redirect("/点击编辑.html");
});

rout.get("/img", function(request, response) {
  response.send("<img src='A01.jpg'>");
});

module.exports = rout;