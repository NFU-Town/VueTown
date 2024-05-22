<template>
  <p class="gcdt">
    小镇动态 <span>NEWS</span
    ><span style="margin-left: 537px"
      ><a href="javascript:void(0);" @click="$router.push(`/entryinfo/newslist`)">更多</a></span
    ><a href="https://www.nfu.edu.cn"> </a>
  </p>
  <a href="https://www.nfu.edu.cn"> </a>
  <div class="we">
    <a href="https://www.nfu.edu.cn"> </a
    ><a href="https://www.nfu.edu.cn"
      ><img :src="Data.towninfo.townsiderpic"
    /></a>
    <div class="wert">
      <p class="blue">
        <a href="javascript:void(0);" @click="$router.push(`/entryinfo/article?id=${Data.xinwen[0]._id}`)"
          >{{ Data.xinwen[0].title}}</a
        >
      </p>
      <p class="hui" href="javascript:void(0);" @click="$router.push(`/entryinfo/article?id=${Data.xinwen[0]._id}`)">
        {{ getHtmlPlainText(Data.xinwen[0].content) }}.......
      </p>
      <div class="xian"></div>
      <ul class="xw">
        <li v-for="(item,index) in Data.xinwen" :key="index">
          <a href="javascript:void(0);" @click="$router.push(`/entryinfo/article?id=${item._id}`)"
            >{{ item.title }}</a
          >
		</li>
      </ul>
    </div>
  </div>
  <!-- 轮播开始 -->

  <div class="zhleft">
    <el-carousel indicator-position="none" height="100px" autoplay>
      <el-carousel-item v-for="(item, index) in Data.towninfo.midpiclist" :key="index">
        <!-- <a :href="item.url"> -->
          <img :src="item.url" />
        <!-- </a> -->
      </el-carousel-item>
    </el-carousel>
  </div>
  <!-- 轮播结束 -->
  <div class="wenhua">
    <p class="gcdt">
      文化院落<span>CULTURAL COURTYARD</span>
      <span style="margin-left: 430px"
        ><a href="https://www.nfu.edu.cn">更多</a></span
      >
    </p>

    <ul class="baiye">
      <li class="dian">
        <a href="https://www.nfu.edu.cn"
          ><img
            src="@/assets/town_files/01naxirenjia.jpg"
            width="62px"
            height="212px" /><img
            class="yin"
            width="303px"
            height="212px"
            src="@/assets/town_files/01naxirenjia-1.jpg"
        /></a>
      </li>
      <li class="dian">
        <a href="https://www.nfu.edu.cn"
          ><img
            src="@/assets/town_files/02xiangxingwenzi.jpg"
            width="62px"
            height="212px" /><img
            class="yin"
            width="303px"
            height="212px"
            src="@/assets/town_files/02xxwz-1.jpg"
        /></a>
      </li>
      <li class="dian">
        <a href="https://www.nfu.edu.cn"
          ><img
            src="@/assets/town_files/03xssy.jpg"
            width="62px"
            height="212px" /><img
            class="yin"
            width="303px"
            height="212px"
            src="@/assets/town_files/03xssy1.jpg"
        /></a>
      </li>
      <li class="dian">
        <a href="https://www.nfu.edu.cn"
          ><img
            src="@/assets/town_files/04hyg.jpg"
            width="62px"
            height="212px" /><img
            class="yin"
            width="303px"
            height="212px"
            src="@/assets/town_files/04hyg-1.jpg"
        /></a>
      </li>
      <li class="dian">
        <a href="https://www.nfu.edu.cn"
          ><img
            src="@/assets/town_files/05whzsg.jpg"
            width="62px"
            height="212px" /><img
            class="yin"
            width="303px"
            height="212px"
            src="@/assets/town_files/05whzsg-1.jpg"
        /></a>
      </li>
      <li class="dian">
        <a href="https://www.nfu.edu.cn"
          ><img
            src="@/assets/town_files/slian.jpg"
            width="62px"
            height="212px" /><img
            class="yin"
            width="303px"
            height="212px"
            src="@/assets/town_files/slian_big.jpg"
        /></a>
      </li>
      <li class="dian chu">
        <a href="https://www.nfu.edu.cn"
          ><img
            src="@/assets/town_files/xuxiake.jpg"
            width="55px"
            height="212px" /><img
            class="yin"
            width="303px"
            height="212px"
            src="@/assets/town_files/xuxiakebig.jpg"
        /></a>
      </li>
    </ul>
    <br class="qc" />
  </div>

  <div class="wenhua">
    <p class="gcdt">
      小镇文化<span>CULTURE</span>
      <b class="table">
        <a class="di_an" href="javascript:">小镇历史</a>
        <a href="https://www.nfu.edu.cn">东巴文化</a>
        <a href="https://www.nfu.edu.cn">民风民俗</a>
        <a href="https://www.nfu.edu.cn">纳西古乐</a>
      </b>
    </p>
    <ul class="table2">
      <li class="show">
        <div class="inli" v-for="(item, index) in Data.culture" :key="index">
          <p class="biao">
            <a href="javascript:void(0);" @click="$router.push(`/entryinfo/article?id=${item._id}`)">{{item.title}}</a>
          </p>
          <p class="sm">
            <a href="javascript:void(0);" @click="$router.push(`/entryinfo/article?id=${item._id}`)"
              >{{getHtmlPlainText(item.content)}}......</a
            >
          </p>
        </div>
     
      </li>

    </ul>
  </div>

  <div class="jingdian">
    <p class="gcdt gcdt2">
      小镇景点<span>VIEW SPOT</span>
      <span style="margin-left: 510px"
        ><a href="https://www.nfu.edu.cn">更多</a></span
      >
    </p>

    <div class="gun_dong">
      <div class="zou">
        <div
          class="tempWrap"
          style="overflow: hidden; position: relative; width: 745px"
        >
          <ul
            class="waiul"
            style="
              width: 1490px;
              position: relative;
              overflow: hidden;
              padding: 0px;
              margin: 0px;
            "
          >
            <li style="float: left; width: 134px" v-for="(item, index) in Data.viewspot" :key="index">
              <a href="javascript:void(0);" @click="$router.push(`/entryinfo/article?id=${item.id}`)"
                ><img
                  :src=item.pic
                  style="width:134px;height:188px;"
              /></a>
              <p>{{item.title}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="gcbh">
    <div class="bhleft">
      <p class="gcdt gcdt2">
        小镇保护<span>PROTECTION</span>
        <span style="margin-left: 120px"
          ><a href="https://www.nfu.edu.cn"></a
        ></span>
      </p>
      <div class="in">
        <a v-for="(item, index) in Data.protect.slice(0, 5)" :key="index" href="javascript:void(0);" @click="$router.push(`/entryinfo/article?id=${item._id}`)">{{ item.title.slice(0,22) }}</a>
      </div>
    </div>

    <div class="bhleft">
      <p class="gcdt gcdt2" style="border-left: 0px">
        <span></span>
        <span style="margin-left: 290px"
          ><a href="https://www.nfu.edu.cn">更多</a></span
        >
      </p>
      <div class="in">
        <a v-for="(item, index) in Data.protect.slice(5, 10)" :key="index" href="javascript:void(0);" @click="$router.push(`/entryinfo/article?id=${item._id}`)">{{ item.title.slice(0,22) }}</a>
      </div>
    </div>

    <br class="qc" />
  </div>
  <div class="gcbh">
    <div class="bhleft">
      <p class="gcdt gcdt2">
        古镇文化期刊<span></span>
        <span style="margin-left: 170px"
          ><a href="https://www.nfu.edu.cn">更多</a></span
        >
      </p>
      <div class="in" style="height: 338px">
        <a v-for="(item, index) in Data.journal.slice(0, 7)" :key="index" href="javascript:void(0);" @click="$router.push(`/entryinfo/article?id=${item._id}`)">{{ item.title.slice(0,22) }}</a>
      </div>
    </div>

    <div class="bhleft">
      <p class="gcdt gcdt2">
        文学书馆<span>PERIODICAL</span>
        <span style="margin-left: 120px"
          ><a href="https://www.nfu.edu.cn">更多</a></span
        >
      </p>
      <div class="in" style="height: 338px">
        <a v-for="(item, index) in Data.lib.slice(0, 7)" :key="index" href="javascript:void(0);" @click="$router.push(`/entryinfo/article?id=${item._id}`)">{{ item.title.slice(0,22) }}</a>
      </div>
    </div>

    <br class="qc" />
  </div>
  <br class="qc" />
</template>
<script>
import { reactive, ref, watch, onMounted, onUnmounted,inject,defineProps  } from "vue";
import { computed } from '@vue/runtime-core';
    import {useStore} from 'vuex'
export default {
  name: "main",
  props: {},
  setup() {
    const axios = inject('$axios')
    const store = useStore()
    const town = computed(() => store.state.town);
    //数据
    const Data = reactive({
      town:computed(() => town.value),
      lunbotu: [
        {pic:new URL("@/assets/town_files/lunbotu/1.jpg", import.meta.url).href,url:"https://www.12371.cn/special/xfxza/"},
        {pic:new URL("@/assets/town_files/lunbotu/2.jpg", import.meta.url).href,url:"https://www.xuexi.cn/"},
        {pic:new URL("@/assets/town_files/lunbotu/3.jpg", import.meta.url).href,url:"https://www.12371.cn/special/xfxza/"},
        {pic:new URL("@/assets/town_files/lunbotu/4.jpg", import.meta.url).href,url:"https://baijiahao.baidu.com/s?id=1761019391175522801&wfr=spider&for=pc"},
        {pic:new URL("@/assets/town_files/lunbotu/5.jpg", import.meta.url).href,url:"https://www.nfu.edu.cn/"},
      ],
      xinwen: [
        {
          title: "",
          content:"",
          _id: "12",
        },
        {
          title: "",
          _id: "12",
        },
        {
          title: "",
          _id: "12",
        },
        {
          title: "",
          _id: "12",
        },
        {
          title: "",
          _id: "12",
        },
		{
          title: "",
          _id: "12",
        },
		{
          title: "",
          _id: "12",
        },
      ],
      culturetype:[{type:"小镇历史",url:"https://www.nfu.edu.cn"},
      {type:"东巴文化",url:"https://www.nfu.edu.cn"},
      {type:"民风民俗",url:"https://www.nfu.edu.cn"},
      {type:"纳西古乐",url:"https://www.nfu.edu.cn"}],
      culture:[
        {
          title:"",
          content: "",
          _id: "12",
        },
        {
          title:"",
          content: "",
          _id: "12",
        },
        {
          title:"",
          content: "",
          _id: "12",
        },
        {
          title:"",
          content: "",
          _id: "12",
        },
        {
          title:"",
          content: "",
          _id: "12",
        },
        {
          title:"",
          content: "",
          _id: "12",
        }
      ],
      viewspot:[
        {
          _id:"12",
          title:"文昌宫",
          pic:new URL("@/assets/town_files/03005230dymn.jpg", import.meta.url).href
        },
        {
          _id:"12",
          title:"纳西喜院",
          pic:new URL("@/assets/town_files/0301181587ku.jpg", import.meta.url).href
        },        
        {
          _id:"12",
          title:"小石桥",
          pic:new URL("@/assets/town_files/030133557r70.jpg", import.meta.url).href
        },
        {
          _id:"12",
          title:"双石桥",
          pic:new URL("@/assets/town_files/10234350fohc.jpg", import.meta.url).href
        },
        {
          _id:"12",
          title:"古井",
          pic:new URL("@/assets/town_files/10141857lc6s.jpg", import.meta.url).href
        },
      ],
      protect:[{
        title:"",
        _id:"12"
      },{
        title:"",
        _id:"12"
      },{
        title:"",
        _id:"12"
      },{
        title:"",
        _id:"12"
      },{
        title:"",
        _id:"12"
      },],
      journal:[{
        title:"",
        _id:"6645c0c194c7e27a6a1cf711"
      },{
        title:"",
        _id:"6645c0c194c7e27a6a1cf711"
      },{
        title:"",
        _id:"6645c0c194c7e27a6a1cf711"
      },{
        title:"",
        _id:"6645c0c194c7e27a6a1cf711"
      },{
        title:"",
        _id:"6645c0c194c7e27a6a1cf711"
      },{
        title:"",
        _id:"6645c0c194c7e27a6a1cf711"
      },{
        title:"",
        _id:"6645c0c194c7e27a6a1cf711"
      },],
      lib:[{
        title:"",
        _id:"6645c0c194c7e27a6a1cf711"
      },{
        title:"",
        _id:"6645c0c194c7e27a6a1cf711"
      },{
        title:"",
        _id:"6645c0c194c7e27a6a1cf711"
      },{
        title:"",
        _id:"6645c0c194c7e27a6a1cf711"
      },{
        title:"",
        _id:"6645c0c194c7e27a6a1cf711"
      },{
        title:"",
        _id:"6645c0c194c7e27a6a1cf711"
      },{
        title:"",
        _id:"6645c0c194c7e27a6a1cf711"
      },],
      towninfo:computed(() => store.state.towninfo)
    });
    watch(town,(nv,ov)=>{
      getxinwenData()
    getcultureData()
    getprotectData()
    getjournalData()
    getlibData()
    })
    // const towninfo = localStorage.getItem("towninfo");
    // if (towninfo) {
    // try {
    //   Data.towninfo= JSON.parse(towninfo);
    // } catch (e) {
    // }
  // }
    const getxinwenData = (id) => {
      axios(
        {
          method: 'post',
          url: '/apis/find/lists',
          data:{
            page:1,
            limit:7,
            sort:"小镇动态",
            town:Data.town
          }
        }
      ).then(res => {
        Data.xinwen = res.data.data.docs;
      })
    }
    const getcultureData = (id) => {
      axios(
        {
          method: 'post',
          url: '/apis/find/lists',
          data:{
            page:1,
            limit:6,
            sort:"小镇文化",
            town:Data.town
          }
        }
      ).then(res => {
        Data.culture = res.data.data.docs;
      })
    }
    const getprotectData = (id) => {
      axios(
        {
          method: 'post',
          url: '/apis/find/lists',
          data:{
            page:1,
            limit:6,
            sort:"小镇保护",
            town:Data.town
          }
        }
      ).then(res => {
        Data.protect = res.data.data.docs;
      })
    }
    const getjournalData = (id) => {
      axios(
        {
          method: 'post',
          url: '/apis/find/lists',
          data:{
            page:1,
            limit:6,
            sort:"小镇文化期刊",
            town:Data.town
          }
        }
      ).then(res => {
        Data.journal = res.data.data.docs;
      })
    }
    const getlibData = (id) => {
      axios(
        {
          method: 'post',
          url: '/apis/find/lists',
          data:{
            page:1,
            limit:6,
            sort:"文学书馆",
            town:Data.town
          }
        }
      ).then(res => {
        Data.lib = res.data.data.docs;
      })
    }
    onMounted(async () => {
      try {
        getxinwenData()
    getcultureData()
    getprotectData()
    getjournalData()
    getlibData()

      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      }
    });

    const getHtmlPlainText=(html_str)=>{
        //提取字符串中的文字
        let re = new RegExp('<[^<>]+>', 'g')
        let text = html_str.replace(re, '')
        return text.slice(0,50)
      }
    function handleHover() {
      console.log(111);
    }
    return {
      Data,
      handleHover,
      getHtmlPlainText
    };
  },
};
</script>

<style scoped>
Shtml,
body,
div,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
dl,
li,
dt,
dd,
p,
blockquote,
pre,
form,
fieldset,
table,
th,
td,
span {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #111;
}
* {
  font-family: "微软雅黑";
  outline: none;
}
header {
  width: 100%;
}

div,
figure,
figcaption,
li,
ul {
  box-sizing: border-box;
}
.ddd {
  font-size: 14.6px;
  color: #6d4321;
}

.ddd:hover {
  background: #7e471b;
  color: #fff;
}
/*html {filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);-webkit-filter: grayscale(100%);}*/
img {
  border: none;
}

.auto {
  width: 1200px;
  margin: 0 auto;
  position: relative;
}
.dao_hang {
  width: 100%;
  min-width: 1200px;
  height: 106px;
  background: url(@/assets/town_files/li_01.jpg);

  background-position: center;
  background-size: 1400px 100%;
  margin: 0 auto;
}
.timg {
  display: block;
  margin: 0 auto;
  min-width: 1600px;
  width: 100%;
}
.dao_hang ul > li {
  width: 89px;
  height: 20px;
  border-bottom: none;
  border-top: none;
  float: left;
  position: relative;
  height: 73px;
  margin-right: -20px;
}

.erji {
  position: absolute;
  top: 10px;
  padding-top: 30px;
  left: 15px;
  width: 620px;
  display: none;
  z-index: 9999;
}

.dao_hang ul li:hover .erji {
  display: block;
}

.dao_hang ul li:hover .dd {
  background: #7e471b;
  color: #fff;
}
.dao_hang .erji li {
  width: 18px;
  font-size: 11.87px;
  color: #7e471b;
  border: none;
  margin-left: 10px;
  line-height: 13px;
  float: left;
  background: #fff;
  padding-left: 3px;
}

.dao_hang .erji li:hover {
  color: red;
  display: block;
}

.dao_hang ul {
  float: right;
  margin-top: 34px;
}
.dao_hang ul li span {
  display: block;
  width: 8px;
  height: 8px;
  background: url(@/assets/town_files/yuan.png);
  margin: 0 auto;
  margin-top: -15px;
  margin-bottom: 5px;
}
.dd {
  font-size: 14.6px;
  color: #6d4321;
  width: 14px;
  display: inline-block;
  vertical-align: top;
  line-height: 15.5px;
}
.dd2 {
  font-size: 11.3px !important;
  transform: rotate(90deg);
  transform: rotate(90deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
  vertical-align: top;
  margin-top: 3px;
  color: #6d4321;
  width: 14px;
  display: inline-block;
  line-height: 15.5px;
  font-family: "Times New Roman";
}
.wen {
  width: 41px;
  margin: 0 auto;
}

.dd:hover {
  background: #7e471b;
  color: #fff;
}
.dd {
  padding: 2px 2px;
}
.head {
  background: url("@/assets/town_files/backgound.jpg");
}
.wai {
  width: 100%;
  min-width: 1100px;
  background: url("@/assets/town_files/backgound.jpg");
  padding-top: 11px;
}

.left {
  width: 731px;
}

.left {
  float: left;
  margin-left: 104px;
}
.right {
  width: 280px;
  float: left;
  margin-left: 11px;
}
.right > a {
  display: block;
  margin-top: 7px;
}
.chaxun {
  margin-top: 11px;
}
.dibu {
  width: 100%;
  height: 198px;
  min-width: 1200px;
  background: #684c33;
  padding-top: 44px;
}
.dizhi {
  display: inline-block;
  font-size: 14px;
  color: #e0d6cd;
  text-align: center;
  margin-left: 48px;
  margin-top: 25px;
}
.diimg {
  margin-left: 72px;
}
.diimg2 {
  margin-left: 44px;
}
.diimg3 {
  margin-left: 14px;
}
.fudd {
  position: absolute;
  margin-left: -120px;
  top: 0px;
  z-index: 9999;
}
.di_an {
  border-bottom: 1px #7e471b solid !important;
}

.shipt {
  margin-top: 0px;
  width: 278px;
  height: 51px;
  background: #262626;
}
.shipt img {
  display: block;
  margin: 0 auto;
  position: relative;
  top: 10px;
}
.shpi {
  width: 280px;
  height: 167px;
  overflow: hidden;
}
.tia_nqi {
  margin: 0 auto;
  margin-left: 120px;
}

.nei_left {
  width: 800px;
  float: left;
  padding: 13px 25px;
  background: #fff;
  margin-left: 70px;
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
.ditu {
  width: 653px;
  height: 599px;
  margin: 0 auto;
  margin-top: 22px;
}
.tt_p {
  font-size: 16px;
  text-align: center;
  width: 600px;
  margin: 0 auto;
  border-bottom: 1px #85785b dotted;
  padding-bottom: 14px;
  font-weight: 600;
  margin-top: 27px;
}
.tt_nei {
  font-size: 12px;
  width: 567px;
  line-height: 19px;
  margin: 0 auto;
  margin-top: 16px;
}

.auto2 {
  margin-top: 12px;
}

.shou span a {
  font-size: 14px;
  color: #785f4b;
}
.shou span a:hover {
  color: #412405;
}
.shou span {
  line-height: 12px;
  float: right;
  margin-top: 5px;
}
.jing_dian {
  width: 670px;
  margin: 0 auto;
}
.jing_dian li {
  float: left;
  margin: 0px 6px;
  margin-top: 15px;
  margin-right: 30px;
  margin-bottom: 30px;
}
.jing_dian li img {
  width: 187px;
  height: 285px;
}
.yuyin {
  margin: 0 auto;
  display: block;
  margin-top: 33px;
}
.bf {
  font-size: 14px;
  color: #876345;
  vertical-align: middle;
}
.bf img {
  vertical-align: middle;
}
.yuyan a {
  display: inline-block;
  width: 47px;
  height: 19px;
  background: #876345;
  color: #fff;
  font-size: 12px;
  text-align: center;
}
.yu_yin span {
  float: right;
}
.bf {
  line-height: 25px;
  margin-right: 5px;
}
.yu_yin {
  width: 581px;
  margin: 0 auto;
  font-size: 16px;
  font-weight: 600;
  margin-top: 16px;
}
.datu {
  width: 575px;
  height: 367px;
  display: block;
  margin: 0 auto;
  margin-top: 25px;
}
.datu img {
  width: 575px;
  height: 367px;
}
.litu img {
  width: 83px;
  height: 56px;
}
.xiaotu li {
  float: left;
  margin-left: 13px;
  margin-top: 19px;
}
.litu {
  width: 83px;
  height: 56px;
}
.xd img {
  border: 1px #85785b solid;
}
.hhh {
  width: 575px;
  margin: 0 auto;
}
.drg {
  float: right;
  margin-right: -30px;
}
.dlt {
  float: left;
}

.rele {
  position: relative;
  top: -53px;
}
.xiaotu {
  width: 532px;
  margin-left: 10px;
  overflow: hidden;
}

.hhh {
  border-bottom: 1px #85785b dotted;
  padding-bottom: 20px;
  margin-bottom: 25px;
}
.nero {
  width: 573px;
  margin: 0 auto;
  text-indent: 2em;
  font-size: 12px;
  line-height: 24px;
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
.dix a:hover {
  color: #785f4b;
}
.tishi {
  width: 219px;
  height: 166px;
  position: relative;
  overflow: hidden;
  float: left;
}
.tishi p {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 219px;
  height: 166px;
  text-align: center;
  line-height: 166px;
  color: #fff;
  font-size: 20px;
  display: none;
}
.msbt {
  font-size: 16px;
  font-weight: 600;
}
.msnr {
  font-size: 12px;
  width: 350px;
  line-height: 19px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-top: 18px;
}
.msz {
  float: left;
  margin-left: 35px;
  height: 166px;
  position: relative;
}
.dzrx {
  position: absolute;
  bottom: 0px;
  font-size: 12px;
  font-weight: 600;
}
.sh_ou .msz {
  color: #ff6600;
}
.sh_ou .dzrx {
}
.msul li {
  width: 604px;
  padding: 18px 0px;
  border-bottom: 1px #85785b dotted;
  margin: 0 auto;
}
.yma {
  display: inline-block;
  border: none;
}
.yema {
  text-align: center;
  font-size: 14px;
  margin-top: 20px;
}
.yema a {
  margin: 0 3px;
  color: #7b7ba4;
}
.yema a:hover {
  color: red;
}
.hhh > p {
  margin-top: 30px;
}

.msul2 li {
  width: 600px;
  height: 127px;
  margin: 0 auto;
  padding-top: 30px;
  border-bottom: 1px #85785b dotted;
}
.msul2 li .p_t {
  font-size: 16px;
}
.msul2 li .p_r {
  font-size: 14px;
  margin-top: 17px;
  color: #989898;
}

.sh_ou .p_t {
  font-weight: 600;
  color: #ff6600;
}

.msul2 .sh_ou .p_r {
  color: #ff9b52;
  font-size: 14px;
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
.shi_j span {
  margin-left: 45px;
}
.nr_nr {
  font-size: 12px;
  width: 765px;
  line-height: 24px;
  margin: 0 auto;
  text-indent: 2em;
  margin-top: 30px;
}
.neitu {
  width: 645px;
  display: block;
  margin: 0 auto;
  margin-top: 24px;
}
.xia_z {
  font-size: 12px;
  line-height: 24px;
  margin-top: 26px;
  margin-left: 20px;
}
.xia_z a:hover {
  color: #ccc;
}
.bd li {
  width: 112px;
  height: 150px;
  border: 1px #979797 solid;
  margin: 0 5px;
  background: #eaeaea;
}
.bd ul {
  width: 600px;
}
.bd {
  width: 600px;
  margin: 0 auto;
}
.tempWrap {
  width: 600px !important;
  margin: 0 auto;
}
.bd li img {
  width: 103px;
  margin: 0 auto;
  display: block;
}
.bd li p {
  text-align: center;
  font-size: 14px !important;
  margin-top: 0px;
}
.reviewlist {
  position: relative;
}
.prev {
  position: absolute;
  left: 10px;
  top: 50px;
}
.next {
  position: absolute;
  right: 10px;
  top: 50px;
}

.reviewpic {
  width: 103px;
  height: 80px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 10px;
}

.reviewpic img {
  cursor: pointer;
  transition: all 0.8s;
}

.reviewpic img:hover {
  transform: scale(1.2);
}
.shipin {
  width: 677px;
  height: 398px;
  margin: 0 auto;
  margin-top: 28px;
}
.ganxie {
  text-align: center;
  font-size: 18px;
  height: 70px;
  line-height: 70px;
  border-bottom: 1px #785f4b solid;
  margin-bottom: 24px;
}
.fmfm {
  float: left;
}
.fmfm img {
  width: 309px;
  height: 398px;
}
.sbzs {
  margin-top: 47px;
}

.nrnr p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12px;
  margin-bottom: 15px;
}
.nrnr {
  width: 337px;
  float: left;
  margin-left: 30px;
  height: 100%;
  overflow: hidden;
}

.fmfm p {
  text-align: center;
  font-size: 15.6px;
  margin-top: 26px;
}
.sbzs {
  border-bottom: 1px #785f4b solid;
  padding-bottom: 38px;
}

.difeng li {
  float: left;
  margin: 0px 11px;
  margin-top: 19px;
  width: 103px;
  height: 141px;
  background: #876345;
  position: relative;
}
.difeng {
  width: 625px;
  margin: 0 auto;
}
.difeng li img {
  width: 99px;
  height: 135px;
  display: block;
  margin: 0 auto;
  margin-top: 3px;
}
.difeng li p {
  position: absolute;
  bottom: 5px;
  font-size: 12px;
  color: #fff;
  text-align: center;
  width: 103px;
  text-shadow: #412405 1px 0 0, #412405 0 1px 0, #412405 -1px 0 0,
    #412405 0 -1px 0;
  -webkit-text-shadow: #412405 1px 0 0, #412405 0 1px 0, #412405 -1px 0 0,
    #412405 0 -1px 0;
  -moz-text-shadow: #412405 1px 0 0, #412405 0 1px 0, #412405 -1px 0 0,
    #412405 0 -1px 0;
}
.rtbg {
  width: 196px;
  height: 138px;
  float: left;
}
.xianlu li {
  width: 600px;
  margin: 0 auto;
  margin-top: 10px;
}
.xianlu li > img {
  float: left;
  width: 402px;
  height: 135px;
}
.djdj {
  width: 75px;
  height: 20px;
  display: block;
  margin: 0 auto;
  margin-top: 8px;
}
.rtbg p {
  font-size: 10px;
  line-height: 14px;
  width: 170px;
  margin: 0 auto;
  margin-top: 13px;
  color: #606060;
}

.whf {
  display: block;
  margin: 0 auto;
  margin-top: 20px;
}
.ji_ne {
  font-size: 24px;
  line-height: 48px;
}
.nmb {
  width: 36px;
  height: 22px;
  vertical-align: middle;
}
.qup {
  width: 100px;
  margin-left: 20px;
  margin-right: 20px;
}
.jna {
  width: 100px;
  margin-left: 7px;
  margin-right: 20px;
}
.jpa {
  margin-top: 12px;
  font-size: 12.3px;
}
.quo {
  margin-top: 12px;
  font-size: 12.3px;
}
.xigmg {
  width: 208px;
  margin-left: 13px;
}
.bi_dan {
  margin-left: 60px;
  margin-top: 20px;
}
.zhushi {
  font-size: 12px;
  color: #ff0000;
  margin-left: 60px;
  margin-top: 20px;
}
.zhushi span {
  margin-left: 25px;
  line-height: 24px;
}
.gcwh {
  display: inline-block;
  width: 124px;
  height: 35px;
  background: #156400;
  text-align: center;
  line-height: 35px;
  color: #fff;
  border-radius: 5px;
  margin-left: 50px;
  margin-top: 30px;
}
.qjs {
  width: 111px;
  height: 35px;
  margin-left: 15px;
}
.waiul li {
  float: left;
}
.bd2 .tempWrap {
  width: 600px !important;
  margin: 0 auto;
  margin-left: -30px;
}
.bd2 {
  margin-top: 15px;
}
.zou .tempWrap {
  width: 745px !important;
}
.waiul {
  height: 196px;
}
.gun_dong .prev,
.gun_dong .next {
  top: 50%;
}
.timg {
  width: 1300px;
  margin: 0 auto;
}

.chaxun li {
  float: left;
}
.chaxun img {
  width: 137px;
  height: 137px;
}

.zou {
  margin-top: 15px;
}

.city {
  font-size: 14px;
  font-weight: bold;
  display: none !important;
}
.timg {
  min-width: 1200px;
  height: 384px;
  /*background: url(../img/li_023.jpg);*/
  background-position: center;
}

.min_pic {
  padding-top: 10px;
  width: 802px;
}
.num ul {
  position: absolute;
  left: 0;
  top: 0;
}

.num ul li {
  margin-right: 15px;
  border: 2px solid #fff;
}
.num ul li.on img {
  border: 2px solid #00b0f0;
  padding: 0;
}
.prev_btn1 {
  width: 28px;
  text-align: center;
  height: 28px;
  margin-top: 30px;
  margin-right: 8px;
  cursor: pointer;
  float: left;
}
.prev_btn1:hover {
  opacity: 0.8;
}
.next_btn1 {
  width: 28px;
  text-align: center;
  height: 28px;
  margin-top: 30px;
  cursor: pointer;
  float: right;
}
.next_btn1:hover {
  opacity: 0.8;
}

.hhh {
  position: relative;
  width: 532px;
  margin-top: 10px;
}
.hddd {
  width: 9999px;
}
.dao_hang .erji li {
  width: 26px;
  font-size: 11.87px;
  color: #7e471b;
  border: none;
  line-height: 13px;
  float: left;
  padding: 4px 8px;
  margin-left: 0px;
}
.phone {
  border: 3px solid#624343;
}
.gcdt {
  font-size: 18px;
  color: #7e471b;
  border-left: 3px #7e471b solid;
  padding-left: 10px;
  height: 15px;
  line-height: 15px;
}
.gcdt span {
  font-size: 12.9px;
  margin-left: 13px;
}
.gcdt a {
  font-size: 12.9px;
  margin-left: 13px;
  color: #7e471b;
}
.gcdt {
  position: relative;
}
.gcdt2 {
  margin-top: 17px;
  width: 100%;
}
.left .we {
  width: 733px;
  height: 294px;
  background: #fff;
  margin-top: 7px;
  padding: 20px;
}
.we .wert {
  float: left;
  margin-left: 22px;
  width: 478px;
}

.we img {
  float: left;
  width: 190px;
  height: 253px;
}

.wert .blue {
  font-size: 16px;
  color: #36a1eb;
}
.wert .hui {
  font-size: 12px;
  color: #989898;
  text-indent: 2em;
  margin-top: 5px;
  line-height: 19px;
}
.wert .xian {
  border-bottom: 1px #85785b dotted;
  margin-top: 5px;
}
.wert .xw a {
  font-size: 16px;
  color: #412405;
  line-height: 28px;
}
.wert .xw a:hover {
  color: #7e471b;
}
.zhleft {
  width: 732px;
  height: 104px;
  position: relative;
  margin-top: 10px;
}

#full-screen-slider {
  width: 100%;
  height: 100%;
  float: left;
  position: relative;
}

#slides {
  display: block;
  width: 100%;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
}

#slides li {
  display: block;
  width: 100%;
  height: 104px;
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
}

#slides li a {
  display: block;
  width: 100%;
  height: 100%;
  text-indent: -9999px;
}

#pagination {
  float: left; /*改成浮动了*/
  list-style: none;
  position: absolute;
  top: 360px;
  z-index: 999;
  padding: 0;
  width: 100px;
  right: 30px;
  display: none;
}

#pagination li {
  float: left; /*改成浮动了*/
  list-style: none;
  width: 22px;
  height: 22px;
  float: left;
  margin-left: 10px;
  background: red;
}

#pagination li a {
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  color: #fff;
  font-size: 20px;
  text-align: center;
  line-height: 22px;
}
#pagination li.current {
  background: #0092ce;
}

.lunbp {
  z-index: 99999;
  position: absolute;
  color: #fff;
  bottom: 0px;
  font-size: 20px;
  text-indent: 1em;
  height: 46px;
  width: 100%;
  margin: 0px;
  line-height: 46px;
}

.wenhua {
  margin-top: 14px;
}
.zhimg {
  margin-top: 10px;
}

.table {
  float: right;
  font-weight: normal;
}
.table a {
  font-size: 14px;
  color: #7e471b;
  float: left;
  width: 70px;
  text-align: center;
  border-bottom: 1px #ff9000 solid;
  padding-bottom: 4px;
}
.table2 li {
  width: 733px;
  height: 256px;
  background: #fff;
  margin-top: 8px;
  padding-left: 0px;
  padding-top: 10px;
}
.inli {
  width: 299px;
  height: 80px;
  float: left;
  margin: 0px 26px;
}
.inli .biao {
  padding-top: 10px;
  font-weight: 600;
  font-size: 18px;
}
.inli .biao a:hover {
  color: #ccc;
}

.inli .sm {
  font-size: 12px;
  color: #333;
  width: 299px;
  margin-top: 10px;
}
.inli sm a:hover {
  color: #ccc;
}

.zou li {
  width: 134px;
  height: 189px;
  float: left;
  margin-right: 15px;
}
.waiul {
  width: 9999px;
  margin-top: 11px;
}

.zou li img {
  width: 130px;
  margin-top: 1px;
}
.zou li p {
  text-align: center;
  line-height: 55px;
  font-size: 12px;
  color: #8a8a8a;
}
.jingdian {
  width: 730px;
  overflow: hidden;
}
.zou {
  float: left;
}
.jingdian {
  position: relative;
}
.zuoyou {
  width: 100%;
  position: absolute;
  top: 100px;
}
.fyou {
  float: right;
  margin-right: 3px;
}
.bhleft {
  width: 365px;
  float: left;
}
.in {
  width: 354px;
  height: 225px;
  background: #fff;
  margin-top: 9px;
  padding: 9px;
  overflow: hidden;
}
.in a {
  display: block;
  height: 43px;
  line-height: 42px;
  padding-left: 48px;
  background: url(@/assets/town_files/ali.png);
}
.in a:hover {
  color: #ccc;
}
.qc {
  clear: both;
}
.xw li {
  display: block;
  overflow: hidden;
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.baiye li {
  float: left;
}

.dian .yin {
  display: none;
}
.chu .yin {
  display: inline-block;
}
.baiye {
  margin-top: 10px;
}
.table2 li {
  display: none;
}

.table2 .show {
  display: block;
}
Shtml,
body,
div,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
dl,
li,
dt,
dd,
p,
blockquote,
pre,
form,
fieldset,
table,
th,
td,
span {
  padding: 0;
  margin: 0;
}
</style>