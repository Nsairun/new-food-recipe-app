import React, { useState } from 'react';
import './field-section.css';
import { UseFoodContext } from '../../../context/FoodContext';
import {
  getFromLocalStorage,
  updateLocaleStorage,
} from '../../../service/utils';
import image from '../../../images/steak.jpg';

function FieldSection() {
  const [formVal, setFormVal] = useState({});
  const handleChange = (e) => {
    setFormVal({ ...formVal, [`${e.target.id}`]: e.target.value });
  };

  const { setFoodData } = UseFoodContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formVal.title || !formVal.src || !formVal.desc) {
      return;
    }
    const newFoodData = [...getFromLocalStorage('foodData'), formVal];
    setFoodData([...newFoodData]);
    updateLocaleStorage('foodData', newFoodData);
    setFormVal({});
  };

  return (
    <div className="add-recipe">
      <h1>ADD YOUR FOOD RECIPE BELOW</h1>
      <div className="deco">
        <div id="foodField">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <p>Food Name</p>
              <input
                title=""
                value={formVal.title || ''}
                onChange={handleChange}
                id="title"
              />
            </div>
            <div className="field">
              <p>Image Link</p>
              <input
                src=""
                value={formVal.src || ''}
                onChange={handleChange}
                id="src"
              />
            </div>
            <div className="field">
              <p>Food Description</p>
              <input
                value={formVal.desc || ''}
                onChange={handleChange}
                id="desc"
              />
            </div>
            <div>
              <button type="submit">+</button>
            </div>
          </form>
        </div>
        <img src={image} alt="decoration" />
      </div>
    </div>
  );
}

export default FieldSection;
