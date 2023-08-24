<!--
 * @Author: 郭志明 zhiming.guo@zingbiz.com
 * @Date: 2023-08-23 19:41:06
 * @LastEditors: 郭志明 zhiming.guo@zingbiz.com
 * @LastEditTime: 2023-08-23 19:45:33
 * @FilePath: /gzm_house/FrontPage/src/router/index.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
### 路由中的格式有一以下几种

#### 第一种，不需要显示在 menu 中，比如错误页
{
  component: ƒ compone(),
  hidden: true    // 不需要显示的就设置 true
  path: "/401"
}

#### 第二种，需要显示在 menu 中， 可以让用户点击
{
  children: Array(1),
  component: Object,
  path: "/",
  redirect: "/home"
}

#### 第三种，是否需要显示在menu中，
{
  children: Array(1),
  component: Object,
  hidden: true,     // 不需要显示在菜单中
  path: "/user",
  redirect: "noredirect"
}