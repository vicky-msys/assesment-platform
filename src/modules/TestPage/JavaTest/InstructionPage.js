import React from "react";
import propTypes from "prop-types";
import "./JavaTest.scss";
import { InstructionContent } from "@app/components/InstructionContent/InstructionContent";
function InstructionPage(props) {
  const { data, labelField, title } = props;
  return (
    <div className="instruct-container">
      <div className="instruction-title">{title}</div>
      <div className="instruction-content"><InstructionContent data={data} labelField={labelField}/></div>
    </div>
  );
}
InstructionPage.defaultProps = {
  data: [],
  labelField: "label",
  title: "Instruction Page",
};

InstructionPage.propTypes = {
  data: propTypes.array,
  labelField: propTypes.string,
  title: propTypes.string,
};
export default InstructionPage;
