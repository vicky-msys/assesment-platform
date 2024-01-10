import React, { useState } from "react";
import { Upload, message } from "antd";
import ImgCrop from "antd-img-crop";
import CustomButton from "../Button/CustomButton";
import "./ProfileUpdate.scss";

function ProfileUpdate({ handleCancel }) {
  const [fileList, setFileList] = useState([]);

  const onChange = async ({ fileList: newFileList }) => {
    setFileList(newFileList);
    const src = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(newFileList[0].originFileObj);
      reader.onload = () => resolve(reader.result);
    });
    console.log(src);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  return (
    <div className="main-container">
      <div className="crop-container">
        <img
          src="https://global-s3.s3.us-west-2.amazonaws.com/istockphoto_1059661424_612x612_1_18c2ab7d87.png"
          width={100}
          alt=""
        />
        <ImgCrop rotate className="upload">
          <Upload
            action="http://localhost:1337/upload"
            beforeUpload={beforeUpload}
            fileList={fileList}
            onChange={onChange}
          >
            {fileList.length < 5 && "Upload From Computer"}
          </Upload>
        </ImgCrop>
        <p>(Maximum image size - 2MB)</p>
      </div>
      <div className="content">
        <p>
          Select the visible area of your picture using the selector tool. When
          finished selecting the area, click the save button.
        </p>
        <div className="btn-container">
          <CustomButton
            label="Cancel"
            className="whiteBgBtn"
            onClick={() => handleCancel()}
          />
          <CustomButton label="Save" className="blueBgBtn" />
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdate;
