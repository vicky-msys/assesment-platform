import React from "react";
import { Select } from "antd";
import propTypes from "prop-types";
import "./DropDown.scss";

const { Option } = Select;

function DropDown(props) {
  const {
    showSearch,
    allowClear,
    className,
    placeholder,
    Options,
    onChange,
    onClear,
    mode,
    defaultValue,
    disabled,
    loading,
    showArrow,
    size,
    labelFeild,
    onSearch,
    valueFeild,
  } = props;

  return (
    <Select
      showSearch={showSearch}
      placeholder={placeholder}
      className={className}
      allowClear={allowClear}
      onChange={onChange}
      onClear={onClear}
      mode={mode}
      defaultValue={defaultValue}
      disabled={disabled}
      loading={loading}
      showArrow={showArrow}
      size={size}
      onSearch={onSearch}
    >
      {Options.map((option, index) => (
        <Option key={index} value={option[valueFeild]}>
          {option[labelFeild]}
        </Option>
      ))}
    </Select>
  );
}

DropDown.defaultProps = {
  showSearch: false,
  placeholder: "",
  className: "default-dropdown",
  allowClear: true,
  Options: [],
  onChange: null,
  onSearch: null,
  onClear: null,
  mode: "",
  defaultValue: null,
  disabled: false,
  loading: false,
  showArrow: true,
  size: "large", // small,large,middle
  labelFeild: "label",
  valueFeild: "value",
};

DropDown.propTypes = {
  showSearch: propTypes.bool,
  placeholder: propTypes.string,
  className: propTypes.string,
  mode: propTypes.string,
  allowClear: propTypes.bool,
  Options: propTypes.array.isRequired,
  onChange: propTypes.func.isRequired,
  onSearch: propTypes.func,
  onClear: propTypes.func,
  defaultValue: propTypes.string,
  size: propTypes.string,
  disabled: propTypes.bool,
  loading: propTypes.bool,
  showArrow: propTypes.bool,
  valueFeild: propTypes.string,
};

export default DropDown;
