import { Card, Col, Row } from "antd";
import React from "react";
import "./ProgressCard.scss";

function ProgressCard({ cardData = {} }) {
  return (
    <Card className="progress-card-container">
      <Row className="progress-card-col-container">
        <Col className="progress-card-name">{cardData.name}</Col>
        <Col className="progress-card-status-bar">
          <div className="progress-count-container">
            <div className={`progress-count ${cardData.className}`}>
              {cardData.percentage}
            </div>
          </div>
          <div className="progress-bar-container">
            <div
              style={{
                width: `${
                  cardData.percentage
                    ? cardData.percentage >= 30
                      ? cardData.percentage
                      : 30
                    : 0
                }%`,
              }}
              className={`progress-bar-thumb ${cardData.className}`}
            ></div>
          </div>
        </Col>
      </Row>
    </Card>
  );
}

export default ProgressCard;
