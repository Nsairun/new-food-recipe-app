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
import Delivery from './Delivery-section';
import Cards from '../../atoms/Cards';
// import Cards from '../../atoms/Cards';

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
      <h1> Added Food Section</h1>
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
        <div>
          <div>
            <h1
              style={{
                fontSize: '40px',
                fontWeight: 'bolder',
                textAlign: 'center',
              }}
            >
              Delivery Section
            </h1>
          </div>
          <Delivery />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '5%',
              padding: '5%',
            }}
          >
            <Cards
              title="Fastest Delivery"
              description="Numquam voluptatibus ea, explicabo inventore veritatis eius saepe quam assumenda sunt architecto adipisci iste distinctio alias nisi."
            />
            <Cards
              title="So Much To Choose From "
              description="Numquam voluptatibus ea, explicabo inventore veritatis eius saepe quam assumenda sunt architecto adipisci iste distinctio alias nisi."
            />
            <Cards
              title="Best Offers In Town"
              description="Numquam voluptatibus ea, explicabo inventore veritatis eius saepe quam assumenda sunt architecto adipisci iste distinctio alias nisi."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodSection;
