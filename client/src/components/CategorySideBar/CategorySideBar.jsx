import React, {useState, useImperativeHandle, forwardRef} from 'react';
import './CategorySideBar.css';

/** Component for CategorySideBar to be found on the resources and laws/letters pages
 * @param {categories} are the categories to be displayed in the sidebar
*/
const CategorySideBar = forwardRef((props, _ref) => {
  const [category, setCategory] = useState(props.categories[0]);
  props.setCategoryParent(category);
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
});
export default CategorySideBar;

