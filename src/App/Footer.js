import React from "react";
import LeanJSLogo from "./Layout/LeanJSLogo";
import { Link, BrowserRouter as Router } from "react-router-dom";

const Footer = () => (
  <Router>
    <div className="footer">
      <ul>
        <li>
          <Link to={{ pathname: "https://reactjs.academy" }} target="_blank">
            ReactJS Academy
          </Link>
        </li>
        <li>by</li>
        <li>
          <Link to={{ pathname: "https://leanjs.com" }} target="_blank">
            <LeanJSLogo width={25} />
          </Link>
        </li>
      </ul>
    </div>
  </Router>
);

export default Footer;
