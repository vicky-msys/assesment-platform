import React, { useEffect, useState } from "react";
import "./AdminForm.scss";
import "../../modules/Login/Login.scss"
import { Row, Col, Form, InputNumber } from "antd";
import AdminCardProfile from "../AdminCardProfile/AdminCardProfile";
import CustomButton from "../Button/CustomButton";
import TextInput from "../TextInput/TextInput";
import Dropdown from "../DropDown/DropDown";
import { country } from "@app/assets/mockdata/country";
import ModalPopUp from "../ModalPopUp/ModalPopUp";
import ProfileUpdate from "../ProfileUpdate/ProfileUpdate";
import image from "@app/assets/images/img.png";


function AdminForm({ isTitle = true }) {
  const [coun, setCountry] = useState([]);
  const [show, setShow] = useState(false);


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

  const handleCancel = () => {
    setShow(false);
  };

  const onFinish = (values) => {
    console.log("working");
    console.log(values, "pppppp");
  };

  useEffect(() => {
    getCountryList();
  }, []);
  
  return (
    <div className="admin-main">
      {isTitle && <p>Add New Admin</p>}
      <Row className="admin-main-container">
        <Col span={5} className="admin-profile-container">
          <div
            style={{ position: "relative" }}
            className="main-profile-container"
            onClick={() => setShow(true)}
            role="presentation"
          >
            <AdminCardProfile
              username="Gayathri Venkatesh"
              className="admin-profile profile-overlay"
            />
            <div className="overlay">
              <img src={image} alt="" width={30} height={30} />
            </div>
          </div>
          <CustomButton
            className="admin-savebtn btn profile-update-btn"
            label="Upload Picture"
            onClick={() => setShow(true)}
          />
        </Col>
        <Col span={50} className="admin-form-container">
          <Form onFinish={onFinish}>
            <Row className="form-row">
              <Col className="admin-left-col">
                <Form.Item
                  name="first"
                  label="First Name"
                  rules={[{ required: true, message: "Please enter name!" }]}
                >
                  <TextInput type="text" allowClear={true} placeholder="" />
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
                    placeholder=""
                    className="input-phone"
                    addonBefore={
                      <Form.Item noStyle initialValue="+91" name="code">
                        <Dropdown
                          allowClear={false}
                          placeholder=""
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
                  <TextInput type="text" placeholder="" allowClear={true} />
                </Form.Item>
                <Form.Item
                  name="role"
                  label="User Role"
                  rules={[{ required: true, message: "Please select role!" }]}
                >
                  <Dropdown placeholder="" Options={dropDownOptions} />
                </Form.Item>
              </Col>
              <Col className="admin-right-col">
                <Form.Item
                  name="last"
                  label="Last Name"
                  rules={[{ required: true, message: "Last name required!" }]}
                >
                  <TextInput type="text" placeholder="" allowClear={true} />
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
                  <TextInput type="email" placeholder="" allowClear={true} />
                </Form.Item>
                <Form.Item
                  name="state"
                  label="State"
                  rules={[{ required: true, message: "State required!" }]}
                >
                  <Dropdown placeholder="" Options={dropDownOptions} />
                </Form.Item>
                <Form.Item
                  name="address"
                  label="Address"
                  rules={[{ required: true, message: "Address required!" }]}
                >
                  <TextInput
                    type="textarea"
                    placeholder=""
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
                  className="admin-form-cancel btn"
                />
              </Col>
              <Col>
                <CustomButton
                  label="Save"
                  className="admin-savebtn btn"
                  htmlType="submit"
                />
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <ModalPopUp
        visiblity={show}
        title={"Update Profile Picture"}
        className="main-container"
        width="60%"
        height="50%"
        closable
        handleCancel={() => {
          setShow(false);
        }}
      >
        <ProfileUpdate handleCancel={handleCancel} />
      </ModalPopUp>
    </div>
  );
}

export default AdminForm;
