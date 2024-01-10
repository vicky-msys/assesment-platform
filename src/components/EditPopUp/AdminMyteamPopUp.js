import React from "react";
import "./MyTeamPopUp.scss";
import AdminCard from "../AdminCard/AdminCard";
import { Col, Row } from "antd";
import CustomButton from "../Button/CustomButton";

function AdminMyteamPopUp({ onEdit, data, testData }) {
  const cardData = {
    username: data.username || "",
  };
  return (
    <div className="edit-popup-container admin-popUp">
      <AdminCard cardData={cardData} />
      <h3 className="title">Basic Details</h3>
      <div className="basic-details-container">
        <Row className="basic-detail">
          <Col span={4}>User Profile </Col>
          <Col span={2} />
          <Col>{data.role}</Col>
        </Row>
        <Row className="basic-detail">
          <Col span={4}>Service </Col>
          <Col span={2} />
          <Col>{data.service}</Col>
        </Row>
        <Row className="basic-detail">
          <Col span={4}>Email </Col>
          <Col span={2} />
          <Col>{data.email}</Col>
        </Row>
        <Row className="basic-detail">
          <Col span={4}>Phone No </Col>
          <Col span={2} />
          <Col>{data.mobile || ""}</Col>
        </Row>
        <Row className="basic-detail">
          <Col span={4}>Address </Col>
          <Col span={2} />
          <Col span={16}>
            {data.address ||
              "20/30, dummy street, dummy city, dummy district, dummy state, dummy country"}
          </Col>
        </Row>
      </div>
      <h3 className="title">Assessment Details</h3>
      <Row className="test-details">
        <Col>
          <Row>No Of Tests</Row>
          <Row>
            <b>{testData.noOfTests || 0}</b>
          </Row>
        </Col>
        <Col span={2} />
        <Col>
          <Row>Approved Tests</Row>
          <Row>
            <b>
              {`${
                testData.noOfApprovedTests > 9
                  ? testData.noOfApprovedTests
                  : "0" + testData.noOfApprovedTests
              }` || 0}
            </b>
          </Row>
        </Col>
        <Col span={2} />
        <Col>
          <Row>Pending Tests</Row>
          <Row>
            <b>
              {`${
                testData.noOfPendingTests > 9
                  ? testData.noOfPendingTests
                  : "0" + testData.noOfPendingTests
              }` || 0}
            </b>
          </Row>
        </Col>
        <Col span={2} />
      </Row>
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

export default AdminMyteamPopUp;
