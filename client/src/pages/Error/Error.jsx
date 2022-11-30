import { React, useEffect } from "react";
import "./Error.css";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import frog from "../../properties/frog.png";
import { useNavigate, useLocation } from 'react-router-dom';

/** Component for Error Page */
const Error = () => {
  /**
   * Data from the state passed by the error caller; contains the following data:
   * @param error_msg is the error message text to display to the user
   * @param redirect_url is the URL that the Back button should redirect to
  */
  const data = useLocation().state
  return (
    <div className="error-page">
      <div className="error-header">
        <img src={frog} alt="frog" />
        <div className="error-header-text">Oops!</div>
        <div className="error-body-text">
          {data === null || data.error_msg === null ? '404 - The page you are looking for does not exist.' : data.error_msg}
        </div>
        <Link to={data === null || data.redirect_url === null ? '/' : data.redirect_url}>
          <Button css="back-green-btn" text={"BACK"} />
        </Link>
      </div>
    </div>
  );
};
export default Error;
