import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './favPage.css';
import { BsFillRewindFill, BsHouseFill } from 'react-icons/bs';
import Img from '../components/atoms/Img';
import { UseFoodContext } from '../context/FoodContext';
import NavBar from '../components/Oranisms/navBar/NavBar';

function FavPage() {
  const [favorites, setFavorites] = useState(null);
  const [setDeleteItem] = useState();
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

  const handleDelete = (index) => {
    setDeleteItem((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <div className="foodCard">
      <NavBar />
      <div className="foodCard-header">
        <h2>Favorite-Section</h2>
        <button type="button" onClick={handleClick}>
          <BsHouseFill />
          <BsFillRewindFill />
        </button>
      </div>
      <div className="foodCardContainer">
        {favorites?.map((food, index) => (
          <div className="foodCard-section" key={food.title}>
            <Img image={food.src} />
            <div className="foodCard-heading">
              <h1>{food.title}</h1>
              <p>{food.desc}</p>
              <button
                type="button"
                style={{
                  backgroundColor: 'white',
                  color: 'red',
                  transition: 'background-color 0.3s ease, transform 0.3s ease',
                }}
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavPage;
