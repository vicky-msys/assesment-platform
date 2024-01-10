import React from "react";
import "./OrganisationList.scss";
import propTypes from "prop-types";
import iconv from "../../assets/images/org-list-icon.png";
function OrganisationList({ cardData }) {
  return (
    <div className="main-list-container">
      <p className="list-title">Organizations</p>
      <div className="org-card-container">
        {cardData.map((item) => (
          <div key="">
            <div className="list-card-container">
              <div className="list-img-container">
                <div className="img-container">
                  <img src={iconv} alt="" />
                </div>
              </div>
              <div className="list-content-container">
                <p className="title common-text">{item.title}</p>
                <p className="day common-text">{item.day}</p>
                <p className="view common-text">View more</p>
              </div>
            </div>
            <div className="line" />
          </div>
        ))}
      </div>
    </div>
  );
}

OrganisationList.defaultProps = {
    cardData: {},
  };
  
  OrganisationList.propTypes = {
    cardData: propTypes.object.isRequired,
  };

export default OrganisationList;
