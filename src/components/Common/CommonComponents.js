import React from "react";
import { Link } from "react-router-dom";
import "./common.scss";
export const PageNotFound = () => (
  <div className="not-found">
    Page Not Found. <Link to="/login">Click here </Link>&nbsp;to redirect to Loginpage.
  </div>
);