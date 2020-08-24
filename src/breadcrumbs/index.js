import Vue from "vue";

export const buildRoutes = (route, router) => {
  const searchParents = (routeIt, parents = []) => {
    if (hasParent(routeIt)) {
      const { breadcrumb } = routeIt.meta;

      const { route } = router.resolve({ name: breadcrumb.parent });
      if (route) {
        parents.push(route);

        return searchParents(route, parents);
      }
    }

    return parents;
  };

  const hasParent = route => {
    const { meta } = route;

    return meta && meta.breadcrumb && meta.breadcrumb.parent;
  };

  const routeDTO = match => {
    return {
      path: match.path,
      name: match.name,
      meta: match.meta
    };
  };

  const routes = [...route.matched.map(match => routeDTO(match))];

  routes.sort((lhs, rhs) => lhs.path.length - rhs.path.length);

  let output = [];

  for (let i = routes.length - 1; i >= 0; i--) {
    const routeIt = routes[i];

    if (!routeIt.name) {
      const { route } = router.resolve({ path: routeIt.path });

      if (output.find(r => r.name === route.name)) {
        continue;
      }

      output.push(route);
    } else {
      output.push(routeIt);
    }

    const parents = searchParents(routeIt);

    output = output.concat(parents);
  }

  return output.filter(o => !!o.meta.breadcrumb).reverse();
};

export const collectBreadcrumbs = ($route, $router, $context) => {
  const routes = buildRoutes($route, $router);

  const breadcrumbs = routes.flatMap(route => {
    const data = Vue.observable({
      name: route.name,
      path:
        (route.meta && route.meta.breadcrumb && route.meta.breadcrumb.route) ||
        route.path,
      params: $route.params,
      query: $route.query,
      label: "",
      template: null,
      context: $context
    });

    if (!route.meta || !route.meta.breadcrumb) return data;

    let breadcrumb = route.meta.breadcrumb;

    switch (typeof breadcrumb) {
      case "string": {
        data.label = data.label || breadcrumb;
        break;
      }

      case "object": {
        data.label = data.label || breadcrumb.label;
        data.template = breadcrumb.template;
      }
    }

    return data;
  });

  return breadcrumbs;
};

export const routeContextPath = $route => {
  const isNotRoot = $route.matched.length > 1;

  if (!isNotRoot) return $route.matched[0].path;

  return $route.matched[1].path;
};
