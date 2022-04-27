import React, { useState } from 'react';
import './ResourcesSideBar.css';

/** Component for ResourcesSideBar Page 
 * @param {categories} are the categories to be displayed in the sidebar
*/
const ResourcesSideBar = (props) => {
  const [category, setCategory] = useState(props.categories[0]);
  const categoryItems = props.categories.map((inputCategory) =>
    <li>
      <button className={category === inputCategory ? 'sidebar-btn-highlighted' : 'sidebar-btn'} onClick={() => setCategory(inputCategory)}>{inputCategory}</button>
    </li>
  )
  return (
    <div className='resources-sidebar-container'>
      <ul className='resources-sidebar-ul'>
        {categoryItems}
      </ul>
    </div>
  );
};
export default ResourcesSideBar;

