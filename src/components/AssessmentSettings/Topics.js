import { Col, Form, Row } from "antd";
import React, { useEffect, useRef, useState } from "react";
import CustomButton from "../Button/CustomButton";
import TextInput from "../TextInput/TextInput";
import { sortArray } from "@app/service/utils/Utils";
import ListContainer from "../ListContainer/ListContainer";
import AlertSymbol from "@app/assets/icons/AlertSymbol.svg";
import TopicsCard from "../TopicsCard/TopicsCard";

function Topics({
  renderList,
  title = "Topics",
  handleSubmit,
  editHandler,
  deleteHandler,
  handlers,
}) {
  const formRef = useRef();
  const [topicList, setTopicList] = useState(
    sortArray(renderList.slice(), "title")
  );

  useEffect(() => {
    setTopicList(sortArray(renderList.slice(), "title"));
    console.log(renderList);
  }, [renderList]);

  const handleFormSubmit = (data) => {
    handleSubmit({ ...data, id: renderList.length + 1 });
    formRef.current.resetFields();
  };

  return (
    <div className="topics-container">
      <Form
        onFinish={handleFormSubmit}
        ref={formRef}
        validateTrigger={"onBlur"}
      >
        <Row>
          <Col span={9}>
            <Form.Item
              label="Add Topic"
              name="title"
              rules={[
                {
                  required: true,
                  message: (
                    <p className="alert">
                      <AlertSymbol /> Topic is required
                    </p>
                  ),
                },
                () => ({
                  validator(_, value) {
                    const alreadyExist = topicList.filter(
                      (item) => item.title.toLowerCase() === value.toLowerCase()
                    );
                    if (!alreadyExist.length) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      <p className="alert">
                        <AlertSymbol /> This topic already exists. Please try
                        again.
                      </p>
                    );
                  },
                }),
              ]}
            >
              <TextInput />
            </Form.Item>
          </Col>
          <Col span={2} />
          <Col span={9}>
            <Form.Item
              label="Add Sub Topic"
              name="subTitle"
              rules={[
                {
                  required: true,
                  message: (
                    <p className="alert">
                      <AlertSymbol /> Sub topic is required
                    </p>
                  ),
                },
              ]}
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
        <CustomButton htmlType="submit" label="Save" />
      </Form>
      <div className="topics-list">
        <ListContainer
          containerName={title}
          gridRenderer={TopicsCard}
          data={topicList}
          isSearch
          textInputPlaceHolder="Search for a Topics"
          searchField="title"
          editHandler={editHandler && editHandler}
          deleteHandler={deleteHandler && deleteHandler}
          handlers={handlers}
        />
      </div>
    </div>
  );
}

export default Topics;
