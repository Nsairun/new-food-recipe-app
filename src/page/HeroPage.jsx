import React from 'react';
import './heroPage.css';
import NavBar from '../components/Oranisms/navBar/NavBar';
import FieldSection from '../components/Oranisms/field-section/FieldSection';
import FoodSection from '../components/Oranisms/food-section/Food-section';

function HeroPage() {
  return (
    <div className="landingPage">
      <div className="heading">
        <NavBar />
        <h2>Food Recipe App</h2>
      </div>
      <FieldSection />
      <FoodSection />
    </div>
  );
}

export default HeroPage;
