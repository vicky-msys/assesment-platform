import { Col, Row, Switch } from "antd";
import React from "react";
import "./Email.scss";

function Email({ renderList }) {
  return renderList.map((item, index) => (
    <div key={index} className="assessment-settings-email-container">
      <h3>
        <b>{item.title}</b>
      </h3>
      <Row className="assessment-mail-row">
        <Col className="email-text" span={15}>
          {item.label}
        </Col>
        <Col span={3} />
        <Col span={1}>
          <Switch onChange={item.onchange} />
        </Col>
      </Row>
    </div>
  ));
}

export default Email;
