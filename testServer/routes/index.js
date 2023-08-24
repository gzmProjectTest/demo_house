/*
 * @Author: 郭志明 zhiming.guo@zingbiz.com
 * @Date: 2023-08-10 20:36:24
 * @LastEditors: 郭志明 zhiming.guo@zingbiz.com
 * @LastEditTime: 2023-08-15 21:42:04
 * @FilePath: /gzm_house/testServer/routes/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

var express = require('express');
var router = express.Router();
const { ROLES } = require('./user/roles')
const { PERMISSIONS } = require('./user/permissions')
const { routersData } = require('./user/routersData')

// 唯一标识


function zingId() {
  var s = []
  var hexDigits = '0123456789abcdef'
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4'  // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = ''

  var uuid2 = s.join('')
  return uuid2
}

// 跟路径
router.get('/', function (req,res){
  res.send({
      msg: 'hi node express'
  })
})

router.get('/aaa', function (req,res){
  res.send({
      msg: 'hi node express'
  })
})


/*
  User 用户 登录，退出
*/

//  注意了，express写的请求，除了get能直接用页面访问，其他要测试均使用 postman，因为页面访问默认发送的是 get 请求，会导致请求方法错误，直接报 404 未找到。
router.post('/login', (req, res) => {
  res.send({
    code: 200,
    data: {
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9',
      tenant_id: zingId()
    },
    msg: '登录成功',
    readOnly: false
  })
})

// 退出登录
router.post('/logout', (req, res) => {
  res.send({
    code: 200,
    data: {},
    msg: '退出成功',
    readOnly: false
  })
})

// 获取用户详情
router.get('/get-info', (req, res) => {
  res.send({
    code: 200,
    data: {
      avatar: '',
      roles: ROLES, // 职务
      permissions: PERMISSIONS,
      name: 'zhangsan'
    },
    msg: '退出成功',
    readOnly: false
  })
})


// 获取路由
router.get('/get-routers', (req, res) => {
  res.send({
    code: 200,
    data: routersData,
    msg: '获取路由成功',
    readOnly: false
  })
})


module.exports = router

/*
原文链接111：https://blog.csdn.net/broken_promise/article/details/120536852
原文链接222：https://blog.csdn.net/weixin_44691513/article/details/109374231
*/