import React, { useEffect, useState } from "react";
import "./OrganizationForm.scss";
import { Row, Col, Form, InputNumber } from "antd";
import AdminCardProfile from "../AdminCardProfile/AdminCardProfile";
import CustomButton from "../Button/CustomButton";
import MultiSelect from "../MultiSelect/MultiSelect";
import TextInput from "../TextInput/TextInput";
import Dropdown from "../DropDown/DropDown";
import { country } from "@app/assets/mockdata/country";
import { useAuthContext } from "@app/service/context/AuthContext";
import { SERVICE_OPTIONS } from "@app/service/constants/Constants";
import ModalPopUp from "../ModalPopUp/ModalPopUp";
import ProfileUpdate from "../ProfileUpdate/ProfileUpdate";
import image from "@app/assets/images/img.png";

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

function OrganisationForm() {
  const { authData } = useAuthContext();
  const [coun, setCountry] = useState([]);
  const handleCancel = () => setShow(false);

  const getCountryList = async () => {
    const CountryArray = [];
    country.map((item) => {
      const list = {
        label: <img src={item.flagUrl} width={40} height={40} alt="" />,
        value: item.call_code,
      };
      CountryArray.push(list);
    });
    setCountry(CountryArray);
  };

  const onFinish = (values) => {
    console.log("working");
    console.log(values, "pppppp");
  };
  useEffect(() => {
    getCountryList();
  }, []);
  const [show, setShow] = useState(false);
  return (
    <div className="org-main">
      <p>Add New Organisation</p>
      <Row className="org-main-container">
        <Col className="org-profile-container" span={5}>
          <div
            style={{ position: "relative" }}
            className="main-profile-container"
            onClick={() => setShow(true)}
            role="presentation"
          >
            <AdminCardProfile
              username={authData ? authData.name : "Not Found"}
              className="org-profile profile-overlay"
            />
            <div className="overlay">
              <img src={image} alt="" width={30} height={30} />
            </div>
          </div>
          <div className="overlay">
            <img src={image} alt="" width={30} height={30} />
          </div>
        </Col>
        <Col span={50} className="org-form-container">
          <Form onFinish={onFinish}>
            <Row className="org-form-item-container">
              <Col className="org-left-col">
                <Form.Item
                  name="Organisation"
                  label="Organisation"
                  rules={[{ required: true, message: "Please enter name!" }]}
                >
                  <TextInput type="text" allowClear={true} />
                </Form.Item>
                <Form.Item
                  name="mobileNumber"
                  label="Phone"
                  rules={[
                    {
                      required: true,
                      message: "Mobile number required!",
                    },
                  ]}
                >
                  <InputNumber
                    controls={false}
                    className="input-phone"
                    addonBefore={
                      <Form.Item noStyle initialValue="+91" name="code">
                        <Dropdown
                          allowClear={false}
                          defaultValue="+91"
                          Options={coun}
                        />
                      </Form.Item>
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="city"
                  label="City"
                  rules={[{ required: true, message: "City required!" }]}
                >
                  <TextInput type="text" allowClear={true} />
                </Form.Item>

                <Form.Item
                  name="admin"
                  label="Admin"
                  rules={[{ required: true, message: "Please select admin!" }]}
                >
                  <Dropdown Options={dropDownOptions} />
                </Form.Item>

                <Form.Item
                  name="role"
                  label="User Role"
                  rules={[{ required: true, message: "Please select role!" }]}
                >
                  <Dropdown Options={dropDownOptions} />
                </Form.Item>
              </Col>
              <Col className="org-right-col">
                <Form.Item
                  name="service"
                  label="Services"
                  rules={[
                    { required: true, message: "Please select service!" },
                  ]}
                >
                  <MultiSelect className="service" treeData={SERVICE_OPTIONS} />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: "Email required!" },
                    {
                      required: true,
                      type: "email",
                      message: "Invalid Email id!",
                    },
                  ]}
                >
                  <TextInput type="email" allowClear={true} />
                </Form.Item>
                <Form.Item
                  name="state"
                  label="State"
                  rules={[{ required: true, message: "State required!" }]}
                >
                  <Dropdown Options={dropDownOptions} />
                </Form.Item>
                <Form.Item
                  name="address"
                  label="Address"
                  rules={[{ required: true, message: "Address required!" }]}
                >
                  <TextInput
                    type="textarea"
                    allowClear={true}
                    className="input-address"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row className="btn-row">
              <Col>
                <CustomButton
                  label="Cancel"
                  className="org-form-cancel btn"
                  htmlType="submit"
                />
              </Col>
              <Col>
                <CustomButton
                  label="Save"
                  className="org-savebtn btn"
                  htmlType="submit"
                />
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <ModalPopUp
        visiblity={show}
        okText={"Save"}
        title={"Update Profile Picture"}
        className="main-container"
        width="60%"
        height="50%"
        closable
        handleCancel={handleCancel}
        isFooter={false}
      >
        <ProfileUpdate handleCancel={handleCancel} />
      </ModalPopUp>
    </div>
  );
}

export default OrganisationForm;
