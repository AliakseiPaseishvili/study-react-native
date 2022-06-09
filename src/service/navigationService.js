export const findActiveRoute = (route) =>
  route.routes && route.routes[route.index]
    ? findActiveRoute(route.routes[route.index])
    : route.name;
