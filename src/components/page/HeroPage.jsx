import React from 'react';
import './heroPage.css';
import NavBar from '../Oranisms/navBar/NavBar';
import Img from '../atoms/Img';
import FieldSection from '../Oranisms/field-section/Field-section';
import FoodSection from '../Oranisms/food-section/Food-section';
import image from '../../img.json';

function LandingPage() {
  return (
    <div className="landingPage">
      <NavBar />
      <Img img={image.src} />
      <FieldSection />
      <FoodSection />
    </div>
  );
}

export default LandingPage;
