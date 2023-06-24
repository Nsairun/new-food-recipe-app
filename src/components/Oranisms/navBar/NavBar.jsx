import React from 'react';
import './navBar.css';
import Fields from '../../atoms/Fields';
import Button from '../../atoms/Button';

function NavBar() {
  return (
    <div className="navbar">
      <div className="Logo">
        <h1>CHEW</h1>
      </div>
      <div className="navbar-search">
        <Fields />
        <Button />
      </div>
    </div>
  );
}

export default NavBar;
