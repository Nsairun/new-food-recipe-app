import React, { useNavigate } from 'react';
import './landingPage.css';

function LandingPage1() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }
  return (
    <div className="landing">
      <h1>WELCOME TO OUR RESTAURANT</h1>
      <p>we have a variety of african meals to offer you</p>
      <button type="button" onSubmit={handleClick}>
        Next Page
      </button>
    </div>
  );
}

export default LandingPage1;
