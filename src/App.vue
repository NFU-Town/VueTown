<script setup></script>

<template>
  <span><LanguageSwitcher></LanguageSwitcher></span>
  <div class="main">
    <el-dialog
      v-model="Data.dialogTableVisible"
      title="请选择要进入的特色小镇"
      width="800"
    >
      <div class="mb-4">
        <el-button
          type="success"
          v-for="(item, index) in Data.townoptions"
          :key="index"
          @click="changeTown(item.townname)"
          >{{ item.townname }}</el-button
        >
      </div>
    </el-dialog>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
  <div class="music">
    <!--音乐开始controls-->
    <audio
      id="audio"
      src="https://pic-1257960926.cos.ap-guangzhou.myqcloud.com/town/202402221128889.mp3"
      autoplay
      loop
    ></audio>
  </div>
</template>
<script setup>
import { reactive, ref, watch, onMounted, onUnmounted, inject } from "vue";
import { useStore } from "vuex";
import { h } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import LanguageSwitcher from "./components/LanguageSwitcher.vue";
const axios = inject("$axios");
const store = useStore();
//数据
const Data = reactive({
  dialogTableVisible: true,
  townoptions: [],
});
// let audio = document.getElementById("audio");
// audio.src="https://pic-1257960926.cos.ap-guangzhou.myqcloud.com/town/202402221128889.mp3"
// audio.play();
const changeTown = (townname) => {
  store.commit("updatetownname", townname);
  Data.dialogTableVisible = false;
};
onMounted(() => {
  axios({
    method: "post",
    url: "/apis/find/townlists",
  }).then((res) => {
    Data.townoptions = res.data.data;
    console.log(res.data.data);
    // store.commit('updatetowninfo', res.data.data)
  });
});
</script>
<style scoped></style>
