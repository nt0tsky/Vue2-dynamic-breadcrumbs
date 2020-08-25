import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SubHome from "../views/SubHome.vue";
import SubHomeLevel2 from "../views/SubHomeLevel2.vue";
import SubHomeLevel3 from "../views/SubHomeLevel3.vue";
import SubHomeLevel4 from "../views/SubHomeLevel4.vue";
import SubHomeLevel5 from "../views/SubHomeLevel5.vue";
import RouterView from "../views/RouterView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      breadcrumb: "Home",
    },
  },
  {
    path: "/sub-home",
    component: RouterView,
    children: [
      {
        path: "",
        name: "subhome",
        component: SubHome,
        meta: {
          breadcrumb: {
            label: "Sub home level 1",
            parent: "Home",
          },
        },
      },
      {
        path: "level2",
        name: "subhome-level2",
        component: SubHomeLevel2,
        meta: {
          breadcrumb: {
            label: "Sub home level 2",
            parent: "subhome",
          },
        },
      },
      {
        path: "level3",
        component: RouterView,
        children: [
          {
            path: "",
            name: "subhome-level3",
            component: SubHomeLevel3,
            meta: {
              breadcrumb: {
                template: () => import("@/components/level3"),
                parent: "subhome-level2",
              },
            },
          },
          {
            path: "level4",
            component: RouterView,
            children: [
              {
                path: "",
                name: "subhome-level4",
                component: SubHomeLevel4,
                meta: {
                  breadcrumb: {
                    template: () => import("@/components/level4"),
                  },
                },
              },
              {
                path: "level5",
                name: "subhome-level5",
                component: SubHomeLevel5,
                meta: {
                  breadcrumb: {
                    template: () => import("@/components/level5"),
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      breadcrumb: "About",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
