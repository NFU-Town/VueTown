<template>
  <div>
    <div class="nei_left" style="position:relative; width: 80%; margin: auto; height: 400px;"> <!-- 设置宽度 -->
      <p class="shou"><a>景区服务</a></p>
      <div id="allmap" style="width: 100%; height: 100%;"></div> <!-- 地图填满父容器 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'MapWithService',
  mounted() {
    this.loadBaiduMapScript();
  },
  methods: {
    loadBaiduMapScript() {
      const script = document.createElement('script');
      script.src = 'https://api.map.baidu.com/getscript?type=webgl&v=1.0&ak=MrN5dfdKrLO7cEyccSSy7UN7E62dBu9J&services=';
      script.onload = () => {
        if (window.BMapGL) {
          this.initializeMap();
        } else {
          console.error('BMapGL 未定义');
        }
      };
      script.onerror = () => {
        console.error('百度地图脚本加载失败');
      };
      document.body.appendChild(script);
    },
    initializeMap() {
      const map = new BMapGL.Map("allmap");
      map.centerAndZoom(new BMapGL.Point(113.68,23.51), 19);
      map.enableScrollWheelZoom(true);
      map.setHeading(64.5);
      map.setTilt(73);
    }
  }
}
</script>

<style scoped>
.nei_left {
  float: left;
  padding: 13px 25px;
  background: #fff;
  min-height: 900px;
  height: auto;
  padding-bottom: 52px;
  font-size: 16px;
  position: relative;
  width: 100% !important; 
  margin: auto; 
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
body, html {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  font-family: "微软雅黑";
}
#allmap {
  width: 100%; /* 使地图容器填满父容器 */
  height: 100%; /* 使地图容器填满父容器 */
}
</style>
