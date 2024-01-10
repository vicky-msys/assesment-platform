import axios from "axios";
import { useEffect } from "react";
//import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

//console.log("base url    ",process);
//if (process.env.REACT_APP_BASEURL) {
//baseURL = `${process.env.REACT_APP_BASEURL}`;
//} else {
//baseURL = `${window.location.protocol}//${window.location.host}/${process.env.REACT_APP_BASEURL_API_PATH}`;
//}

const getApiCall = (url, paramData = "", token) => {
  const queryparams = {
    ...(paramData !== "" && { params: paramData }),
    ...(token !== undefined && { cancelToken: token }),
  };

  return axiosconfig
    .get(url, {
      ...queryparams,
    })
    .then((res) => res)
    .catch((error) => error);
};

function getCookie(cname) {
  // const name = `${cname}=`;
  // const decodedCookie = decodeURIComponent(document.cookie);
  // const ca = decodedCookie.split(';');
  // for (let i = 0; i < ca.length; i++) {
  //   let c = ca[i];
  //   while (c.charAt(0) === ' ') {
  //     c = c.substring(1);
  //   }
  //   if (c.indexOf(name) === 0) {
  //     return c.substring(name.length, c.length);
  //   }
  // }
  // return '';
  return cname;
}

const axiosconfig = axios.create({
  // baseURL,
  // headers: {
  //   token: getCookie('token'),
  // },
});

const postApiCall = (url, params = {}, token) =>
  axiosconfig
    .post(url, {
      ...params,
      ...(token !== undefined && { cancelToken: token }),
    })
    .then((res) => res)
    .catch((error) => error);

const putApiCall = (url, params = {}, token) =>
  axiosconfig
    .put(url, {
      ...params,
      ...(token !== undefined && { cancelToken: token }),
    })
    .then((res) => res)
    .catch((error) => error);

const deleteApiCall = (url, paramData = "", token) => {
  const queryparams = {
    ...(paramData !== "" && { params: paramData }),
    ...(token !== undefined && { cancelToken: token }),
  };
  return axiosconfig
    .delete(url, {
      ...queryparams,
    })
    .then((res) => res)
    .catch((error) => error);
};
function AxiosInterceptor({ isLoggedIn }) {
  
  useEffect(() => {
    axiosconfig.interceptors.request.use((config) => {
      const configs = config;
      configs.headers.token = getCookie("token");
      return configs;
    });
    axiosconfig.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error?.response?.status === 403) {
          //history.push('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [isLoggedIn]);

  return null;
}

AxiosInterceptor.defaultProps = {
  isLoggedIn: false,
};

AxiosInterceptor.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export { AxiosInterceptor };
export { getApiCall, postApiCall, putApiCall, deleteApiCall, axiosconfig };
