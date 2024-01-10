import { Table as CustomTable } from "antd";
import React from "react";
import propTypes from "prop-types";

import "./Table.scss";

function Table({ dataSource, columns, pagination, handlers }) {
  const { onClickHandler } = handlers;
  return (
    <div className="Table-container">
      <CustomTable
        onRow={(r) => ({
          onClick: () => onClickHandler(r),
        })}
        dataSource={dataSource}
        columns={columns}
        pagination={pagination}
        rowClassName={"rowClassName1"}
      />
    </div>
  );
}

Table.defaultProps = {
  dataSource: [],
  columns: [],
  pagination: false,
};

Table.propTypes = {
  dataSource: propTypes.array.isRequired,
  columns: propTypes.array.isRequired,
  pagination: propTypes.bool,
};
export default Table;
