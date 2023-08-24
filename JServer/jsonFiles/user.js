/*
 * @Author: 郭志明 zhiming.guo@zingbiz.com
 * @Date: 2023-08-24 12:16:06
 * @LastEditors: 郭志明 zhiming.guo@zingbiz.com
 * @LastEditTime: 2023-08-24 14:27:10
 * @FilePath: /gzm_house/JServer/jsonFiles/user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const ROLES = [
  {
    roleId: '001',
    roleName: '研发部'
  },
  {
    roleId: '002',
    roleName: '测试部'
  },
  {
    roleId: '003',
    roleName: '产品部'
  },
  {
    roleId: '004',
    roleName: '运营部'
  },
  {
    roleId: '005',
    roleName: '运维部'
  },
  {
    roleId: '006',
    roleName: '总裁部'
  },
]

const PERMISSIONS = ['finance', 'fund', 'report', 'goods']

module.exports = {
  name: '用户权限相关',
  jsonContent: {
    'get-info': {
      'code': '200',
      'msg': '用户详情获取成功',
      'data': {
        avatar: '',
        roles: ROLES, // 职务
        permissions: PERMISSIONS,
        name: 'zhangsan'
      }
    },
    'get-routers': {
      'code': '200',
      'msg': '路由页面成功',
      'data': [
        // {
        //   path: '/permission',
        //   component: 'Layout',
        //   redirect: '/permission/index',
        //   hidden: true,
        //   alwaysShow: true,
        //   children: [
            // {
            //   path: 'index',
            //   component: _import('permission/index'),
            //   name: 'permission',
            //   meta: {
            //     title: 'permission',
            //     icon: 'lock',
            //     roles: ['admin','editor'], // or you can only set roles in sub nav
            //     noCache: true
            //   }
            // }
          // ]
        // }
      ]
    }
  }
}