var express = require("express");
var path = require("path");
var app = express();

// app.get("/", function(request, response){
//   response.end("just index !")
// })

// 设置静态资源路径
var files = express.static( path.join(__dirname, "files") );

// use这个路径设置 才可以 真正使用
app.use(files);

app.listen(4003);