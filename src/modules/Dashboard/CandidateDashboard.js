import { Col, Layout, Row } from "antd";
import React from "react";
import AdminCardProfile from "@app/components/AdminCardProfile/AdminCardProfile";
import EMail from "@app/assets/icons/email-icon.svg";
import Phone from "@app/assets/icons/phone-icon.svg";
import "./CandidateDashboard.scss";
import InstructionPage from "@app/modules/TestPage/JavaTest/InstructionPage";
import GridView from "@app/components/GridView/GridView";
import TestCard from "@app/components/AdminCard/TestCard";
import { useNavigate } from "react-router-dom";
//const Timer = lazy(() => import("@app/components/Timer/Timer"));
const { Content } = Layout;
const assessments = [
  {isComplete:true,title:"Cognitive Aptitude",questions:[{label:"question1"},{label:"question2"}], expireDate:"02/11/2022",timeLimit:480},
  {isComplete:false,title:"Numerical Reasoning",questions:[{label:"question1"},{label:"question2"},{label:"question3"}], expireDate:"03/11/2022",timeLimit:300},
  {isComplete:false,title:"Python ",questions:[{label:"question1"},{label:"question2"},{label:"question3"},{label:"question4"}], expireDate:"04/11/2022",timeLimit:600},
  {isComplete:false,title:"Python1 ",questions:[{label:"question1"},{label:"question2"},{label:"question3"},{label:"question4"}], expireDate:"04/11/2022",timeLimit:600},
  {isComplete:false,title:"Python2 ",questions:[{label:"question1"},{label:"question2"},{label:"question3"},{label:"question4"}], expireDate:"04/11/2022",timeLimit:600},
  {isComplete:true,title:"Javascript",questions:[{label:"question1"},{label:"question2"}], expireDate:"05/11/2022",timeLimit:1200},
  {isComplete:true,title:"Javascript1",questions:[{label:"question1"},{label:"question2"}], expireDate:"05/11/2022",timeLimit:1200},
  {isComplete:true,title:"Javascript2",questions:[{label:"question1"},{label:"question2"}], expireDate:"05/11/2022",timeLimit:1200},
  {isComplete:true,title:"Javascript3",questions:[{label:"question1"},{label:"question2"}], expireDate:"05/11/2022",timeLimit:1200},
  {isComplete:true,title:"Javascript4",questions:[{label:"question1"},{label:"question2"}], expireDate:"05/11/2022",timeLimit:1200},
  {isComplete:true,title:"Javascript5",questions:[{label:"question1"},{label:"question2"}], expireDate:"05/11/2022",timeLimit:1200},
];
const instructions = [
  {message:"Lorem Ipsum is simply dummy text of the printing"},
  {message:"Lorem Ipsum is simply dummy text of the printing"},
  {message:"Lorem Ipsum is simply dummy text of the printing"},
  {message:"Lorem Ipsum is simply dummy text of the printing"},
]
function getDetails(data){
  let complete = 0, pending = 0, total = 0;
  data.map(function(item){
    complete = complete + (item.isComplete?1:0);
    pending = pending + (item.isComplete?0:1);
    total = total + (item.isComplete?item.timeLimit:0);
  });
  return {complete,pending,total};
}
function CandidateDashboard(props) {
  const {email="fgkjb@hbhvb.kjhgv", mobile="9867565645"} = props;
  const history = useNavigate();
  const details = getDetails(assessments);
  function onClick(obj){
    console.log("obj  ",obj);
    history("/testpage");
  }
  return (
    <Row className="candidate-main" style={{ minHeight: "88vh" }}>
      <Col span={4} collapsed={false} className="candidate-layout-sider">
        <Col className="profile-details">
          <AdminCardProfile username="Vijay Govindan" className="side-profile" />
          <div className="profile-name">Vijay Govindan</div>
        </Col>
        <ContactForm email={email} mobile={mobile} className="contact-details"/>
        <InstructionPage labelField="message" title="Instructions" data={instructions} className="instruction-details"/>
      </Col>
      <Col span={20} className="candidate-layout-content">
        <Layout className="content">
          <Content style={{ margin: "10px 12px" }}>
            <Col className="content-container">
              <Row className="assessment">
                <span className="assessment-label">My Assessments</span>
                <Row className="status-cont">
                  <Col className="status-label">
                    <span className="assessment-label status-completed">{details.completed || 0}</span>
                    <span className="status-title-label">Completed</span>   
                  </Col>
                  <Col className="status-label">
                    <span className="assessment-label status-pending">{details.pending || 0}</span>
                    <span className="status-title-label">Pending</span>
                  </Col>
                  <Col className="status-label">
                    <Row className="time-limit-label"><span className="assessment-label status-total">{Math.floor(details.total / 60) || 0}</span><span>Mins</span></Row>
                    <span className="status-title-label">Total Time Spent</span>
                  </Col>
                </Row>
              </Row>
              <Row className="assessment-list">
              <div className="list-children">
                <GridView
                    data={assessments}
                    gridRenderer={TestCard}
                    onClickHandler={onClick}
                  />
              </div>
              </Row>
            </Col>
          </Content>
        </Layout>
      </Col>
    </Row>
  );
}
export default CandidateDashboard;
function ContactForm(props){
  const {email, mobile, className } = props;
  return <Col className={className}>
    <div className="contact-title">Contact Details</div>
    <Row className="contact-main"><EMail className="icon-size"/><div>{email}</div></Row>
    <Row className="contact-main"><Phone  className="icon-size"/><div>{mobile}</div></Row>
  </Col>
}