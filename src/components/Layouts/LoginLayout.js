import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "@app/assets/icons/panlearn_logo.png";
import LoginPageImage from "@app/assets/images/LoginPageImage.png";

const LoginLayout = () => {
  return (
    // <div className="logout-layout">
    //   <div className="LoginInnerContainer">
    //     <div className="LogonLogo">
    //       <img className="logo-image" src={Logo} alt="logo" />
    //     </div>
    //     <Outlet />
    //   </div>
    // </div>

    <div className="Login-Layout">
      <img className="Login-Page-Logo" src={Logo} alt="logo" />
      <div className="Login-Page-Image-container">
        <img className="Login-Page-Back-Logo" src={LoginPageImage} alt="logo" />
      </div>
      <Outlet />
    </div>
  );
};

export default LoginLayout;

