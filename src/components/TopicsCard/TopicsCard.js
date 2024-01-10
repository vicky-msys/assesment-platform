import { Col, Dropdown, Menu, Row } from "antd";
import React from "react";
import IconButton from "../IconButton/IconButton";
import ThreeDot from "@app/assets/icons/threedot.svg";
import "./TopicsCard.scss";

function TopicsCard({ cardData, handlers }) {
  const menuItems = (
    <div className="topics-dropdown">
      <Menu>
        <Menu.Item key="1" onClick={() => handlers.editHandler(cardData)}>
          Edit
        </Menu.Item>
        <Menu.Item key="2" onClick={() => handlers.deleteHandler(cardData)}>
          Delete
        </Menu.Item>
      </Menu>
    </div>
  );
  
  return (
    <div className="topics-list-container">
      <Dropdown
        overlay={menuItems}
        trigger={["click"]}
        placement="bottom"
        className="dot"
      >
        <IconButton className="admin-card-edit-btn dot" icon={<ThreeDot />} />
      </Dropdown>
      <Col className="topic-item">
        <Row className="topic">{cardData.title}</Row>
        {cardData.subTitle && (
          <Row className="sub-topic">
            Sub Topic : <span>{cardData.subTitle}</span>
          </Row>
        )}
        {cardData.description && (
          <Row className="sub-topic">
            Description : <span>{cardData.description}</span>
          </Row>
        )}
      </Col>
    </div>
  );
}

export default TopicsCard;
