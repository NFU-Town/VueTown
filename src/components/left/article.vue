<template>
  <div class="nei_left" style="position:relative">
    <p class="shou"><a></a></p>
    <p class="n_b_t">{{ Data.article.title }}</p>
    <p class="shi_j">
      来源：{{ Data.article.origin }}
      <span>时间：{{ Data.article.ctime }}</span>
    </p>
    <div class="nr_nr">
      <div v-html="Data.article.content"></div>
    </div>
    <div>
      <h4>附件：</h4>
      <h5 v-for="(item, index) in Data.article.files" :key="index" style="color: red;">
        <a :href="item.url" style="color: red;" target="_blank">{{ item.name }}</a>
      </h5>
    </div>
    <div class="dix">
      <router-link v-if="previousArticle" :to="{ name: 'article', query: { id: previousArticle.id } }">
        上一篇: {{ previousArticle.title }}
      </router-link>
      <router-link v-if="nextArticle" :to="{ name: 'article', query: { id: nextArticle.id } }">
        下一篇: {{ nextArticle.title }}
      </router-link>
    </div>
  </div>
</template>


<script>
import { reactive, onMounted, ref, inject, watch } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'article',
  setup() {
    const router = useRouter();
    const query = reactive(router.currentRoute.value.query);
    const axios = inject('$axios');

    // 数据
    const Data = reactive({
      article: {
        title: '',
        origin: '',
        ctime: '',
        content: '',
        files: [],
        town: '' // 确保 town 存在于文章数据中
      },
    });

    const previousArticle = ref(null);
    const nextArticle = ref(null);

    const getData = () => {
      axios({
        method: 'get',
        url: '/apis/find/articles?id=' + query.id,
      }).then((res) => {
        Data.article = res.data.data;
        getPagesData();
      });
    };

    const getPagesData = () => {
      axios({
        method: 'get',
        url: `/apis/find/pages?id=${query.id}&town=${Data.article.town}&sort=ctime`,
      })
      .then((res) => {
        previousArticle.value = res.data.data.previous;
        nextArticle.value = res.data.data.next;
      })
      .catch(error => {
        console.error('Error fetching page data:', error);
      });
    };

    onMounted(() => {
      getData();
    });

    // 监视路由的变化
    watch(() => router.currentRoute.value.query, (newQuery) => {
      query.id = newQuery.id; // 更新当前的 id
      getData(); // 重新获取数据
    });

    return {
      Data,
      previousArticle,
      nextArticle,
    };
  },
};
</script>

<style scoped>
.nei_left {
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
::v-deep img {
  max-width: 700px;
}
</style>
