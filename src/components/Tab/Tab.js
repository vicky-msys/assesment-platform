import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import "./Tab.scss";
import propTypes from "prop-types";
// import { TABICON } from "@app/service/constants/TabIcon";
import { TABDATA } from "@app/service/constants/TabConstants";
import { TABICON } from "@app/service/constants/icon.const";

const { TabPane } = Tabs;

function Tab({
  tabData,
  mode,
  tabBarRightContent,
  className = "",
  defaultActiveKey,
  activeKey,
}) {
  const getIcon = (icon) => {
    const iconData = TABICON.find((item) => item.iconName === icon);
    const Icon = iconData.icon;
    return <Icon style={{ marginRight: "10px" }} />;
  };

  const [active, setActive] = useState("0");

  useEffect(() => {
    setActive(activeKey);
  }, [activeKey]);

  const getTabTitle = (tabData) => {
    if (tabData.icon) {
      return (
        <span style={{ display: "flex" }}>
          {getIcon(tabData.icon)}
          {tabData.title}
        </span>
      );
    }
    return tabData.title;
  };

  const getChildren = (child, props) => {
    const filterComponent = TABDATA.find((item) => item.tabName === child);
    const TabChildComponent = filterComponent.component;
    return <TabChildComponent {...props} {...filterComponent.props} />;
  };
  return (
    <div className={"tab-container " + className}>
      <Tabs
        defaultActiveKey={defaultActiveKey}
        tabPosition={mode}
        activeKey={active}
        tabBarExtraContent={tabBarRightContent && { right: tabBarRightContent }}
        onChange={(key) => setActive(key)}
      >
        {tabData.map((item, index) => (
          <TabPane tab={getTabTitle(item)} key={`${index}`}>
            {getChildren(item.component, item.props)}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
}
Tab.defaultProps = {
  tabData: [],
  mode: "top", // left, right, top, bottom
  className: "tab-navigator",
  tabBarRightContent: null,
  defaultActiveKey: "0",
  activeKey: "0",
};

Tab.propTypes = {
  tabData: propTypes.array.isRequired,
  mode: propTypes.string,
  tabBarRightContent: propTypes.object,
  defaultActiveKey: propTypes.string,
  activeKey: propTypes.string,
};

export default Tab;
