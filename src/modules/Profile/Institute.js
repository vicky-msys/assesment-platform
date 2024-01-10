import React from "react";
import "./Profile.scss";
import { Row, Col, Form, DatePicker } from "antd";
import Dropdown from "@app/components/DropDown/DropDown";
import TextInput from "@app/components/TextInput/TextInput";
import InputContainer from "@app/components/InputContainer/InputContainer";
import moment from "moment";
import IconButton from "@app/components/IconButton/IconButton";
import Attachment from "@app/assets/icons/attachment-icon.svg";
import CustomButton from "@app/components/Button/CustomButton";
import { FORM_ITEM_MODE } from "@app/service/constants/Constants";
const data = [
  {
    isCurrent: true,
  },
  {
    isCurrent: false,
  },
];
const educationType = [
  {
    label: "Full Time",
    value: "fullTime",
  },
  {
    label: "Part Time",
    value: "partTime",
  },
];

function Institute() {
  return (
    <Col className="org-main">
      {data.map((item, index) => {
        return <Organisation key={index} {...item} />;
      })}
      <CustomButton
        label="Add Education"
        parentClass="add-employ"
        className="btn"
        htmlType="submit"
      />
    </Col>
  );
}

export default Institute;
function Organisation(props) {
  const { isCurrent } = props;
  return (
    <Col className="profile-container">
      <Form>
        <InputContainer label="Institute" mode={FORM_ITEM_MODE.SIDE}>
          <Row>
            <InputContainer
              isRequired={true}
              message="Enter Institute/College Name"
              label="Institute/College"
            >
              <TextInput type="text" allowClear={true} />
            </InputContainer>
            <InputContainer
              isRequired={true}
              message="Enter University Name"
              label="University"
            >
              <TextInput type="text" allowClear={true} />
            </InputContainer>
          </Row>
        </InputContainer>
        <InputContainer label="Education Type" mode={FORM_ITEM_MODE.SIDE}>
          <Row>
            <InputContainer
              isRequired={true}
              message="Enter Education Type"
              label="Type"
            >
              <Dropdown Options={educationType} />
            </InputContainer>
          </Row>
        </InputContainer>
        <InputContainer label="Duration" mode={FORM_ITEM_MODE.SIDE}>
          <Row>
            <InputContainer
              isRequired={true}
              message="Enter Start Date"
              label="Start Date"
            >
              <DatePicker
                className="date-picker"
                defaultValue={moment("01/01/2015", "DD/MM/YYYY")}
                format={"DD/MM/YYYY"}
              />
            </InputContainer>
            <InputContainer
              isRequired={true}
              message="Enter Completion Date"
              label="Date of Completion"
            >
              <DatePicker
                disabled={isCurrent}
                className="date-picker"
                defaultValue={moment("01/01/2015", "DD/MM/YYYY")}
                format={"DD/MM/YYYY"}
              />
            </InputContainer>
          </Row>
        </InputContainer>
        <InputContainer label="Course" mode={FORM_ITEM_MODE.SIDE}>
          <Col>
            <Row>
              <InputContainer
                isRequired={true}
                message="Enter Designation"
                label="Education Type"
              >
                <Dropdown Options={educationType} />
              </InputContainer>
              <InputContainer
                isRequired={true}
                message="Enter Degree"
                label="Degree"
              >
                <Dropdown Options={educationType} />
              </InputContainer>
            </Row>
            <Row>
              <InputContainer
                isRequired={true}
                message="Enter Specialization"
                label="Specialization"
              >
                <Dropdown Options={educationType} />
              </InputContainer>
            </Row>
          </Col>
        </InputContainer>
        <InputContainer label="Marks" mode={FORM_ITEM_MODE.SIDE}>
          <Row>
            <InputContainer isRequired={true} message="Enter GPA" label="GPA">
              <TextInput type="text" allowClear={true} />
            </InputContainer>
          </Row>
        </InputContainer>
        <InputContainer label="Upload Files" mode={FORM_ITEM_MODE.SIDE}>
          <Row>
            <IconButton
              icon={<Attachment />}
              className="blueBgBtn"
              label="Attach Mark Sheet"
              shape="box"
            />
          </Row>
        </InputContainer>
      </Form>
    </Col>
  );
}
