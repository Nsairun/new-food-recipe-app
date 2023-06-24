import React from 'react';
import './food-section.css';
import Img from '../../atoms/Img';
import Button from '../../atoms/Button';

function FoodSection() {
  return (
    <div className="food-section">
      <h1>Kahti-kahti</h1>
      <Img />
      <p>desc</p>
      <div className="btn">
        <Button />
        <Button />
      </div>
    </div>
  );
}

export default FoodSection;
