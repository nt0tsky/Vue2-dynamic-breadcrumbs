import { collectBreadcrumbs, routeContextPath } from "./breadcrumbs";
import Vue from "vue";

const routeState = Vue.observable({});

export default {
  install(Vue, options) {
    Object.defineProperty(Vue.prototype, "$breadcrumbsManager", {
      get: function() {
        const { $route } = this;

        return {
          bindContext(key, value) {
            const path = routeContextPath($route);
            const context = routeState[path] || {};
            const isSame = (context[key] && context[key] === value) || false;

            if (isSame) return;

            Vue.set(context, key, value);
            Vue.set(routeState, path, context);
          }
        };
      }
    });

    Object.defineProperty(Vue.prototype, "$breadcrumbs", {
      get: function get() {
        const { $route, $router } = this;
        const path = routeContextPath($route);
        const $context = routeState[path];

        const breadcrumbs = collectBreadcrumbs(
          $route,
          $router,
          $context
        );

        return breadcrumbs;
      }
    });
  }
};
