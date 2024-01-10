import React from "react";
import { Col } from "antd";
import JavaTest from "./JavaTest/JavaTest";
import "./TestPage.scss";
// import TestInstruction from "./TestInstruction";
// const questions=[
//   {question:"lorem ipsum"},
//   {question:"lorem ipsum1"},
//   {question:"lorem ipsum2"},
// ]
function TestPage() {
  return (
    <Col className="test-container">
      {/* <TestInstruction questions={questions} totalTime={120} title="Java Test" /> */}
      <JavaTest />
    </Col>
  );
}
export default TestPage;