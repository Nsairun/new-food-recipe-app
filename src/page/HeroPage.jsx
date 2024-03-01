import React from 'react';
import { useNavigate } from 'react-router-dom';
import './heroPage.css';
import { BsFastForwardCircleFill } from 'react-icons/bs';
import NavBar from '../components/Oranisms/navBar/NavBar';
import FieldSection from '../components/Oranisms/field-section/FieldSection';
import FoodSection from '../components/Oranisms/food-section/Food-section';
import PopUp from '../components/atoms/PopUp';

function HeroPage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/fav');
  }

  return (
    <div className="landingPage">
      <NavBar />
      <div className="heading">
        <h2>Food Recipe App</h2>
      </div>
      <div style={{ margin: '5%' }}>
        <PopUp
          title="Add Food"
          content={<FieldSection />}
          buttonText="Add Recipe Here "
        />
      </div>
      <FoodSection />
      <div className="favFood">
        <div>
          <button type="button" onClick={handleClick}>
            Favorite Food
            <BsFastForwardCircleFill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
