import { Col, Row } from "antd";
import React from "react";
import IconButton from "../IconButton/IconButton";
import ThreeDot from "@app/assets/icons/threedot.svg";
import "./TopicsCard.scss";

function JobRoleCard({ cardData }) {
  return (
    <div className="topics-list-container">
      <IconButton
        icon={<ThreeDot />}
        className="admin-card-edit-btn dot"
        onClick={() => console.log("working")}
      />
      <Col className="topic-item">
        <Row className="topic">{cardData.title}</Row>
        <Row className="sub-topic">
          <Col>
            Creator : <span>{cardData.creator}</span>
          </Col>
          <Col span={1} />
          <Col>
            Date : <span>{cardData.date}</span>
          </Col>
        </Row>
        <Row className="sub-topic">
          <Col>
            Skills : <span>{cardData.skills}</span>
          </Col>
        </Row>
      </Col>
    </div>
  );
}

export default JobRoleCard;
