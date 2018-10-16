// 使用express的Router实现路由的单独设定  
// 将路由和入口文件分开

var express = require("express");
var path = require("path");
var router = require("./router.js");
var app = express();

// 设置静态资源路径
var files = express.static( path.join(__dirname, "files") );

// 使用静态资源
app.use("files");

// 使用路由设置
app.use("router");

app.listen(4005)