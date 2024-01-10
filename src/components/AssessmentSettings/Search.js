import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import CustomButton from "../Button/CustomButton";
import TextInput from "../TextInput/TextInput";
import propTypes from "prop-types";
import ListContainer from "../ListContainer/ListContainer";
import JobRoleCard from "../TopicsCard/JobRoleCard";

function Search({
  label,
  renderList,
  title,
  className,
  btnLabel,
  renderAsCard,
  filterBy,
  handleClick,
}) {
  const [list, setList] = useState(renderList);
  const [searchString, setSearchString] = useState(null);
  console.log(renderList, list);

  useEffect(() => {
    setList(renderList);
  }, [renderList]);

  useEffect(() => {
    let copiedList = renderList;
    if (searchString !== "" && !!searchString) {
      copiedList = copiedList.filter((item) => filterBy(item, searchString));
    }
    setList(copiedList);
  }, [searchString]);

  return (
    <div className="topics-container">
      <Row className={className}>
        <Col span={9}>
          <TextInput
            labelVisiblity
            onChange={(query) => setSearchString(query.target.value)}
            labelText={label}
            labelClassName="legend-label"
          />
        </Col>
        <CustomButton
          onClick={handleClick}
          htmlType="submit"
          label={btnLabel}
        />
      </Row>
      <div className="topics-list">
        <div className="topics-list-container">
          {renderAsCard ? (
            <ListContainer
              containerName={title}
              gridRenderer={JobRoleCard}
              data={list}
            />
          ) : (
            list.map((item, index) => (
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

Search.defaultProps = {
  className: "grid-level-container",
  btnLabel: "Save",
  label: "",
  title: "",
  renderList: [],
  renderAsCard: false,
  itemName: "",
  handleClick: null,
};

Search.propTypes = {
  className: propTypes.string,
  btnLabel: propTypes.string,
  label: propTypes.string,
  title: propTypes.string,
  itemName: propTypes.string,
  renderList: propTypes.array.isRequired,
  renderAsCard: propTypes.bool,
  handleClick: propTypes.func,
};

export default Search;
