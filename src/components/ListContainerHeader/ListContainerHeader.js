import { Col, Row } from "antd";
import React from "react";
import propTypes from "prop-types";
import DropDown from "../DropDown/DropDown";
import GridView from "@app/assets/icons/GridView.svg";
import ListView from "@app/assets/icons/ListView.svg";
import SearchIcon from "@app/assets/icons/Search.svg";
import "./ListContainerHeader.scss";
import TextInput from "../TextInput/TextInput";
import CustomButton from "../Button/CustomButton";
import IconButton from "../IconButton/IconButton";

function ListContainerHeader({
  containerName,
  isSelect,
  isViewBy,
  dropDownOptions,
  placeholder,
  handleLayout,
  handleSort,
  textInputPlaceHolder,
  handleSearch,
  isSearch,
  layOut,
  handleButton,
  isButton,
  headerClassName,
  buttonLabel,
  isIconButton,
  handleIconButton,
  iconButtonLabel,
  icon,
}) {
  return (
    <Row className={"list-container-header " + headerClassName}>
      <Col className="container-name">{containerName}</Col>
      <Col span={17}>
        <Row className="viewby-container">
          {isSearch && (
            <Col className="list-container-search">
              <Row>
                <TextInput
                  prefix={<SearchIcon />}
                  placeholder={textInputPlaceHolder}
                  onChange={handleSearch}
                  className={"search-input"}
                />
              </Row>
            </Col>
          )}
          <Col span={1} />
          {isViewBy && (
            <Col className="list-container-viewby">
              <Row>
                <Col className="grid-list-svg-container">
                  <GridView
                    className={`layout ${layOut === "grid" ? "active" : ""}`}
                    onClick={() => handleLayout("grid")}
                  />
                </Col>
                <Col className="grid-list-svg-container">
                  <ListView
                    className={`layout ${layOut === "list" ? "active" : ""}`}
                    onClick={() => handleLayout("list")}
                  />
                </Col>
              </Row>
            </Col>
          )}
          {isSelect && (
            <Col className="list-container-select">
              <DropDown
                Options={dropDownOptions}
                placeholder={placeholder}
                onChange={handleSort}
                className="list-container-select"
              />
            </Col>
          )}
          <Col span={1} />
          {isButton && (
            <Col>
              <CustomButton onClick={handleButton} label={buttonLabel} />
            </Col>
          )}
          <Col span={1} />
          {isIconButton && (
            <Col>
              <IconButton
                onClick={handleIconButton}
                label={iconButtonLabel}
                icon={icon}
              />
            </Col>
          )}
        </Row>
      </Col>
    </Row>
  );
}

ListContainerHeader.defaultProps = {
  containerName: "List",
  isSelect: false,
  dropDownOptions: [],
  isLegend: false,
  legendList: [],
  isViewBy: false,
  placeholder: "Sort By",
  handleLayout: null,
  handleSort: null,
  isSearch: false,
  handleSearch: null,
  textInputPlaceHolder: "Search Here",
  layOut: "grid",
  headerClassName: "",
  handleButton: null,
  isButton: false,
  buttonLabel: "",
  handleIconButton: null,
  isIconButton: false,
  iconbuttonLabel: "",
  icon : null,
};

ListContainerHeader.propTypes = {
  containerName: propTypes.string.isRequired,
  isSelect: propTypes.bool,
  dropDownOptions: propTypes.array,
  isLegend: propTypes.bool,
  legendList: propTypes.array,
  isViewBy: propTypes.bool,
  isSearch: propTypes.bool,
  isButton: propTypes.bool,
  placeholder: propTypes.string,
  textInputPlaceHolder: propTypes.string,
  buttonLabel: propTypes.string,
  headerClassName: propTypes.string,
  layOut: propTypes.string,
  handleLayout: propTypes.func,
  handleSort: propTypes.func,
  handleSearch: propTypes.func,
  handleButton: propTypes.func,
  handleIconButton: propTypes.func,
  isIconButton: propTypes.bool,
  iconButtonLabel: propTypes.string,
  icon : propTypes.object
};
export default ListContainerHeader;
