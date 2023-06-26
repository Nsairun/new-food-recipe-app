import React, { useState } from 'react';
import './field-section.css';
import { UseFoodContext } from '../../../context/FoodContext';
import {
  getFromLocalStorage,
  udateLocaleStorage,
} from '../../../service/utils';

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
    udateLocaleStorage('foodData', newFoodData);
  };

  return (
    <div className="add-recipe">
      <h1>Add your recipe here</h1>
      <div className="foodField">
        <form onSubmit={handleSubmit}>
          <div>
            <p>Food Name</p>
            <input
              title=""
              value={formVal.title || ''}
              onChange={handleChange}
              id="title"
            />
          </div>
          <div>
            <p>Image Link</p>
            <input
              src=""
              value={formVal.src || ''}
              onChange={handleChange}
              id="src"
            />
          </div>
          <div>
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
    </div>
  );
}

export default FieldSection;
