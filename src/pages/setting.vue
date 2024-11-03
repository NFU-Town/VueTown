<template>
    <div>
      <el-row class="tac">
        <el-col :span="4">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            router>
            <el-menu-item index="/setting/towninfo">
              <el-icon><icon-menu /></el-icon>
              <span>小镇信息</span>
            </el-menu-item>
            <el-menu-item index="/setting/addarticle">
              <el-icon><document /></el-icon>
              <span>文章发布</span>
            </el-menu-item>
            <el-menu-item index="/setting/mgarticle">
              <el-icon><setting /></el-icon>
              <span>文章管理</span>
            </el-menu-item>
            <el-menu-item index="/setting/register">
              <el-icon><document /></el-icon>
              <span>用户管理</span>
            </el-menu-item>
            <el-menu-item index="/setting/merchant">
              <el-icon><icon-menu /></el-icon>
              <span>商店信息</span>
            </el-menu-item>
            <el-menu-item index="/setting/other">
              <el-icon><setting /></el-icon>
              <span>数据展示</span>
            </el-menu-item>
            <el-menu-item index="/setting/hotel">
              <el-icon><setting /></el-icon>
              <span>客栈数据</span>
            </el-menu-item>
            <el-menu-item index="/setting/store">
              <el-icon><setting /></el-icon>
              <span>商店数据</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="20">
          <router-view @route-change="handleRouteChange"></router-view>
        </el-col>
      </el-row>
    </div>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
import { reactive, onMounted, ref, watch, inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();

// 这里可以添加一个方法来更新数据
const updateData = () => {
  // 在这里添加更新数据的逻辑
  console.log('Updating data based on the new route');
};

watch(() => router.currentRoute.value, (to, from) => {
  // 当路由变化时调用更新数据的函数
  updateData();
});
</script>

<style scoped>
</style>
