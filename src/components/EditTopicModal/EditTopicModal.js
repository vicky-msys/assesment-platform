import React from "react";
import "./EditTopicModal.scss";
import TextInput from "../TextInput/TextInput";
import { Form } from "antd";
import CustomButton from "../Button/CustomButton";

function EditTopicModal({ handleModalCancel, handleModalEdit }) {
  return (
    <div className="Edit-modal-container">
      <div className="Edit-title">
        <p className="title">Edit Topic</p>
      </div>
      <div className="edit-input-container">
        <Form.Item
          name="last"
          label="Topic"
          rules={[{ required: true, message: "Last name required!" }]}
        >
          <TextInput type="text" placeholder="" allowClear={true} />
        </Form.Item>
        <Form.Item
          name="last"
          label="Sub Topic"
          rules={[{ required: true, message: "Last name required!" }]}
        >
          <TextInput type="text" placeholder="" allowClear={true} />
        </Form.Item>
      </div>

      <div className="edit-btn-container">
        <CustomButton
          label="Discard"
          className="edit-cancel btn"
          onClick={handleModalCancel}
        />
        <CustomButton
          label="Save"
          className="edit-save btn"
          onClick={handleModalEdit}
        />
      </div>
    </div>
  );
}

export default EditTopicModal;
