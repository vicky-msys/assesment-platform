import { Col, Row } from "antd";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LeftArrow from "@app/assets/icons/LeftArrow.svg";
import {
  assessmentPreviewData,
  assessmentQuestions,
} from "@app/assets/mockdata/AssessmentMockData";
import CustomButton from "@app/components/Button/CustomButton";
import QuestionPreview from "@app/components/QuestionPreview/QuestionPreview";
import "./AssesmentPlatform.scss";

function AssessmentsPreview() {
  const location = useLocation();
  const navigateTo = useNavigate();
  //  const [cardData,setCardData] = useState([]);

  console.log(location.state.previewId,assessmentPreviewData)

  const cardData = assessmentPreviewData.find(
    (item) => item.previewId === location.state.previewId
  );
  const questions = assessmentQuestions.filter(
    (item) => item.questionId === cardData.questionId
  );

  return (
    <div className="all-assessment-container">
      <p>
        Assesment Platform <span>&gt;</span>{" "}
        <span className="assessment-title">Test</span>
      </p>
      <div className="assessment-preview-container">
        <span
          className="assessment-name"
          role="presentation"
          onClick={() =>
            navigateTo(`/assessmentplatform/${location.pathname.split("/")[2]}`)
          }
        >
          <LeftArrow />
          <h2>{location.pathname.split("/")[3]} Test</h2>
        </span>
        <div className="assessment-details-container">
          <Row className="assessment-detail-row">
            <Col span={8}>
              <p className="topic">Category</p>
              <p className="value">{cardData.category}</p>
            </Col>
            <Col span={1} />
            <Col span={9}>
              <p className="topic">Topic</p>
              <p className="value">{cardData.topic}</p>
            </Col>
            <Col span={1} />
            <Col span={4}>
              <p className="topic">Sub Topic</p>
              <p className="value">{cardData.subtopic}</p>
            </Col>
            <Col span={8}>
              <p className="topic">Difficulty Level</p>
              <p className="value">{cardData.level}</p>
            </Col>
            <Col span={1} />
            <Col span={9}>
              <p className="topic">Tags</p>
              <p className="value">{cardData.tags}</p>
            </Col>
            <Col span={1} />
            <Col span={4}>
              <p className="topic">Job Role</p>
              <p className="value">{cardData.jobrole}</p>
            </Col>
            <Col span={8}>
              <p className="topic">Test Created On</p>
              <p className="value">{cardData.jobrole}</p>
            </Col>
            <Col span={1} />
            <Col span={9}>
              <p className="topic">Test Created By</p>
              <p className="value">{cardData.createdby}</p>
            </Col>
            <Col span={1} />
          </Row>
        </div>
        <div className="instruction-container">
          <p className="instruction-title">Instructions</p>
          <div className="instruction">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus
            cras adipiscing enim eu turpis egestas pretium aenean pharetra. At
            tellus at urna condimentum. Arcu odio ut sem nulla. Viverra orci
            sagittis eu volutpat odio.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus
            cras adipiscing enim eu turpis egestas pretium aenean pharetra. At
            tellus at urna condimentum. Arcu odio ut sem nulla. Viverra orci
            sagittis eu volutpat odio.
          </div>
        </div>
        <div className="assessment-question-container">
          {questions.map((item, index) => (
            <QuestionPreview key={index} cardData={item} />
          ))}
        </div>
        <CustomButton
          onClick={() =>
            navigateTo(`/assessmentplatform/${location.pathname.split("/")[2]}`)
          }
          className="whiteBgbluecolorBtn"
          label="Back"
        />
      </div>
    </div>
  );
}

export default AssessmentsPreview;
