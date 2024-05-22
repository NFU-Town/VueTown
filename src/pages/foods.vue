<template>
    <div class="nei_left" style="position:relative">
      <p class="shou"><a href="http://www.scery.com">美食小吃</a>
      </p>
      <p class="n_b_t">{{Data.article.title}}</p>
      <p class="shi_j">来源：{{Data.article.origin}}<span>时间：{{Data.article.ctime}}</span></p>
      <div class="nr_nr">
        <div v-html="Data.article.content"></div>
      </div>
      
      <p></p>
      <p></p>
      <div>
      <h4>附件：</h4>
      <h5 v-for="(item, index) in Data.article.files" :key="index" style="color: red;">
        <a :href="item.url" style="color: red;" target="_blank">{{ item.name }}</a>
      </h5>
    </div>
    </div>
  </template>
  
  <script>
   import { reactive, onMounted, ref, toRaw, watch,inject } from 'vue'
  import {useStore} from 'vuex'
  import { computed } from '@vue/runtime-core';
  export default {
    name: 'article',
    props: {
    },
    setup() {
      const axios = inject('$axios')
      const store = useStore()
    const town = computed(() => store.state.town);
      //数据
      const Data = reactive({
        town:computed(() => town.value),
        article:{
        title:"",
        origin:"",
        time:"",
        content:""
      }
      });
      const getData=(town)=>{
        axios(
          {
    method: 'get',
    url: '/apis/find/articles?town='+town+'&sort=美食小吃',
  }
      ).then(res=>{
        console.log(res.data.data);
        Data.article=res.data.data;
      })
      }
      getData(Data.town);
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
  .nr_nr{
  
  }
  
  ::v-deep img{
    max-width:700px;
  }
  </style>