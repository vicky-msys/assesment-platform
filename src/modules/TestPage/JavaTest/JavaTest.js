/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import TestSummary from "@app/components/TestSummary/TestSummary";
import { questionsData } from "@app/assets/mockdata/testQuestions";
import CustomButton from "@app/components/Button/CustomButton";
import "./JavaTest.scss";
import Timer from "@app/components/Timer/Timer";
import Header from "../../../components/Header/Header";
import { Col, Row } from "antd";
import { Steps } from "antd";
import RadioButtonGroup from "../../../components/RadioButtonGroup/RadioButtonGroup";
import { useNavigate } from "react-router-dom";
const { Step } = Steps;

function JavaTest() {
  const [questions, setQuestions] = useState(questionsData);
  //const [index, setIndex] = useState(0);
  const history = useNavigate();
  useEffect(() => {
    let items = questions.map((item) => {
      if (!item.status) {
        item.status = "skipped";
      }
      return item;
    });
    setQuestions(items);
  }, []);
  // function onChange(increment) {
  //   let question = questions;
  //   question[index].status = index === 6 ? "normal" : "attempted";
  //   setQuestions(question);
  //   setIndex(index + increment);
  // }

  function onSubmit() {
    console.log("onsubmit");
    history("/dashboard");
  }
  return (
    <div className="test-layout">
      <header className="header">
        <Header showIcon={false} showDisplay={false}>
          <Row className="header-container">
            <h2 className="title">Aptitude Test</h2>
            <Row className="timer-container">
              <Timer />
              <CustomButton
                label="Submit"
                className="blueBgBtn btn"
                onClick={onSubmit}
              />
            </Row>
          </Row>
        </Header>
      </header>
      <Row className="test-page">
        <Col className="step-container" span={1}>
          <Steps current={0} direction="vertical">
            {questions.map((item, index) => {
              return <Step key={index} />;
            })}
          </Steps>
        </Col>
        <Col className="content" span={18}>
          <Col className="question-content">
            <div className="ques-title">Question Description</div>
            <div className="ques-content description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
            <div className="ques-title">Question</div>
            <div className="ques-content">
              Which one comes next in the pattern of these letter pairs: AZ, BY,
              CX… ?
            </div>
            <RadioButtonGroup
              direction="vertical"
              labelField="label"
              valueField="label"
              collections={[
                { label: "option 1" },
                { label: "option 2" },
                { label: "option 3" },
                { label: "option 4" },
              ]}
            />
          </Col>
        </Col>
        <Col span={5} className="summary">
          <TestSummary
            span={5}
            title={"Test Summary"}
            showLegend={false}
            collections={questions}
            containerClass="test-summary"
            statusCollection={["attempted", "skipped", "normal"]}
          />
        </Col>
      </Row>
    </div>

    // <div className="java-container">
    //   <TestSummary
    //     title={"Test Summary"}
    //     onSubmit={onSubmit}
    //     collections={questions}
    //     statusCollection={["attempted", "skipped", "normal"]}
    //   />
    //   <CustomButton label={"Submit"} onClick={onClick} shape={"round"} />
    // </div>
  );
}

export default JavaTest;
