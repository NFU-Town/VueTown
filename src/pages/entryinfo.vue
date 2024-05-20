<template>
  <div class="container" :style="{ background: 'url('+Data.towninfo.townbackground+')', backgroundRepeat: 'repeat', backgroundSize: '100%' }">
    <!-- 头部 -->
    <div class="head">
      <div class="dao_hang">
        <p class="headtitle">{{ Data.towninfo.townname }}</p>
        <div class="auto">
          <!-- 导航开始 -->
          <ul>
            <li>
              <a><span></span>
                <div class="wen">
                  <a href="javascript:void(0);" @click="$router.push(`/`)" class="dd">首页</a>
                  <a href="javascript:void(0);" @click="$router.push(`/entryinfo/`)" class="dd2">HOME</a>
                </div>
              </a>
            </li>

            <li>
              <a href="javascript:void(0);" @click="$router.push(`/entryinfo/newslist`)"><span></span>
                <div class="wen">
                  <p href="javascript:void(0);" @click="$router.push(`/entryinfo/newslist`)" class="dd">小镇动态</p>
                  <p href="javascript:void(0);" @click="$router.push(`/entryinfo/newslist`)" class="dd2">NEWS</p>
                </div>
              </a>

              <ul class="erji"></ul>
            </li>
            <li>
              <a href="https://www.nfu.edu.cn"><span></span>
                <div class="wen">
                  <p href="javascript:void(0);" class="dd">景区服务</p>
                  <p class="dd2">SERVICE</p>
                </div>
              </a>

              <ul class="erji">
                <a href="javascript:void(0);">
                  <li>旅游攻略</li>
                </a>
                <a href="javascript:void(0);">
                  <li>服务指南</li>
                </a>
                <a href="javascript:void(0);">
                  <li>服务中心</li>
                </a>
                <a href="javascript:void(0);">
                  <li>小镇景点</li>
                </a>
              </ul>
            </li>

            <li>
              <a href="https://www.nfu.edu.cn"><span></span>
                <div class="wen">
                  <p href="javascript:void(0);" class="dd">文化小镇</p>
                  <p class="dd2">CULTURE</p>
                </div>
              </a>

              <ul class="erji">
                <a href="javascript:void(0);">
                  <li>古城历史</li>
                </a>
                <a href="javascript:void(0);">
                  <li>文化院落</li>
                </a>
                <a href="javascript:void(0);">
                  <li>东巴文化</li>
                </a>
                <a href="javascript:void(0);">
                  <li>民风民俗</li>
                </a>
                <a href="javascript:void(0);">
                  <li>纳西古乐</li>
                </a>
                <a href="javascript:void(0);">
                  <li>文化期刊</li>
                </a>
                <a href="javascript:void(0);">
                  <li>文学书馆</li>
                </a>
                <a href="javascript:void(0);">
                  <li>图片标识共享库</li>
                </a>
              </ul>
            </li>

            <li>
              <a href="https://www.nfu.edu.cn"><span></span>
                <div class="wen">
                  <p href="javascript:void(0);" class="dd">小镇保护</p>
                  <p class="dd2">PROTECTION</p>
                </div>
              </a>

              <ul class="erji">
                <a href="javascript:void(0);">
                  <li>政策法规</li>
                </a>
                <a href="javascript:void(0);">
                  <li>保护指南</li>
                </a>
                <a href="javascript:void(0);">
                  <li>办事流程</li>
                </a>
                <a href="javascript:void(0);">
                  <li>古城维护费</li>
                </a>
              </ul>
            </li>

            <li>
              <a href="https://www.nfu.edu.cn"><span></span>
                <div class="wen">
                  <p href="javascript:void(0);" class="dd">关于团队</p>
                  <p class="dd2">SURVEY</p>
                </div>
              </a>

              <ul class="erji"></ul>
            </li>
            <li style="padding-left: 20px">
              <a href="javascript:void(0);" @click="$router.push(`/entryinfo/newslist`)"  class="ddd" style="width: 55px">
                切换小镇 </a><br />
              <a href="https://www.nfu.edu.cn" class="ddd" style="width: 55px">
                English </a><br />
              <a href="https://www.nfu.edu.cn" class="ddd">日本語</a>
            </li>
          </ul>

          <!-- 导航结束 -->
        </div>
      </div>
    </div>
    <div class="lunbo">
      <el-carousel :interval="4000" height="384px" style="width: 100%">
        <el-carousel-item v-for="(item, index) in Data.towninfo.pagepiclist" :key="index">
          <el-image :src="item.url" fit="cover" style="height: 384px" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 内容开始 -->
    <div class="wai">
      <div class="auto" style="position: relative">
        <div class="left">
          <keep-alive>
          <transition name="fade">
          <router-view></router-view></transition>
        </keep-alive>
        </div>

        <div class="right">
          <div class="phone">
            <h3 style="color: #624343; text-align: -webkit-center">
              小镇旅游监督、投诉、咨询电话
            </h3>
            <h2 style="text-align: -webkit-center; color: #624343">
              {{Data.towninfo.tel1}}
            </h2>
            <h4 style="color: #624343; text-align: -webkit-center">
              从化区旅游发展委员会旅游、投诉电话
            </h4>
            <h3 style="text-align: -webkit-center;color: #624343;">
              {{ Data.towninfo.tel2 }}
            </h3>
            <h4 style="color: #624343; text-align: -webkit-center">
              国家旅游服务热线
            </h4>
            <h3 style="text-align: -webkit-center; color: #624343">{{Data.towninfo.tel3}}</h3>
          </div>
          <!-- 四个框框功能 -->
          <ul class="chaxun">
            <li>
              <a href="javascript:void(0);" @click="$router.push(`/entryinfo/service`)"><img
                  src="@/assets/town_files/li_16.jpg" /></a>
            </li>
            <li style="margin-left: 4px">
              <a href="javascript:void(0);" @click="$router.push(`/entryinfo/tips`)"><img
                  src="@/assets/town_files/li_18.jpg" /></a>
            </li>
            <li>
              <a href="javascript:void(0);" @click="$router.push(`/entryinfo/foods`)"><img
                  src="@/assets/town_files/li_26.jpg" /></a>
            </li>
            <li style="margin-left: 4px">
              <a href="javascript:void(0);" @click="$router.push(`/entryinfo/hotellist`)"><img
                  src="@/assets/town_files/li_27.jpg" /></a>
            </li>
          </ul>

          <a href="https://www.nfu.edu.cn"><img src="@/assets/town_files/li_31.jpg" /></a>
          <a href="https://www.nfu.edu.cn"><img src="@/assets/town_files/li_34.jpg" /></a>

          <div class="shpi">
            <video id="videoElement" :src="Data.towninfo.townvideo" controls="controls" width="280" height="167">
              您的浏览器不支持 video 标签。
            </video>
            <!--
  <object width="280" height="167" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">
	<param name="movie" value="/r/cms/www/red/flvplayer.swf">
	<param name="quality" value="high">
	<param name="allowFullScreen" value="true">
	<param name="FlashVars" value="vcastr_file=/u/cms/www/201312/29232249vf0i.flv&amp;BufferTime=3"><embed width="278" height="167" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" quality="high" flashvars="vcastr_file=/u/cms/www/201809/30124911c772.flv" allowfullscreen="true" src="/r/cms/www/red/flvplayer.swf">
  </object>
  -->
          </div>
          <div class="shipt">
            <a href="https://www.nfu.edu.cn"><img src="@/assets/town_files/xin.png" /></a>
          </div>

          <a href="https://www.nfu.edu.cn"><img src="@/assets/town_files/23104144de0u.jpg" /></a>
          <a href="https://www.nfu.edu.cn"><img src="@/assets/town_files/17233456y8zr.jpg" /></a>
          <a href="https://www.nfu.edu.cn"><img src="@/assets/town_files/08203442vp11.jpg" /></a>
          <a href="https://www.nfu.edu.cn"><img src="@/assets/town_files/03094832m3bj.gif" /></a>
          <a href="https://www.nfu.edu.cn"><img src="@/assets/town_files/20162415a7fi.jpg" /></a>
          <a href="https://www.nfu.edu.cn"><img src="@/assets/town_files/16095431302f.jpg" /></a>
          <a href="https://www.nfu.edu.cn"><img src="@/assets/town_files/02152336864z.jpg" /></a>
          <a href="https://www.nfu.edu.cn"><img src="@/assets/town_files/04101255olmq.jpg" /></a>
          <a href="https://www.nfu.edu.cn"><img src="@/assets/town_files/262016213g6k.jpg" /></a>
        </div>
        <br class="qc" />
      </div>
    </div>
  </div>

  <!-- 底部 -->
  <div class="dibu">
    <div class="auto">
      <img class="diimg" :src="Data.towninfo.townlogo" />
      <p class="dizhi">
        <a href="javascript:void(0);" @click="$router.push(`/setting/towninfo`)" style="color: burlywood">管理入口</a><br />
        <a target="_blank" href="https://www.scery.com" style="color: #fefefe">@HaoDong
          Wu&nbsp;&nbsp;Designed</a><br />
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=53070202001194" style="
            display: inline-block;
            text-decoration: none;
            height: 20px;
            line-height: 20px;
            color: #fefefe;
          "><img src="@/assets/town_files/bei.png" />粤ICP备19129143号-2</a><br />
        地址：广州南方学院
      </p>
      <img class="diimg2" src="@/assets/town_files/li_74.jpg" />
      <img class="diimg3" src="@/assets/town_files/li_76.jpg" />

      <img class="diimg3" src="@/assets/town_files/app01code.jpg" />
      <img class="diimg3" src="@/assets/town_files/app03code.jpg" />
    </div>
  </div>
</template>

<script>
import {useStore,mapState} from 'vuex'
import { reactive, ref, watch, onMounted, onUnmounted,inject,computed } from "vue";
export default {
  name: "entryinfo",
  props: {},
  setup() {
    const store = useStore() 
    const axios = inject('$axios')
    const town = computed(() => store.state.town);
    watch(town,(nv,ov)=>{
      gettownData(town.value)
    })
    //数据
    const Data = reactive({
      lunbotu: ["https://pic-1257960926.cos.ap-guangzhou.myqcloud.com/town/202402221124701.gif", "https://pic-1257960926.cos.ap-guangzhou.myqcloud.com/town/202402221125449.png",
        "https://pic-1257960926.cos.ap-guangzhou.myqcloud.com/town/202402221125598.png", "https://pic-1257960926.cos.ap-guangzhou.myqcloud.com/town/202402221125067.png", "https://pic-1257960926.cos.ap-guangzhou.myqcloud.com/town/202402221125911.png"],
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
  }
    });
    const gettownData = (town) => {
      axios(
        {
          method: 'post',
          url: '/apis/find/findtown',
          data: {
            town: town
          }
        }
      ).then(res => {
        Data.towninfo = res.data.data;
        store.commit('updatetowninfo', res.data.data)
      })
    }
    onMounted(async () => {
      try {
        gettownData(town.value)

      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      }
    });
    return {
      Data,
      gettownData
    };
  },
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
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

.el-carousel {
  text-align: center;
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

.headtitle {
  float: left;
  position: relative;
  left: 1rem;
  top: 20px;
  font-family: 华文行楷;
  font-size: -webkit-xxx-large;
}

.dao_hang {
  width: 100%;
  min-width: 1200px;
  min-height: 106px;
  background: url(@/assets/town_files/li_01.jpg);
  background-repeat: repeat;
  background-position: center;
  background-size: 100%;
  margin: 0 0;
}

.timg {
  display: block;
  margin: 0 auto;
  min-width: 1600px;
  width: 100%;
}

.dao_hang ul>li {
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



.wai {
  width: 100%;
  min-width: 1100px;

  padding-top: 11px;
}

.left {
  width: 731px;
}

.left {
  float: left;
  /* margin-left: 104px; */
}

.right {
  width: 280px;
  float: left;
  margin-left: 80px;
}

.right>a {
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

.hhh>p {
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

.xianlu li>img {
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
  /*background: url(@/img/li_023.jpg);*/
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
  float: left;
  /*改成浮动了*/
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
  float: left;
  /*改成浮动了*/
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

.lunbo {
  text-align: center;
}
</style>
