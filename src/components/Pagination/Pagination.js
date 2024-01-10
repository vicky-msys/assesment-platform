import React from "react";
import "./Pagination.scss";
import propTypes from "prop-types";
import { Pagination as Page, Row } from "antd";
import PrevPage from "@app/assets/icons/PrevPage.svg";
import NextPageIcon from "@app/assets/icons/NextPageIcon.svg";

function Pagination(props) {
  const { total, onChange, pageSize, current } = props;
  const handleItem = (element, type) => {
    if (type === "prev") {
      return <PrevPage />;
    }
    if (type === "next") {
      return <NextPageIcon />;
    }
    return <p>{element}</p>;
  };
  return (
    <Row className="pagination-container">
      <Page
        itemRender={handleItem}
        onChange={onChange && onChange}
        total={total}
        defaultCurrent={1}
        pageSize={pageSize}
        current={current}
        hideOnSinglePage={true}
      />
    </Row>
  );
}

Pagination.defaultProps = {
  total: 50,
  onChange: null,
  pageSize: 10,
  current: 1,
};

Pagination.propTypes = {
  total: propTypes.number.isRequired,
  onChange: propTypes.func,
  pageSize: propTypes.number,
  current: propTypes.number,
};

export default Pagination;
