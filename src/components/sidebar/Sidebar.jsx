import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <img src="src/assets/menu-white.svg" alt="menu-icon" />
          <span>Menu</span>
        </div>
        <ul className="menu-list">
          <li>
            <img src="src/assets/list.svg" alt="" />
            <Link to={'/'}>Product List</Link>
          </li>
          <li>
            <img src="src/assets/add.svg" alt="" />
            <Link to={'/'}>Add product</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
