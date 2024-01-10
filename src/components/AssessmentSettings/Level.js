import { Col, Form, Row } from "antd";
import React, { useRef } from "react";
import CustomButton from "../Button/CustomButton";
import TextInput from "../TextInput/TextInput";
import propTypes from "prop-types";
import AlertSymbol from "@app/assets/icons/AlertSymbol.svg";
import ListContainer from "../ListContainer/ListContainer";
import TopicsCard from "../TopicsCard/TopicsCard";

function Level({
  label,
  renderList,
  title,
  className,
  btnLabel,
  handleSubmit,
  itemName,
  renderAsCard,
}) {
  const formRef = useRef();
  const handleFormSubmit = (data) => {
    handleSubmit(data);
    formRef.current.resetFields();
  };
  return (
    <div className="topics-container">
      <Form onFinish={handleFormSubmit} ref={formRef}>
        <Row className={className}>
          <Col span={9}>
            <Form.Item
              label={label}
              name={itemName}
              rules={[{ required: true, message: "Level is required" }]}
            >
              <TextInput />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={20}>
            <Form.Item
              label="Add Description"
              name="description"
              rules={[
                {
                  required: true,
                  message: (
                    <p className="alert">
                      <AlertSymbol /> Description is required
                    </p>
                  ),
                },
              ]}
            >
              <TextInput type="textarea" />
            </Form.Item>
          </Col>
        </Row>
        <CustomButton htmlType="submit" label={btnLabel} />
      </Form>
      <div className="topics-list">
        <div className="topics-list-container">
          {renderAsCard ? (
            <ListContainer
              containerName={title}
              gridRenderer={TopicsCard}
              data={renderList}
            />
          ) : (
            renderList.map((item, index) => (
              <Col key={index} className="level-item">
                <Row className="topic">{item}</Row>
              </Col>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

Level.defaultProps = {
  className: "grid-level-container",
  btnLabel: "Save",
  label: "",
  title: "",
  renderList: [],
  renderAsCard: false,
  itemName: "",
};

Level.propTypes = {
  className: propTypes.string,
  btnLabel: propTypes.string,
  label: propTypes.string,
  title: propTypes.string,
  itemName: propTypes.string,
  renderList: propTypes.array.isRequired,
  renderAsCard: propTypes.bool,
};

export default Level;
