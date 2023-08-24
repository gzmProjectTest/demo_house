<!--
 * @Author: 郭志明 zhiming.guo@zingbiz.com
 * @Date: 2023-05-12 17:11:38
 * @LastEditors: 郭志明 zhiming.guo@zingbiz.com
 * @LastEditTime: 2023-08-15 21:42:12
 * @FilePath: /gzm_house/FrontPage/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <div class="m-8 flex">
      <div v-for="(item, index) in contentData" :key="index" class="flex mr-4">
        <div class="mr-4 w-4 h-5" :style="'background-color:' + item.color"></div>
        <div>
          <div class="mb-4 text-sm">{{ item.name }}</div>
          <div class="text-xl font-black">{{ item.moeny }}</div>
        </div>
      </div>
    </div>




    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      contentData: [
        {
          name: '现金科目',
          moeny: '100',
          color: 'red'
        },
        {
          name: '现金科目22',
          moeny: '200',
          color: 'pink'
        },
        {
          name: '现金科目333',
          moeny: '300',
          color: 'green'
        },
      ]
    }
  }
}
</script>
