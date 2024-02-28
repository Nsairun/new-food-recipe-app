/* eslint-disable react/prop-types */
import React from 'react';
import './cards.css';

function Cards({ title, description, icon }) {
  return (
    <div className="cards">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <i>{icon}</i>
        <h1
          style={{
            fontSize: '20px',
            width: '15vw',
            textAlign: 'center',
            padding: '5px',
          }}
        >
          {title}
        </h1>
      </div>
      <p
        style={{
          fontSize: '15px',
          textAlign: 'left',
          lineHeight: '20px',
          padding: '10px',
          width: '20vw',
          fontWeight: '450',
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default Cards;
