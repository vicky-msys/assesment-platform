import React from "react";
import { Col, Row, Card as CustomCard, Menu, Dropdown } from "antd";
import propTypes from "prop-types";
import ThreeDot from "@app/assets/icons/threedot.svg";
import IconButton from "../IconButton/IconButton";
import "./AssessmentCardBrief.scss";

function CandidateAssessmentCard({ cardData, editHandler, archiveHandler }) {
  const domain = "Domain";
  const type = "Type";
  const attempteddate = "Attempted Date";
  const assigneddate = "Assigned Date";
  const compilationdate = "Compilation Date";

  const menuItems = (
    <div className="ass-dropdown">
      <Menu>
        <Menu.Item key="1" onClick={() => editHandler(cardData)}>
          Preview
        </Menu.Item>
        <Menu.Item key="2" onClick={() => archiveHandler(cardData)}>
          View Report
        </Menu.Item>
      </Menu>
    </div>
  );
  return (
    <CustomCard className="assbrief-card-container">
      <Col className="cardContainer candidateCard">
        <Row className="main-row">
          <Col className="content">
            <p className="card-title">{cardData.title || ""} </p>
            <Row>
              <Col className="card-sub1">
                <p>
                  {domain}:<span> {cardData.domain || ""} </span>
                </p>
              </Col>
              <Col className="card-sub2">
                <p>
                  {type}:<span> {cardData.type || ""} </span>
                </p>
              </Col>
              <Col className="card-sub2">
                <p>
                  {assigneddate}:<span> {cardData.assigneddate || ""} </span>
                </p>
              </Col>
              {cardData.attempteddate && (
                <Col className="card-sub2">
                  <p>
                    {attempteddate}:
                    <span> {cardData.attempteddate || ""} </span>
                  </p>
                </Col>
              )}
              {cardData.compilationdate && (
                <Col className="card-sub2">
                  <p>
                    {compilationdate}:
                    <span> {cardData.compilationdate || ""} </span>
                  </p>
                </Col>
              )}
            </Row>
          </Col>
          <Col className="icon">
            <Dropdown
              overlay={menuItems}
              trigger={["click"]}
              placement="bottom"
              className="dot"
            >
              <IconButton icon={<ThreeDot />} />
            </Dropdown>
          </Col>
        </Row>
      </Col>
    </CustomCard>
  );
}

CandidateAssessmentCard.defaultProps = {
  cardData: {},
  key: "",
  editHandler: null,
  archiveHandler: null,
};
CandidateAssessmentCard.propTypes = {
  cardData: propTypes.object.isRequired,
  key: propTypes.string,
  editHandler: propTypes.func,
  archiveHandler: propTypes.func,
};

export default CandidateAssessmentCard;
