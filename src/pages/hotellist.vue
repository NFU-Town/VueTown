<template>
  <div>
    <!-- 推荐客栈标题 -->
    <div style="padding-bottom: 20px;">
      <p class="shou"><span></span>推荐客栈</p>
    </div>

    <!-- 酒店列表 -->
    <el-row>
      <el-col v-for="(item) in Data.hotellist" :key="item.id" :span="12">
        <el-card :body-style="{ padding: '10px' }" shadow="hover">
          <el-image :src="item.pictureurl" style="width: 320px;height: 200px;" fit="fill" />
          <div style="padding: 14px">
            <h2>{{ item.name }}</h2> 
            <span v-if="item.info">{{ item.info }}</span>
            <div class="bottom" style="padding-top: 10px">
              <el-button type="success" @click="showQRCode(item.erweimapic)">查看二维码</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 二维码弹窗 -->
    <el-dialog v-model="dialogVisible" width="40%" custom-class="custom-dialog">
      <el-image v-if="currentQRCode" :src="currentQRCode" fit="contain"  @error="handleImageError" />
      <span slot="footer" class="dialog-footer">
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const Data = reactive({
      hotellist: []
    });

    const dialogVisible = ref(false);
    const currentQRCode = ref('');

    // 获取客栈列表数据
    const fetchHotels = async () => {
      try {
        const response = await axios({ method: 'get', url: '/apis/hotel' });
        console.log("API Response:", response.data); // 输出响应

        if (Array.isArray(response.data)) {
          Data.hotellist = response.data;
        } else {
          Data.hotellist = [response.data];
        }
      } catch (error) {
        console.error('获取客栈数据出错:', error);
      }
    };

    // 显示二维码的函数
    const showQRCode = (qrCodeUrl) => {
      console.log("显示二维码 URL:", qrCodeUrl);
      if (qrCodeUrl) {
        currentQRCode.value = qrCodeUrl; // 设置二维码URL
        dialogVisible.value = true; // 打开弹窗
        console.log("弹窗状态:", dialogVisible.value);
      } else {
        console.warn("没有二维码 URL");
      }
    };

    // 图片加载错误处理
    const handleImageError = () => {
      console.error("二维码图片加载失败，URL:", currentQRCode.value);
      currentQRCode.value = ''; // 清空二维码 URL
    };

    onMounted(() => {
        fetchHotels(); // 页面加载时获取数据
    });

    return {
      Data,
      dialogVisible,
      currentQRCode,
      showQRCode,
      handleImageError
    };
  }
};
</script>

<style scoped>
.shou {
  font-family: '微软雅黑';
  outline: none;
  padding: 0 10px;
  margin: 0;
  font-size: 16px;
  color: #944708;
  padding-bottom: 8px;
  border-bottom: 1px #785f4b solid;
  font-weight: 500;
}

.shou span {
  line-height: 12px;
  float: right;
  margin-top: 5px;
}

.el-col {
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 20px; /* 增加卡片之间的间距 */
}

/* 确保自定义样式可以正确显示弹窗 */
.custom-dialog {
  z-index: 2000 !important; /* 确保 z-index 足够高 */
  display: block !important; /* 确保显示出来 */
  visibility: visible !important; /* 防止任何隐藏样式 */
}
</style>
