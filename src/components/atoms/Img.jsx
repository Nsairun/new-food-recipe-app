/* eslint-disable react/prop-types */
import React from 'react';
import './img.css';

function Img({ image }) {
  return (
    <div>
      <img src={image} alt="" />
    </div>
  );
}

export default Img;
