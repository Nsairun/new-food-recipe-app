/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import './navBar.css';
import Button from '../../atoms/Button';
import { UseFoodContext } from '../../../context/FoodContext';
import { getFromLocalStorage } from '../../../service/utils';

function NavBar() {
  // eslint-disable-next-line no-unused-vars
  const [searchVal, setSearchVal] = useState('');

  const { setSearchData } = UseFoodContext();

  function handleSearch() {
    if (searchVal === '') {
      setSearchData(null);
      return;
    }
    const filterBySearch = [...getFromLocalStorage('foodData')].filter(
      ({ title }) => title.toLowerCase().includes(searchVal.toLowerCase())
    );
    setSearchData(filterBySearch);
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
