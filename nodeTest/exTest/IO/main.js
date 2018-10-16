var fs = require("fs")
fs.readFile("./a.txt", "utf-8", function(err,data) {
  if(err) throw err
  console.log(data)
})

setTimeout(function() {
  console.log("定时器打印")
}, 0)

// 这个是一次性读取，但是当文件过大的时候，一次性读取不仅缓存慢，而且影响用户的体验，
// main3.js就讲了分流读取