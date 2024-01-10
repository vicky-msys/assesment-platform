import React, { useEffect, useState } from "react";
import "./AssesmentPlatform.scss";
// import CustomButton from "@app/components/Button/CustomButton";
import AssessmentCard from "@app/components/AssessmentCard/AssessmentCard";
import Tab from "@app/components/Tab/Tab";
import Topics from "@app/components/AssessmentSettings/Topics";
import Level from "@app/components/AssessmentSettings/Level";
import Email from "@app/components/AssessmentSettings/Email";
import ModalPopUp from "@app/components/ModalPopUp/ModalPopUp";
import {
  topicsList,
  assessmentCardData,
  levelList,
  categoryList,
} from "@app/assets/mockdata/gridMockData";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAssessmentData,
  fetchApTopicsData,
  getAssessmentData,
  getApTopicsData,
  addTopicsData,
  deleteTopicData,
  editTopicData,
} from "../../features/AssessmentPlatform/AssessmentPlatformSlice";
import { Form } from "antd";
import TextInput from "../../components/TextInput/TextInput";
import CustomButton from "../../components/Button/CustomButton";

const EditPopUp = ({ setModal, defaultValue }) => {
  const dispatch = useDispatch();
  const handleSubmit = (data) => {
    dispatch(editTopicData({ ...data, id: defaultValue.id }));
    setModal();
  };
  return (
    <div className="ap-edit-popup">
      <h3>Edit Topic</h3>
      <Form onFinish={handleSubmit} initialValues={defaultValue}>
        <Form.Item
          rules={[
            {
              required: true,
            },
          ]}
          defaultValue={defaultValue.title}
          name="title"
        >
          <TextInput
            labelText="topic"
            labelClassName="legend-label"
            labelVisiblity
            defaultValue={defaultValue.title}
          />
        </Form.Item>
        <Form.Item
          defaultValue={defaultValue.subTitle}
          name="subTitle"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <TextInput
            labelClassName="legend-label"
            labelVisiblity
            labelText="Sub Topic"
            defaultValue={defaultValue.subTitle}
          />
        </Form.Item>
        <Form.Item
          defaultValue={defaultValue.description}
          name="description"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <TextInput
            labelClassName="legend-label"
            labelVisiblity
            type="textarea"
            labelText="Description"
            defaultValue={defaultValue.description}
          />
        </Form.Item>
        <div className="edit-popup-footer">
          <CustomButton
            onClick={setModal}
            className="whiteBgbluecolorBtn"
            label="Discard"
          />
          <CustomButton label="Edit" htmlType="submit" />
        </div>
      </Form>
    </div>
  );
};

const DeletePopUp = ({ setModal, defaultValue }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    setModal();
    dispatch(deleteTopicData(defaultValue));
  };
  return (
    <div className="ap-edit-popup grid">
      <h3>Are You Sure?</h3>
      <p>You want to delete the topic?</p>
      <div className="edit-popup-footer">
        <CustomButton
          onClick={setModal}
          className="whiteBgbluecolorBtn"
          label="Cancel"
        />
        <CustomButton onClick={handleDelete} label="Delete" htmlType="submit" />
      </div>
    </div>
  );
};

function AssessmentPlatform() {
  const navigateTo = useNavigate();
  const [level, setLevel] = useState(levelList);
  const [category, setCategory] = useState(categoryList);

  const dispatch = useDispatch();
  const cardData = useSelector(getAssessmentData);
  const TopicsCarddata = useSelector(getApTopicsData);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [deletemodalVisibility, setDeleteModalVisibility] = useState(false);
  const [editData, setEditData] = useState({});
  const [deleteData, setDeleteData] = useState({});

  const setModal = (data) => {
    setModalVisibility((prev) => !prev);
    setEditData(data);
  };

  const setDeleteModal = (data) => {
    setDeleteModalVisibility((prev) => !prev);
    setDeleteData(data);
  };

  useEffect(() => {
    dispatch(fetchAssessmentData(assessmentCardData));
    dispatch(fetchApTopicsData(topicsList));
  }, []);

  const handleCard = (data) => {
    navigateTo(`/assessmentplatform/${data.domain.toLowerCase()}`);
  };
  const handleLevelSubmit = (data) =>
    setLevel((prev) => [
      ...prev,
      { title: data.level, description: data.description || "" },
    ]);

  const handleCategorySubmit = (data) =>
    setCategory((prev) => [
      ...prev,
      { title: data.category, description: data.description || "" },
    ]);

  const handleTopicsSubmit = (data) => dispatch(addTopicsData(data));

  const handlers = {
    handleSubmit: handleTopicsSubmit,
    editHandler: (data) => setModal(data),
    deleteHandler: (data) => setDeleteModal(data),
  };

  const tabDataasProps = [
    {
      label: "Topics",
      children: Topics,
      props: {
        renderList: TopicsCarddata,
        handleSubmit: handleTopicsSubmit,
        handlers,
      },
    },
    {
      label: "Level",
      children: Level,
      props: {
        renderList: level,
        renderAsCard: true,
        itemName: "level",
        label: "Add Level",
        title: "Level",
        handleSubmit: handleLevelSubmit,
      },
    },
    {
      label: "Category",
      children: Level,
      props: {
        renderList: category,
        label: "Add Category",
        itemName: "category",
        title: "Categories",
        renderAsCard: true,
        handleSubmit: handleCategorySubmit,
      },
    },
    {
      label: "Email",
      children: Email,
      props: {
        renderList: [
          {
            title: "Tests",
            label: "Send email when candidate is done with test",
            onchange: (value) => console.log(value),
          },
        ],
      },
    },
  ];
  const tabProps = {
    data: cardData,
    gridRenderer: AssessmentCard,
    handlers: {
      onClickHandler: handleCard,
    },
  };

  const tabData = [
    {
      title: "Assessments",
      component: "gridview",
      props: { ...tabProps },
    },
    {
      title: "Settings",
      component: "assesmentsettings",
      props: {
        title: "Tests",
        tabData: tabDataasProps,
      },
    },
  ];

  // const handleBtnClick = () => console.log("add new assessment");

  return (
    <div className="assessment-platform-container">
      <Tab tabData={tabData} />
      <ModalPopUp
        onCancel={setModal}
        isCancel
        visiblity={modalVisibility}
        isFooter={false}
      >
        <EditPopUp setModal={setModal} defaultValue={editData} />
      </ModalPopUp>
      <ModalPopUp
        onCancel={setModal}
        isCancel
        width={400}
        visiblity={deletemodalVisibility}
        isFooter={false}
      >
        <DeletePopUp setModal={setDeleteModal} defaultValue={deleteData} />
      </ModalPopUp>
    </div>
  );
}

export default AssessmentPlatform;
