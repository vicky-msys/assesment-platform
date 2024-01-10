import React, { useState, useEffect, useRef } from "react";
import Tab from "@app/components/Tab/Tab";
import "./MyTeam.scss";
import Search from "@app/components/AssessmentSettings/Search";
import ModalPopUp from "@app/components/ModalPopUp/ModalPopUp";
import { Col, Form, Row } from "antd";
import TextInput from "@app/components/TextInput/TextInput";
import CustomButton from "@app/components/Button/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoles, getRoles } from "@app/features/Dashboard/SettingsSlice";

function Settings() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [addSkillmodalVisibility, setAddSkillModalVisibility] = useState(false);
  const [job, setJob] = useState(null);
  const [skill, setSkill] = useState(null);

  const dispatch = useDispatch();
  const rolesData = useSelector(getRoles);
  useEffect(() => {
    dispatch(fetchRoles(levelList));
  }, []);

  const levelList = [
    {
      title: "Java Developer",
      creator: "Vignesh Nagarajan",
      date: "03-12-2022",
      skills: "Problem Solving, .Net, SQL, Java Query, HTML5, JavaScript",
    },
    {
      title: "Python Developer",
      creator: "Jananan P",
      date: "03-12-2022",
      skills: "Problem Solving, .Net, SQL, Java Query, HTML5, JavaScript",
    },
    {
      title: "Php Developer",
      creator: "vijay venkat",
      date: "03-12-2022",
      skills: "Problem Solving, .Net, SQL, Java Query, HTML5, JavaScript",
    },
  ];

  const categoryList = [
    "Adaptive",
    "Active listening",
    "Analysis",
    "Business Ethics",
    "communication",
    "collaboration",
  ];
  const [level, setLevel] = useState(rolesData);
  const [category, setCategory] = useState(categoryList);
  const handleLevelSubmit = (data) => setLevel((prev) => [...prev, data.roles]);

  const handleCategorySubmit = (data) =>
    setCategory((prev) => [...prev, data.skills]);
  const handleBtnClick = () => setModalVisibility(!modalVisibility);
  const handleAddSkillBtnClick = () =>
    setAddSkillModalVisibility(!addSkillmodalVisibility);

  const addJob = (jobData) => {
    setJob(jobData);
    handleBtnClick();
  };
  const addSkill = (skillData) => {
    setSkill(skillData);
    handleAddSkillBtnClick();
  };

  useEffect(() => {
    setLevel(rolesData);
  }, [rolesData]);

  useEffect(() => {
    if (job) {
      const obj = {
        title: job.title,
        creator: "vignesh Nagarajan",
        date: new Date().toISOString().slice(0, 10),
        skills: job.skills,
      };
      setLevel((prev) => [...prev, obj]);
    }
    if (skill) {
      setCategory((prev) => [...prev, skill.skill]);
    }
  }, [job, skill]);

  const tabDataasProps = [
    {
      label: "Job Roles",
      children: Search,
      props: {
        renderAsCard: true,
        renderList: level,
        label: "Search for job roles",
        title: "Job Roles",
        handleClick: handleBtnClick,
        className: "default-level-container",
        btnLabel: "Create Job Roles",
        itemName: "roles",
        handleSubmit: handleLevelSubmit,
        filterBy: (item, searchString) =>
          item.title.toLowerCase().includes(searchString.toLowerCase()),
      },
    },
    {
      label: "Skills",
      children: Search,
      props: {
        renderList: category,
        label: "Search for skills",
        title: "Skills",
        itemName: "skills",
        className: "default-level-container",
        btnLabel: "Add Skill",
        handleSubmit: handleCategorySubmit,
        handleClick: handleAddSkillBtnClick,
        filterBy: (item, searchString) =>
          item.toLowerCase().includes(searchString.toLowerCase()),
      },
    },
  ];
  const tabData = [
    {
      title: "Profile",
      component: "adminform",
      props: {
        isTitle: false,
      },
    },
    {
      title: "Email Notifications",
      component: "email",
      props: {
        renderList: [
          // {
          //   title: "Tests",
          //   label: "Send email when candidate is done with test",
          //   onchange: (value) => console.log(value),
          // },
          {
            title: "Product Update",
            label: "Send email with product updates",
            onchange: (value) => console.log(value),
          },
        ],
      },
    },
    // {
    //   title: "Advance",
    //   component: "email",
    //   props: {
    //     renderList: [
    //       {
    //         title: "Tests",
    //         label: "Send email when candidate is done with test",
    //         onchange: (value) => console.log(value),
    //       },
    //       {
    //         title: "Product Update",
    //         label: "Send email with product updates",
    //         onchange: (value) => console.log(value),
    //       },
    //     ],
    //   },
    // },
    {
      title: "Company",
      component: "email",
      props: {
        renderList: [
          {
            title: "Compliance & Security",
            label:
              "Send a BCC email to a dedicated email address to have a record of all emails sent to candidates",
            onchange: (value) => console.log(value),
          },
          {
            title: "Timeout Inactive Session",
            label: "Enable timeout for inactive sessions",
            onchange: (value) => console.log(value),
          },
        ],
      },
    },
    {
      title: "Role",
      component: "assesmentsettings",
      props: {
        tabData: tabDataasProps,
      },
    },
  ];
  return (
    <div className="myteam-settings-container">
      <h2>Settings</h2>
      <Tab tabData={tabData} />
      <ModalPopUp
        visiblity={modalVisibility}
        width={400}
        isFooter={false}
        isCancel
        handleCancel={() => setModalVisibility(false)}
      >
        <AddjobRole
          addJob={addJob}
          handleCancel={() => setModalVisibility(false)}
        />
      </ModalPopUp>
      <ModalPopUp
        visiblity={addSkillmodalVisibility}
        width={400}
        isFooter={false}
        isCancel
        handleCancel={() => setAddSkillModalVisibility(false)}
      >
        <AddSkills
          addSkill={addSkill}
          handleCancel={() => setAddSkillModalVisibility(false)}
        />
      </ModalPopUp>
    </div>
  );
}

export default Settings;

function AddjobRole({ handleCancel, addJob }) {
  const formRef = useRef();
  return (
    <div className="add-job">
      <h3>Create Job Role</h3>
      <Form
        ref={formRef}
        onFinish={(data) => {
          addJob(data);
          formRef.current.resetFields();
        }}
      >
        <Form.Item name={"title"}>
          <TextInput
            labelText="Add Role"
            labelVisiblity
            labelClassName="legend-label"
          />
        </Form.Item>
        <Form.Item name={"skills"}>
          <TextInput
            labelText="Add Skills"
            labelVisiblity
            labelClassName="legend-label"
          />
        </Form.Item>
        <Row className="add-role-btns">
          <Col>
            <CustomButton
              className="whiteBgbluecolorBtn"
              label="Cancel"
              onClick={handleCancel}
            />
          </Col>
          <Col>
            <CustomButton label="Save" htmlType="submit" />
          </Col>
        </Row>
      </Form>
    </div>
  );
}

function AddSkills({ handleCancel, addSkill }) {
  const formRef = useRef();
  return (
    <div className="add-job">
      <h3>Create Job Role</h3>
      <Form
        ref={formRef}
        onFinish={(data) => {
          addSkill(data);
          formRef.current.resetFields();
        }}
      >
        <Form.Item name={"skill"}>
          <TextInput
            labelText="Add Skill"
            labelVisiblity
            labelClassName="legend-label"
          />
        </Form.Item>
        <Row className="add-role-btns">
          <Col>
            <CustomButton
              className="whiteBgbluecolorBtn"
              label="Cancel"
              onClick={handleCancel}
            />
          </Col>
          <Col>
            <CustomButton label="Save" htmlType="submit" />
          </Col>
        </Row>
      </Form>
    </div>
  );
}
