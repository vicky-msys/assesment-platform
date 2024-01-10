/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable linebreak-style */
import React from "react";
import { Progress } from "antd";
import "./progressBar.scss";

export default function progressBar(props) {
  const { percent, strokeColor, strokeWidth } = props;

  return (
    <Progress
      type="circle"
      percent={percent}
      strokeColor={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap={"round"}
      trailColor={"#F3F4F6"}
    />
  );
}
