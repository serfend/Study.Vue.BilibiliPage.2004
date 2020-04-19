import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "hash",
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("@/components/Home"),
      meta: {
        title: "VUE哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
      }
    },
    {
      name: "Ranking",
      path: "/ranking",
      component: () => import("@/views/Ranking"),
      redirect: "/ranking/all/0/0/0",
      children: [
        {
          name: "all",
          path: ":type/:rid/:rankselect/:rankselect2",
          component: () => import("@/components/Ranking"),
          meta: {
            title: "VUE热门视频排行榜 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
          }
        },
        {
          name: "origin",
          path: ":type/:rid/:rankselect/:rankselect2",
          component: () => import("@/components/Ranking"),
          meta: {
            title: "VUE热门视频排行榜 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
          }
        },
        {
          name: "bangumi",
          path: ":type/:rid/:rankselect/:rankselect2",
          component: () => import("@/components/Ranking"),
          meta: {
            title: "VUE热门视频排行榜 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
          }
        },
        {
          name: "cinema",
          path: ":type/:rid/:rankselect/:rankselect2",
          component: () => import("@/components/Ranking"),
          meta: {
            title: "VUE热门视频排行榜 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
          }
        },
        {
          name: "rookie",
          path: ":type/:rid/:rankselect/:rankselect2",
          component: () => import("@/components/Ranking"),
          meta: {
            title: "VUE热门视频排行榜 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
          }
        }
      ]
    },
    {
      path: "/search",
      component: () => import("@/views/Search"),
      redirect: "/search/all",
      children: [
        {
          name: "searchAll",
          path: "all",
          component: () => import("@/components/Search"),
          meta: {
            title: "VUE搜索结果 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
          }
        },
        {
          name: "searchVideo",
          path: "video",
          component: () => import("@/components/Search"),
          meta: {
            title: "VUE搜索结果 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
          }
        },
        {
          name: "searchBangumi",
          path: "bangumi",
          component: () => import("@/components/Search"),
          meta: {
            title: "VUE搜索结果 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
          }
        },
        {
          name: "searchPgc",
          path: "pgc",
          component: () => import("@/components/Search"),
          meta: {
            title: "VUE搜索结果 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
          }
        },
        {
          name: "searchLive",
          path: "live",
          component: () => import("@/components/Search"),
          meta: {
            title: "VUE搜索结果 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
          }
        },
        {
          name: "searchArticle",
          path: "article",
          component: () => import("@/components/Search"),
          meta: {
            title: "VUE搜索结果 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
          }
        },
        {
          name: "searchTopic",
          path: "topic",
          component: () => import("@/components/Search"),
          meta: {
            title: "VUE搜索结果 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
          }
        },
        {
          name: "upuser",
          path: "upuser",
          component: () => import("@/components/Search"),
          meta: {
            title: "VUE搜索结果 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
          }
        },
        {
          name: "photo",
          path: "photo",
          component: () => import("@/components/Search"),
          meta: {
            title: "VUE搜索结果 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
          }
        }
      ]
    },
    {
      name: "video",
      path: "/video/:aid",
      component: () => import("@/views/Video"),
      meta: {
        title: ":aid - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
      }
    },
    {
      path: "*",
      component: () => import("@/views/NotFound"),
      meta: {
        title: "VUE出错啦! - bilibili.com"
      }
    }
  ]
});
