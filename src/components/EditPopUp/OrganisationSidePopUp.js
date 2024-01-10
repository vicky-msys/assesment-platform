import React from "react";
import "./MyTeamPopUp.scss";
import AdminCard from "../AdminCard/AdminCard";
import { Col, Row } from "antd";
import CustomButton from "../Button/CustomButton";

function OrganisationSidePopUp({ onEdit, data }) {
  const cardData = {
    username: data.orgName || "",
    role: data.serviceType || "",
  };

  return (
    <div className="edit-popup-container">
      <AdminCard cardData={cardData} />
      <h3 className="title">Basic Details</h3>
      <div className="basic-details-container no-border">
        <Row className="basic-detail">
          <Col span={4}>Domain  </Col>
          <Col span={2}/>
          <Col>{data.serviceType}</Col>
        </Row>
        <Row className="basic-detail">
          <Col span={4}>Email  </Col>
          <Col span={2}/>
          <Col>{data.email}</Col>
        </Row>
        <Row className="basic-detail">
          <Col span={4}>Phone No  </Col>
          <Col span={2}/>
          <Col>{data.mobile || ""}</Col>
        </Row>
        <Row className="basic-detail">
          <Col span={4}>Services  </Col>
          <Col span={2}/>
          <Col>{data.service || ""}</Col>
        </Row>
        <Row className="basic-detail">
          <Col span={4}>Address  </Col>
          <Col span={2}/>
          <Col span={16}>{data.address || "20/30, dummy street, dummy city, dummy district, dummy state, dummy country"}</Col>
        </Row>
      </div>
      <div className="footer-btn-container">
        <Row>
          <Col>
            <CustomButton
              onClick={onEdit}
              label="Edit"
              className="whiteBgbluecolorBtn"
            />
          </Col>
          <Col span={1} />
          <Col>
            <CustomButton className="redBgBtn" label="Deactivate" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default OrganisationSidePopUp;
