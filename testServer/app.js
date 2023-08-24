/*
 * @Author: 郭志明 zhiming.guo@zingbiz.com
 * @Date: 2023-08-10 20:36:24
 * @LastEditors: 郭志明 zhiming.guo@zingbiz.com
 * @LastEditTime: 2023-08-15 20:51:24
 * @FilePath: /gzm_house/testServer/app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const http = require('http');
const router = require('./routes')//引用模块



const app = express();

app.all('*',function (req,res,next) {
  const { origin,Origin,referer,Referer} = req.headers;
  const alloworigin = origin || Origin || referer || Referer || '*';
  res.header("Access-Control-Allow-Origin",true);
  res.header("Access-Control-Allow-Headers","Content-Type,Authorization,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS"); 
  res.header("Access-Control-Allow-Credentials",true);
  res.header('X-Powered-By','Express')
  next()
})


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));

// 中间件
// 为了使express具备处理POST请求的能力，我们需要使用中间件app.use()。
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(router)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log('listen---3000')

const server = http.createServer(app);

server.listen(3000);
