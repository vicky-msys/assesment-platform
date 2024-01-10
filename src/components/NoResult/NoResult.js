import React from "react";
import "./NoResult.scss";
import NoresultImage from "@app/assets/icons/NoresultImage.svg";

function NoResult() {
  return (
    <div className="no-result-container">
      <NoresultImage />
      <h3>0 Result Found</h3>
      <p className="desc">We couldn’t find what you searched for. Try searching again.</p>
    </div>
  );
}

export default NoResult;
