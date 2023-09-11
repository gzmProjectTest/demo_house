<!--
 * @Author: 郭志明 zhiming.guo@zingbiz.com
 * @Date: 2023-08-24 17:23:20
 * @LastEditors: 郭志明 zhiming.guo@zingbiz.com
 * @LastEditTime: 2023-09-09 16:01:24
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
        <!-- 项目简介 -->
        房屋租赁系统是基于Vue2、Element等主流技术栈构建的项目。
      
        <el-divider />

        <!-- 技术栈 -->
        <el-row :gutter="10">
          <el-col :span="6" class="fw-b"> 前端技术栈 </el-col>
          <el-col :span="18">
            Vue2搭建环境、Element-UI实现页面布局、axios前后端数据交互、tailwindcss 实现样式布局、
          </el-col>
        </el-row>
        <el-divider />

        <el-row :gutter="10">
          <el-col :span="6" class="fw-b"> 后端技术栈 </el-col>
          <el-col :span="18">
            express等都提供了数据源。
          </el-col>
        </el-row>
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
