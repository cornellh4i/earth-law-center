import React, { useState } from 'react';
import './CategorySideBar.css';

/** Component for CategorySideBar Page 
 * @param {categories} are the categories to be displayed in the sidebar
*/
const CategorySideBar = (props) => {
  const [category, setCategory] = useState(props.categories[0]);
  const categoryItems = props.categories.map((inputCategory) =>
    <li>
      <button className={category === inputCategory ? 'sidebar-btn-highlighted' : 'sidebar-btn'} onClick={() => setCategory(inputCategory)}>{inputCategory}</button>
    </li>
  )
  return (
    <div className='sidebar-container'>
      <ul className='sidebar-ul'>
        {categoryItems}
      </ul>
    </div>
  );
};
export default CategorySideBar;

