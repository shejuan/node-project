//使用 require引入模块，并申明一个变量来接收接口暴露的对象
var module01 = require("./module01.js"); 
var module02 = require("./module02.js"); 


//访问接口暴露的方法
module01.fn01(); 

module02.fn01(); 
