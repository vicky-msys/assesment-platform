import React, { useEffect, useState } from "react";
import { AdminCardData as data, testData } from "@app/assets/mockdata/gridMockData";
// import ModalPopUp from "../../components/ModalPopUp/ModalPopUp";
import "./MyTeam.scss";
import AdminCardProfile from "@app/components/AdminCardProfile/AdminCardProfile";
import { useNavigate } from "react-router-dom";
import Done from "@app/assets/icons/Done.svg";
import Pending from "@app/assets/icons/Pending.svg";
import ListContainer from "@app/components/ListContainer/ListContainer";
import AdminMyteamPopUp from "@app/components/EditPopUp/AdminMyteamPopUp";
import SidePopUp from "@app/components/SidePopUp/SidePopUp";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMyTeamCard,
  getMyTeamCardData,
} from "@app/features/MyTeam/MyteamSlice";

function MyTeam() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [editData, setEditData] = useState([]);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const myteamCardData = useSelector(getMyTeamCardData);

  useEffect(() => {
    dispatch(fetchMyTeamCard(data));
  }, []);

  const legendList = [
    {
      name: "verified",
      className: "verified",
    },
    {
      name: "pending",
      className: "pending",
    },
  ];

  const test = {
    noOfTests: testData.length,
    noOfApprovedTests: testData.filter((item) => item.testStatus === "approved")
      .length,
    noOfPendingTests: testData.filter((item) => item.testStatus === "pending")
      .length,
  };

  const dropDownOptions = [
    {
      label: "username",
      value: "username",
    },
    {
      label: "username (dcnd)",
      value: "username (dcnd)",
    },
    {
      label: "email",
      value: "email",
    },
    {
      label: "email (dcnd)",
      value: "email (dcnd)",
    },
    {
      label: "organisation",
      value: "organisation",
    },
  ];

  const handleBtnClick = () => {
    navigateTo("/myteam/addadmin");
  };

  const handleeditBtnClick = () => {
    navigateTo("/myteam/editadmin", { state: editData });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "username",
      key: "username",
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
      title: "Categories",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <div className={`Status ${status}`}>
          {status === "verified" ? <Done /> : <Pending />}
        </div>
      ),
    },
  ];

  const listContainerProps = {
    containerName: "List Of Members",
    isLegend: true,
    isSelect: true,
    isViewBy: true,
    isSearch: true,
    isButton: true,
    dropDownOptions,
    buttonLabel: "Add Member",
    handleButton: handleBtnClick,
    legendList,
    pageSize: 9,
    columns,
    textInputPlaceHolder: "Search for a admin",
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
    <div className="myteam-page-container">
      <ListContainer {...listContainerProps} data={myteamCardData || []} />
      <SidePopUp
        sidePopUpVisibility={modalVisibility}
        handleClick={handleClick}
      >
        <AdminMyteamPopUp
          onEdit={handleeditBtnClick}
          data={editData}
          testData={test}
        />
      </SidePopUp>
    </div>
  );
}
export default MyTeam;
