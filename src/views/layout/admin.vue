<!--
 * @Author: sfy
 * @Date: 2022-11-07 22:22:36
 * @LastEditors: sfy
 * @LastEditTime: 2022-12-18 13:46:54
 * @FilePath: /vulture/src/views/layout/admin.vue
 * @Description: update here
-->
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "layout-admin",
  setup() {
    const router = useRouter();
    const loginOut = () => {
      localStorage.clear();
      router.push({ path: "/login" });
    };
    const toPersonalCenter = () => {
      router.push({ path: "/personalCenter" });
    };
    return {
      loginOut,
      toPersonalCenter
    };
  }
});
</script>
<template>
  <el-container>
    <el-aside width="200px">
      <el-menu default-active="module">
        <el-sub-menu index="module">
          <template #title>
            <el-icon><location /></el-icon>
            <span>模块管理</span>
          </template>
          <el-menu-item
            index="cockpitBlock"
            @click="$router.push({ path: '/admin/cockpitBlock' })"
            >驾驶舱</el-menu-item
          >
          <el-menu-item
            index="renameBlock"
            @click="$router.push({ path: '/admin/renameBlock' })"
            >命名空间</el-menu-item
          >

          <el-menu-item
            index="blockList"
            @click="$router.push({ path: '/admin/moduleNav/moduleList' })"
            >模型列表</el-menu-item
          >
        </el-sub-menu>
        <el-sub-menu index="page">
          <template #title>
            <el-icon><location /></el-icon>
            <span>业务编排</span>
          </template>
          <el-menu-item
            index="comsCreate"
            @click="$router.push({ path: '/admin/comsCreate' })"
            >组件配置</el-menu-item
          >
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view> </router-view>
    </el-main>
  </el-container>
</template>

<style scoped>
.el-header {
  padding: 0px;
}
.el-container {
  height: 100vh;
  overflow: auto;
}
.el-main {
  margin: 0px;
}
.flex-grow {
  flex-grow: 1;
}
</style>
