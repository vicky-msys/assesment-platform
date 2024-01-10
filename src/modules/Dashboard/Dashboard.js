import { Col, Row } from "antd";
import React from "react";
import GridView from "@app/components/GridView/GridView";
import ListContainer from "@app/components/ListContainer/ListContainer";
import RecentActivity from "@app/assets/icons/RecentActivity.svg";
import RecentActivityCard from "@app/components/RecentActivityCard/RecentActivityCard";
import ProgressCard from "@app/components/ProgressCard/ProgressCard";
import OrganisationCard from "@app/components/OrganisationCard/OrganisationCard";
import { graphData } from "@app/assets/mockdata/gridMockData";

import "./Dashboard.scss";
import AreaChart from "@app/components/AreaChart/AreaChart";
import NestedProgressBar from "@app/components/NestedProgressBar/NestedProgressBar";
import { useNavigate } from "react-router-dom";
// import NestedProgressBar from "@app/components/NestedProgressBar/NestedProgressBar";

function Dashboard() {
  const navigateTo = useNavigate();
  
  const cardOnclickHandler = () => {
    navigateTo("/organisation");
  };

  const organisationData = [
    {
      name: "Organisation Count",
      count: 100,
      className: "card-bg-1",
      icon: "orgCount",
      cardHandler: cardOnclickHandler,
    },
    {
      name: "Invite Sent",
      count: 200,
      className: "card-bg-2",
      icon: "inviteSent",
    },
    { name: "Team Size", count: 300, className: "card-bg-3", icon: "teamSize" },
  ];

  const recentActivityCard = [
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere pulvinar urna sit",
      time: "Jun 4, 12:21 p.m",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere pulvinar urna sit",
      time: "Jun 4, 12:20 p.m",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere pulvinar urna sit",
      time: "Jun 4, 12:20 p.m",
    },
  ];

  const progressData = [
    {
      name: "Courses",
      percentage: 70,
      className: "card-bg-1",
    },
    {
      name: "Assesments",
      percentage: 100,
      className: "card-bg-2",
    },
    {
      name: "Predefined Assesments",
      percentage: 10,
      className: "card-bg-3",
    },
  ];

  return (
    <Row className="dashboard">
      <Col className="dashboard-card dashboard-card-1">
        <GridView
          gridRenderer={OrganisationCard}
          data={organisationData}
          className="vertical-align"
        />
      </Col>
      <Col className="dashboard-card dashboard-card-3">
        <GridView
          gridRenderer={ProgressCard}
          data={progressData}
          className="center-align"
        />
      </Col>
      <Col className="dashboard-card dashboard-card-2">
        <ListContainer
          containerName="Recent Activity"
          data={recentActivityCard.slice(0, 2)}
          gridRenderer={RecentActivityCard}
          gridClass="vertical-align"
          headerClassName="default-list-header"
          isButton={true}
          buttonLabel="view all"
          handleButton={() => console.log("view all btn clicked")}
        >
          <div className="recent-activity">
            <RecentActivity />
          </div>
        </ListContainer>
      </Col>
      <Col className="dashboard-card dashboard-card-4">
        <AreaChart xField="month" yField="salary" data={graphData} />
      </Col>
      <Col className="dashboard-card dashboard-card-5">
        <NestedProgressBar />
      </Col>
    </Row>
  );
}
export default Dashboard;
