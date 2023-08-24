<!--
 * @Author: 郭志明 zhiming.guo@zingbiz.com
 * @Date: 2023-05-12 17:11:38
 * @LastEditors: 郭志明 zhiming.guo@zingbiz.com
 * @LastEditTime: 2023-08-16 20:53:00
 * @FilePath: /gzm_house/FrontPage/src/views/home/components/Project.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="component-container">
    <el-card class="project-card">
      <template #header>
        <span class="fw-b">项目简介</span>
      </template>
      <div class="project-card__main">
        项目简介
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'index',
  };
</script>

<style lang="scss" scoped>
  .component-container {
    .project-card {
      font-size: 14px;
      &__main {
        line-height: 28px;
        height: 320px;
        overflow-y: auto;
        overflow-x: hidden;
      }
    }
    .fw-b {
      font-weight: bold;
    }
  }
</style>
