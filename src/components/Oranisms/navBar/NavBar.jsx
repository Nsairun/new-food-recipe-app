/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import './navBar.css';
import { BsFastForwardCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button';
import { UseFoodContext } from '../../../context/FoodContext';
import { getFromLocalStorage } from '../../../service/utils';

function NavBar() {
  // eslint-disable-next-line no-unused-vars
  const [searchVal, setSearchVal] = useState('');

  const { setSearchData, foodRef } = UseFoodContext();

  function handleSearch() {
    if (searchVal === '') {
      setSearchData(null);
      return;
    }
    const filterBySearch = [...getFromLocalStorage('foodData')].filter(
      ({ title }) => title.toLowerCase().includes(searchVal.toLowerCase())
    );
    setSearchData(filterBySearch);
    window.scrollTo(0, foodRef.current.offsetTop);
  }
  const navigate = useNavigate();

  function handleClick() {
    navigate('/fav');
  }

  return (
    <div className="navbar">
      <div className="logo">
        <h1>CHEW!</h1>
        <div className="favFood">
          <button type="button" onClick={handleClick}>
            Favorite
            <BsFastForwardCircleFill />
          </button>
        </div>
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
