/*
 * @Author: 郭志明 zhiming.guo@zingbiz.com
 * @Date: 2023-08-24 10:38:45
 * @LastEditors: 郭志明 zhiming.guo@zingbiz.com
 * @LastEditTime: 2023-08-24 14:11:54
 * @FilePath: /gzm_house/JServer/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 1、引入 fs
const fs = require('fs');

// 2、目录路径
const path = './jsonFiles';

let result = {};

// 3、readdir 获取 path 路径 下所有文件名称，其中有一个回调函数，返回所有文件名称 files
fs.readdir(path, (err, files) => {
  if (err) {
    console.error('index.js--error', err);
    return;
  }

  files.forEach((file) => {
    const { jsonContent } = require(`./jsonFiles/${file}`)
    result = { ...result, ...jsonContent}
  })

  // 4、writeFile Sync 写文件，异步的， 生成一个名为merged.json的文件
  fs.writeFileSync('merged.json', JSON.stringify(result));

 
  // 遍历文件名列表，合并多个json文件
  // files.forEach((file) => {
  //   const path1 = __dirname + '/jsonFiles/' + file
  //   const path2 = './jsonFiles/' + file
  //   const content = fs.readFileSync(path2, 'utf8')
  //   const json = JSON.parse(content);
  //   console.log('content: ', json);
  //   // result = { ...result, ...json}
  // });
  // fs.writeFileSync('merged.json', JSON.stringify(result));

  // const filePath = './'  
  // let preveMd5 = null

  // fs.watch(filePath,(event,filename)=>{
  //   console.log('filename', filename)
  //   var currentMd5 = md5(fs.readFileSync(filePath + filename))
  //   if (currentMd5 == preveMd5) {
  //     return
  //   }
  //   preveMd5 = currentMd5
  //   console.log(`${filePath}文件发生更新`)
  // })
});

