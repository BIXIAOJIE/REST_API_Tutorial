const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
require('dotenv/config')


const postRoute = require('./router/posts')
// 当每一次是posts的时候 使用postRoute

// app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/posts',postRoute)
//路由
// patch
// delete
// get
// pos
app.get('/',(req,res)=>{
  res.send('we are on home')
})

app.get('/posts',(req,res)=>{
  res.send('we are on posts')
})

//开启监听


// Connect To DB
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true,useUnifiedTopology: true},()=>{
  console.log('连接数据库成功');
})

app.listen(3000)