import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './favPage.css';
import { BsFillRewindFill, BsHouseFill } from 'react-icons/bs';
import Img from '../components/atoms/Img';
import { UseFoodContext } from '../context/FoodContext';

function FavPage() {
  const [favorites, setFavorites] = useState(null);
  const { foodData } = UseFoodContext();

  const navigate = useNavigate();

  function handleClick() {
    navigate('/hero');
  }

  useEffect(() => {
    if (foodData) {
      const favs = foodData.filter((food) => food.fav === true);
      setFavorites([...favs]);
    }
  }, [foodData]);

  return (
    <div className="foodCard">
      <div className="foodCard-header">
        <h2>Favorite-Section</h2>
        <button type="button" onClick={handleClick}>
          <BsHouseFill />
          <BsFillRewindFill />
        </button>
      </div>
      <div className="foodCardContainer">
        {favorites?.map((food) => (
          <div className="foodCard-section" key={food.title}>
            <Img image={food.src} />
            <div className="foodCard-heading">
              <h1>{food.title}</h1>
              <p>{food.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavPage;
