import React, { useState } from "react";
import { SettingOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import ModalPopUp from "../ModalPopUp/ModalPopUp";
import { useNavigate } from "react-router-dom";
import { Avatar } from "antd";
import { useAuthContext } from "@app/service/context/AuthContext";
import DropDownArrow from "@app/assets/icons/DropDownArrow.svg";
import "./Profile.scss";

function Profile({ displayName, profileImage = "" }) {
  const { setAuthData } = useAuthContext();
  const [viewPopUp, setviewPopUp] = useState(false);
  const Navigate = useNavigate();

  const handleOk = () => {
    setviewPopUp(false);
    setAuthData(null);
    Navigate("/login");
  };

  const getName = () => {
    const nameArray = displayName.split(" ");
    const firstName = nameArray[0][0];
    const lastName =
      nameArray.length > 1 ? nameArray[nameArray.length - 1][0] : "";
    return firstName.toUpperCase() + lastName.toUpperCase();
  };

  const handleCancel = () => {
    setviewPopUp(false);
  };

  const menuItems = (
    <Menu>
      <Menu.Item
        key="logout"
        icon={<SettingOutlined />}
        onClick={() => setviewPopUp(true)}
      >
        Log Out
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="profile-wrapper">
      <Dropdown overlay={menuItems} trigger={["click"]} placement="bottom">
        <div className="profile">
          {profileImage !== "" ? (
            <img
              className="profile-container"
              src="https://global-s3.s3.us-west-2.amazonaws.com/panlearn_logo_943b669195.png"
              alt="profilePic"
            />
          ) : (
            <Avatar
              className="profile-container"
              style={{ verticalAlign: "middle", background: "skyblue" }}
              size="large"
            >
              {getName()}
            </Avatar>
          )}
          <DropDownArrow />
        </div>
      </Dropdown>
      <ModalPopUp
        okText={"Ok"}
        cancelText={"Cancel"}
        visiblity={viewPopUp}
        handleOk={handleOk}
        handleCancel={handleCancel}
        title={"Logout"}
        closable={false}
        isCancel={true}
        className={"default-modal"}
      >
        <span>Are You sure, Do You Want to Log out</span>
      </ModalPopUp>
    </div>
  );
}

export default Profile;
