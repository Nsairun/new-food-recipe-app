import React, { useEffect } from 'react';
import './food-section.css';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';
import Img from '../../atoms/Img';
import Button from '../../atoms/Button';
import FavIcon from '../../atoms/Icons';
import { UseFoodContext } from '../../../context/FoodContext';
import {
  getFromLocalStorage,
  updateLocaleStorage,
} from '../../../service/utils';
import EditForm from '../EditForm/EditForm';

function FoodSection() {
  const { foodData, setFoodData, editData, setEditData, searchData, foodRef } =
    UseFoodContext();

  const handleFavorite = (title) => {
    const foodUpdate = getFromLocalStorage('foodData').map((foodObj) => {
      if (foodObj.title === title) return { ...foodObj, fav: !foodObj.fav };

      return foodObj;
    });

    updateLocaleStorage('foodData', foodUpdate);
    setFoodData([...foodUpdate]);
  };

  function DeleteFood(title) {
    const newFoodData = getFromLocalStorage('foodData').filter(
      (food) => food.title !== title
    );
    setFoodData([...newFoodData]);
    updateLocaleStorage('foodData', newFoodData);
  }

  function EditFood(title) {
    const data = getFromLocalStorage('foodData').find(
      (food) => food.title === title
    );

    setEditData({ showform: true, data });
  }

  useEffect(() => {
    if (searchData) {
      setFoodData(searchData);
    } else {
      setFoodData([...getFromLocalStorage('foodData')]);
    }
  }, [searchData]);

  return (
    <>
      {editData?.showform && (
        <EditForm food={editData.data} setEditData={setEditData} />
      )}
      <h1>Food Section</h1>
      <div ref={foodRef} className="foodContainer">
        {foodData?.map((food) => (
          <div className="food-section" key={food.ti}>
            <Img image={food.src} />
            <div className="food-heading">
              <h1>{food.title}</h1>
              <p style={{ textAlign: 'center', marginTop: '5%' }}>
                {food.desc}
              </p>
              <div className="btn">
                <Button
                  action={() => DeleteFood(food.title)}
                  name={<RiDeleteBin5Line />}
                />
                <Button
                  action={() => EditFood(food.title)}
                  name={<FaRegEdit />}
                />
                <FavIcon
                  color={food.fav ? 'red' : 'grey'}
                  onClick={() => handleFavorite(food.title)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FoodSection;
