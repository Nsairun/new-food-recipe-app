/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import './editform.css';
import {
  getFromLocalStorage,
  updateLocaleStorage,
} from '../../../service/utils';
import { UseFoodContext } from '../../../context/FoodContext';

function EditForm({ food, setEditData }) {
  const [container, setContainer] = useState({
    id: food.title,
    food: { ...food, fav: false },
  });

  const { setFoodData } = UseFoodContext();

  const handlechange = (name, value) => {
    const holder = container;
    holder.food[`${name}`] = value;
    setContainer({ ...holder });
  };

  const closeForm = () => setEditData({ showform: false, data: {} });

  const handleSubmit = () => {
    if (!container.food.title || !container.food.src || !container.food.desc) {
      return closeForm();
    }

    const foodUpdate = getFromLocalStorage('foodData').map((foodObj) => {
      if (foodObj.title === container.id) return container.food;
      return foodObj;
    });

    updateLocaleStorage('foodData', foodUpdate);

    setFoodData(foodUpdate);

    return closeForm();
  };

  return (
    <>
      <div className="overlay" />

      <form className="edit_form" onSubmit={handleSubmit}>
        <span className="close_form" onClick={closeForm}>
          Close
        </span>

        <div className="edit_div">
          <h3>Title :</h3>
          <input
            type="text"
            placeholder="Edit title"
            value={container.food.title}
            onChange={(e) => handlechange('title', e.target.value)}
          />
        </div>

        <div className="edit_div">
          <h3>Image :</h3>
          <input
            type="text"
            placeholder="Edit src"
            value={container.food.src}
            onChange={(e) => handlechange('src', e.target.value)}
          />
        </div>

        <div className="edit_div">
          <h3>Description :</h3>
          <input
            type="text"
            placeholder="Edit description"
            value={container.food.desc}
            onChange={(e) => handlechange('desc', e.target.value)}
          />
        </div>
        <button type="submit">Submit Edit</button>
      </form>
    </>
  );
}

export default EditForm;
