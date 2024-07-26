import { createRouter, createWebHashHistory } from 'vue-router'

const entryinfo = () => import('../pages/entryinfo.vue')
const main = () => import('../components/left/main.vue')
const article = () => import('../components/left/article.vue')
const login = () => import('../components/login/login.vue')

const bookhotel = () => import('../components/left/bookhotel.vue')
const hotellist = () => import('../pages/hotellist.vue')
const service = () => import('../pages/service.vue')
const foods = () => import('../pages/foods.vue')
const tips = () => import('../pages/tips.vue')
const newslist = () => import('../pages/newslist.vue')
const servicecenter = () => import('../pages/servicecenter.vue')
const attractions = () => import('../pages/attractions.vue')
const culture = () => import('../pages/culture.vue')
const customs = () => import('../pages/customs.vue')
const ancientmusic = () => import('../pages/ancientmusic.vue')
const journal = () => import('../pages/journal.vue')
const library = () => import('../pages/library.vue')
const twonhistory = () => import('../pages/twonhistory.vue')
const protection = () => import('../pages/protection.vue')
const law = () => import('../pages/law.vue')
const guide = () => import('../pages/guide.vue')
const procedures = () => import('../pages/procedures.vue')
const fee = () => import('../pages/fee.vue')

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
      },
      {
        path: "servicecenter",
        name: "servicecenter",
        component: servicecenter,
      },
      {
        path: "attractions",
        name: "attractions",
        component: attractions,
      },
      {
        path: "twonhistory",
        name: "twonhistory",
        component: twonhistory,
      },
      {
        path: "culture",
        name: "culture",
        component: culture,
      },
      {
        path: "customs",
        name: "customs",
        component: customs,
      },
      {
        path: "ancientmusic",
        name: "ancientmusic",
        component: ancientmusic,
      },
      {
        path: "journal",
        name: "journal",
        component: journal,
      },
      {
        path: "library",
        name: "library",
        component: library,
      },
      {
        path: "protection",
        name: "protection",
        component: protection,
      },
      {
        path: "law",
        name: "law",
        component: law,
      },
      {
        path: "guide",
        name: "guide",
        component: guide,
      },
      {
        path: "procedures",
        name: "procedures",
        component: procedures,
      },
      {
        path: "fee",
        name: "fee",
        component: fee,
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
  },
  {
    path: "/login",
    name: "login",
    component: login,
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
