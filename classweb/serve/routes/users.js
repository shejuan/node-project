// 引入了express框架，路由router，并且引入了上面封装的 dbhandler。

// crypto是加密包，对传输过来的密码进行加密

// post请求使用  post方法接收

// handler()调用的是dbhander中的方法，传入的参数依次 （ req:请求详细， res:响应信息，  “user”操作的表的名称， 传入的查询数据， 回掉函数）

// 在dbhander.js中配置了login对应的操作是查询，返回数据放到数组中。如果数组空，就表示没查到数据，如果非空，比较密码是否一致，如果都正确，就返回登录成功。

// 最后的module.exports = router是ES6的模块暴露

var express = require('express');
var router = express.Router();
var handler = require('./dbhandler.js');
var crypto = require('crypto');  
//登录
router.post('/login', function(req, res, next) {
  var md5 = crypto.createHash('md5');
  var password = md5.update(req.body.password).digest('base64');

  handler(req, res, "user", {name: req.body.username},function(data){
      if(data.length===0){
          res.end('{"err":"抱歉，系统中并无该用户，如有需要，请向管理员申请"}');
      }else if(data[0].password !== password){
          res.end('{"err":"密码不正确"}');
      }else if(data.length!==0&&data[0].password===password){
          
          req.session.username = req.body.username; //存session
          req.session.password = password;
          
          res.end('{"success":"true"}');
      }
      
  });
  
});

module.exports = router;
