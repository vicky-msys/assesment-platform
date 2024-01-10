import { Col, Row } from "antd";
import React from "react";
import AdminCardProfile from "../AdminCardProfile/AdminCardProfile";
import "./CandidateDetails.scss";
import CustomButton from "../../components/Button/CustomButton";

function BasicDetails({ close, nextTab }) {
  const skills = ["css", "java script with html", "Html with Css"];
  const languageKnown = ["English", "Tamil", "french"];
  const profilePicture = "Profile Picture";
  return (
    <>
      <div className="candidate-basic-details full-height">
        <Row className="individual-row">
          <Col className="key" span={8}>
            {profilePicture}
          </Col>
          <Col>
            <AdminCardProfile
              profileImage="https://robohash.org/hicveldicta.png"
              username={"Vignesh Nagarajan"}
            />
          </Col>
        </Row>
        <Row className="individual-row">
          <Col className="key" span={8}>
            Name
          </Col>
          <Col>Vignesh Nagarajan</Col>
        </Row>
        <Row className="individual-row">
          <Col className="key" span={8}>
            Contact
          </Col>
          <Col span={15}>
            <Row className="contact">
              <Col span={8}>
                <Row className="key">Phone</Row>
                <Row>+91 7448608136</Row>
              </Col>
              <Col>
                <Row className="key">Email</Row>
                <Row>vicky@mail.com</Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="individual-row">
          <Col className="key" span={8}>
            Gender
          </Col>
          <Col>Male</Col>
        </Row>
        <Row className="individual-row">
          <Col className="key" span={8}>
            Date Of Birth
          </Col>
          <Col>29 Feb 2000</Col>
        </Row>
        <Row className="individual-row">
          <Col className="key" span={8}>
            Total Experience
          </Col>
          <Col span={2}>5 Years</Col>
          <Col>3 Months</Col>
        </Row>
        <Row className="individual-row">
          <Col className="key" span={8}>
            Skills
          </Col>
          <Col span={16}>
            <Row>
              {skills.map((item) => (
                <Col className="skill-col" key={item}>
                  {item}
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row className="individual-row">
          <Col className="key" span={8}>
            Location
          </Col>
          <Col span={16}>
            <Row className="contact">
              <Col className="key" span={24}>
                Current Address
              </Col>
              <Col span={24} className="value">
                Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Banashankri,
                Bengaluru
              </Col>
              <Col className="key" span={24}>
                Permanent Address
              </Col>
              <Col span={24}>
                Sterling Horizon, Flat No. A2, Pashan - Sus Rd, near Reliance
                Fresh, Pune
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="individual-row">
          <Col className="key" span={8}>
            Language Known
          </Col>
          <Col>
            <Row>
              {languageKnown.map((item) => (
                <Col className="skill-col" key={item}>
                  {item}
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row className="individual-row">
          <Col className="key" span={8}>
            ID Proof
          </Col>
          <Col span={16}>
            <Row className="contact">
              <Col span={8}>
                <Row className="key">Aadhar Card No</Row>
                <Row>9123 2345 1123</Row>
              </Col>
              <Col>
                <Row className="key">Pan Card No</Row>
                <Row>CPJFM6438F</Row>
              </Col>
            </Row>
            <Row className="contact">
              <Col span={8}>
                <Row className="key">Aadhar Card</Row>
                <Row className="link">Aadhar.pdf</Row>
              </Col>
              <Col>
                <Row className="key">Pan Card</Row>
                <Row className="link">pancard.pdf</Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="individual-row last-element">
          <Col className="key" span={8}>
            Resume
          </Col>
          <Col span={15}>
            <Row className="contact">
              <Col span={8}>
                <Row className="key">Resume</Row>
                <Row className="link">resume.pdf</Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="basic-details-button-container">
        <CustomButton
          onClick={() => close()}
          label="Back"
          className="whiteBgbluecolorBtn"
        />
        <CustomButton
          label="Next"
          className="whiteBgbluecolorBtn"
          onClick={() => nextTab("basic")}
        />
      </div>
    </>
  );
}

export default BasicDetails;
