import React from "react";
import "./DeleteTopicModal.scss";
import CustomButton from "../Button/CustomButton";

function DeleteTopicModal({ handleModalCancel,handleModalDelete }) {
  return (
    <div className="del-topic-modal">
      <div className="del-title">
        <p className="title">Are you sure?</p>
      </div>

      <div className="sub-title">
        <p>You want to delete the topic</p>
      </div>

      <div className="del-btn-container">
        <CustomButton
          label="Cancel"
          className="del-cancel btn"
          onClick={handleModalCancel}
        />
        <CustomButton label="Delete" className="del-save btn" onClick={handleModalDelete} />
      </div>
    </div>
  );
}

export default DeleteTopicModal;
