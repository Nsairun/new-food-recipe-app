/* eslint-disable react/prop-types */
import React from 'react';
import './button.css';

function Button({ action, name }) {
  return (
    <div>
      <button type="button" onClick={action}>
        {name || 'button'}
      </button>
    </div>
  );
}

export default Button;
