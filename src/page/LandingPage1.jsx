import React from 'react';
import './landingPage.css';
import { useNavigate } from 'react-router-dom';
import Cards from '../components/atoms/Cards';
import Recipes from '../components/Oranisms/LandingRecipes/recipes';
import Testimony from '../components/Oranisms/LandingRecipes/Testimony';
import NavBar from '../components/Oranisms/navBar/NavBar';
import Footer from '../components/Oranisms/footer/Footer';

function LandingPage1() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/login');
  }
  return (
    <div className="landing-container">
      <NavBar />
      <div className="landing">
        <h1>WELCOME TO OUR RESTAURANT</h1>
        <p>we have a variety of african meals to offer you</p>
        <div>
          <button type="button" onClick={handleClick}>
            Next Page
          </button>
        </div>
      </div>
      <h1
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: '35px',
          marginTop: '3%',
        }}
      >
        Our Services
      </h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          padding: '5%',
        }}
      >
        <Cards
          title="Fastest Delivery"
          description="Numquam voluptatibus ea, explicabo inventore veritatis eius saepe quam assumenda sunt architecto adipisci iste distinctio alias nisi."
        />
        <Cards
          title="So Much To Choose From "
          description="Numquam voluptatibus ea, explicabo inventore veritatis eius saepe quam assumenda sunt architecto adipisci iste distinctio alias nisi."
        />
        <Cards
          title="Best Offers In Town"
          description="Numquam voluptatibus ea, explicabo inventore veritatis eius saepe quam assumenda sunt architecto adipisci iste distinctio alias nisi."
        />
      </div>{' '}
      <div>
        <h1
          style={{
            textAlign: 'center',
            fontWeight: '700',
            fontSize: '35px',
            marginBottom: '3%',
          }}
        >
          Recipes
        </h1>
        <div>
          <Recipes />
        </div>
        <div style={{ marginTop: '3%' }}>
          <Testimony />
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage1;
