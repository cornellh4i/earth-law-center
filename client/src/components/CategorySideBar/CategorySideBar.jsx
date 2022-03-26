import React, {useState} from 'react';
import './CategorySideBar.css';

/** Component for CategorySideBar Page */


const CategorySideBar = (props) => {
  const [category, setCategory] = useState("View-All");
  return (
    <ul className='sidebar-ul'>
      <li>
        <button className='sidebar-btn' onClick={() => setCategory("View-All")}>View All</button>
      </li>
      <li>
        <button className='sidebar-btn' onClick={() => setCategory("Rights-of-Nature")}>Rights of Nature</button>
      </li>
      <li>
        <button className='sidebar-btn' onClick={() => setCategory("Rights-of-Future-Generations")}>Rights of Future Generations</button>
      </li>
      <li>
        <button className='sidebar-btn' onClick={() => setCategory("Human-Environmental-Rights")}>Human Environmental Rights</button>
      </li>
      <li>
        <button className='sidebar-btn' onClick={() => setCategory("Ecocide")}>Ecocide</button>
      </li>
      <li>
        <button className='sidebar-btn' onClick={() => setCategory("Legal-Guardianship")}>Legal Guardianship</button>
      </li>
      <li>
        <button className='sidebar-btn' onClick={() => setCategory("Ecocentric-Corporate-Governance")}>Ecocentric Corporate Governance</button>
      </li>
      <li>
        <button className='sidebar-btn' onClick={() => setCategory("Ecocentric-Land-Models")}>Ecocentric Land Models</button>
      </li>
    </ul>
  );
};
export default CategorySideBar;
