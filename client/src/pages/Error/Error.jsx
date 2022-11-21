import { React, useEffect } from "react";
import "./Error.css";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import frog from "../../properties/frog.png";
import { useNavigate, useLocation } from 'react-router-dom';

/** Component for Error Page */
const Error = () => {
  const data = useLocation().state
  return (
    <div className="error-page">
      <div className="error-header">
        <img src={frog} alt="frog" />
        <div className="error-header-text">Oops!</div>
        <div className="error-body-text">
          {data === null || data.error_msg === null ? '404 - The page you are looking for does not exist.' : data.error_msg}
        </div>
        <Link to="/">
          <Button css="back-green-btn" text={"Back to Home"} />
        </Link>
      </div>
    </div>
  );
};
export default Error;
