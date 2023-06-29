import React from 'react';
import './landingPage.css';
import { useNavigate } from 'react-router-dom';

function LandingPage1() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/hero');
  }
  return (
    <div className="landing">
      <h1>WELCOME TO OUR RESTAURANT</h1>
      <p>we have a variety of african meals to offer you</p>
      <button type="button" onClick={handleClick}>
        Next Page
      </button>
    </div>
  );
}

export default LandingPage1;
