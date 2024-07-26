<template>
  <div class="nei_left" style="height:auto;">
    <p class="shou">{{ type }}</p>
    <ul class="msul2">
      <a v-for="(item,index) in Data.list" href="javascript:void(0);" @click="$router.push(`/entryinfo/article?id=${item._id}`)">
        <li class="sh_ou">
          <p class="p_t">{{ item.title }}</p>
        </li>
      </a>
    </ul>
    <div style="padding-top: 20px;">
      <el-pagination background layout="prev, pager, next" :total="Data.total" :current-page="Data.page" @current-change="handelCurrentChange"/>
      <p></p>
    </div>
    </div>
</template>

<script>
import { reactive, onMounted, ref, toRaw, watch, inject } from 'vue'
export default {
  name: 'journal',
  props: {
  },
  setup() {
    const axios = inject('$axios')
    //数据
    const Data = reactive({
      type:"文学书馆",
      list: [],
      page:1,
      total:1
    });
    const getData = (town) => {
      axios(
        {
          method: 'post',
          url: '/apis/find/lists',
          data:{
            page:Data.page,
            limit:10,
            sort:"文学书馆",
            town:town
          }
        }
      ).then(res => {
        Data.list = res.data.data.docs;
        Data.page = res.data.data.page*1;
        Data.total = res.data.data.total*1;
      })
    };
    const handelCurrentChange =(value)=>{

      //获取当前页码
      Data.page = value;
      getData("凤二客家文创小镇");
    };
    onMounted(() => {
      getData("凤二客家文创小镇");
    });
    return {
      Data,
      handelCurrentChange
    };
  },

}
</script>
<style src="src/head.css"></style>
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

:deep(img) {
  max-width: 700px;
}
</style>