import { mount, createLocalVue, shallowMount } from "@vue/test-utils";
import VueDynamicBreadcrumbs from "../src";
import VueRouter from "vue-router";
import routes from "./router";
import App from "./App.vue";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(VueDynamicBreadcrumbs);

export const pathBuilder = (wrapper) => {
  return wrapper.vm.$breadcrumbs.flatMap((b) => b.name).join("->");
};

export const pwd = (wrapper) => {
  return wrapper.vm.$route.path;
};

export const wrapperBuilder = (routeName) => {
  const router = new VueRouter({ routes });
  router.push({ name: routeName });
  const wrapper = mount(App, {
    localVue,
    router,
  });

  return { router, wrapper };
};
