import React, {useState, useImperativeHandle, forwardRef} from 'react';
import './CategorySideBar.css';

/** Component for CategorySideBar Page 
 * @param {categories} are the categories to be displayed in the sidebar
*/
const CategorySideBar = forwardRef((props, _ref) => {
  const [category, setCategory] = useState(props.categories[0]);
  const categoryItems = props.categories.map((inputCategory) =>
    <li>
      <button className={category === inputCategory ? 'sidebar-btn-highlighted' : 'sidebar-btn'} onClick={() => setCategory(inputCategory)}>{inputCategory}</button>
    </li>
  )
  useImperativeHandle(_ref, () => ({
    getCategory: () => {
        return category;
    },
  }));

  return (
    <div className='sidebar-container'>
      <ul className='sidebar-ul'>
        {categoryItems}
      </ul>
    </div>
  );
});
export default CategorySideBar;

