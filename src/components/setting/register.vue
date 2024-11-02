<template>
  <div style="padding: 20px 0;">
    <el-form :model="data.register" label-width="100px">
      <el-form-item label="小镇">
        <el-select filterable allow-create v-model="data.register.town" placeholder="请选择小镇" size="large" style="width: 240px">
          <el-option v-for="item in data.townoptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="账号">
        <el-input v-model="data.register.account" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="data.register.password" type="password" />
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="data.register.sort" placeholder="选择分类">
          <el-option v-for="item in data.articlesort" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <div class="submit" style="padding: 20px 0; text-align: center;">
        <el-button type="danger" @click="deleteAccount">删除账号</el-button>
      </div>
    </el-form>
  </div>
</template>


<script setup>
import { ElMessage } from 'element-plus';
import { reactive, onMounted, inject } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const axios = inject('$axios');

const data = reactive({
  actionurl: axios.defaults.baseURL + "/apis/upload/file",
  register: {
    account: "", 
    password: "", 
    town: "",
    sort: "",
  },
  townoptions: [],
  articlesort: [
    { value: '客栈', label: '客栈' },
    { value: '商店', label: '商店' },
  ],
});

onMounted(() => {
  axios.post('/apis/find/townlists').then(res => {
    data.townoptions = res.data.data.map(item => ({ value: item.townname, label: item.townname }));
  });
});

const deleteAccount = () => {
  axios.post('/apis/registerdelete', { account: data.register.account }).then(() => {
    ElMessage({ message: '账号删除成功！', type: 'success' });
    data.register.account = "";
  }).catch(error => {
    ElMessage({ message: '账号删除失败！' + error.message, type: 'error' });
  });
};
</script>

<style scoped>
</style>
