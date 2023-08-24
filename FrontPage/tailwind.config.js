/*
 * @Author: 郭志明 zhiming.guo@zingbiz.com
 * @Date: 2023-08-12 15:32:06
 * @LastEditors: 郭志明 zhiming.guo@zingbiz.com
 * @LastEditTime: 2023-08-12 15:34:01
 * @FilePath: /gzm_house/FrontPage/tailwind.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE:
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}'  //包含了src文件夹下所有的vue,js等等文件
  ],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

