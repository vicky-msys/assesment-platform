import React from "react";
import propTypes from "prop-types";
import { Button } from "antd";
import "./CustomButton.scss";

function CustomButton(props) {
  const { isDisabled, label, onClick, shape, htmlType, className, parentClass } = props;
  return (
    <div className={parentClass +" btn-container"}>
      <Button
        shape={shape}
        onClick={onClick && onClick}
        disabled={isDisabled}
        htmlType={htmlType}
        className={className}
      >
        {label}
      </Button>
    </div>
  );
}

// shape : border-radius for buttons --> default:box, round:32px, circular:50%
// htmlType : Type of buttons (i.e button,submit)

CustomButton.defaultProps = {
  isDisabled: false,
  label: "button",
  onClick: null,
  shape: "default",
  htmlType: "button",
  className: "default-btn-cls",
  parentClass:""
};

CustomButton.propTypes = {
  isDisabled: propTypes.bool,
  label: propTypes.string,
  onClick: propTypes.func,
  shape: propTypes.string,
  className: propTypes.string,
  htmlType: propTypes.string,
};

export default CustomButton;
