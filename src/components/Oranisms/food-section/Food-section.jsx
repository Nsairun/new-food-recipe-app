import React from 'react';
import './food-section.css';
import Img from '../../atoms/Img';
import Button from '../../atoms/Button';
import { UseFoodContext } from '../../../context/FoodContext';
import {
  getFromLocalStorage,
  udateLocaleStorage,
} from '../../../service/utils';

function FoodSection() {
  const { foodData, setFoodData } = UseFoodContext();

  function DeleteFood(title) {
    const newFoodData = getFromLocalStorage('foodData').filter(
      (food) => food.title !== title
    );
    setFoodData([...newFoodData]);
    udateLocaleStorage('foodData', newFoodData);
  }

  function EditFood(title) {
    //
  }

  return (
    <div className="foodContainer">
      {foodData?.map((food) => (
        <div className="food-section">
          <h1>{food.title}</h1>
          <Img image={food.src} />
          <p>{food.desc}</p>
          <div className="btn">
            <Button action={() => DeleteFood(food.title)} name="Delete" />
            <Button action={() => EditFood(food.title)} name="Edit" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodSection;
