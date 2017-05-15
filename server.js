var express = require('express');
var http = require('http')
var superagent = require('superagent')
var app = new express();



app.get('/test',function(req,res) {
    console.log(1)
})


//获取当日新闻
app.get('/news',function(req,res) {
    superagent.get('http://news-at.zhihu.com/api/3/stories/latest')
    .end((err,data)=>{
        console.log(data.body)
        res.json({
            content:data.body
        })
    })
})
//获取新闻内容
app.get('/page',function(req,res) {
    let id = req.query.id
    superagent.get('http://news-at.zhihu.com/api/4/news/'+id)
    .end((err,data)=>{
        console.log(data.body)
        res.json({
            content:data.body
        })
    })
})

app.listen(3001,function () {
    console.log('server run at 3001')
})