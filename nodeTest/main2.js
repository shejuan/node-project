setTimeout(function(){
  console.log(100000)
},10000)

for(var i=0; i<50; i++){
  console.log(i);
}

// 所有的异步操纵，在js内部会优先执行同步代码，对于异步的代码会放到最后执行,哪怕 setTimeout的时间设置为0