import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage1() {
  const Navigate = useNavigate();

  const handleNavigate = () => {
    Navigate('/heropage');
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>WELCOME TO OUR RESTAURRANT</h1>
      <p style={{ color: 'red' }}>
        we have a variety of african meals to offer you
      </p>
      <button type="button" onClick={handleNavigate}>
        Next
      </button>
    </div>
  );
}

export default LandingPage1;
