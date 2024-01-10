import React from "react";
import propTypes from "prop-types";
import "antd/dist/antd.css";
import { Radio, Space } from "antd";
import "./RadioButtonGroup.scss";

export default function RadioButtonGroup(props) {
  const {
    collections,
    direction,
    selectedValue,
    onChange,
    containerClass,
    labelField,
    valueField,
    wrap,
  } = props;
  return (
    <div className={containerClass}>
      <Radio.Group onChange={onChange} value={selectedValue}>
        <Space direction={direction} wrap={wrap}>
          {collections.map((item, index) => {
            return (
              <Radio key={index} value={item[valueField]}>
                {item[labelField]}
              </Radio>
            );
          })}
        </Space>
      </Radio.Group>
    </div>
  );
}

RadioButtonGroup.defaultProps = {
  direction: "horizontal", // horizontal/vertical
  containerClass: "radio-button-group-container",
  labelField: "label",
  valueField: "label",
  wrap: true,
};
RadioButtonGroup.propTypes = {
  collections: propTypes.array.isRequired,
  direction: propTypes.string,
  onChange: propTypes.func.isRequired,
  containerClass: propTypes.string,
  labelField: propTypes.string,
  valueField: propTypes.string,
  wrap: propTypes.bool,
};
