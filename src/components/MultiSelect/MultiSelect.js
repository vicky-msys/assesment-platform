import React from "react";
import { TreeSelect } from "antd";
import propTypes from "prop-types";
import "./MultiSelect.scss";

function MultiSelect(props) {
  const {
    treeData,
    onChange,
    placeholder,
    treeCheckable,
    value,
    containerClass,
    size,
    showSearch,
    placement,
    allowClear,
    onSearch,
    defaultValue,
  } = props;

  const tProps = {
    treeData,
    treeCheckable,
    value,
    placeholder,
    onChange: onChange && onChange,
    size,
    showSearch,
    placement,
    allowClear,
    onSearch,
    defaultValue,
    showArrow: true,
  };

  return (
    <div className={containerClass}>
      <TreeSelect {...tProps} />
    </div>
  );
}

// placement: position on treeData, possible values for this prop is (bottomLeft, bottomRight, topLeft, topRight)

MultiSelect.defaultProps = {
  value: [],
  onchange: null,
  placeholder: "",
  treeCheckable: true,
  treeData: [],
  containerClass: "default-multi-select",
  size: "large",
  showSearch: true,
  placement: "bottomLeft",
  allowClear: true,
  onSearch: null,
  defaultValue: null,
};

MultiSelect.propTypes = {
  value: propTypes.array,
  onchange: propTypes.func,
  placeholder: propTypes.string,
  treeCheckable: propTypes.bool,
  showSearch: propTypes.bool,
  treeData: propTypes.array,
  containerClass: propTypes.string,
  size: propTypes.string,
  placement: propTypes.string,
  defaultValue: propTypes.string,
  allowClear: propTypes.bool,
  onSearch: propTypes.func,
};

export default MultiSelect;
