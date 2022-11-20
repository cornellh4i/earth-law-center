import { React, useEffect } from "react";
import "./Error.css";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import frog from "../../properties/frog.png";
import { useNavigate, useLocation } from 'react-router-dom';

/** Component for Error Page */

const Error = () => {
  document.body.setAttribute("style", "background: #EEF2EF;");
  const msg=useLocation().state.error_msg
  return (
    <div>
      <div className="error-header">
        <img src={frog} alt="frog" />
        <div className="error-header-text">Oops!</div>
        <div className="error-body-text">
          {/* The law template you are looking for hasn't been published ... */}
          {msg===null ? '404 not found':msg}
        </div>
        <Link to="/">
          <Button css="back-green-btn" text={"Back to Home"} />
        </Link>
      </div>
    </div>
  );
};
export default Error;
