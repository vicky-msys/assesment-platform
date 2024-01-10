import { Col, Layout, Row } from "antd";
import React from "react";
import QuestionIcon from "@app/assets/icons/instruct-question-icon.svg";
import TimerIcon from "@app/assets/icons/timer-icon.svg";
import "./TestPage.scss";
import { InstructionContent } from "@app/components/InstructionContent/InstructionContent";
import CheckBox from "../../components/CheckBox/CheckBox";
import CustomButton from "../../components/Button/CustomButton";
import ModalPopUp from "../../components/ModalPopUp/ModalPopUp";
import { useState } from "react";
import WebCamPage from "./webcam-page";
const instructions = [
  { message: "Lorem Ipsum is simply dummy text of the printing" },
  { message: "Lorem Ipsum is simply dummy text of the printing" },
  { message: "Lorem Ipsum is simply dummy text of the printing" },
  { message: "Lorem Ipsum is simply dummy text of the printing" },
];
//const Timer = lazy(() => import("@app/components/Timer/Timer"));
const { Content } = Layout;
function TestInstruction(props) {
    const [openCam, setOpenCam] = useState(false);
  const { title = "", totalTime = 100, questions = [] } = props;
  return (
    <Row className="instruction-main" style={{ minHeight: "88vh" }}>
      <Col span={8} collapsed={false} className="instruction-sider">
        <Col className="instruction-details">
          <div className="instruct-title">{title}</div>
          <Row className="question-label-container">
            <TestLabel
              title="Questions"
              label={questions.length}
              icon={QuestionIcon}
            />
            <TestLabel
              title="Time"
              label={totalTime + " Mins"}
              icon={TimerIcon}
            />
          </Row>
        </Col>
      </Col>
      <Col span={16} className="candidate-layout-content">
        <Layout className="content">
          <Content style={{ margin: "10px 12px", overflow:"auto" }}>
            <Col className="content-container">
              <div className="content-title">Instruction</div>
              <Col className="content-desc">
              <div >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris eget quam quam. Nulla iaculis diam semper leo ornare
                  bibendum. Quisque vehicula mollis scelerisque. Maecenas
                  blandit nisl quis finibus mollis. Quisque eget elit non nisi
                  varius accumsan. In hendrerit nibh nulla. Nunc eu odio nunc.
                  Aliquam commodo eros a scelerisque pellentesque. Sed vulputate
                  rhoncus lorem, ac pharetra libero gravida non. Donec efficitur
                  tellus nec ultrices ultrices. Fusce vitae est faucibus, dictum
                  magna eu, accumsan massa. Nunc scelerisque dui purus, at
                  auctor mauris pulvinar at.
                </p>
                <br />
                <p>
                  Suspendisse vel mi sed augue molestie condimentum. Mauris vel
                  tellus ultricies, scelerisque lorem vitae, fermentum felis.
                  Nullam ipsum purus, convallis interdum sapien ut, ornare
                  suscipit quam. In hac habitasse platea dictumst. Quisque nisl
                  justo, efficitur id molestie in, hendrerit pretium risus. Sed
                  dictum velit eu tellus viverra ultrices. Donec ac eros ut
                  ipsum tincidunt molestie. Sed porttitor malesuada ex, et
                  malesuada purus rhoncus a. Vestibulum scelerisque mauris dui,
                  non dapibus nisi lacinia vel.
                </p>
              </div>
              <InstructionContent data={instructions} labelField="message" />
              <CheckBox className="default-padding" label="Enable for image capture" />
              <CustomButton label="Take Picture" className="btn default-padding" onClick={()=>setOpenCam(true)}/>
              <h4 className="default-padding terms">Terms and Condition</h4>
              <Row className="default-padding terms-content">
                <CheckBox />
                <p>
                I will not consult/copy code from any source including a website, book, or friend/colleague to complete these tests, though may reference language documentation or use an IDE that has code completion features.
                </p>
              </Row>
              <CustomButton label="Start Test" className="btn blueBgBtn default-padding" />
            </Col>
            </Col>
          </Content>
        </Layout>
      </Col>
      <ModalPopUp
        visiblity={openCam}
        title={"Verification"}
        className="main-container"
        okText="Submit"
        width="500px"
        height="500px"
        handleCancel={() => {
          setOpenCam(false);
        }}
      >
        <WebCamPage />
      </ModalPopUp>
    </Row>
  );
}
export default TestInstruction;
function TestLabel(props) {
  let Component = props.icon;
  return (
    <Row className="test-label">
      <Component className="icon-size" />
      <Col className="label-container">
        <span className="label-title">{props.title}</span>
        <span className="label-content">{props.label}</span>
      </Col>
    </Row>
  );
}
