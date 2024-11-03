<template>
  <div style="padding: 20px 0;">
    <el-form :model="data.register" label-width="100px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="小镇">
            <el-select filterable allow-create v-model="data.register.town" placeholder="请选择小镇" size="large" style="width: 90%;">
              <el-option v-for="item in data.townoptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="分类">
            <el-select v-model="data.register.sort" placeholder="选择分类" style="width: 90%;">
              <el-option v-for="item in data.articlesort" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-table :data="tableData" style="width: 100%; margin-top: 20px;" stripe>
      <el-table-column label="发布时间" width="180" align="center">
        <template v-slot="scope">
          <span>{{ scope.row.publishTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="文章标题" width="180" align="center">
        <template v-slot="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="小镇" width="180" align="center">
        <template v-slot="scope">
          <span>{{ scope.row.town }}</span>
        </template>
      </el-table-column>
      <el-table-column label="分类" width="180" align="center">
        <template v-slot="scope">
          <span>{{ scope.row.sort }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template v-slot="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
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
    town: "",
    sort: ""
  },
   articlesort:[{
    value: '景区服务',
    label: '景区服务',
  }, {
    value: '旅游攻略',
    label: '旅游攻略',
  }, {
    value: '美食小吃',
    label: '美食小吃',
  },{
    value: '小镇动态',
    label: '小镇动态',
  },{
    value: '文化院落',
    label: '文化院落',
  },{
    value: '小镇文化',
    label: '小镇文化',
  },{
    value: '小镇景点',
    label: '小镇景点',
  },{
    value: '小镇保护',
    label: '小镇保护',
  },{
    value: '小镇文化期刊',
    label: '小镇文化期刊',
  },{
    value: '文学书馆',
    label: '文学书馆',
  },{
    value: '服务中心',
    label: '服务中心',
  },{
    value: '小镇历史',
    label: '小镇历史',
  },{
    value: '民风民俗',
    label: '民风民俗',
  },{
    value: '纳西古乐',
    label: '纳西古乐',
  },{
    value: '特色商品',
    label: '特色商品',
  },{
    value: '政策法规',
    label: '政策法规',
  },{
    value: '保护指南',
    label: '保护指南',
  },{
    value: '办理流程',
    label: '办理流程',
  },{
    value: '关于团队',
    label: '关于团队',
  }],

});

const tableData = reactive([
  {
    publishTime: '2024-11-01',
    title: '文章标题1',
    town: '上海市普陀区',
    sort: '客栈'
  },
  {
    publishTime: '2024-11-02',
    title: '文章标题2',
    town: '北京市朝阳区',
    sort: '商店'
  }
]);

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

const handleEdit = (index, row) => {
  console.log(index, row);
};

const handleDelete = (index, row) => {
  console.log(index, row);
};
</script>

<style scoped>
</style>
