import React from 'react';
import foodData from '../img';
import Img from '../components/atoms/Img';

function FavPage() {
  return (
    <div>
      <div className="foodContainer">
        {foodData?.map((food) => (
          <div className="food-section" key={food.ti}>
            <Img image={food.src} />
            <div className="food-heading">
              <h1>{food.title}</h1>
              <p>{food.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavPage;
