import React, { useState } from 'react';
import './ResourceSideBar.css';

/** Component for ResourceSideBar Page 
 * @param {categories} are the categories to be displayed in the sidebar
*/
const ResourceSideBar = (props) => {
  const [category, setCategory] = useState(props.categories[0]);
  const categoryItems = props.categories.map((inputCategory) =>
    <li>
      <button className={category === inputCategory ? 'sidebar-btn-highlighted' : 'sidebar-btn'} onClick={() => setCategory(inputCategory)}>{inputCategory}</button>
    </li>
  )
  return (
    <div className='resource-sidebar-container'>
      <ul className='resource-sidebar-ul'>
        {categoryItems}
      </ul>
    </div>
  );
};
export default ResourceSideBar;

