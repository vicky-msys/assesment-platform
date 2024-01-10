import React from "react";
import propTypes from "prop-types";
import "./TestSummary.scss";
import { groupBy } from "@app/service/utils/ArrayUtil";
import { Col, Row } from "antd";
import CustomButton from "../Button/CustomButton";

export default function TestSummary(props) {
  const {
    collections,
    containerClass,
    title,
    labelField,
    statusCollection,
    showLegend,
    onSubmit,
    showSubmit,
  } = props;
  return (
    <div className={"test-summary-container "+containerClass}>
      <span className="summary-title">{title}</span>
      {showLegend && (
        <StatusLabel
          statusCollection={statusCollection}
          collections={collections}
          labelField={labelField}
        />
      )}
      <Row className="number-container">
        {collections.map((item, index) => {
          return (
            <NumberLabel
              key={index}
              labelField={labelField}
              item={item}
              label={index + 1}
            />
          );
        })}
      </Row>
      {showSubmit && <CustomButton className="btnTransparentBtn" label={"Submit"} onClick={onSubmit} />}
    </div>
  );
}

TestSummary.defaultProps = {
  containerClass: "",
  statusCollection: [],
  labelField: "status",
  showLegend: true,
  showSubmit: false
};
TestSummary.propTypes = {
  collections: propTypes.array.isRequired,
  onSubmit: propTypes.func,
  containerClass: propTypes.string,
  showLegend: propTypes.bool,
  showSubmit: propTypes.bool,
};

function NumberLabel({ label, item, labelField }) {
  return <label className={"number-label " + item[labelField]}>{label}</label>;
}

function StatusLabel({ statusCollection, collections }) {
  const grouped = groupBy(collections, (item) => item.status);
  let stat = statusCollection.map((item) => {
    let obj = {};
    obj.label = item;
    obj.length = (grouped.get(item) || []).length;
    return obj;
  });

  return (
    <Col className="status-label-container">
      {stat.map((item, index) => {
        return (
          <Row key={index} className="status-label">
            <Row>
              <span className={"status-round " + item.label} />
              <span className="shape ">{item.label}</span>
            </Row>
            <span>{item.length}</span>
          </Row>
        );
      })}
    </Col>
  );
}
