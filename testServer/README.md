<!--
 * @Author: 郭志明 zhiming.guo@zingbiz.com
 * @Date: 2023-08-15 21:18:51
 * @LastEditors: 郭志明 zhiming.guo@zingbiz.com
 * @LastEditTime: 2023-08-24 10:13:35
 * @FilePath: /gzm_house/testServer/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
### 如何搭建 express，
  npm install express --save

### express 如何实现热更新
  npm install node-dev -D
  
  // package.json 里的script中，配置
  "dev": "node-dev ./bin/www"

  // 启动项目
  npm run dev

### 如何在express中新增get / post 请求
  在 routes 中的 index.js 下可查看

  注意：get请求是打开 localhost:3000/ 通过浏览器可以直接访问数据

      post 需要通过postman 或者 axios 请求来测试接口是否正常，不能使用 localhost:3000/login 测试接口，默认是get的请求方法，会报 404 页面不存在。

### 综合考虑，暂时不使用express构建服务器，改用jsonserver，更方便
