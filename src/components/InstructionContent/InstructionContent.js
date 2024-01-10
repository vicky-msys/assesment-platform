import React from "react";
import "./InstructionContent.scss";
export function InstructionContent(props) {
  const { data, labelField } = props;
  return (
    <div className="instruction-parent">
      <div className="text-container">
        <div className="line"></div>
        <ol className="ordered-list">
          {data.map((item, index) => {
            return <li key={index}>{item[labelField]}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}
