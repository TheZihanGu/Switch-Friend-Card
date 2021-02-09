const express = require('express');
const app = express();

// 跨域处理
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",'3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.get('/api/card.png',function(req,res,err){
    var gm = require('gm')
    console.log(req.query);
    gm('./resources/images/tietu.png')
    //.draw('image Over 100, 100 100, 100 "./resources/dev/images/app/actGuide.png"')
    .font('./resources/fonts/Alibaba-PuHuiTi.ttf')
    // .font('/usr/share/fonts/微软雅黑.ttf')  /* 服务器s上的路径*/
    .fill('#ffffff')
    .draw('text  210, 100 '+ req.query.nickname)
    .fontSize(30)
    // .resize(240, 240)
    .write("./resources/images/result-" + req.query.friendcode + ".png", function(err) {
        gm("./resources/images/result-" + req.query.friendcode + ".png")
        .font('./resources/fonts/LongMenZhengDao.ttf')
        .fill('#000000')
        .draw('text  252, 159 '+ req.query.friendcode)
        .fontSize(30)
        .write("./resources/images/result-" + req.query.friendcode + ".png", function(err) {
            res.set('Content-Type', 'image/png');
            res.sendFile( __dirname + "/" + "resources/images/result-" + req.query.friendcode + ".png");
            console.log("Request for " + req.url + " received.");
            if (!err){
                console.log('done');
            }else{
                console.log(err.message || "出错了！");
            }
        })
    })
})
var server = app.listen(4001, '127.0.0.1', function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server running at http://%s:%s", host, port);
})