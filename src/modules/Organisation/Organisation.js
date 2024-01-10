import React, { useState } from "react";
import { sampleOrganisationData as orgData } from "@app/assets/mockdata/gridMockData";
import AdminCardProfile from "@app/components/AdminCardProfile/AdminCardProfile";
import OrganisationCard from "@app/components/AdminCard/OrganisationCard";
import { useNavigate } from "react-router-dom";
import "./Organisation.scss";
import Done from "@app/assets/icons/Done.svg";
import Pending from "@app/assets/icons/Pending.svg";
import ListContainer from "@app/components/ListContainer/ListContainer";
import SidePopUp from "@app/components/SidePopUp/SidePopUp";
import OrganisationSidePopUp from "@app/components/EditPopUp/OrganisationSidePopUp";

function Organisation() {
  const history = useNavigate();
  const [modalVisibility, setModalVisibility] = useState(false);
  const [editData, setEditData] = useState([]);

  const handleBtnClick = () => {
    history("/organisation/addorganisation");
  };
  
  const handleeditBtnClick = () => {
    history("/organisation/editorganisation");
  };


  const dropDownOptions = [
    {
      label: "organisation",
      value: "orgName",
    },
    {
      label: "organisation (dcnd)",
      value: "orgName (dcnd)",
    },
    {
      label: "email",
      value: "email",
    },
    {
      label: "email (dcnd)",
      value: "email (dcnd)",
    },
  ];


  const columns = [
    {
      title: "Name",
      dataIndex: "orgName",
      key: "orgName",
      render: (username, array) => {
        return (
          <div className="Table-Header-Name">
            <AdminCardProfile
              profileImage={array.profileImage}
              username={username}
              className={"list-avatar"}
            />
            <p style={{ textTransform: "capitalize" }}>{username}</p>
          </div>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Domain",
      dataIndex: "serviceType",
      key: "serviceType",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <div className={`Status ${status || "pending"}`}>
          {status === "verified" ? <Done /> : <Pending />}
        </div>
      ),
    },
  ];


  const listContainerProps = {
    containerName: "List Of Organisations",
    isLegend: true,
    isSelect: true,
    isViewBy: true,
    searchField: "orgName",
    isSearch: true,
    isButton: true,
    dropDownOptions,
    buttonLabel: "Add Organization",
    handleButton: handleBtnClick,
    gridRenderer: OrganisationCard,
    textInputPlaceHolder: "Search for a organisation",
    pageSize: 9,
    columns,
    pagination: true,
    handlers: {
      onClickHandler: (data) => {
        setEditData(data);
        setModalVisibility(true);
      },
    },
  };

  const handleClick = (data) => {
    setModalVisibility(data);
  };

  return (
    <div className="organisation-page-container">
      <ListContainer {...listContainerProps} data={orgData} />
      <SidePopUp
        sidePopUpVisibility={modalVisibility}
        handleClick={handleClick}
      >
        <OrganisationSidePopUp onEdit={handleeditBtnClick} data={editData} />
      </SidePopUp>
    </div>
  );
}

export default Organisation;
