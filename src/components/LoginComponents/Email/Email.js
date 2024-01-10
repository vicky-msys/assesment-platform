/* eslint-disable no-unused-vars */
import { Form } from "antd";
import React from "react";
import "../LoginComponents.scss";
import CustomButton from "@app/components/Button/CustomButton";
import TextInput from "@app/components/TextInput/TextInput";

function Email({onSuccess}) {
  const Mailtitle = "Reset Your Password";
  const MailDescription =
    "To reset your password enter your email address and will send you the opt";
  const MailButton = "Send OTP";

  const modalFinish = (Formdata) =>
  {
    onSuccess()
  }

  return (
    <Form onFinish={modalFinish}>
      <p className="ModalTitle">{Mailtitle}</p>
      <div className="ModalInputs">
        {MailDescription}
        <Form.Item
          name="mail"
          rules={[
            { type: "email", message: "Enter valid mail" },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <TextInput placeholder={"Email"} />
        </Form.Item>
      </div>
      <CustomButton
        label={MailButton}
        htmlType={"submit"}
        className={"blueBgBtn"}
      />
    </Form>
  );
}

export default Email;
