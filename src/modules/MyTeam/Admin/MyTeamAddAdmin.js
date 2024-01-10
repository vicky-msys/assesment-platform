import { Col, Form, Row } from "antd";
import React from "react";
import AdminCardProfile from "../../../components/AdminCardProfile/AdminCardProfile";
import CustomButton from "../../../components/Button/CustomButton";
import { SERVICE_OPTIONS } from "@app/service/constants/Constants";
import DropDown from "../../../components/DropDown/DropDown";
import MultiSelect from "../../../components/MultiSelect/MultiSelect";
import TextInput from "../../../components/TextInput/TextInput";
import "./MyTeam.scss";

function MyTeamAddAdmin() {
  const dropDownOptions = [
    {
      label: "Cake",
      value: "Cake",
    },
    {
      label: "Juice",
      value: "Juice",
    },
    {
      label: "Noodles",
      value: "Noodles",
    },
    {
      label: "Jam",
      value: "Jam",
    },
    {
      label: "Shawarma",
      value: "Shawarma",
    },
  ];

  return (
    <div className="my-team-add-admin">
      <h3>Add Member</h3>
      <Row className="image-upload">
        <Col>
          <AdminCardProfile
            username="Gayathri Venkatesh"
            className="admin-profile"
          />
        </Col>
        <Col>
          <CustomButton label="Upload Picture" />
        </Col>
      </Row>
      <Row>
        <Form className="input-container">
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: "Please enter first name!" }]}
          >
            <TextInput type="text" allowClear={true} placeholder="" />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true, message: "Please enter last name!" }]}
          >
            <TextInput type="text" allowClear={true} placeholder="" />
          </Form.Item>
          <Form.Item
            name="phoneNo"
            label="Phone No"
            rules={[{ required: true, message: "Please enter Phone No!" }]}
          >
            <TextInput type="text" allowClear={true} placeholder="" />
          </Form.Item>
          <Form.Item
            name="Designation"
            label="Designstion"
            rules={[{ required: true, message: "Please Select Designation!" }]}
          >
            <DropDown Options={dropDownOptions} />
          </Form.Item>
          <Form.Item
            name="profile"
            label="User Profile"
            rules={[{ required: true, message: "Please enter last name!" }]}
          >
            <DropDown Options={dropDownOptions} />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please enter Phone No!" }]}
          >
            <TextInput type="text" allowClear={true} placeholder="" />
          </Form.Item>
          <Form.Item
            className="skill-input"
            name="skills"
            label="Skills"
            rules={[{ required: true, message: "Please enter Phone No!" }]}
          >
            <MultiSelect className="service" treeData={SERVICE_OPTIONS} />
          </Form.Item>
          <div className="button-container">
            <CustomButton label="Cancel" className="whiteBgbluecolorBtn"/>
            <CustomButton label="Save" htmlType="submit" />
          </div>
        </Form>
      </Row>
    </div>
  );
}

export default MyTeamAddAdmin;
