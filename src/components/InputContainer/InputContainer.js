import React from "react";
import "./InputContainer.scss";
import propTypes from "prop-types";
import { Divider, Form } from "antd";
import { FORM_ITEM_MODE } from "../../service/constants/Constants";
export default function InputContainer(props) {
  const {
    label,
    isRequired,
    noteEnable,
    noteMessage,
    children,
    message ,
    className,
    mode
  } = props;

  return (
    <>
        <Form.Item
          name={label}
          label={label}
          className={(mode === FORM_ITEM_MODE.TOP?"top-label ":"side-label ")+className}
          rules={[{ required: isRequired, message: message }]}
        >
          {children}
          {mode === FORM_ITEM_MODE.SIDE && noteEnable && (
            <p className="note">{noteMessage}</p>
          )}
        </Form.Item>
      {mode === FORM_ITEM_MODE.SIDE && <Divider />}
    </>
  );
}
InputContainer.defaultProps = {
  label:"",
  isRequired : false,
  noteEnable : false,
  noteMessage: "",
  message : "",
  mode : FORM_ITEM_MODE.TOP
};

InputContainer.propTypes = {
  label: propTypes.string,
  isRequired: propTypes.bool,
  noteEnable: propTypes.bool,
  noteMessage: propTypes.string,
  message: propTypes.string,
  className: propTypes.string
};
