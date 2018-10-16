  // 编写一个方法 fn01
  function fn01() { 
    console.log('我是modules01-fn01')
  }
  // 编写一个方法 fn02
  function fn02() { 
    console.log('我是modules01-fn02')
  }

  // 暴露接口
  module.exports = {
    "fn01": fn01,
    "fn02":fn02
  }
  
  //同上
// exports.fn01 = fn01;
// exports.fn02 = fn02;