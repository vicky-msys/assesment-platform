import React from "react";
import { Area } from "@ant-design/plots";
import "./AreaChart.scss";
import propTypes from "prop-types";
import { AREA_CHART_CONFIG } from "@app/service/constants/Constants";

export const AreaChart = (props) => {
  const { xField, yField, data } = props;
  const dynamicData = {
    data,
    xField: xField,
    yField: yField,
    tooltip: {
      position: "top",
      customContent: (title, data) => {
        return (
          <div className="custom-tooltip">
            <div className="tooltip-title">{title}</div>
            <div className="tooltip-content">{data[0]?.value}K</div>
          </div>
        );
      },
    },
  };
  const config = AREA_CHART_CONFIG;

  return (
    <div className="area-chart-container">
      <h2 className="area-chart-title">Monthly Revenue</h2>
      <Area {...config} {...dynamicData} />
    </div>
  );
};

AreaChart.propTypes = {
  xField: "",
  yField: "",
  data: [],
};

AreaChart.propTypes = {
  xField: propTypes.string,
  yField: propTypes.string,
  data: propTypes.array,
};

export default AreaChart;
