import React from "react";
import { Row, Col, Form, DatePicker, Checkbox, Upload } from "antd";
import AdminCardProfile from "@app/components/AdminCardProfile/AdminCardProfile";
import CustomButton from "@app/components/Button/CustomButton";
import MultiSelect from "@app/components/MultiSelect/MultiSelect";
import TextInput from "@app/components/TextInput/TextInput";
import Dropdown from "@app/components/DropDown/DropDown";
//import { country } from "@app/assets/mockdata/country";
import InputContainer from "@app/components/InputContainer/InputContainer";
import { SERVICE_OPTIONS } from "@app/service/constants/Constants";
import moment from "moment";
import "./Profile.scss";
import IconButton from "@app/components/IconButton/IconButton";
import Attachment from "@app/assets/icons/attachment-icon.svg";
import { FORM_ITEM_MODE } from "@app/service/constants/Constants";

const idOptions = [
  {
    label: "Aadhaar",
    value: "aadhaar",
  },
  {
    label: "Driving License",
    value: "license",
  },
  {
    label: "Voter ID",
    value: "voterid",
  },
];

function ProfilePage(props) {
  const { onFinish } = props;
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
  return (
    <div className="org-main">
      <Col className="profile-page-container">
        <Form onFinish={onFinish} validateTrigger="onBlur">
          <InputContainer
            label="Profile Picture"
            className="profile-label"
            mode={FORM_ITEM_MODE.SIDE}
          >
            <Row className="avator-container">
              <AdminCardProfile
                username="Vijay Govindan"
                className="org-profile"
              />
              <Upload accept=".jpg,.png" onChange={onChange}>
                <CustomButton
                  label="Upload Picture"
                  className="blueBgBtn btn"
                />
              </Upload>
            </Row>
          </InputContainer>
          <InputContainer label="Name" mode={FORM_ITEM_MODE.SIDE}>
            <Row>
              <InputContainer
                isRequired={true}
                message="Enter First Name"
                label="First Name"
              >
                <TextInput type="text" allowClear={true} />
              </InputContainer>
              <InputContainer
                isRequired={true}
                message="Enter Last Name"
                label="Last Name"
              >
                <TextInput type="text" allowClear={true} />
              </InputContainer>
            </Row>
          </InputContainer>
          <InputContainer label="Contact" mode={FORM_ITEM_MODE.SIDE}>
            <Col>
              <Row>
                <InputContainer
                  isRequired={true}
                  message="Enter Phone Number"
                  label="Phone No"
                >
                  <TextInput type="text" allowClear={true} />
                </InputContainer>
                <InputContainer
                  isRequired={true}
                  message="Enter Email"
                  label="Email"
                >
                  <TextInput type="text" allowClear={true} />
                </InputContainer>
              </Row>
              <Row>
                <InputContainer
                  isRequired={true}
                  message="Enter Alternate Number"
                  label="Alternate No"
                >
                  <TextInput type="text" allowClear={true} />
                </InputContainer>
              </Row>
            </Col>
          </InputContainer>
          <InputContainer label="Gender" mode={FORM_ITEM_MODE.SIDE}>
            <Row>
              <InputContainer
                isRequired={true}
                message="Enter Gender"
                label="Select Gender"
              >
                <TextInput type="text" allowClear={true} />
              </InputContainer>
            </Row>
          </InputContainer>
          <InputContainer label="Date Of Birth" mode={FORM_ITEM_MODE.SIDE}>
            <Row>
              <InputContainer isRequired={true} message="Enter DOB" label="DOB">
                <DatePicker
                  className="date-picker"
                  defaultValue={moment("01/01/2015", "DD/MM/YYYY")}
                  format={"DD/MM/YYYY"}
                />
              </InputContainer>
            </Row>
          </InputContainer>
          <InputContainer label="Date Of Birth" mode={FORM_ITEM_MODE.SIDE}>
            <Row>
              <InputContainer
                isRequired={true}
                message="Enter Skills"
                label="Skills"
              >
                <MultiSelect className="service" treeData={SERVICE_OPTIONS} />
              </InputContainer>
            </Row>
          </InputContainer>
          <InputContainer label="Location" mode={FORM_ITEM_MODE.SIDE}>
            <Col>
              <Address title="Current Address" />
              <Checkbox onChange={onChange}>Same as Current Address</Checkbox>
              <Address title="Permanent Address" />
            </Col>
          </InputContainer>
          <InputContainer label="Languages Known" mode={FORM_ITEM_MODE.SIDE}>
            <Row>
              <InputContainer
                isRequired={true}
                message="Enter Languages"
                label="languages"
              >
                <MultiSelect className="service" treeData={SERVICE_OPTIONS} />
              </InputContainer>
            </Row>
          </InputContainer>
          <InputContainer
            label="ID Proof Number"
            mode={FORM_ITEM_MODE.SIDE}
            noteEnable={true}
            noteMessage="Note: ID Proof should be your aadhar Card, Driving licence, Pan Card or Voter ID card. Maximum file size 2MB"
          >
            <Row>
              <InputContainer
                isRequired={true}
                message="Select ID Type"
                label="ID Type"
              >
                <Dropdown Options={idOptions} />
              </InputContainer>
              <InputContainer
                isRequired={true}
                message="Enter ID Number"
                label="Number"
              >
                <TextInput type="text" allowClear={true} />
              </InputContainer>
              <Upload accept=".jpg,.png" onChange={onChange}>
                <IconButton
                  icon={<Attachment />}
                  className="blueBtn btn"
                  label="Attach ID Proof"
                  shape="box"
                />
              </Upload>
            </Row>
          </InputContainer>
          <InputContainer label="Upload Resume" mode={FORM_ITEM_MODE.SIDE}>
            <Upload accept=".jpg,.png" onChange={onChange}>
              <IconButton
                icon={<Attachment />}
                className="blueBtn btn"
                label="Attach Resume"
                shape="box"
              />
            </Upload>
          </InputContainer>
        </Form>
      </Col>
    </div>
  );
}
export default ProfilePage;
function Address(props) {
  const { title } = props;
  return (
    <Col className="address">
      <p className="address-title">{title}</p>
      <Row>
        <InputContainer
          isRequired={true}
          message="Enter Address"
          label="Address"
        >
          <TextInput type="text" allowClear={true} />
        </InputContainer>
      </Row>
      <Row>
        <InputContainer isRequired={true} message="Enter City" label="City">
          <TextInput type="text" allowClear={true} />
        </InputContainer>
        <InputContainer isRequired={true} message="Enter State" label="State">
          <TextInput type="text" allowClear={true} />
        </InputContainer>
      </Row>
      <Row>
        <InputContainer
          isRequired={true}
          message="Enter Pincode"
          label="Pincode"
        >
          <TextInput type="text" allowClear={true} />
        </InputContainer>
      </Row>
    </Col>
  );
}
