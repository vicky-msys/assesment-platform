import { Input, Space } from "antd";
import propTypes from "prop-types";
import React from "react";
import "./TextInput.scss";

function TextInput({
  labelText,
  onChange,
  type,
  disabled,
  defaultValue,
  prefix,
  allowClear,
  placeholder,
  size,
  labelVisiblity,
  className,
  addonbefore,
  labelClassName,
}) {
  const inputProps = {
    onChange,
    disabled,
    defaultValue,
    prefix,
    allowClear,
    placeholder,
    size,
    addonbefore,
    className,
  };

  const inputs = (type, labelText) => {
    switch (type) {
      case "text":
        return <Input {...inputProps} id={labelText} />;
      case "password":
        return <Input.Password {...inputProps} id={labelText} />;
      case "textarea":
        return <Input.TextArea {...inputProps} id={labelText} />;
      default:
        return <Input {...inputProps} id={labelText} />;
    }
  };

  return (
    <Space direction="vertical" className="text-input-container">
      {labelVisiblity ? (
        <label className={labelClassName} htmlFor={labelText}>
          {labelText}
        </label>
      ) : (
        ""
      )}
      {inputs(type, labelText)}
    </Space>
  );
}

TextInput.defaultProps = {
  labelText: "Name",
  onChange: null,
  type: "text",
  disabled: false,
  defaultValue: "",
  prefix: null,
  allowClear: false,
  placeholder: "",
  size: "large",
  labelVisiblity: false,
  className: "",
  addonbefore: null,
  labelClassName: "",
};

TextInput.propTypes = {
  labelText: propTypes.string,
  onChange: propTypes.func,
  type: propTypes.string,
  disabled: propTypes.bool,
  defaultValue: propTypes.string,
  prefix: propTypes.object,
  allowClear: propTypes.bool,
  labelVisiblity: propTypes.bool,
  placeholder: propTypes.string,
  size: propTypes.string,
  className: propTypes.string,
  addonbefore: propTypes.object,
  labelClassName: propTypes.string,
};

export default TextInput;
