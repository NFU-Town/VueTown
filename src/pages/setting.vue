<template>
    <div>
      <el-row  class="tac">
        <el-col :span="4">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
      router
          >
            <el-menu-item index="/setting/towninfo">
              <el-icon><icon-menu /></el-icon>
              <span>小镇信息</span>
            </el-menu-item>
            <el-menu-item index="/setting/addarticle">
              <el-icon><document /></el-icon>
              <span>文章发布</span>
            </el-menu-item>
            <el-menu-item index="/setting/other">
              <el-icon><setting /></el-icon>
              <span>其他设置</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="20">
          <router-view></router-view>
        </el-col>
      </el-row>
    </div>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { reactive, onMounted, ref, toRaw, watch,inject } from 'vue'
</script>

<style scoped>

</style>