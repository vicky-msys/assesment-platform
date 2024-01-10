import { Col, Row } from "antd";
import React, { useState } from "react";
import "./CandidateDetails.scss";
import CustomButton from "../../components/Button/CustomButton";
import DropDownIcon from "../../assets/icons/DropDown.svg";

function EducationDetails({ prevTab, close }) {
  const institute = "Institute";
  const university = "University";
  const educationType = "Education Type";
  const startDuration = "Start Duration";
  const course = "Course";
  const duration = "Duration";
  const dateDateOfCompletion = "Date Of Completion";
  const degree = "Degree";
  const uploadFiles = "Upload Files";
  const specification = "Specification";
  const gpa = "GPA";
  const marksheet = "Mark Sheet";

  const [active, setActive] = useState(false);

  return (
    <>
      <div className={`candidate-basic-details ${active && "full-height"}`}>
        <DropDownIcon
          className={`svg ${active && "active"}`}
          onClick={() => setActive((prev) => !prev)}
        />
        <Row className="individual-row">
          <Col className="key" span={8}>
            {institute}
          </Col>
          <Col span={15}>
            <Row className="contact">
              <Col span={11}>
                <Row className="key">{institute}</Row>
                <Row>Indian Institute Of Engineering</Row>
              </Col>
              <Col>
                <Row className="key">{university}</Row>
                <Row>Delhi University</Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="individual-row">
          <Col className="key" span={8}>
            {educationType}
          </Col>
          <Col>Full time</Col>
        </Row>
        <Row className="individual-row">
          <Col className="key" span={8}>
            {duration}
          </Col>
          <Col span={15}>
            <Row className="contact">
              <Col span={8}>
                <Row className="key">{startDuration}</Row>
                <Row>August 12, 2017</Row>
              </Col>
              <Col>
                <Row className="key">{dateDateOfCompletion}</Row>
                <Row>August 12, 2022</Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="individual-row">
          <Col className="key" span={8}>
            {course}
          </Col>
          <Col span={15}>
            <Row className="contact">
              <Col span={8}>
                <Row className="key">{educationType}</Row>
                <Row>Graduation</Row>
              </Col>
              <Col>
                <Row className="key">{degree}</Row>
                <Row>B. Tech</Row>
              </Col>
            </Row>
            <Row className="contact">
              <Col span={11}>
                <Row className="key">{specification}</Row>
                <Row>Computers</Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="individual-row">
          <Col className="key" span={8}>
            {gpa}
          </Col>
          <Col>9.0</Col>
        </Row>
        <Row className="individual-row last-element">
          <Col className="key" span={8}>
            {uploadFiles}
          </Col>
          <Col span={15}>
            <Row className="contact">
              <Col span={11}>
                <Row className="key">{marksheet}</Row>
                <Row className="link">marksheet.pdf</Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="basic-details-button-container">
        <CustomButton
          label="Back"
          onClick={() => prevTab("education")}
          className="whiteBgbluecolorBtn"
        />
        <CustomButton
          label="Close"
          onClick={() => close()}
          className="whiteBgbluecolorBtn"
        />
      </div>
    </>
  );
}

export default EducationDetails;
