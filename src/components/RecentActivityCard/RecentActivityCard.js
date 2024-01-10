import { Card, Col, Row } from "antd";
import React from "react";
import "./RecentActivityCard.scss";
import Avatar from "@app/assets/icons/avatar.svg";
import Date from "@app/assets/icons/date.svg";

function RecentActivityCard({ cardData = {} }) {
  return (
    <Card className="recent-activity-card-container">
      <Row>
        <Col span={3}>
          <Avatar />
        </Col>
        <Col span={21}>
          <Row className="card-description">{cardData.description}</Row>
          <Row className="date-container">
            <Col span={2}>
              <Date />
            </Col>
            <Col className="card-date" span={22}>
              {cardData.time}
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}

export default RecentActivityCard;
