/* eslint-disable react/prop-types */
import React from 'react';
import './img.css';

function Img({ image }) {
  return (
    <div>
      <img src={image} alt="logo" width="100" height="100" />
    </div>
  );
}

export default Img;
