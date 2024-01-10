import React from "react";
import { candidateMockData } from "../../../assets/mockdata/AssessmentMockData";
import Tab from "@app/components/Tab/Tab";
import "./Candidate.scss";
import AdminCardProfile from "../../../components/AdminCardProfile/AdminCardProfile";
import ThreeDot from "@app/assets/icons/threedot.svg";
import { Dropdown, Menu } from "antd";
import IconButton from "../../../components/IconButton/IconButton";
import { useNavigate } from "react-router-dom";

function Candidates() {
  const navigateTo = useNavigate();
  const menuItems = (data) => (
    <div className="ass-dropdown">
      <Menu>
        <Menu.Item key="1" onClick={() => console.log(data, "View Details")}>
          View Details
        </Menu.Item>
        <Menu.Item key="2" onClick={() => console.log(data, "Archive")}>
          Archieve
        </Menu.Item>
        <Menu.Item key="3" onClick={() => console.log(data, "Report")}>
          Report
        </Menu.Item>
      </Menu>
    </div>
  );
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (username, array) => {
        return (
          <div className="Table-Header-Name">
            <AdminCardProfile
              profileImage={array.profile}
              username={username}
              className={"list-avatar"}
            />
            <p style={{ textTransform: "capitalize" }}>{username}</p>
          </div>
        );
      },
    },
    {
      title: "Contact No",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Job Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "",
      render: (data) => (
        <Dropdown
          overlay={() => menuItems(data)}
          trigger={["click"]}
          placement="bottomRight"
          className="dot"
        >
          <IconButton
            onClick={(event) => event.stopPropagation()}
            icon={<ThreeDot />}
          />
        </Dropdown>
      ),
    },
  ];
  const EmpColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (username, array) => {
        return (
          <div className="Table-Header-Name">
            <AdminCardProfile
              profileImage={array.profile}
              username={username}
              className={"list-avatar"}
            />
            <p style={{ textTransform: "capitalize" }}>{username}</p>
          </div>
        );
      },
    },
    {
      title: "Contact No",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Job Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "",
      render: (data) => (
        <Dropdown
          overlay={() => menuItems(data)}
          trigger={["click"]}
          placement="bottomRight"
          className="dot"
        >
          <IconButton icon={<ThreeDot />} />
        </Dropdown>
      ),
    },
  ];
  const tabData = [
    {
      title: "Candidate",
      component: "listcontainer",
      props: {
        containerName: "Candidates",
        data: candidateMockData,
        isSearch: true,
        columns,
        layOutType: "table",
        pagination: true,
        pageSize: 10,
        searchField: "name",
        textInputPlaceHolder: "Search Candidates",
        handlers: {
          onClickHandler: (data) =>
            navigateTo(`/candidates/candidateinfo/${data.id}`),
        },
      },
    },
    {
      title: "Employee",
      component: "listcontainer",
      props: {
        containerName: "Employees",
        data: candidateMockData,
        isSearch: true,
        columns: EmpColumns,
        layOutType: "table",
        pagination: true,
        pageSize: 10,
        searchField: "name",
        textInputPlaceHolder: "Search Employees",
      },
    },
  ];

  return (
    <div className="admin-candidate">
      <Tab tabData={tabData} />
    </div>
  );
}

export default Candidates;
