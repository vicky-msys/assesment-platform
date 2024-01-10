import React from "react";
import "./AssesmentPlatform.scss";
import InsightGraph from "../../components/InsignGraph/InsightGraph";
import InsightActivity from "../../components/Activity/Activity";
import OrganisationList from "../../components/OrganisationList/OrganisationList";

function AssessmentPlatformInsights() {
  // const [dropResult, setDropResult] = useState("");
  const data = [
    {
      title: "Centric Software Technology",
      day: "Today",
      img: "",
    },
    {
      title: "Dexter Matrix",
      day: "Today",
      img: "",
    },
    {
      title: "Eicon Technologies",
      day: "Yesterday",
      img: "",
    },
    {
      title: "Global Tech Solutions",
      day: "August 06, 2022",
      img: "",
    },
    {
      title: "Macrocon Technologies",
      day: "August 06, 2022",
      img: "",
    },
  ];

  const data2 = [
    {
      count: "1354",
      content: "Attempts",
    },
    {
      count: "8.45",
      content: "Attempt Time",
    },
    {
      count: "72.36",
      content: "Avg Score Percentage",
    },
    {
      count: "5.65",
      content: "Avg Time to Full Score",
    },
  ];

  const graphData = [
    {
      type: "",
      // sales: ,
    },
    {
      type: "Jan",
      sales: 130,
    },
    {
      type: "Feb",
      sales: 250,
    },
    {
      type: "Mar",
      sales: 170,
    },
    {
      type: "Apr",
      sales: 230,
    },
    {
      type: "May",
      sales: 180,
    },
    {
      type: "Jun",
      sales: 150,
    },
    {
      type: "Jul",
      sales: 200,
    },
    {
      type: "Aug",
      sales: 130,
    },
    {
      type: "Sep",
      sales: 250,
    },
    {
      type: "Oct",
      sales: 200,
    },
    {
      type: "Nov",
      sales: 150,
    },
    {
      type: "Dec",
      sales: 200,
    },
  ];

  const handleDropDownInputChange = (value) => {
    // setDropResult(value);
    console.log(value, "from assessment");
    // console.log(dropResult, "res");
  };
  return (
    <div className="i-main">
      <p>
        Assesements Platform {"> "}
        <span className="i-route">Test Insight</span>
      </p>
      <div className="i-container">
        <p className="i-title">Numerical reasoning test</p>
        <div className="i-details-container">
          <p>Created By: Madhu Patil</p>
          <p>Created On: Feb 26, 2021 </p>
          <p>Total score: 50</p>
          <p>Recommended Time: 15 minutes</p>
        </div>
        <div className="i-comp-container">
          <div className="i-graph-containers">
            <InsightGraph
              graphData={graphData}
              xField="type"
              yField="sales"
              handleDropDownInputChange={handleDropDownInputChange}
            />
            <div className="i-activity-container">
              <p className="i-title">Assessment Activities</p>
              <div className="i-act">
                <InsightActivity cardData={data2} />
              </div>
            </div>
            <div className="i-activity-container">
              <p className="i-title">Question Percentiles</p>
              <div className="i-act">
                <InsightActivity cardData={data2} />
              </div>
            </div>
          </div>
          <div className="org-list">
            <OrganisationList cardData={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssessmentPlatformInsights;
