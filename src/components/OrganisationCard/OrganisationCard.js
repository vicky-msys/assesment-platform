import React from "react";
import { Col, Card, Row } from "antd";
import "./OrganisationCard.scss";
import { TABICON } from "@app/service/constants/icon.const";

function OrganisationCard({ cardData = {} }) {
  const getIcon = (icon) => {
    const iconData = TABICON.find((item) => item.iconName === icon);
    const Icon = iconData ? iconData.icon : "";
    return Icon !== "" ? <Icon /> : icon;
  };
  return (
    <Card
      onClick={cardData.cardHandler ? cardData.cardHandler : null}
      className={"organisationCard"}
    >
      <Row>
        <Col className={`org-card-svg-container ${cardData.svgClass || ""}`}>
          {getIcon(cardData.icon)}
        </Col>
        <Col className="org-card-details-container">
          <p className="org-card-count">{cardData.count}</p>
          <p className="org-card-name">{cardData.name}</p>
        </Col>
      </Row>
    </Card>
  );
}

export default OrganisationCard;
