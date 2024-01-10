/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

import { Form, InputNumber } from "antd";
import React from "react";
import { useState, useEffect } from "react";
import CustomButton from "@app/components/Button/CustomButton";
import TextInput from "@app/components/TextInput/TextInput";
import "./Login.scss";
import CheckBox from "@app/components/CheckBox/CheckBox";
import ModalPopUp from "@app/components/ModalPopUp/ModalPopUp";
import { useNavigate } from "react-router-dom";
import {
  CANDIDATE,
  ADMIN,
  SUPERADMIN,
} from "@app/service/constants/roles.const";
import { useAuthContext } from "@app/service/context/AuthContext";
import Success from "@app/components/LoginComponents/Success/Success";
import OTP from "@app/components/LoginComponents/Otp/Otp";
import Reset from "@app/components/LoginComponents/Reset/Reset";
import Email from "@app/components/LoginComponents/Email/Email";

export default function Login() {
  const emailvalidation = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const passwordvalidation = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Za-z]).{8,}$/;
  // 8 letter  ,1 number , i special character

  // const [userdata, setUserData] = useState({ mail: true, userpassword: "" });
  const [fpassword, setFpassword] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log(count);
    if (count === 5) {
      setCount(1);
    }
  }, [count]);

  const sign = "Sign In";
  const FPassword = "Forget Password";

  const userData = {
    username: "test-user",
    name: "Test User",
    email: "test-user@testmail.com",
    role: CANDIDATE,
  };
  const superAdminData = {
    username: "super-admin-user",
    name: "Super Admin User",
    email: "test-user@testmail.com",
    role: SUPERADMIN,
  };
  const adminData = {
    username: "admin-user",
    name: "Admin User",
    email: "test-user@testmail.com",
    role: ADMIN,
  };

  const { setAuthData } = useAuthContext();
  const history = useNavigate();

  function redirectPage() {
    history("/dashboard");
  }

  const onSuccess = () => {
    setCount((prev) => prev + 1);
  };

  const onFinish = (data) => {
    let email = emailvalidation.test(data.email);
    let password = passwordvalidation.test(data.password);
    // setUserData({ mail: email, userpassword: password });

    if (data.email === "s@m.com" && data.password === "1111") {
      superAdminData.callBack = redirectPage;
      superAdminData.token = "gchgfcjgjgjjgvjv"; //res.data;
      setAuthData(superAdminData);
    } else if (data.email === "admin@mail.com" && data.password === "1111") {
      adminData.callBack = redirectPage;
      adminData.token = "jgvjgvjgvjgvjgvjgvjvjvjgvjgv";
      setAuthData(adminData);
    } else {
      userData.callBack = redirectPage;
      userData.token = "jgvjgvjgvjgvjgvjgvjvjvjgvjgv";
      setAuthData(userData);
    }
  };

  const Modal = {
    1: <Email onSuccess={onSuccess} />,
    2: <OTP onSuccess={onSuccess} />,
    3: <Reset onSuccess={onSuccess} />,
    4: <Success onSuccess={onSuccess} setFpassword={setFpassword} />,
  };

  return (
    <>
      <div className="login-Form-container">
        <div className="Login-Form">
          <Form validateTrigger={"onBlur"} onFinish={onFinish}>
            <Form.Item
              name="email"
              rules={[
                { type: "email", message: " E-mail is incorrect!" },
                {
                  required: true,
                  message: "Enter valid mail",
                },
              ]}
            >
              <TextInput labelText="Email" placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <TextInput
                labelText="password"
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <p
              className="Forget-Password"
              onClick={() => {
                setFpassword(true);
              }}
              aria-hidden
            >
              {FPassword}
            </p>
            <Form.Item name="remember" valuePropName="checked">
              <CheckBox label="Keep me logged in" />
            </Form.Item>

            <CustomButton
              label="Sign In"
              className="blueBgBtn"
              htmlType="submit"
            />
          </Form>
        </div>
      </div>

      <ModalPopUp
        visiblity={fpassword}
        isCancel={false}
        handleCancel={() => {
          setFpassword(false);
        }}
        okText={""}
        title={""}
        className="btn-centered-modal"
      >
        {Modal[count]}
      </ModalPopUp>
    </>
  );
}
