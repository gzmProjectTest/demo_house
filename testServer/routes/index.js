/*
 * @Author: 郭志明 zhiming.guo@zingbiz.com
 * @Date: 2023-08-10 20:36:24
 * @LastEditors: 郭志明 zhiming.guo@zingbiz.com
 * @LastEditTime: 2023-08-31 17:50:47
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

// 用户头像上传
router.post('/uploadAvatar', (req, res) => {
  res.send({
    code: 200,
    data: {},
    msg: '用户头像上传成功',
    readOnly: false
  })
})

// 查询用户个人信息
router.get('/ucenter/user/profile', (req, res) => {
  res.send({
    code: 200,
    data: {
      user: {
        name: '张三',
        password: '123456',
        userCode: '123123',
        mobile: '13888888888',
        userEmail: '123456@qq.com',
        dept: {
          deptName: '研发部'
        },
        createdTime: '2000-08-08',
        sex: '0',
        realName: '哈喽哟'
      }
    },
    msg: '查询用户个人信息',
    readOnly: false
  })
})

// 查询用户个人信息
router.put('/ucenter/user/profile', (req, res) => {
  res.send({
    code: 200,
    data: {
      user: {
        name: '张三',
        password: '123456',
        userCode: '123123',
        mobile: '13888888888',
        userEmail: '123456@qq.com',
        dept: {
          deptName: '研发部'
        },
        createdTime: '2000-08-08',
        sex: '0',
        realName: '哈喽哟'
      }
    },
    msg: '修改基本信息成功',
    readOnly: false
  })
})

// 用户密码重置
router.get('/updateUserPwd', (req, res) => {
  res.send({
    code: 200,
    data: {},
    msg: '查询用户个人信息',
    readOnly: false
  })
})

// 用户密码重置
router.post('/ucenter/user/profile', (req, res) => {
  res.send({
    code: 200,
    data: {
    },
    msg: '修改基本信息成功',
    readOnly: false
  })
})

// 根据字典类型查询字典数据信息
router.get('/system/dict/data/type/sys_normal_disable', (req, res) => {
  res.send({
    code: 200,
    data: {
      
    },
    msg: '查询数据成功1',
    readOnly: false
  })
})

router.get('/system/dict/data/type/sys_tenant_type', (req, res) => {
  res.send({
    code: 200,
    data: {
      
    },
    msg: '查询数据成功2',
    readOnly: false
  })
})

router.get('/platform/package/get-simple-list', (req, res) => {
  res.send({
    code: 200,
    data: {
      
    },
    msg: '查询数据成功3',
    readOnly: false
  })
})

// 角色搜索列表
router.get('/ucenter/role/list-page', (req, res) => {
  res.send({
    code: 200,
    data: [
      {
        roleId: 'user1', // 如果这里最多有3种角色，那么就只有三个接口
        roleName: '角色1',
        description: '描述',
        createdTime: '2022-08-08 11:33:22',
        status: '1',
      },
      {
        roleId: 'user2',
        roleName: '角色2',
        description: '描述',
        createdTime: '2022-08-08 11:33:22',
        status: '1',
      },
      {
        roleId: 'user3',
        roleName: '角色3',
        description: '描述',
        createdTime: '2022-08-08 11:33:22',
        status: '1',
      },
    ],
    msg: '查询数据成功3',
    readOnly: false,
    pageInfo: {
      totalCount: 3
    }
  })
})

// 角色列表开启数据



router.post('/ucenter/role/update-status/user1', (req, res) => {
  console.log('角色列表开启数据',req.body);
  res.send({
    code: 200,
    data: {},
    msg: 'user1数据修改成功',
    readOnly: false
  })
})

router.post('/ucenter/role/update-status/user2', (req, res) => {
  console.log('角色列表开启数据',req.body);
  res.send({
    code: 200,
    data: {},
    msg: 'user2数据修改成功',
    readOnly: false
  })
})
router.post('/ucenter/role/update-status/user3', (req, res) => {
  console.log('角色列表开启数据',req.body);
  res.send({
    code: 200,
    data: {},
    msg: 'user3数据修改成功',
    readOnly: false
  })
})

router.get('/platform/tenant/list', (req, res) => {
  res.send({
    code: 200,
    rows: [
      { tenantLogo: './images/001.jpg', tenantName: '张三', tenantType: '已续租', userName: '0101101', tenantStatus: '1', packageName: '一室一厅', tenantTime: '2022-08-08', },
      { tenantLogo: './images/002.jpg', tenantName: '李四', tenantType: '未续租', userName: '0101102', tenantStatus: '1', packageName: '南次卧1', tenantTime: '2022-08-08', },
      { tenantLogo: './images/003.jpeg', tenantName: '王武', tenantType: '已续租', userName: '0101103', tenantStatus: '1', packageName: '北次卧2', tenantTime: '2022-08-08', },
      { tenantLogo: './images/004.jpeg', tenantName: '三三', tenantType: '未续租', userName: '0101104', tenantStatus: '1', packageName: '主卧', tenantTime: '2022-08-08', },
      { tenantLogo: './images/001.jpg', tenantName: '四四', tenantType: '未续租', userName: '0101105', tenantStatus: '1', packageName: '客厅', tenantTime: '2022-08-08', },
    ],
    total: 5,
    msg: '查询数据成功4',
    readOnly: false
  })
})

// 房屋信息页面
router.get('/system/dict/data/type/house_type', (req, res) => {
  res.send({
    code: 200,
    data: {
      
    },
    msg: '查询房屋类型成功',
    readOnly: false
  })
})

router.get('/system/dict/data/type/house_select_num', (req, res) => {
  res.send({
    code: 200,
    data: {
      
    },
    msg: '查询房屋可选择数量',
    readOnly: false
  })
})

router.get('/system/dict/data/type/house_hire_status', (req, res) => {
  res.send({
    code: 200,
    data: {
      
    },
    msg: '房屋使用状态',
    readOnly: false
  })
})

router.get('/system/dict/data/type/house_deposit_num', (req, res) => {
  res.send({
    code: 200,
    data: {
      
    },
    msg: '寄租售房屋状态',
    readOnly: false
  })
})

router.get('/system/dict/data/type/sys_id_type', (req, res) => {
  res.send({
    code: 200,
    data: {
      
    },
    msg: '房屋类型',
    readOnly: false
  })
})

// 房屋筛选
router.get('/system/dict/data/type/house_state', (req, res) => {
  res.send({
    code: 200,
    data: {
      
    },
    msg: '房屋状态，是否为出租中',
    readOnly: false
  })
})

router.get('/system/dict/data/type/apartment_type', (req, res) => {
  res.send({
    code: 200,
    data: {
      
    },
    msg: '房屋款式，3室1厅',
    readOnly: false
  })
})

router.get('/system/dict/data/type/house_hire_type', (req, res) => {
  res.send({
    code: 200,
    data: {
      
    },
    msg: '房屋租金',
    readOnly: false
  })
})

router.get('/system/dict/data/type/house_pay_num', (req, res) => {
  res.send({
    code: 200,
    data: {
      
    },
    msg: '房屋支付金额',
    readOnly: false
  })
})

router.get('/house/centralize/list', (req, res) => {
  res.send({
    code: 200,
    data: [
      { 
        name: '租房小区1',
        apartmentId: '001',
        counts: { zs: '10', yz: '1', kz: '8', yd: '1' },
        floorList: [ '闲置', '装修中', '已出租', '已预约' ],
        roomList: [
          { state: '1' , houseNo: 'ZF000001', unitType: '1', money: '1600', vacantDay: '10'},
          { state: '2' , houseNo: 'ZF000002', unitType: '2'},
          { state: '3' , houseNo: 'ZF000003', unitType: '3', zkRealName: '已出租', money: '1400'},
          { state: '5' , houseNo: 'ZF000005', unitType: '5', realName: '2022-08-08，已有人预约', frontMoney: '200'},
        ]
      },
    ],
    total: 5,
    msg: '所有房屋列表',
    readOnly: false
  })
})

router.get('/house/apartment/get-project-list', (req, res) => {
  res.send({
    code: 200,
    data: {
      brands: [ // 品牌
        { brandId: '001', brandName: '碧桂园'},
        { brandId: '002', brandName: '恒大'},
        { brandId: '003', brandName: '中骏'},
      ],
      projects: [ // 项目
        { classifyId: '001', classifyName: '3室1厅'},
        { classifyId: '002', classifyName: '2室1厅'},
        { classifyId: '003', classifyName: '1室1厅'}
      ]
    },
    msg: '房屋品牌接口获取成功',
    readOnly: false
  })
})

router.get('/house/apartment/get-user-apartment', (req, res) => {
  res.send({
    code: 200,
    data: [
      { apartmentId: '001', apartmentName: '公寓1'},
      { apartmentId: '002', apartmentName: '公寓2'},
      { apartmentId: '003', apartmentName: '公寓3'}
    ],
    msg: '获取用户公寓列表',
    readOnly: false
  })
})




module.exports = router

/*
原文链接111：https://blog.csdn.net/broken_promise/article/details/120536852
原文链接222：https://blog.csdn.net/weixin_44691513/article/details/109374231
*/