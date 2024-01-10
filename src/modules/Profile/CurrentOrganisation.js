import React from "react";
import "./Profile.scss";
import { Row, Col, Form, DatePicker, Checkbox, Input, Upload } from "antd";
import TextInput from "@app/components/TextInput/TextInput";
import InputContainer from "@app/components/InputContainer/InputContainer";
import moment from "moment";
import IconButton from "@app/components/IconButton/IconButton";
import Attachment from "@app/assets/icons/attachment-icon.svg";
import CustomButton from "@app/components/Button/CustomButton";
import { FORM_ITEM_MODE } from "@app/service/constants/Constants";
const { TextArea } = Input;
const data = [
  {
    isCurrent: true,
  },
  {
    isCurrent: false,
  },
];
function CurrentOrganisation() {
  return (
    <Col className="org-main">
      {data.map((item, index) => {
        return <Organisation key={index} {...item} />;
      })}
      <CustomButton
        label="Add Employment"
        parentClass="add-employ"
        className="btn"
        htmlType="submit"
      />
    </Col>
  );
}

export default CurrentOrganisation;
function Organisation(props) {
  function onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      console.log(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      console.log(`${info.file.name} file upload failed.`);
    }
  }
  const { isCurrent } = props;
  return (
    <Col className="profile-container">
      <h2 className="text-title">
        {isCurrent ? "Current Organisation :" : "Previous Organisation :"}
      </h2>
      <Form>
        <InputContainer label="Organisation" mode={FORM_ITEM_MODE.SIDE}>
          <Row>
            <InputContainer
              isRequired={true}
              message="Enter Company Name"
              label="Company Name"
            >
              <TextInput type="text" allowClear={true} />
            </InputContainer>
            {isCurrent && (
              <Checkbox label="Current Employer">Current Employer</Checkbox>
            )}
          </Row>
        </InputContainer>
        <InputContainer label="Employment Type" mode={FORM_ITEM_MODE.SIDE}>
          <Row>
            <InputContainer
              isRequired={true}
              message="Enter Employment Type"
              label="Type"
            >
              <TextInput type="text" allowClear={true} />
            </InputContainer>
          </Row>
        </InputContainer>
        <InputContainer label="Employment Period" mode={FORM_ITEM_MODE.SIDE}>
          <Row>
            <InputContainer
              isRequired={true}
              message="Enter Joining Date"
              label="Joining Date"
            >
              <DatePicker
                className="date-picker"
                defaultValue={moment("01/01/2015", "DD/MM/YYYY")}
                format={"DD/MM/YYYY"}
              />
            </InputContainer>
            <InputContainer
              isRequired={true}
              message="Enter Leaving Date"
              label="Leaving Date"
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
        <InputContainer label="Role" mode={FORM_ITEM_MODE.SIDE}>
          <Row>
            <InputContainer
              isRequired={true}
              message="Enter Designation"
              label="Designation"
            >
              <TextInput type="text" allowClear={true} />
            </InputContainer>
          </Row>
        </InputContainer>
        <InputContainer label="Annual Salary" mode={FORM_ITEM_MODE.SIDE}>
          <Row>
            <InputContainer
              isRequired={true}
              message="Enter Salary"
              label="Salary"
            >
              <TextInput type="text" allowClear={true} />
            </InputContainer>
          </Row>
        </InputContainer>
        <InputContainer label="Work" mode={FORM_ITEM_MODE.SIDE}>
          <Row>
            <InputContainer
              isRequired={true}
              message="Enter Responsibilities"
              label="Responsibilities"
              className="top-label response-container"
            >
              <TextArea
                className="work-response"
                autoSize={{
                  minRows: 6,
                  maxRows: 6,
                }}
              />
            </InputContainer>
          </Row>
        </InputContainer>
        <InputContainer label="Notice Period" mode={FORM_ITEM_MODE.SIDE}>
          <Row>
            <InputContainer
              isRequired={true}
              message="Enter Notice Period"
              label="Period"
            >
              <TextInput type="text" allowClear={true} />
            </InputContainer>
          </Row>
        </InputContainer>
        <InputContainer label="Upload Files" mode={FORM_ITEM_MODE.SIDE}>
          <Col>
            {isCurrent && (
              <Row className="upload-btn-container">
                <Upload accept=".jpg,.png" onChange={onChange}>
                  <IconButton
                    icon={<Attachment />}
                    className="blueBtn btn"
                    label="1st Month Payslip"
                    shape="box"
                  />
                </Upload>
                <Upload accept=".jpg,.png" onChange={onChange}>
                  <IconButton
                    icon={<Attachment />}
                    className="blueBtn btn"
                    label="2nd Month Payslip"
                    shape="box"
                  />
                </Upload>
                <Upload accept=".jpg,.png" onChange={onChange}>
                  <IconButton
                    icon={<Attachment />}
                    className="blueBtn btn"
                    label="3rd Month Payslip"
                    shape="box"
                  />
                </Upload>
              </Row>
            )}
            <Upload accept=".jpg,.png" onChange={onChange}>
              <IconButton
                icon={<Attachment />}
                className="blueBtn btn"
                label="Attach Offer Letter"
                shape="box"
              />
            </Upload>
            <Upload accept=".jpg,.png" onChange={onChange}>
              <IconButton
                icon={<Attachment />}
                className="blueBtn btn"
                label="Attach Revised Letter"
                shape="box"
              />
            </Upload>
          </Col>
        </InputContainer>
      </Form>
    </Col>
  );
}
