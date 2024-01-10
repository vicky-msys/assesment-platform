import React from "react";
import "./AdminHeader.scss";

function AdminHeader({ displayName = "" }) {
  const welcome = "Welcome";
  return (
    <div className="admin-header-container">
      <p className="admin-header-name">
        {welcome}, {displayName}!
      </p>
      <p className="admin-header-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing
      </p>
    </div>
  );
}

export default AdminHeader;
