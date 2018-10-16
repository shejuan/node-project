// 引入mongodb模块
var mongo = require("mongodb");

// 引入断言模块
var assert = require("assert");

// 开启服务
var MongoClient = mongo.MongoClient;

// url存储 放在连接池中
var Urls = "mongodb://localhost:27017/reactData";


MongoClient.connect(Urls, function(err,db){   // 获取连接
  assert.equal(null,err);                     // 使用断言模块代替以前的if判断

  // 插入数据
  db.collection("school").insert({"name":"学霸","sex": "男"},function(err,result) { //连接到数据库上面，并使用参数传入集
    assert.equal(null,err);
    console.log(result);
    db.close();
  });

  // 查找数据
  db.collection("school").find({"name":"佘娟"}).toArray(function(err,result){
      assert.equal(null,err);
      console.log(result);
      db.close();
  });

  //删除数据
  db.collection("school").deleteOne({"name":"张"},function(err,result){ //连接到数据库上面，并使用参数传入集合
      assert.equal(null,err);
      console.log(result);
        db.close();
  });

  //修改数据
  db.collection("school").update({"name":"张"},{$set:{"name":"星星"}},function(err,result){ //连接到数据库上面，并使用参数传入集合
      assert.equal(null,err);
      console.log(result);
      db.close();
  });
});