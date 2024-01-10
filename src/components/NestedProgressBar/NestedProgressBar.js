/* eslint-disable linebreak-style */
import React from "react";
import ProgressBar from "../ProgressBar/progressBar";
import propTypes from "prop-types";
import "./NestedProgressBar.scss";

export default function NestedProgressBar({ Progress1, Progress2, Progress3 }) {
  const legends = [
    { color: "#0076BF", name: "Interview Management System", id: 1 },
    { color: "#5EDDE5", name: "Assessment Platform", id: 2 },
    { color: "#0076BF", name: "Learning Management System", id: 3 },
  ];

  const User = "users";

  return (
    <div className="ProgressCon">
      <div className="container">
        <p className="title">{User}</p>
        <div className="miniProgressCon">
          <ProgressBar
            percent={Progress1}
            strokeColor={"#0076BF"}
            strokeWidth={8}
          />
          <ProgressBar
            percent={Progress2}
            strokeColor={"#5EDDE5"}
            strokeWidth={9}
          />
          <ProgressBar
            percent={Progress3}
            strokeColor={"#00B4D8"}
            strokeWidth={12}
          />
        </div>
        <ul className="legends">
          {legends.map((data) => {
            return (
              <li key={data.id}>
                <div
                  style={{ backgroundColor: `${data.color}` }}
                  className="LegenColor"
                ></div>
                {data.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

NestedProgressBar.defaultProps = {
  Progress1: "75",
  Progress2: "60",
  Progress3: "50",
};

NestedProgressBar.propTypes = {
  Progress1: propTypes.string,
  Progress2: propTypes.string,
  Progress3: propTypes.string,
};
