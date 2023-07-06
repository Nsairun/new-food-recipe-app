import React from 'react';
import { useNavigate } from 'react-router-dom';
import './heroPage.css';
import { BsFastForwardCircleFill } from 'react-icons/bs';
import NavBar from '../components/Oranisms/navBar/NavBar';
import FieldSection from '../components/Oranisms/field-section/FieldSection';
import FoodSection from '../components/Oranisms/food-section/Food-section';

function HeroPage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/fav');
  }

  return (
    <div className="landingPage">
      <div className="heading">
        <NavBar />
        <h2>Food Recipe App</h2>
      </div>
      <FieldSection />
      <div className="favFood">
        <button type="button" onClick={handleClick}>
          Favorite Food
          <BsFastForwardCircleFill />
        </button>
      </div>
      <FoodSection />
    </div>
  );
}

export default HeroPage;
