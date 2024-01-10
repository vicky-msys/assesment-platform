import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./AssesmentPlatform.scss";
import { assessmentCardData } from "@app/assets/mockdata/gridMockData";
import ListContainer from "@app/components/ListContainer/ListContainer";
import AssessmentCardBrief from "@app/components/AssessmentCardBrief/AssessmentCardBrief";
import Filter from "@app/assets/icons/Filter.svg";
import SidePopUp from "@app/components/SidePopUp/SidePopUp";
import PageFilter from "@app/components/PageFilter/PageFilter";

function AllAssessments() {
  const location = useLocation();
  const [modalVisibility, setModalVisibility] = useState(false);

  const handleClick = (data) => {
    setModalVisibility(data);
  };

  return (
    <div className="all-assessment-container">
      <p>
        Assesment Platform <span>&gt;</span>{" "}
        <span className="assessment-title">
          {location.pathname.split("/")[2]}
        </span>
      </p>
      <ListContainer
        searchField="title"
        containerName="List of all Assessments"
        gridRenderer={AssessmentCardBrief}
        isSearch
        textInputPlaceHolder="Search for a assessment"
        isIconButton
        handleIconButton={() => setModalVisibility(!modalVisibility)}
        icon={<Filter />}
        iconButtonLabel={"Filter"}
        data={assessmentCardData}
      />
      <SidePopUp
        sidePopUpVisibility={modalVisibility}
        handleClick={handleClick}
      >
        <PageFilter />
      </SidePopUp>
    </div>
  );
}

export default AllAssessments;
