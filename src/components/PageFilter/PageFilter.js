import React from "react";
import "./PageFilter.scss"

function PageFilter() {
  return (
    <div className="page-filter">
      <h2 className="title">Filter</h2>
      <div className="page-filter-container">
          <div className="single-filter-title">
            <span>Category</span>
            <span>X</span>
          </div>
      </div>
    </div>
  );
}

export default PageFilter;
