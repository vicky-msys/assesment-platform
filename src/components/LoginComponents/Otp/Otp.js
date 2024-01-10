import React from "react";
import { Form, InputNumber } from "antd";
import "../LoginComponents.scss";
import CustomButton from "@app/components/Button/CustomButton";
import { useState } from "react";

function Otp({ onSuccess }) {
  const Otptitle = "Reset Your Password";
  const OtpDescription = "We have sent a code to your email.Enter the code";
  const OtpResend = "Resend";
  const OtpCondition = "Didn’t receive OTP";
  const OtpButton = "Submit";

  const [status, setStatus] = useState("");
  const [OTPError, setOTPError] = useState("");

  const modalFinish = (formData) => {
    console.log(formData);
    const ValidData = `${formData.OtpInput1}${formData.OtpInput2}${formData.OtpInput3}${formData.OtpInput4}`;

    if (ValidData === "1111") {
      onSuccess();
      setStatus("");
      return;
    } else if (
      !formData.OtpInput1 &&
      !formData.OtpInput2 &&
      !formData.OtpInput3 &&
      !formData.OtpInput3
    ) {
      setStatus("error");
      setOTPError("Required");
      return;
    } else {
      setStatus("error");
      setOTPError("Invalid Data");
      return;
    }
  };

  const handleChange = (data, id) => {
    if (data) {
      if (data < 10) {
        document.getElementById(id).focus();
        setStatus("");
        setOTPError("");
      } else {
        console.log("larget @", data, id);
        setStatus("error");
        setOTPError("Please Enter single Digit OTP");
      }
    } else {
      setStatus("");
      setOTPError("");
    }
  };

  return (
    <Form onFinish={modalFinish}>
      <p className="ModalTitle">{Otptitle}</p>
      <div className="ModalInputs">
        {OtpDescription}
        <div className="OtpNumber">
          <Form.Item name="OtpInput1">
            <InputNumber
              min={0}
              id="otp1"
              controls={false}
              status={status}
              onChange={(data) => handleChange(data, "otp2")}
            />
          </Form.Item>
          <Form.Item name="OtpInput2">
            <InputNumber
              id="otp2"
              min={0}
              controls={false}
              status={status}
              onChange={(data) => handleChange(data, "otp3")}
            />
          </Form.Item>
          <Form.Item name="OtpInput3">
            <InputNumber
              id="otp3"
              min={0}
              controls={false}
              status={status}
              onChange={(data) => handleChange(data, "otp4")}
            />
          </Form.Item>
          <Form.Item name="OtpInput4">
            <InputNumber
              id="otp4"
              min={0}
              controls={false}
              status={status}
              onChange={(data) => handleChange(data, "otp4")}
            />
          </Form.Item>
        </div>
      </div>
      <p
        style={{ display: status === "" ? "none" : "block" }}
        className="NumberInputError"
      >
        {OTPError}
      </p>
      <p className="OtpText">
        {OtpCondition} <span style={{ cursor: "pointer" }}>{OtpResend}</span>
      </p>

      <CustomButton
        label={OtpButton}
        htmlType={"submit"}
        className={"blueBgBtn"}
      />
    </Form>
  );
}

export default Otp;
