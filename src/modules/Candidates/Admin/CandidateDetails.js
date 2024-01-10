import React, { useState } from "react";
import "./Candidate.scss";
import Tab from "../../../components/Tab/Tab";
import { useNavigate } from "react-router-dom";

function CandidateDetails() {
  const navigateTo = useNavigate();
  const [count, setCount] = useState(0);
  const nextTab = (data) => {
    console.log(data);
    if (data === "basic") setCount(1);
    else if (data === "employment") {
      setCount(2);
    }
  };
  const prevTab = (data) => {
    console.log(data);
    if (data === "education") setCount(1);
    else if (data === "employment") {
      setCount(0);
    }
  };
  const close = () => navigateTo("/candidates");

  const tabData = [
    {
      title: "Basic Details",
      component: "basicdetails",
      props: {
        nextTab,
        close,
      },
    },
    {
      title: "Employment Details",
      component: "employmentdetails",
      props: {
        nextTab,
        prevTab,
      },
    },
    {
      title: "Education Details",
      component: "educationdetails",
      props: {
        close,
        prevTab,
      },
    },
  ];
  return (
    <div className="candidate-deatail-container">
      <p>
        Candidate<span>&gt;</span>
        <span style={{ color: "#0076BF" }}>Candidate info</span>
      </p>
      <Tab activeKey={`${count}`} tabData={tabData} />
    </div>
  );
}

export default CandidateDetails;
