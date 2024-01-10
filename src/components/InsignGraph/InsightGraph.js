import React from "react";
import "./InsightGraph.scss";

import { Column } from "@ant-design/plots";
import InsightDropDown from "../InsightDropDown/InsightDropDown";
import { COLUMN_CHART_CONFIG } from "../../service/constants/Constants";

function InsightGraph(props) {
  const { xField, yField, graphData, handleDropDownInputChange} = props;
  const dynamicData = {
    data: graphData,
    xField: xField,
    yField: yField,
    // renderer:"svg"
  };

  const config = COLUMN_CHART_CONFIG;

  return (
    <div className="i-graph-main">
      <div className="i-graph-title-container">
        <div className="title-container">
          <p className="title">Assessment Assigned</p>
        </div>
        <div className="drop-container">
          <InsightDropDown handleDropDownInputChange={handleDropDownInputChange} />
        </div>
      </div>
      <div className="i-graph-container">
        <Column {...config} {...dynamicData} />
      </div>
    </div>
  );
}

export default InsightGraph;
