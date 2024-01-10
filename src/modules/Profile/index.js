import React, { useState } from "react";
import CurrentOrganisation from "./CurrentOrganisation";
import ProfilePage from "./ProfilePage";
import Header from "@app/components/Header/Header";
import Institute from "./Institute";
import "./Profile.scss";
import { Row, Steps } from "antd";
import CustomButton from "@app/components/Button/CustomButton";
import { Link } from "react-router-dom";
const { Step } = Steps;

const Profile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  function nextHandler() {
    setCurrentIndex(currentIndex + 1);
  }
  function backHandler() {
    setCurrentIndex(currentIndex - 1);
  }
  //const { authData } = useAuthContext();
  return (
    <div className="profile-layout">
      <header className="profile-header">
        <Header showDisplay={false}>
          <div className="step-container">
            <Steps current={currentIndex} labelPlacement="vertical">
              <Step title="Basic Details" />
              <Step title="Employment Details" />
              <Step title="Education Details" />
            </Steps>
          </div>
        </Header>
      </header>
      <main className="main">
        <section>
          <main>
            <ViewStack index={currentIndex}>
              <ProfilePage />
              <CurrentOrganisation />
              <Institute />
            </ViewStack>
            <Row className="profile-btn-container">
              <Row>
                {currentIndex > 0 && <CustomButton onClick={backHandler} label="Back" className="btn" />}
              </Row>
              <Row className="save-btn-container">
                {currentIndex < 2 && <CustomButton label="Save" className="blueBgBtn btn"/>}
                {currentIndex < 2 && <CustomButton
                    label="Next"
                    className=" btn"
                    onClick={nextHandler}
                  />}
                {currentIndex === 2 && <Link to="/dashboard"><CustomButton label="Preview & Submit" className={(currentIndex === 2?"":"hidden")+" blueBgBtn btn"} /></Link>}
              </Row>
            </Row>
          </main>
        </section>
      </main>
    </div>
  );
};

function ViewStack(props) {
  return props.children[props.index];
}
export default Profile;
