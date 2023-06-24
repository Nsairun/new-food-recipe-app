/* eslint-disable react/prop-types */
import React from 'react';
import './img.css';

function Img({ img }) {
  return (
    <div>
      <img src={img} alt="" />
    </div>
  );
}

export default Img;
