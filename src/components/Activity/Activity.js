import React from "react";
import "./Activity.scss";

function InsightActivity({ cardData }) {
  return (
  <div className="insight-act-main">
      {cardData.map((item) => (
          <div className="insight-main-container" key="">
          <p className="count-container">{item.count}</p>
          <p className="content-container">{item.content}</p>
        </div>
      ))}
      </div>
  );
}

export default InsightActivity;
