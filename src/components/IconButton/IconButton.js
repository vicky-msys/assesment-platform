import React from "react";
import propTypes from "prop-types";
import { Button } from "antd";
import { MailOutlined } from "@ant-design/icons";
import "./IconButton.scss";

function IconButton(props) {
  const { isDisabled, onClick, htmlType, icon, className, shape, label } =
    props;
  return (
    <div className="icon-btn-container">
      <Button
        shape={shape}
        onClick={onClick && onClick}
        disabled={isDisabled}
        htmlType={htmlType}
        className={className}
        icon={icon && icon}
      >
        <span>{label}</span>
      </Button>
    </div>
  );
}

// shape : border-radius for buttons --> default:box, round:32px, circular:50%
// htmlType : Type of buttons (i.e button,submit)

IconButton.defaultProps = {
  isDisabled: false,
  onClick: null,
  htmlType: "button",
  icon: <MailOutlined />,
  className: "default-icon-btn",
  shape: "round",
  label: null,
};

IconButton.propTypes = {
  isDisabled: propTypes.bool,
  onClick: propTypes.func,
  htmlType: propTypes.string,
  className: propTypes.string,
  shape: propTypes.string,
  label: propTypes.string,
  icon: propTypes.object.isRequired,
};

export default IconButton;
