var http = require("http");
var fs = require("fs");
http.createServer(function(request,response){
  console.log("request going",request);
  // 发送 HTTP 头部
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
  response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  fs.readFile("./a.txt", "utf-8", function(err,data){
    if(err) throw err
    // response.end(data)  // 表示请求结束，将结果返回给浏览器
    response.write(data)
  })
}).listen(3000)