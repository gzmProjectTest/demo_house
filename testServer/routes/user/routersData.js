/*
 * @Author: 郭志明 zhiming.guo@zingbiz.com
 * @Date: 2023-08-15 21:06:42
 * @LastEditors: 郭志明 zhiming.guo@zingbiz.com
 * @LastEditTime: 2023-08-23 17:29:46
 * @FilePath: /gzm_house/testServer/routes/user/roles.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import \
// 根据roles权限生成可访问的路由表，用户可以点击
module.exports = {
  name: '路由页面',
  routersData: [
    {
      path: '/permission',
      component: 'Layout',
      redirect: '/permission/index',
      hidden: true,
      alwaysShow: true,
      children: [
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
      ]
    }
  ]
} 
