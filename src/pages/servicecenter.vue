<template>
    <div class="nei_left" style="position:relative">
      <p class="shou"><a>服务中心</a></p>
      <p class="n_b_t" v-if="Data.article.title">{{Data.article.title}}</p>
      <p class="shi_j">来源：{{Data.article.origin}}<span>时间：{{Data.article.ctime}}</span></p>
      <div class="nr_nr">
        <div v-html="Data.article.content"></div>
      </div>
      
      <p></p>
      <p></p>
  
    </div>
  </template>
  
  <script>
  import { reactive, onMounted, ref, toRaw, watch,inject } from 'vue'
  
  export default {
    name: 'article',
    props: {
    },
    setup() {
      const axios = inject('$axios')
      //数据
      const Data = reactive({
        article:{
          title:"古管局（公司）传达学习全市文化和旅游高质量发展大会精神",
          origin:"南苑小镇景区",
          town:"凤二客家文创小镇",
          time:"2023-10-23 19:10:22",
          content:""
        }
      });
      const getData=(id)=>{
        axios(
          {
    method: 'get',
    url: '/apis/find/articles?town=凤二客家文创小镇&sort=服务中心',
    }
      ).then(res=>{
        console.log(res.data.data);
        Data.article=res.data.data;
      })
      }
      getData();
      return {
        Data
      };
    },
  
  }
  </script>
  <style scoped>
  .nei_left {
    /* width: 800px; */
    float: left;
    padding: 13px 25px;
    background: #fff;
    min-height: 1108px;
    height: auto;
    padding-bottom: 52px;
    font-size: 16px;
  }
  .nei_left .shou {
      font-size: 16px;
      color: #785f4b;
      padding-bottom: 8px;
      border-bottom: 1px #785f4b solid;
      font-weight: 500;
  }
  a {
      text-decoration: none;
      color: #111;
  }
  .shi_j span {
      margin-left: 45px;
  }
  .n_b_t {
      text-align: center;
      font-size: 26px;
      margin-top: 51px;
  }
  .shi_j {
      font-size: 12px;
      color: #828282;
      text-align: center;
      margin-top: 11px;
  }
  .dix {
      border-top: 1px #785f4b solid;
      width: 751px;
      margin: 0 auto;
      margin-top: 25px;
      position: absolute;
      bottom: 10px;
  }
  .dix a {
      float: right;
      margin-left: 29px;
      font-size: 14px;
      padding-top: 13px;
  }
  
  ::v-deep img{
    max-width:700px;
  }
  </style>