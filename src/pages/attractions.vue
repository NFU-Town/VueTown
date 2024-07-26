<template>
  <div class="nei_left">
    <div class="shou"><a>小镇景点</a></div>
    <div class="demo-image__placeholder" v-for="(item, index) in Data.attraction" :key="index">
      <div class="block clearfix">
        <img :src="item.imageUrl" class="block_pic">
        <span class="demonstration">{{ item.name }}:</span>
        <span class="demonstration_text">{{ item.description }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, inject, onMounted } from 'vue';

export default {
  name: 'Attraction',
  setup() {
    const axios = inject('$axios');
    // 初始数据，包含一些默认项
    const Data = reactive({
      attraction: [
        {
          name: "文昌宫",
          imageUrl: "@/assets/town_files/03005230dymn.jpg",
          description: "这是一个漂亮的地方，非常值得去玩",
        },
        {
          name: "小石桥",
          imageUrl: "@/assets/town_files/030133557r70.jpg",
          description: "这是一个适合拍照的地方，非常值得去玩",
        },
        {
          name: "双石桥",
          imageUrl: "@/assets/town_files/10234350fohc.jpg",
          description: "这是一个适合拍照的地方，非常值得去玩",
        },
        {
          name: "纳西喜院",
          imageUrl: "@/assets/town_files/0301181587ku.jpg",
          description: "这是一个适合拍照的地方，非常值得去玩",
        },
        {
          name: "古井",
          imageUrl: "@/assets/town_files/10141857lc6s.jpg",
          description: "这是一个适合拍照的地方，非常值得去玩",
        }
      ]
    });

    const getData = () => {
      axios({
        method: 'post',
        url: '/apis/find/articles?town=凤二客家文创小镇&sort=小镇景点',
      }).then(res => {
        console.log(res.data.data);
        Data.attraction = res.data.data;
      }).catch(error => {
        console.error('Error fetching data:', error.message);
        console.error('Response data:', error.response ? error.response.data : 'No response data');
      });
    };

    onMounted(() => {
      getData();
    });

    return {
      Data
    };
  }
};
</script>

<style scoped>
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
  border-bottom: 1px solid #785f4b;
  font-weight: 500;
}
.block {
  margin: 5px;
  border: 2px solid #ac995a; /* 设定边框宽度和样式 */
  padding: 10px; /* 添加内边距 */
  cursor: pointer; /* 鼠标悬停时显示指针 */
}
.block:hover {
  background-color: #f0f0f0; /* 悬停时改变背景色 */
}
.block_pic {
  float: left;
  width: 170px;
  margin: 20px;
}
.demonstration {
  float: left;
  margin: 30px 20px 20px 30px;
  color: #ac995a;
  font-size: 20px;
}
.demonstration_text {
  float: left;
  margin: 30px 60px 35px 30px;
  color: #ac995a;
  font-size: 15px;
}
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
</style>
