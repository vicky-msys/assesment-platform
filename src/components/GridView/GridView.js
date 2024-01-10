import { Row } from "antd";
import React from "react";
import propTypes from "prop-types";
import "./GridView.scss";
import NoResult from "../NoResult/NoResult";

function GridView({
  data,
  className,
  gridRenderer,
  onClickHandler,
  handlers,
}) {
  let Renderer = gridRenderer;
  return (
    <Row className={`gridViewContainer ${className}`}>
      {data.length ? (
        data.map((item, index) =>
          Renderer ? (
            <Renderer
              onClick={onClickHandler}
              key={index}
              cardData={item}
              handlers={handlers && handlers}
            />
          ) : null
        )
      ) : (
        <NoResult />
      )}
    </Row>
  );
}

GridView.defaultProps = {
  data: [],
  className: "",
  onClickHandler: null,
  handlers: {},
};

GridView.propTypes = {
  data: propTypes.array.isRequired,
  className: propTypes.string,
  onClickHandler: propTypes.func,
  handlers: propTypes.object,
};
export default GridView;
