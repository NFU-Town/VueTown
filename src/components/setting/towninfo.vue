<template>
  <div style="padding: 20px 10px;">
    <div>
      <el-form label-position="left" :model="form" label-width="150px">
        <el-form-item label="小镇名称">
          <el-select filterable allow-create v-model="data.towninfo.townname" placeholder="请选择小镇" size="large" style="width: 240px"
            @change="changetown"><el-option v-for="item in data.townoptions" :key="item.value" :label="item.label"
              :value="item.value" /></el-select>
        </el-form-item>
        <el-form-item style="white-space: pre-wrap; line-height: 2;" label="小镇旅游咨询电话">
          <el-input v-model="data.towninfo.tel1" />
        </el-form-item>
        <el-form-item style="white-space: pre-wrap; line-height: 2;" label="旅游发展委员会电话">
          <el-input v-model="data.towninfo.tel2" />
        </el-form-item>
        <el-form-item style="white-space: pre-wrap; line-height: 2;" label="国家旅游服务热线">
          <el-input v-model="data.towninfo.tel3" />
        </el-form-item>
        <el-form-item label="小镇网站背景图">
          <el-upload class="avatar-uploader" name="file" :data="{ fileType: 'jpg' }" :action="data.actionurl"
            :drag="true" :show-file-list="false" :on-success="backgroundloadSuccess" :auto-upload="true">
            <img v-if="data.towninfo.townbackground" :src="data.towninfo.townbackground" class="avatar">
            <el-icon v-else class="avatar-uploader-icon">
              <Plus />
            </el-icon>
          </el-upload>
        </el-form-item>
        <el-form-item label="小镇Logo">
          <el-upload class="avatar-uploader" name="file" :data="{ fileType: 'jpg' }" :action="data.actionurl"
            :drag="true" :show-file-list="false" :on-success="logoloadSuccess" :auto-upload="true">
            <img v-if="data.towninfo.townlogo" :src="data.towninfo.townlogo" class="avatar">
            <el-icon v-else class="avatar-uploader-icon">
              <Plus />
            </el-icon>
          </el-upload>
        </el-form-item>
        <el-form-item label="主页轮播图">
          <el-upload class="upload-demo" list-type="picture" fileslist name="file" :data="{ fileType: 'jpg' }"
            :action="data.actionurl" :drag="true" :file-list="data.towninfo.pagepiclist"
            :on-success="pagepicuploadSuccess" :auto-upload="true">
            <el-button slot="trigger" type="primary">选取文件</el-button>
            <!-- <el-button style="margin-left: 10px;" type="success"
              @click="this.submit();">上传到服务器</el-button> -->
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="小镇动态侧边图">
          <el-upload class="avatar-uploader" name="file" fileslist :data="{ fileType: 'jpg' }" :action="data.actionurl"
            :drag="true" :show-file-list="false" :on-success="siderloadSuccess" :auto-upload="true">
            <img v-if="data.towninfo.townsiderpic" :src="data.towninfo.townsiderpic" class="avatar">
            <el-icon v-else class="avatar-uploader-icon">
              <Plus />
            </el-icon>
          </el-upload>
        </el-form-item>
        <el-form-item label="法制栏轮播图">
          <el-upload class="upload-demo" list-type="picture" fileslist name="file" :data="{ fileType: 'jpg' }"
            :action="data.actionurl" :drag="true" :file-list="data.towninfo.midpiclist"
            :on-success="midpicuploadSuccess" :auto-upload="true">
            <el-button slot="trigger" type="primary">选取文件</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="小镇宣传视频">
          <div>
          <el-upload class="upload-demo" name="file" :data="{ fileType: 'mp4' }" :show-file-list="false"
            :action="data.actionurl" :drag="true" :file-list="data.towninfo.townvideo" :on-success="videoloadSuccess"
            :auto-upload="true">
            <el-button slot="trigger" type="primary">选取文件</el-button>
            <div>
            <video v-if="data.towninfo.townvideo!=''" id="videoElement" :src="data.towninfo.townvideo" controls="controls" width="280" height="167">
              您的浏览器不支持 video 标签。
            </video></div>
            <div slot="tip" class="el-upload__tip">只能上传mp4文件</div>
          </el-upload></div>
        </el-form-item>
        <el-form-item label="小镇景点">
          <div>
            <div class="flex gap-4 mb-4" style="padding: 5px 0px 0px 0px;">
              <span>对应景点名称</span>
              <el-input v-model="spotname" style="width: 240px;padding: 5px;" placeholder="长城" />
            </div>
            <div>
              <el-upload class="upload-demo" list-type="picture" name="file" :data="{ fileType: 'jpg' }"
                :action="data.actionurl" :drag="true" :file-list="data.towninfo.spotlist"
                :on-success="spotlistuploadSuccess" :auto-upload="true">
                <el-button slot="trigger" type="primary">选取文件</el-button>
                <div slot="tip" class="el-upload__tip">先输入景点名称，再点击上传jpg/png文件</div>
              </el-upload>
            </div>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div class="submit" style="padding: 20px 0px;">
      <el-button type="success" @click="uploaddata">保存</el-button>
    </div>
  </div>
</template>

<script setup>
import { Plus } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { ElLoading } from 'element-plus'
import { reactive, onMounted, ref, toRaw, watch, inject } from 'vue'
const axios = inject('$axios')
const spotname = ref()
const data = reactive({
  actionurl: axios.defaults.baseURL + "/apis/upload/file",
  towninfo: {
    townname: "凤二客家文创小镇",
    tel1: "110",
    tel2: "110",
    tel3: "110",
    townbackground: "",
    townvideo: "",
    townlogo: "",
    pagepiclist: [],
    townsiderpic: "",
    midpiclist: [],
    spotlist: []
  },
  townoptions: [
  ]
})

const pagepicuploadSuccess = (response, file, fileList) => {
  // 处理文件上传成功的逻辑
  // 假设后端返回的响应中包含一个字段 url
  data.towninfo.pagepiclist.push({ name: file.name, url: response.data });
  data.towninfo.pagepiclist = [...data.towninfo.pagepiclist];
  console.log(response, file, fileList)
};
const logoloadSuccess = (response, file, fileList) => {
  // 处理文件上传成功的逻辑
  // 假设后端返回的响应中包含一个字段 url
  data.towninfo.townlogo = response.data;
  console.log(response, file, fileList)
};
const siderloadSuccess = (response, file, fileList) => {
  // 处理文件上传成功的逻辑
  // 假设后端返回的响应中包含一个字段 url
  data.towninfo.townsiderpic = response.data;
  console.log(response, file, fileList)
};
const videoloadSuccess = (response, file, fileList) => {
  // 处理文件上传成功的逻辑
  // 假设后端返回的响应中包含一个字段 url
  data.towninfo.townvideo = response.data;
  ElMessage({
    message: '视频上传成功！',
    type: 'success',
  })
  console.log(response, file, fileList)
};
const midpicuploadSuccess = (response, file, fileList) => {
  // 处理文件上传成功的逻辑
  // 假设后端返回的响应中包含一个字段 url
  data.towninfo.midpiclist.push({ name: file.name, url: response.data });
  data.towninfo.midpiclist = [...data.towninfo.midpiclist];
  console.log(response, file, fileList)
};
const spotlistuploadSuccess = (response, file, fileList) => {
  // 处理文件上传成功的逻辑
  // 假设后端返回的响应中包含一个字段 url
  data.towninfo.spotlist.push({ name: spotname, url: response.data });
  data.towninfo.spotlist = [...data.towninfo.spotlist];
  console.log(response, file, fileList)
};
const backgroundloadSuccess = (response, file, fileList) => {
  // 处理文件上传成功的逻辑
  // 假设后端返回的响应中包含一个字段 url
  data.towninfo.townbackground = response.data;
  console.log(response, file, fileList)
};
const uploaddata = () => {
  delete data.towninfo.utime
  delete data.towninfo.__v
  delete data.towninfo._id
  delete data.towninfo.ctime

  axios(
    {
      method: 'post',
      url: '/apis/upload/townupdate',
      data: data.towninfo
    }
  ).then(res => {
    ElMessage({
      message: '修改成功！',
      type: 'success',
    })
  })
}
const gettownData = (town) => {
  axios(
    {
      method: 'post',
      url: '/apis/find/findtown',
      data: {
        town: "凤二客家文创小镇"
      }
    }
  ).then(res => {
    data.towninfo = res.data.data;
  })
}

const gettownlistData = () => {
axios(
        {
          method: 'post',
          url: '/apis/find/townlists'
        }
      ).then(res => {
        data.townoptions = res.data.data.map(item => ({ value: item.townname, label: item.townname }));
        gettownData()
        console.log(res.data.data)
        // store.commit('updatetowninfo', res.data.data)
      })
    }
gettownlistData()
const changetown = (town) => {
  axios(
    {
      method: 'post',
      url: '/apis/find/findtown',
      data: {
        town: town
      }
    }
  ).then(res => {
    if(res.data.data){
      data.towninfo = res.data.data;
    }else{
      data.towninfo ={
    townname: town,
    tel1: "",
    tel2: "",
    tel3: "",
    townbackground: "",
    townvideo: "",
    townlogo: "",
    pagepiclist: [],
    townsiderpic: "",
    midpiclist: [],
    spotlist: []
  }
    }
  })
}
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>