import { Col, Row } from "antd";
import React from "react";
import GridView from "@app/components/GridView/GridView";
import "./Dashboard.scss";
import OrganisationCard from "@app/components/OrganisationCard/OrganisationCard";

function Dashboard() {
  const organisationData = [
    {
      name: "Organisation Count",
      count: 100,
      icon: "orgCount",
    },
    {
      name: "Invite Sent",
      count: 200,
      icon: "inviteSent",
      svgClass: "blueBg",
    },
    { name: "Team Size", count: 300, icon: "teamSize" },
  ];
  return (
    <div className="dashboard-container">
      <Row className="row-1">
        <Col className="col-1">
          <Row className="count-container">
            <GridView gridRenderer={OrganisationCard} data={organisationData} />
          </Row>
          <Row className="graph-container"></Row>
        </Col>
        <Col className="col-2"></Col>
      </Row>
      <Row className="row-2"> row 2 </Row>
    </div>
  );
}

export default Dashboard;
