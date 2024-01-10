/* eslint-disable linebreak-style */
import { Checkbox } from "antd";
import propTypes from "prop-types";
import React from "react";

export default function CheckBox(props) {
  const { isDisabled, isdefaultChecked, onChange, label } = props;

  return (
    <>
      <Checkbox
        disabled={isDisabled}
        defaultChecked={isdefaultChecked}
        onChange={onChange}
      >
        {label}
      </Checkbox>
    </>
  );
}

CheckBox.defaultProps = {
  isDisabled: false,
  defaultChecked: true,
  onChange: null,
  label: CheckBox,
};

CheckBox.propTypes = {
  isDisabled: propTypes.bool,
  defaultChecked: propTypes.string,
  onChange: propTypes.func,
  label: propTypes.string,
};
