import React from 'react';
import image from '../../../images/testimg.jpg';
import './testimony.css';

function Testimony() {
  return (
    <div className="test">
      <h1>TESTIMONY</h1>
      <div className="testimony">
        <img src={image} alt="testimony" />
        <div className="customer">
          <h1>Our Lovely Customers Love Our Food </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            aliquam animi voluptatum, nesciunt exercitationem alias,
            voluptatibus minima iure molestiae eius vero laborum inventore
            doloremque error sapiente est. Quibusdam, vel ducimus?
          </p>
          <h4>Customers Name</h4>
          <h4>Location</h4>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
