import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./CandidateBasicInfo.scss";

function CandidateBasicInfo({ data }) {
  console.log(data);
  return (
    <div className="basic-info-container">
      <h1>Candidate Info</h1>
      <Row className="basic-info">
        <Col span={6}>
          <Row className="key">Name</Row>
          <Row className="value">{data.name}</Row>
        </Col>
        <Col span={1} />
        <Col span={3}>
          <Row className="key">Phone No</Row>
          <Row className="value">{data.phone}</Row>
        </Col>
        <Col span={1} />
        <Col span={3}>
          <Row className="key">Job Role</Row>
          <Row className="value">{data.role}</Row>
        </Col>
        <Col span={1} />
        <Col span={3}>
          <Row className="key">Experience</Row>
          <Row className="value">{data.experience} Years</Row>
        </Col>
        <Col span={1} />
        <Col span={4}>
          <Row className="key">Last Working Day</Row>
          <Row className="value">{data.lastworking}</Row>
        </Col>
        <Col span={6}>
          <Row className="key">Email</Row>
          <Row className="value">{data.email}</Row>
        </Col>
        <Col span={1} />
        <Col span={3}>
          <Row className="key">Resume</Row>
          <Row className="value">resumeLink.dox</Row>
        </Col>
      </Row>
      <Link to={`/candidates/candidatedetails/${data.id}`}>
        <p>View Details</p>
      </Link>
    </div>
  );
}

export default CandidateBasicInfo;
