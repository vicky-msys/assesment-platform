import { Modal } from "antd";
import React from "react";
import propTypes from "prop-types";
import CustomButton from "../Button/CustomButton";
import "./ModalPopup.scss";

function ModalPopUp({
  visiblity,
  handleOk,
  okText,
  cancelText,
  closeOutside,
  handleCancel,
  title,
  width,
  closable,
  isCancel,
  className,
  children,
  isFooter,
}) {
  const footer = [
    isCancel && (
      <CustomButton
        key="cancel"
        label={cancelText}
        onClick={handleCancel}
        className={"whiteBgBtn"}
      />
    ),
    <CustomButton
      key="ok"
      label={okText}
      onClick={handleOk}
      className={"blueBgBtn"}
    />,
  ];

  return (
    <Modal
      wrapClassName={"default-modal "+ className}
      visible={visiblity}
      maskClosable={closeOutside}
      onCancel={handleCancel}
      width={width}
      title={!!title && title}
      destroyOnClose={true}
      closable={closable}
      centered={true}
      footer={isFooter && footer}
    >
      {children}
    </Modal>
  );
}

ModalPopUp.defaultProps = {
  className: "",
  visible: false,
  onCancel: null,
  closable: false,
  closeOutside: false,
  centered: true,
  title: "",
  width: 520,
  okText: "Ok",
  cancelText: "Cancel",
  isCancel: true,
  isFooter: true,
  children: null,
};

ModalPopUp.propTypes = {
  className: propTypes.string,
  okText: propTypes.string,
  cancelText: propTypes.string,
  modalDescription: propTypes.string,
  visible: propTypes.bool,
  onCancel: propTypes.func,
  closable: propTypes.bool,
  closeOutside: propTypes.bool,
  centered: propTypes.bool,
  title: propTypes.string,
  width: propTypes.number,
  isCancel: propTypes.bool,
  isFooter: propTypes.bool,
  children: propTypes.object,
};

export default ModalPopUp;
