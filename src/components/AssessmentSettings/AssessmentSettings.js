import { Tabs } from "antd";
import React from "react";
import { getItemAsComponent } from "@app/service/utils/RouteUtil";
import "./AssessmentSettings.scss";

const { TabPane } = Tabs;
function AssessmentSettings({ tabData, title }) {
  return (
    <div className="tab">
      <Tabs defaultActiveKey="0" tabPosition="left">
        {!!title && <p className="title">{title}</p>}
        {tabData.map((item, index) => (
          <TabPane tab={item.label} key={index}>
            {getItemAsComponent(item.children, item.props)}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
}

AssessmentSettings.defaultProps = {
  tabData: [],
  title: "",
};

export default AssessmentSettings;
