import { Col, Row } from "antd";
import React, { useState } from "react";
import "./CandidateDetails.scss";
import CustomButton from "../../components/Button/CustomButton";
import DropDownIcon from "../../assets/icons/DropDown.svg";

function EmploymentDetails({ prevTab, nextTab }) {
  const Responsibiliy = [
    "Work with developers to design algorithms and flowcharts",
    "Produce clean, efficient code based on specifications",
    "Integrate software components and third-party programs",
    "Verify and deploy programs and systems",
    "Troubleshoot, debug and upgrade existing software",
    "Gather and evaluate user feedback",
  ];
  const organisation = "Organisation";
  const employmentType = "Employment Type";
  const employmentPeriod = "Employment Period";
  const joining = "Joining";
  const role = "Role";
  const annualSalary = "Annual Salary";
  const work = "Work";
  const noticePeriod = "Notice Period";
  const uploadFiles = "Upload Files";

  const [active, setActive] = useState(false);

  return (
    <>
      <div className={`candidate-basic-details ${active && "full-height"}`}>
        <DropDownIcon
          className={`svg ${active && "active"}`}
          onClick={() => setActive((prev) => !prev)}
        />
        <h1>Current Organisation</h1>
        <Row className="individual-row">
          <Col className="key" span={8}>
            {organisation}
          </Col>
          <Col>xyz organisation pvt limited</Col>
        </Row>
        <Row className="individual-row">
          <Col className="key" span={8}>
            {employmentType}
          </Col>
          <Col>Full time</Col>
        </Row>
        <Row className="individual-row">
          <Col className="key" span={8}>
            {employmentPeriod}
          </Col>
          <Col span={15}>
            <Row className="contact">
              <Col span={8}>
                <Row className="key">{joining}</Row>
                <Row>17 August 2021</Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="individual-row">
          <Col className="key" span={8}>
            {role}
          </Col>
          <Col>Software Developer</Col>
        </Row>
        <Row className="individual-row">
          <Col className="key" span={8}>
            {annualSalary}
          </Col>
          <Col>10 Lakhs</Col>
        </Row>
        <Row className="individual-row">
          <Col className="key" span={8}>
            {work}
          </Col>
          <Col>
            Responsibiliy <br />
            <ol>
              {Responsibiliy.map((item) => (
                <li key="">{item}</li>
              ))}
            </ol>
          </Col>
        </Row>
        <Row className="individual-row">
          <Col className="key" span={8}>
            {noticePeriod}
          </Col>
          <Col>3 Months</Col>
        </Row>
        <Row className="individual-row last-element">
          <Col className="key" span={8}>
            {uploadFiles}
          </Col>
          <Col span={16}>
            <Row className="contact">
              <Col span={23} style={{ marginBottom: "10px" }}>
                <Row className="key">Pay Slips</Row>
                <Row className="link">
                  <Col className="link">August_payslip.pdf</Col>
                  <Col className="link">June_payslip.pdf</Col>
                  <Col className="link">July_payslip.pdf</Col>
                </Row>
              </Col>
              <Col span={8}>
                <Row className="key">Offer Letter</Row>
                <Row className="link">offer_letter.pdf</Row>
              </Col>
              <Col>
                <Row className="key">Revised Letter</Row>
                <Row className="link">revised_letter.pdf</Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="basic-details-button-container">
        <CustomButton
          onClick={() => prevTab("employment")}
          label="Back"
          className="whiteBgbluecolorBtn"
        />
        <CustomButton
          label="Next"
          className="whiteBgbluecolorBtn"
          onClick={() => nextTab("employment")}
        />
      </div>
    </>
  );
}

export default EmploymentDetails;
