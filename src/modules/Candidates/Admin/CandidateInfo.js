import React from "react";
import CandidateBasicInfo from "@app/components/CandidateBasicInfo/CandidateBasicInfo";
import "./Candidate.scss";
import Share from "@app/assets/icons/Share.svg";
import Download from "@app/assets/icons/download.svg";
import GridView from "@app/components/GridView/GridView";
import TextInput from "@app/components/TextInput/TextInput";
import CandidateAssessmentCard from "@app/components/AssessmentCardBrief/CandidateAssessmentCard";
import CustomButton from "@app/components/Button/CustomButton";
import { useLocation } from "react-router-dom";
import {
  candidateMockData,
  assessmentMockData,
} from "@app/assets/mockdata/AssessmentMockData";

function CandidateInfo() {
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const pageData = candidateMockData.find((item) => item.id === +id);

  const assessmentPageData = assessmentMockData.filter((item) => {
    return pageData.assessmentIds.some((id) => id === item.id);
  });

  return (
    <div className="candidate-basic-info-container">
      <CandidateBasicInfo data={pageData} />
      <div className="assessment-details">
        <div className="header">
          <h2>Assessments</h2>
          <div className="icon-container">
            <Download />
            <Share />
          </div>
        </div>
        <GridView data={assessmentPageData} gridRenderer={CandidateAssessmentCard} />
        <hr />
        <div className="comment-section">
          <p className="comment-title">Comments</p>
          <TextInput type="textarea" />
        </div>
        <div className="button-container">
          <CustomButton label="Back" className="whiteBgbluecolorBtn" />
          <CustomButton label="Proceed To Next Round" />
        </div>
      </div>
    </div>
  );
}

export default CandidateInfo;
