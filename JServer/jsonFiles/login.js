/*
 * @Author: 郭志明 zhiming.guo@zingbiz.com
 * @Date: 2023-08-24 11:30:40
 * @LastEditors: 郭志明 zhiming.guo@zingbiz.com
 * @LastEditTime: 2023-08-24 15:34:20
 * @FilePath: /gzm_house/JServer/jsonFiles/login.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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

module.exports = {
  name: '登录相关',
  jsonContent: {
    'login': {
      'code': '200',
      'msg': '登录成功',
      'data': {
        id: '1',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9',
        tenant_id: zingId()
      }
    },
    'logout': {
      'code': '200',
      'msg': '退出成功',
      'data': {}
    },
  }
}