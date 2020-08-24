import Vue from "vue";
import VueDynamicBreadcrumbs from "../src";

const AccountInfo = {
  path: "account-info",
  component: {
    template: "<p>Account Info</p>",
  },
  meta: {
    breadcrumb: {
      label: "Account Info",
    },
  },
};

const Dashboard = {
  path: "",
  component: {
    template: "<p>Dashboard</p>",
  },
  meta: {
    breadcrumb: "Dashboard",
  },

  children: [AccountInfo],
};

const routes = [Dashboard];

Vue.use(VueDynamicBreadcrumbs);
const router = new VueRouter({
  routes,
});

const app = new Vue({
  router,
  mounted() {
      debugger;
  },
  
}).$mount("#app");
