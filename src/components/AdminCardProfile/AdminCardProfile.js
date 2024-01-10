import { Avatar, Image } from "antd";
import React from "react";
import "./AdminCardProfile.scss";

function AdminCardProfile({ profileImage = null, username, className="profile-picture" }) {
  const getName = (displayName) => {
    if (!displayName) return "!";
    const nameArray = displayName.split(" ");
    const firstName = nameArray[0][0];
    const lastName =
      nameArray.length > 1 ? nameArray[nameArray.length - 1][0] : "";
    return firstName.toUpperCase() + lastName.toUpperCase();
  };
  return profileImage === "" || !profileImage ? (
    <Avatar
      className={`admin-card-avatar-container ${className}`}
      style={{ verticalAlign: "middle", background: "skyblue" }}
      size="large"
    >
      {getName(username)}
    </Avatar>
  ) : (
    <Image
      src={profileImage}
      alt="profilePic"
      preview={false}
      className={className}
    />
  );
}

export default AdminCardProfile;
