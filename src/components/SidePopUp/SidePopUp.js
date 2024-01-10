import React, { useEffect, useState } from "react";
import "./SidePopUp.scss";
import SidePopUpCloseIcon from "@app/assets/icons/SidePopUpCloseIcon.svg";

function SidePopUp({ children, sidePopUpVisibility, handleClick }) {
  const [popupVisibility, setPopupVisibility] = useState(sidePopUpVisibility);
  useEffect(
    () => setPopupVisibility(sidePopUpVisibility),
    [sidePopUpVisibility]
  );
  const handlePopUpClick = (e) => {
    if (e.target.id === "outerDiv") {
      setPopupVisibility(false);
      handleClick(false);
    }
  };
  const handleCloseClick = () => {
      setPopupVisibility(false);
      handleClick(false);
  };
  return (
    popupVisibility && (
      <div
        role="presentation"
        onClick={handlePopUpClick}
        className="side-popup-container"
        id="outerDiv"
      >
        <div className={`${popupVisibility ? "fullwidth" : ""} popup-content`}>
          <span
            role="presentation"
            onClick={handleCloseClick}
            className="close"
            id="close"
          >
            <SidePopUpCloseIcon id="axclj"/>
          </span>
          {children}
        </div>
      </div>
    )
  );
}

SidePopUp.defaultProps = {
  sidePopUpVisibility: false,
};

export default SidePopUp;
