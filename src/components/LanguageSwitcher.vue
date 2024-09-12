<template>
  <select
    @change="changeLanguage"
    v-model="currentLocale"
    class="language-selector"
  >
    <option value="zh">中文</option>
    <option value="en">English</option>
    <option value="ja">日本語</option>
  </select>
</template>

<script>
export default {
  name: "LanguageSwitcher",
  data() {
    return {
      currentLocale: this.$i18n.locale,
    };
  },
  methods: {
    changeLanguage(event) {
      this.$i18n.locale = event.target.value;
    },
  },
};
</script>

<style scoped>
.language-selector {
  position: relative;
  top: 50px;
  margin-left: 2px;
  border-radius: 4px; /* 边框圆角 */
  padding: 3px 1px; /* 内边距 */
  cursor: pointer; /* 鼠标指针样式 */
}
</style>
