import React from "react";
import "./Header.scss";
import Profile from "@app/components/Profile/Profile";
import PANLEARNLOGO from "@app/assets/icons/panlearn_logo.png";
import Notification from "@app/assets/icons/Notification.svg";
import Settings from "@app/assets/icons/settings-icon.svg";
import { useNavigate } from "react-router-dom";

function Header({
  showIcon = true,
  displayName,
  showDisplay = true,
  children,
}) {
  const navigateTo = useNavigate();
  const handleSettings = () => {
    navigateTo("/dashboard/settings");
  };
  return (
    <div className="global-header-container">
      {showIcon && (
        <div id="logo" className="header-logo-container">
          <img alt="Logo" src={PANLEARNLOGO} />
        </div>
      )}
      {children && children}
      {showDisplay && (
        <div className="header-icon-container">
          <Settings onClick={handleSettings} />
          <Notification />
          <Profile displayName={displayName} />
        </div>
      )}
    </div>
  );
}

export default Header;
