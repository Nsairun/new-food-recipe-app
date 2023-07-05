/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import './navBar.css';
import Button from '../../atoms/Button';
import file from '../../../img';

function NavBar() {
  // eslint-disable-next-line no-unused-vars
  const [food, setFood] = useState(file);
  const [searchVal, setSearchVal] = useState('');

  function handleSearch() {
    if (searchVal === '') {
      setFood(file.title);
      return;
    }
    const filterBySearch = file.filter((item) =>
      item.toLowerCase().includes(searchVal.toLocaleLowerCase())
    );
    setFood(filterBySearch);
  }

  return (
    <div className="navbar">
      <div className="Logo">
        <h1>CHEW!</h1>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <div>
          <Button action={handleSearch} name={<CiSearch />} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
