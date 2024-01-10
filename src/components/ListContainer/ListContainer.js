import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import GridView from "../GridView/GridView";
import ListContainerHeader from "../ListContainerHeader/ListContainerHeader";
import Pagination from "../Pagination/Pagination";
import "./ListContainer.scss";
import Table from "../Table/Table";
import AdminCard from "@app/components/AdminCard/AdminCard";
import { sortArray } from "@app/service/utils/Utils";

function ListContainer(props) {
  const {
    containerName,
    isLegend,
    isSelect,
    isViewBy,
    dropDownOptions,
    legendList,
    placeholder,
    data,
    isSearch,
    searchField,
    textInputPlaceHolder,
    pageSize,
    columns,
    pagination,
    children,
    headerClassName,
    handleButton,
    isButton,
    buttonLabel,
    gridRenderer,
    gridClass,
    onClickHandler,
    isIconButton,
    handleIconButton,
    iconButtonLabel,
    icon,
    handlers,
    layOutType,
  } = props;

  const [sortBy, setSortBy] = useState("reset");
  const [searchString, setSearchString] = useState("");
  const [page, setPage] = useState(1);
  const [layOut, setLayOut] = useState(layOutType);
  const [cardInputData, setCardInputData] = useState([]);
  const [filteredData, setfilteredData] = useState([]);

  const handlePagination = (pageNum) => {
    setPage(pageNum);
  };

  useEffect(() => {
    let shallowCopy = [...data];
    const pageNumber = (page - 1) * pageSize;
    if (searchString !== "" && searchString !== undefined) {
      shallowCopy = shallowCopy.filter((item) =>
        item[searchField].toLowerCase().includes(searchString.toLowerCase())
      );
      setfilteredData(shallowCopy.length);
    }
    if (sortBy !== "reset" && sortBy !== undefined) {
      sortArray(shallowCopy, sortBy);
    }
    shallowCopy = shallowCopy.slice(pageNumber, pageNumber + pageSize);
    setCardInputData(shallowCopy);
  }, [data, page, sortBy, searchString]);

  useEffect(() => {
    setPage(1);
  }, [sortBy, searchString]);

  const handleLayout = (layout) => setLayOut(layout);
  const handleSort = (sortString) => setSortBy(sortString);
  const handleSearch = (sortString) => setSearchString(sortString.target.value);

  return (
    <div className="list-container">
      <ListContainerHeader
        containerName={containerName}
        isSelect={isSelect}
        isLegend={isLegend}
        isViewBy={isViewBy}
        isSearch={isSearch}
        dropDownOptions={dropDownOptions}
        legendList={legendList}
        handleLayout={handleLayout}
        textInputPlaceHolder={textInputPlaceHolder}
        placeholder={placeholder}
        handleSort={handleSort}
        handleSearch={handleSearch}
        layOut={layOut}
        headerClassName={headerClassName}
        buttonLabel={buttonLabel}
        handleButton={handleButton}
        isButton={isButton}
        isIconButton={isIconButton}
        handleIconButton={handleIconButton}
        iconButtonLabel={iconButtonLabel}
        icon={icon}
      />
      {children && children}
      <div className="list-children">
        {layOut === "grid" ? (
          <GridView
            className={gridClass}
            data={cardInputData}
            gridRenderer={gridRenderer}
            onClickHandler={onClickHandler}
            handlers={handlers && handlers}
          />
        ) : (
          <Table
            dataSource={cardInputData}
            columns={columns}
            onClickHandler={onClickHandler}
            handlers={handlers && handlers}
          />
        )}
      </div>
      {pagination && (
        <Pagination
          onChange={handlePagination}
          total={searchString === "" ? data.length : filteredData}
          pageSize={pageSize}
          current={page}
        />
      )}
    </div>
  );
}

ListContainer.defaultProps = {
  containerName: "List",
  isSelect: false,
  dropDownOptions: [],
  isLegend: false,
  isSearch: false,
  legendList: [],
  isViewBy: false,
  placeholder: "Sort By",
  data: [],
  searchField: "username",
  pageSize: 20,
  dataSource: [],
  columns: [],
  pagination: false,
  children: null,
  headerClassName: "",
  handleButton: null,
  isButton: false,
  buttonLabel: "",
  gridRenderer: AdminCard,
  gridClass: "",
  onClickHandler: null,
  textInputPlaceHolder: "",
  handleIconButton: null,
  isIconButton: false,
  iconbuttonLabel: "",
  icon: null,
  handlers: {},
  layOutType: "grid",
};

ListContainer.propTypes = {
  containerName: propTypes.string.isRequired,
  isSelect: propTypes.bool,
  dropDownOptions: propTypes.array,
  dataSource: propTypes.array,
  columns: propTypes.array,
  isLegend: propTypes.bool,
  legendList: propTypes.array,
  isViewBy: propTypes.bool,
  pagination: propTypes.bool,
  isSearch: propTypes.bool,
  placeholder: propTypes.string,
  data: propTypes.array,
  searchField: propTypes.string,
  pageSize: propTypes.number,
  children: propTypes.object,
  headerClassName: propTypes.string,
  gridClass: propTypes.string,
  buttonLabel: propTypes.string,
  textInputPlaceHolder: propTypes.string,
  handleButton: propTypes.func,
  onClickHandler: propTypes.func,
  isButton: propTypes.bool,
  handleIconButton: propTypes.func,
  isIconButton: propTypes.bool,
  iconButtonLabel: propTypes.string,
  icon: propTypes.object,
  handlers: propTypes.object,
  layOutType: propTypes.string,
};

export default ListContainer;
