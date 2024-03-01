/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { useState } from 'react';

function PopUp({ buttonText, title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button type="button" onClick={togglePopUp} className="open-button">
        {buttonText}
      </button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>{title}</h2>
            <p>{content}</p>
            <button
              type="button"
              onClick={togglePopUp}
              className="close-button"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopUp;
