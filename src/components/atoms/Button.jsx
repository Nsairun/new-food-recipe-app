import React from 'react';
import './button.css';

function Button(props) {
  return (
    <div>
      <button type="button">{props}</button>
    </div>
  );
}

export default Button;
