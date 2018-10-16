var fs = require("fs"); //node 内置模块可直接引入  fs：文件系统操作模块

fs.readFile("./a.txt","utf-8",function(err,data){  //读取文件
  if(err) throw err;  
  fs.writeFile("./b.txt",data, function(err){
    if(err) throw err
  })
  console.log(err,data);
});


// fs.readFile      是读取        用法：fs.readFile("./a.txt","utf-8",function(err,data){}
// fs.writeFile     是替换值      用法： fs.writeFile("./a.txt",data,function(err){}
// fs.appendFile    是追加值      用法： fs.appendFile("./a.txt",data,function(err){}
// fs.unlink        是删除文件     用法： fs.unlink("./a.txt",function(err){}
// fs.mkdir         是创建文件夹   用法： fs.mkdir("c",function(err){}
// fs.remane        是修改文件夹名/文件名   用法： fs.remane("c","d",function(err){}
// fs               是node自带文件操作模块 fs，使用时只需要直接引入即可