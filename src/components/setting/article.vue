<template>
    <div style="padding: 20px 0px;">
        <div>
            <el-form :model="form" label-width="60px">
                <el-form-item label="小镇">
                  <el-select filterable allow-create v-model="data.article.town" placeholder="请选择小镇" size="large" style="width: 240px"
            ><el-option v-for="item in data.townoptions" :key="item.value" :label="item.label"
              :value="item.value" /></el-select>
                  </el-form-item>
                <el-form-item label="标题">
                  <el-input v-model="data.article.title" />
                </el-form-item>
                <el-form-item label="来源">
                    <el-input v-model="data.article.origin" />
                  </el-form-item>
                  <el-form-item label="分类">
                  <el-select
                  v-model="data.article.sort"
                  class="m-2"
                  placeholder="Select"
                >
                  <el-option
                    v-for="item in data.articlesort"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
                <el-form-item label="时间">
    
                    <el-date-picker
                      v-model="data.article.time"
                      type="date"
                      placeholder="选择发布时间"
                      style="width: 100%"
                      :shortcuts="shortcuts"
                    />
           
                </el-form-item>
              </el-form>
        </div>
        <div>
            <el-upload
            class="upload-demo"
            drag
            :http-request="handleUpload">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将word文件拖到此处解析，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传word文件，解析后会自动绑定到编辑框内</div>
          </el-upload>
          </div>
<div>
    <Editor
      api-key="smvk63ytaac0gwucmygt84rer4c0ytfvvqaeywu2uybqowf2"
      :init="tinymceinit"
      initial-value=""
      v-model="data.article.content"
    />
</div>
<div>
  <el-upload class="upload-demo" name="file" :data="{ fileType: 'files' }"
            :action="data.actionurl" :drag="true"
            multiple
            :on-success="filesuploadSuccess" :auto-upload="true">
            <el-button slot="trigger" type="primary">选取文件</el-button>
            <div slot="tip" class="el-upload__tip">此处上传附件</div>
          </el-upload>
</div>
        <div class="submit" style="padding: 20px 0px;">
            <el-button type="success" @click="uploaddata">发布</el-button>
        </div>
    </div>
</template>

<script setup>
import Editor from '@tinymce/tinymce-vue'
import { ElMessage } from 'element-plus'
import { reactive, onMounted, ref, toRaw, watch,inject } from 'vue'
const axios = inject('$axios')
const props = defineProps(['value'])
const emit = defineEmits(['updateValue'])
const shortcuts = [
  {
    text: 'Today',
    value: new Date(),
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: 'A week ago',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]
const myQuillEditor = ref()
// 通过watch监听回显，笔者这边使用v-model:content 不能正常回显
watch(() => props.value, (val) => {
  toRaw(myQuillEditor.value).setHTML(val)
}, { deep: true })
const tinymceinit = {
        toolbar_mode: 'sliding',
        plugins: 'codesample lists advlist link autolink charmap emoticons fullscreen preview code searchreplace table visualblocks wordcount insertdatetime image',
        toolbar: [
        'bold italic hr | fontsize forecolor backcolor | blocks blockquote removeformat | undo redo ',
        'bullist table insertdatetime | link charmap emoticons wordcount searchreplace code | codesample visualblocks image fullscreen preview',
    ],
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        external_plugins: {
        // importword: '/importword/index.js',
    },
    // 预处理函数
    importword_handler: function(editor,files,next){
        var file_name = files[0].name
        if(file_name.substr(file_name.lastIndexOf(".")+1)=='docx'){
            editor.notificationManager.open({
                text: '正在转换中...',
                type: 'info',
                closeButton: false,
            });
            next(files);
        }else{
            editor.notificationManager.open({
                text: '目前仅支持docx文件格式，若为doc，请将扩展名改为docx',
                type: 'warning',
            })
        }
    },
    // 过滤函数
    importword_filter: function(result,insert,message){ 
        // 自定义操作部分
        insert(result) //回插函数
    }

      }
const fileBtn = ref()
const data = reactive({
  actionurl: axios.defaults.baseURL + "/apis/upload/file",
    article:{
        title:"古管局（公司）传达学习全市文化和旅游高质量发展大会精神",
        origin:"景区管理处",
        time:new Date(),
        content:"",
        town:"凤二客家文创小镇",
        sort:"小镇动态",
        fileslist: []
    },
    townoptions:[],
    articlesort:[   {
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
  }],


  editorOption: {
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'header': 1 }, { 'header': 2 }],
        ['image'],
        [{ 'direction': 'rtl' }],
        [{ 'color': [] }, { 'background': [] }]
      ]
    },
    placeholder: '请输入内容...'
  }
})
// 初始化编辑器
onMounted(() => {
const gettownlistData = () => {
axios(
        {
          method: 'post',
          url: '/apis/find/townlists'
        }
      ).then(res => {
        data.townoptions = res.data.data.map(item => ({ value: item.townname, label: item.townname }));
        console.log(res.data.data)
        // store.commit('updatetowninfo', res.data.data)
      })
    }
gettownlistData()
})
const uploaddata=()=>{
    axios(
        {
  method: 'post',
  url: '/apis/upload/articleupdate',
  data: data.article
}
    ).then(res=>{
      ElMessage({
    message: '发布成功！',
    type: 'success',
  })
  data.article.content=""
  data.article.title=""
    })
}
const handleUpload=(select)=>{
    console.log(select)
      const file = select.file; // 获取选定的文件对象
      
      if (file) {
        const formData = new FormData();
        
        formData.append('file', file); // 添加到FormData对象中
        
        axios({
          method: 'post',
          url: '/apis/upload/convert', // 设置后台接口地址
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data' // 指定请求头为多部分形式
          },
        })
        .then(response => {
          data.article.content=response.data.data; // 输出服务器返回的结果
        })
        .catch(error => {
          console.error(error);
        });
      } else {
        alert("请选择要上传的文件");
      }
    }
    const filesuploadSuccess = (response, file, fileList) => {
  // 处理文件上传成功的逻辑
  // 假设后端返回的响应中包含一个字段 url
  data.article.fileslist.push({ name: file.name, url: response.data });
  data.article.fileslist = [...data.article.fileslist];
  console.log(response, file, fileList)
};
</script>

<style scoped>

</style>