import React from 'react';
import './heroPage.css';
import NavBar from '../Oranisms/navBar/NavBar';
import FieldSection from '../Oranisms/field-section/Field-section';
import FoodSection from '../Oranisms/food-section/Food-section';

function HeroPage() {
  return (
    <div className="landingPage">
      <NavBar />
      <div className="heading">
        <h2>Food Recipe App</h2>
      </div>
      <FieldSection />
      <FoodSection />
    </div>
  );
}

export default HeroPage;
