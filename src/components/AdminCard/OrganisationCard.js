import { Col, Row, Card as CustomCard } from "antd";
import React from "react";
import AdminCardProfile from "../AdminCardProfile/AdminCardProfile";
import "./AdminCard.scss";
import propTypes from "prop-types";
import Pending from "@app/assets/icons/Pending.svg";
import Done from "@app/assets/icons/Done.svg";

function OrgCard({ cardData = {}, handlers }) {
  return (
    <CustomCard
      className="admin-card-container"
      onClick={() => handlers.onClickHandler(cardData)}
    >
      <Col className="gutter-row cardContainer" span={8}>
        <Row>
          <Col span={8} className="admin-card-profile-container">
            <div className="active-status-container">
              <div className={`default-card-class ${cardData.status}`}>
                {cardData.status === "verified" ? <Done /> : <Pending />}
              </div>
            </div>
            <AdminCardProfile
              profileImage={cardData.profile}
              username={cardData.orgName}
              className={"card-avatar"}
            />
          </Col>
          <Col span={14}>
            <p className="username">{cardData.orgName || "Name not found"}</p>
            <p className="role">{cardData.serviceType || ""}</p>
            <p className="role">{cardData.email || ""}</p>
          </Col>
        </Row>
      </Col>
    </CustomCard>
  );
}

OrgCard.defaultProps = {
  cardData: {},
  onClick: null,
};

OrgCard.propTypes = {
  cardData: propTypes.Object,
  onClick: propTypes.func.isRequired,
};

export default OrgCard;
