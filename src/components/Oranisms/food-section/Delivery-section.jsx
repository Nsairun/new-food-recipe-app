import React from 'react';
import './delivery.css';
import image from '../../../images/food2.webp';

function Delivery() {
  return (
    <div className="maincontainer">
      <div className="deliv-section">
        <h1>EAT TODAY</h1>
        <h4
          style={{
            fontStyle: 'italic',
            fontWeight: 'bold',
            fontFamily: 'cursive',
          }}
        >
          LIVE ANOTHER DAY
        </h4>
        <p style={{ lineHeight: '30px' }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia hic
          animi totam eveniet? Numquam voluptatibus ea, explicabo inventore
          veritatis eius saepe quam assumenda sunt architecto adipisci iste
          distinctio alias nisi.
        </p>
        <input type="text" placeholder="location" />
        <div className="btn-section">
          <button type="button">Delivery</button>
          <p style={{ width: '5vw', textAlign: 'center' }}>Or</p>
          <button type="button">Pick Up</button>
        </div>
      </div>
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Delivery;
