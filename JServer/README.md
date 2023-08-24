<!--
 * @Author: 郭志明 zhiming.guo@zingbiz.com
 * @Date: 2023-08-24 10:17:35
 * @LastEditors: 郭志明 zhiming.guo@zingbiz.com
 * @LastEditTime: 2023-08-24 14:51:31
 * @FilePath: /gzm_house/JServer/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
### 1、如何启用db.json 需要在他的同级下，使用命令

json-server --watch db.json

可查看一下地址
  http://localhost:3000/posts
  http://localhost:3000/comments
  http://localhost:3000/profile

### 2.如何修改json server 的端口

json-server --watch db.json --port 3003


### 3.当有多个json文件时，如何合并呢？
  解答：需要使用 node 中的 fs。
  fs全称是file system（文件系统），它是NodeJS提供的文件操作API。fs模块用于对系统文件及目录进行读写操作，是一个非常重要的模块，对文件的操作都基于它。该模块的所有方法都有同步和异步两种方式，下面先简单介绍一下fs模块的常用方法。

  使用：参考 index.js

### 4. 如何做到修改 js 文件自动执行，
  解答：有两种，node， webpack
  一种是 node 对于某个 js 文件进行监听

  一种是 webpack 对于启动的文件后增加 watch 实现热更新，但是需要参与文件打包才会执行，不适用，最后选择 node 监听文件


  在使用node监听 js 文件的时候，如果发生改变，重新生成 merged.json文件，然后在监听 merged.json 文件的变化

  存在的问题：如果有多个js文件，还有新增的，那么就需要监听这个文件夹是否有新增文件， 文件中的内容是否有修改， 应该怎么处理呢？？？
    
### 5. 使用 jsonserver 跟 express 的区别
  jsonserver 可以直接返回 data 数据，没有状态码，信息描述

  {
    'code': 001
  }

  express 可以模拟接口，返回格式跟真正的接口一样，
  {
    code: 200,
    msg: '数据接收成功',
    data: [
      { 'code': 001 }
    ]
  }

  最后看自己页面使用哪种方式请求数据。