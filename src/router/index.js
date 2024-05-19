import { createRouter, createWebHashHistory } from 'vue-router'

const entryinfo = () => import('../pages/entryinfo.vue')
const main = () => import('../components/left/main.vue')
const article = () => import('../components/left/article.vue')

const bookhotel = () => import('../components/left/bookhotel.vue')
const hotellist = () => import('../pages/hotellist.vue')
const service = () => import('../pages/service.vue')
const foods = () => import('../pages/foods.vue')
const tips = () => import('../pages/tips.vue')
const newslist = () => import('../pages/newslist.vue')

const setting = () => import('../pages/setting.vue')
const addarticle = () => import('../components/setting/article.vue')
const towninfo = () => import('../components/setting/towninfo.vue')
const other = () => import('../components/setting/other.vue')

const routes = [
  {
    path: "/",
    redirect: "/entryinfo"
  },
  {
    path: "/entryinfo",
    name: "entryinfo",
    component: entryinfo,
    meta: {
      title: "entryinfo"
    },
    children: [
      {
        path: "/entryinfo",
        redirect: "/entryinfo/main"
      },
      {
        path: "main",
        name: "Main",
        component: main
      },
      {
        path: "article",
        name: "article",
        component: article
      },
      {
        path: "newslist",
        name: "newslist",
        component: newslist
      },
      {
        path: "hotellist",
        name: "hotellist",
        component: hotellist,
      },
      {
        path: "bookhotel",
        name: "bookhotel",
        component: bookhotel,
      },
      {
        path: "service",
        name: "service",
        component: service,
      },
      {
        path: "foods",
        name: "foods",
        component: foods,
      },
      {
        path: "tips",
        name: "tips",
        component: tips,
      }
    ]
  },
  {
    path: "/setting",
    name: "setting",
    component: setting,
    children: [
      {
        path: "/setting",
        redirect: "/setting/towninfo"
      },
      {
        path: "addarticle",
        name: "addarticle",
        component: addarticle
      },
      {
        path: "towninfo",
        name: "towninfo",
        component: towninfo
      },
      {
        path: "other",
        name: "other",
        component: other
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
// router.beforeEach((to, form, next) => {
//   const { title } = to.meta
//   console.log('🐕', title)
//   /* 路由发生变化修改页面title */
//   document.title = title || 'NfuTools'
//   // if (to.meta.title) {
//   //    document.title = to.meta.title
//   // }
//   store.commit('SET_NAV_TITLE', title || 'NfuTools')
//   next()
//   })
export default router;
