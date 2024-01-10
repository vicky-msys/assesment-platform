import { Col, Row, Card as CustomCard } from "antd";
import React from "react";
import propTypes from "prop-types";
import ThreeDot from "@app/assets/icons/threedot.svg";
import IconButton from "../IconButton/IconButton";
import "./AssessmentCard.scss";
import CustomButton from "../Button/CustomButton";

function AssessmentCard({ cardData, label, handlers }) {
  const domain = "Domain";
  const title = "Title";
  const question = "Question";
  const type = "Type";

  return (
    <CustomCard className="ass-card-container">
      <Col className="cardContainer" span={8}>
        <IconButton
          icon={<ThreeDot />}
          className="admin-card-edit-btn dot"
          onClick={() => console.log("working")}
        />
        <Row>
          <Col span={4} className="ass-card-profile-container">
            <p className="domain common-left-style">{domain}:</p>
            <p className="title common-left-style">{title}:</p>
            <p className="question common-left-style">{question}:</p>
            <p className="type common-left-style">{type}:</p>
          </Col>
          <Col span={15} className="ass-card-profile-container">
            <p className="card-domain common-value">{cardData.domain || ""}</p>
            <p className="card-title common-value">{cardData.title || ""}</p>
            <p className="card-question common-value">
              {cardData.questions || ""}
            </p>
            <p className="card-type common-value">{cardData.type || ""}</p>
          </Col>
        </Row>
        <Row className="avatar">
          <Col>
            <CustomButton
              label={label}
              className="sharebtn"
              onClick={() => handlers.onClickHandler(cardData)}
            />
          </Col>
        </Row>
      </Col>
    </CustomCard>
  );
}

AssessmentCard.defaultProps = {
  cardData: {},
  label: "Open",
  handlers: {},
};

AssessmentCard.propTypes = {
  cardData: propTypes.object.isRequired,
  label: propTypes.string,
  handlers: propTypes.object,
};
export default AssessmentCard;
