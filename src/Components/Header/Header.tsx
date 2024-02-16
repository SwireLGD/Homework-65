import { NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <div className='bg-primary d-flex justify-content-between container-fluid'>
      <h1 className='text-light'>Static pages</h1>
      <nav>
        <ul className='list-group d-flex flex-row'>
          <li className='navItem list-group-item bg-primary text-light border-0'>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink>
          </li>
          <li className='navItem list-group-item bg-primary text-light border-0'>
            <NavLink to="/pages/test-page" end className={({ isActive }) => isActive ? 'active' : undefined}>Test Page</NavLink>
          </li>
          <li className='navItem list-group-item bg-primary border-0'>
            <NavLink to="/pages/about-us" className={({ isActive }) => isActive ? 'active' : undefined}>About Us</NavLink>
          </li>
          <li className='navItem list-group-item bg-primary border-0'>
            <NavLink to="/pages/contacts" className={({ isActive }) => isActive ? 'active' : undefined}>Contacts</NavLink>
          </li>
          <li className='navItem list-group-item bg-primary border-0'>
            <NavLink to="/pages/divisions" className={({ isActive }) => isActive ? 'active' : undefined}>Divisions</NavLink>
          </li>
          <li className='navItem list-group-item bg-primary border-0'>
            <NavLink to="/pages/another-page" className={({ isActive }) => isActive ? 'active' : undefined}>Another Page</NavLink>
          </li>
          <li className='navItem list-group-item bg-primary border-0'>
            <NavLink to="/admin" className={({ isActive }) => isActive ? 'active' : undefined}>Admin</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;