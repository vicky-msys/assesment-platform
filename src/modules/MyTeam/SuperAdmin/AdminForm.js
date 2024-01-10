import React from "react";
import AdminHeader from "@app/components/AdminHeader/AdminHeader";
import "./MyTeam.scss";

function AdminForm() {
  return (
    <div className="myteam-page-container">
      <AdminHeader displayName={"vignesh"} />
      <div>Admin Page</div>
    </div>
  );
}
export default AdminForm;
