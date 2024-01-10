import React from "react";
import Password from "@app/assets/icons/PasswordChanged.svg";
import "../LoginComponents.scss";
import CustomButton from "@app/components/Button/CustomButton";

function Success({ onSuccess, setFpassword }) {
  const Successtitle = "Password Changed";
  const SuccessDescription =
    "Your password has been changed successfully. Use your new password to sign in.";
  const SucessButton = "close";

  return (
    <div className="SucessModal">
      <Password />
      <p className="ModalTitle">{Successtitle}</p>
      <div className="ModalInputs">{SuccessDescription}</div>
      <CustomButton
        label={SucessButton}
        htmlType={"submit"}
        className={"blueBgBtn"}
        onClick={() => {
          setFpassword(false);
          onSuccess();
        }}
      />
    </div>
  );
}

export default Success;
