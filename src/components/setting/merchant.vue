<template>
  <div style="padding: 20px 0;">
    <el-form :model="data.merchant" label-width="100px">
      <el-form-item label="小镇">
        <el-select filterable allow-create v-model="data.merchant.town" placeholder="请选择小镇" size="large" style="width: 240px">
          <el-option v-for="item in data.townoptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="店铺名称">
        <el-input v-model="data.merchant.name" />
      </el-form-item>
      <el-form-item label="商店介绍">
        <el-input v-model="data.merchant.info" />
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="data.merchant.sort" placeholder="选择分类">
          <el-option v-for="item in data.articlesort" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>

      <el-form-item label="商店封面图">
        <el-upload class="upload-demo" list-type="picture" name="file" :data="{ fileType: 'jpg' }"
          :action="data.actionurl" :drag="true" :file-list="data.merchant.pictureurl"
          :on-success="pictureurlUploadSuccess" :auto-upload="true">
          <el-button slot="trigger" type="primary">选取文件</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
        </el-upload>
      </el-form-item>
      
      <el-form-item label="商店二维码">
        <el-upload class="upload-demo" list-type="picture" name="file" :data="{ fileType: 'jpg' }"
          :action="data.actionurl" :drag="true" :file-list="data.merchant.erweimapic"
          :on-success="erweimapicUploadSuccess" :auto-upload="true">
          <el-button slot="trigger" type="primary">选取文件</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
        </el-upload>
      </el-form-item>
    </el-form>
    <div class="submit" style="padding: 20px 0;">
      <el-button type="success" @click="uploaddata">发布</el-button>
    </div>
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
  merchant: {
    name: "",
    info: "", 
    town: "",
    sort: "",
    pictureurl: [], 
    erweimapic: [], 
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

// const uploaddata = () => {
//   axios.post('/apis/merchantupload', {
//     name: data.merchant.name,
//     town: data.merchant.town,
//     sort: data.merchant.sort,
//     info: data.merchant.info,
//     pictureurl: data.merchant.pictureurl, // 直接发送数组
//     erweimapic: data.merchant.erweimapic, // 直接发送数组
//   }).then(() => {
//     ElMessage({ message: '发布成功！', type: 'success' });
//     // 清空表单内容
//     Object.assign(data.merchant, {
//       name: "",
//       info: "",
//       town: "",
//       sort: "",
//       pictureurl: [],
//       erweimapic: [],
//     });
//   }).catch(error => {
//     ElMessage({ message: '发布失败！' + error.message, type: 'error' });
//   });
// };

const uploaddata = () => {
    const formData = new FormData();
    formData.append('name', data.merchant.name);
    formData.append('town', data.merchant.town);
    formData.append('sort', data.merchant.sort);
    formData.append('info', data.merchant.info);

    data.merchant.pictureurl.forEach(file => {
        formData.append('pictureurl', file); // 使用相同的字段名
    });

    data.merchant.erweimapic.forEach(file => {
        formData.append('erweimapic', file); // 使用相同的字段名
    });

    axios.post('/apis/merchantupload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(() => {
        ElMessage({ message: '发布成功！', type: 'success' });
        Object.assign(data.merchant, {
            name: "",
            info: "",
            town: "",
            sort: "",
            pictureurl: [],
            erweimapic: [],
        });
    }).catch(error => {
        ElMessage({ message: '发布失败！' + error.message, type: 'error' });
    });
};


const pictureurlUploadSuccess = (response, file) => {
  data.merchant.pictureurl.push(response.data); // 直接推送URL
};

const erweimapicUploadSuccess = (response, file) => {
  data.merchant.erweimapic.push(response.data); // 直接推送URL
};
</script>

<style scoped>
</style>
