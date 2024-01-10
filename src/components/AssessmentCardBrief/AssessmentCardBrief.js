import React from "react";
import { Col, Row, Card as CustomCard, Menu, Dropdown } from "antd";
import propTypes from "prop-types";
import ThreeDot from "@app/assets/icons/threedot.svg";
import IconButton from "../IconButton/IconButton";
import CustomButton from "../Button/CustomButton";
import "./AssessmentCardBrief.scss";
import { useNavigate, useLocation } from "react-router-dom";

function AssessmentCardBrief({ cardData, editHandler, archiveHandler }) {
  const domain = "Domain";
  const type = "Type";
  const navigateTo = useNavigate();
  const location = useLocation();

  const menuItems = (
    <div className="ass-dropdown">
      <Menu>
        <Menu.Item key="1" onClick={() => editHandler(cardData)}>
          Edit
        </Menu.Item>
        <Menu.Item key="2" onClick={() => archiveHandler(cardData)}>
          Archieve
        </Menu.Item>
        <Menu.Item key="3" onClick={() => navigateTo("/insights")}>
          Insight
        </Menu.Item>
      </Menu>
    </div>
  );
  return (
    <CustomCard className="assbrief-card-container">
      <Col className="cardContainer">
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
            </Row>
          </Col>
          <Col className="preview">
            <CustomButton
              label="Preview"
              className="preview-btn"
              onClick={() =>
                navigateTo(
                  `/assessmentplatform/${
                    location.pathname.split("/")[2]
                  }/${cardData.title.replace(" ", "_").toLowerCase()}`,
                  {
                    state: {
                      previewId: cardData.previewId,
                    },
                  }
                )
              }
            />
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

AssessmentCardBrief.defaultProps = {
  cardData: {},
  key: "",
  editHandler: null,
  archiveHandler: null,
};
AssessmentCardBrief.propTypes = {
  cardData: propTypes.object.isRequired,
  key: propTypes.string,
  editHandler: propTypes.func,
  archiveHandler: propTypes.func,
};

export default AssessmentCardBrief;
