import { Col, Row, Card as CustomCard } from "antd";
import React from "react";
import AdminCardProfile from "../AdminCardProfile/AdminCardProfile";
import "./AdminCard.scss";
import propTypes from "prop-types";
import Pending from "@app/assets/icons/Pending.svg";
import Done from "@app/assets/icons/Done.svg";

function AdminCard({ cardData, handlers }) {
  const empId = "Emp Id";
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
              profileImage={cardData.profileImage}
              username={cardData.username}
              className={"card-avatar"}
            />
          </Col>
          <Col span={14} className="admin-detail-container">
            {cardData.username && (
              <p className="username">
                {cardData.username || "Name not found"}
              </p>
            )}
            {cardData.role && <p className="role">{cardData.role || ""}</p>}
            {cardData.employeeid && (
              <p className="role">
                {empId} : {cardData.employeeid || ""}
              </p>
            )}
          </Col>
        </Row>
      </Col>
    </CustomCard>
  );
}

AdminCard.defaultProps = {
  cardData: {},
  onClick: null,
};

AdminCard.propTypes = {
  cardData: propTypes.Object,
  onClick: propTypes.func,
};

export default AdminCard;
