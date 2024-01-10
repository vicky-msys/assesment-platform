/* eslint-disable no-unused-vars */
import React from "react";
import { Form } from "antd";
import "../LoginComponents.scss";
import CustomButton from "@app/components/Button/CustomButton";
import TextInput from "@app/components/TextInput/TextInput";

function Reset({ onSuccess }) {
  const passwordvalidation = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Za-z]).{8,}$/;
  const Resettitle = "Reset Your Password";
  const ResetButton = "Reset";

  const modalFinish = (Formdata) => {
    onSuccess();
  };

  return (
    <Form onFinish={modalFinish}>
      <p className="ModalTitle">{Resettitle}</p>
      <div className="ModalInputs">
        <Form.Item
          name="New Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            () => ({
              validator(_, value) {
                if (passwordvalidation.test(value) || value === "") {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Minimum 8 Letter ,1 Number ,1 Special character")
                );
              },
            }),
          ]}
        >
          <TextInput placeholder={"New Password"} type={"password"} />
        </Form.Item>
        <Form.Item
          name="Confirm Password"
          dependencies={["New Password"]}
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("New Password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <TextInput placeholder={"Confirm Password"} type={"password"} />
        </Form.Item>
      </div>
      <CustomButton
        label={ResetButton}
        htmlType={"submit"}
        className={"blueBgBtn"}
      />
    </Form>
  );
}

export default Reset;
