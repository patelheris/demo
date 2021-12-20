import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
const Navbar = () => {
  return (
    <div>
      <header>
        <div className='logo'>
          <h1>Demo App</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href='/'>home</a>
            </li>
            <li>
              <a href='/dashboard'>Dashboard</a>
            </li>
            <li>
              <a href='/login'>Login</a>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
