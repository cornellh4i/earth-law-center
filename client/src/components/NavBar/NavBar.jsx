import React from 'react';
import './NavBar.css';
import Button from '../Button/Button'; 
import { useNavigate } from 'react-router-dom';


// TODOS: 
// 1. Implement NavBar Button Styling by adding appropriate styles to the navbar-btn class in Button.css
// 2. Create all Buttons using this styling 
// 3. Implement the handleClick function

/** A Navigation Bar for the Website */ 
const NavBar = () => {
  const navigate = useNavigate();
  function handleClick() {
    // TODO: Implement a function that when passed in a page name, will navigate to that page
    // Tip --> look into react router dom!
    navigate('/laws');
    console.log("handleClick not yet implemented") /* Delete this when finished implementing nav bar */
  }
  return (
    <div className = "navbar-container">
      <h1>NavBar Here</h1> {/* Delete this when finished implementing nav bar */}
      <Button text = "Laws" css = "navbar-btn" handleClick={handleClick}/>
    </div>
  );
};
export default NavBar;
