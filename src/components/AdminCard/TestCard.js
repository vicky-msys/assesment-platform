import { Col, Row, Card } from "antd";
import React from "react";
import propTypes from "prop-types";
import TimeIcon from "@app/assets/icons/time-icon.svg";
import QuestionIcon from "@app/assets/icons/question-icon.svg";
import ExpireIcon from "@app/assets/icons/expire-icon.svg";
import "./AdminCard.scss";
import { getItemAsComponent } from "@app/service/utils/RouteUtil";
import CustomButton from "../Button/CustomButton";

function TestCard({ cardData, onClick }) {
  return (
    <Card className="test-card-container">
      <Col className="test-card-col">
        <div className="test-card-title">{cardData.title}</div>
        <LabelDisplay
          label="Questions"
          value={cardData.questions?.length || 0}
          icon={QuestionIcon}
        />
        <div className="separator" />
        <Row className="bottom-display">
          <LabelDisplay
            label="Expiry Date"
            value={cardData.expireDate}
            icon={ExpireIcon}
          />
          <LabelDisplay
            label="Time"
            value={(Math.floor(cardData.timeLimit / 60) || 0) +" Mins"}
            icon={TimeIcon}
          />
        </Row>
        <div className="label-btn-container">
          <CustomButton
            className="blueBgBtn btn-border"
            shape="bar"
            label="Go to Test"
            onClick={() => onClick(cardData)}
          />
        </div>
      </Col>
    </Card>
  );
}

TestCard.defaultProps = {
  cardData: {}
};

TestCard.propTypes = {
  cardData: propTypes.Object,
  onClick: propTypes.func.isRequired,
};


export default TestCard;
function LabelDisplay({ label, value, icon }) {
  return (
    <Row className="label-display-container">
      {getItemAsComponent(icon)}
      <Col>
        <div className="label-display-title">{label}</div>
        <label className="label-display-value">{value}</label>
      </Col>
    </Row>
  );
}
