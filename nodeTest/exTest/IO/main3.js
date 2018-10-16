var fs = require("fs")
var data = ""
// 读取流 这个api的作用是打开一个可读的文件流并且返回一个fs.ReadStream对象
var rs = fs.createReadStream("a.txt")

//写入流
var ws = fs.createWriteStream("b.txt")

// 设置编码为 utf-8
rs.setEncoding("utf-8")

// 监听当有数据流入的时候
rs.on("data", function(chunc){
  // data += chunc;   //将读取的数据拼接到data 上
  ws.write(chunc, "utf-8")
  console.log("...");  // 读的过程中，我们打印三个点
})

rs.on("end", function(){
  console.log("没有数据了")
  ws.end(); // 关闭写入流
})