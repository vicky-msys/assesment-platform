import React from "react";
import AdminHeader from "@app/components/AdminHeader/AdminHeader";
import "./MyTeam.scss";

function SubAdminForm() {
  return (
    <div className="myteam-page-container">
      <AdminHeader displayName={"vignesh"} />
      <div>Sub Admin Page</div>
    </div>
  );
}
export default SubAdminForm;
