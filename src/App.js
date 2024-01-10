import React, { useEffect, useState } from "react";
import "./App.scss";
import { useAuthContext } from "@app/service/context/AuthContext";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import {
  getItemAsComponent,
  getRouteAsComponent,
  getRouteFromRouteName,
} from "./service/utils/RouteUtil";
//import { getApiCall } from "@app/service/api/apiService";
import { ROUTES_MAP } from "@app/service/constants/routes.const";
import { PageNotFound } from "@app/components/Common/CommonComponents";
import { roleData } from "@app/assets/mockdata/MockData";

function getPageRoute(link) {
  let route = getRouteFromRouteName(link);
  return (
    <Route element={getRouteAsComponent(route, "routeLayout")}>
      <Route
        path={link}
        element={getRouteAsComponent(route, "routeComponent")}
      />
    </Route>
  );
}

function groupBy(arr, property, filter, role) {
  console.log("role    ",role);
  let amp = arr.reduce(function (memo, x) {
    if (!memo[x[property].name]) {
      memo[x[property].name] = { layout: x[property], children: [] };
    }
    let filteredItem = filter.find((item) => item.path === x.routeName);
    if (filteredItem && x.allowedRoles.indexOf(role) > -1) {
      x.title = filteredItem.title;
      memo[x[property].name].children.push(x);
    }
    return memo;
  }, {});
  const propertyValues = Object.values(amp).filter(
    (item) => item.children.length > 0
  );
  return propertyValues;
}

export default function App() {
  const [routeCollection, setRouteCollection] = useState(null);
  const { authData, setAuthData } = useAuthContext();

  useEffect(() => {
    if (authData && authData.role) {
      localStorage.setItem("token", authData.token);
      localStorage.setItem("username", authData.username);
      localStorage.setItem("role", authData.role);
      localStorage.setItem("name", authData.name);
      localStorage.setItem("email", authData.email);
      setRouteCollection(
        //   mock data
        groupBy(ROUTES_MAP, "routeLayout", roleData[authData.role], authData.role)
      );
      // getApiCall("http://localhost:8000/getContent", {
      //   token: authData.token,
      //   role: authData.role,
      // }).then((res) => {
      //   if (res.data && res.data.status) {
      //     setRouteCollection(
      //       groupBy(ROUTES_MAP, "routeLayout", res.data.message, authData.role)
      //     );
      //   } else {
      //     // Error message need to discuss about the flow

      //     // let data = authData;
      //     // localStorage.setItem("tokenValue","");
      //     // setAuthData(authValue);
      //   }
      // });
    }
  }, [authData]);
  useEffect(() => {
    if (routeCollection && authData) {
      authData.callBack && authData.callBack();
    }
  }, [routeCollection]);
  useEffect(() => {
    let auth = {};
    auth.token = localStorage.getItem("token");
    auth.username = localStorage.getItem("username");
    auth.role = localStorage.getItem("role");
    auth.email = localStorage.getItem("email");
    auth.name = localStorage.getItem("name");
    if (auth) {
      setAuthData(auth);
    }
  }, []);

  function createPageRoute(route, index) {
    return (
      route.layout !== ""?(<Route
        key={index}
        element={getItemAsComponent(route.layout, { children: route.children })}
      >
        {createChildRoute(route)}
      </Route>):createChildRoute(route)
    );
  }

  function createChildRoute(route){
    return route.children.map((child, ind) => {
      return (
        child.routeComponent && <Route
          exact
          key={ind}
          path={child.routeName}
          element={getItemAsComponent(child.routeComponent)}
          />
      );
    })
  }

  return (
    <section className="appSection">
      <Router history={createBrowserHistory()} basename="/">
        <React.Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path="/" element={<InitialRoute isLoggedIn={false} />} />
            {getPageRoute("/login")}
            {routeCollection &&
              routeCollection.map((item, index) => {
                return createPageRoute(item, index);
              })}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </React.Suspense>
      </Router>
    </section>
  );
}

function LoadingPage() {
  return (
    <div className="loader-text">
      <div>Loading...</div>
    </div>
  );
}
const InitialRoute = ({ isLoggedIn }) => {
  return <Navigate to={isLoggedIn ? "/profile" : "/login"} />;
};
