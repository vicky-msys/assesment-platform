import React from "react";

import { ROUTES_MAP } from "@app/service/constants/routes.const";
import { PageNotFound } from "@app/components/Common/CommonComponents";
export function getRoutesFromRole(role) {
  return ROUTES_MAP.filter((item) => item.allowedRoles.indexOf(role) > -1);
}

export function getRouteFromRouteName(name) {
  let route = ROUTES_MAP.find((item) => item.routeName === name);
  return route;
}

export function getRouteAsComponent(item, attribute) {
  let Component = item[attribute] || PageNotFound;
  return <Component {...item.props} />;
}
export function getItemAsComponent(item, props) {
  let Component = item || PageNotFound;
  return <Component {...props} />;
}
