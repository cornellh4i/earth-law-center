import React from 'react';
import './NavBar.css';
import Button from '../Button/Button'; 
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


// TODOS: 
// 1. Implement NavBar Button Styling by adding appropriate styles to the navbar-btn class in Button.css
// 2. Create all Buttons using this styling 
// 3. Implement the handleClick function

/** A Navigation Bar for the Website */ 
const NavBar = () => {
  // const navigate = useNavigate();
  // function handleClick() {
  //   // TODO: Implement a function that when passed in a page name, will navigate to that page
  //   // Tip --> look into react router dom!
  //   navigate('/laws');
  //   console.log("handleClick not yet implemented") /* Delete this when finished implementing nav bar */
  // }
  return (
    <div className = "navbar-container">
      <Link to="/laws"><Button text = "Laws" css = "navbar-btn" /></Link>
      <Link to="/letters"><Button text = "Letters" css = "navbar-btn" /></Link>
      <Link to="/landing"><Button text = "About" css = "navbar-btn" /></Link>
      {/* <Button text = "Laws" css = "navbar-btn" handleClick={handleClick}/>
      <Button text = "Letters" css = "navbar-btn" handleClick={handleClick}/>
      <Button text = "About" css = "navbar-btn" handleClick={handleClick}/> */}
    </div>
  );
};
export default NavBar;
