var express = require("express");
var app = express();

// 这个 / 表示当前根目录 访问的时候直接用 localhost:3000
// 回调函数包括两个参数（请求的对象，相应的对象）
app.get("/", function(request, response){
  response.end("just index !")
})

app.get("/a/index", function(request, response){
  response.end("you get a !")
})

app.get("/b", function(request, response){
  response.end("you get b !")
})

app.listen(5001);