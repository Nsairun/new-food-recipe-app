import React, { useState } from 'react';
import './login.css';
import NavBar from '../components/Oranisms/navBar/NavBar';

function LoginForm() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleLoginClick = () => {
    setIsLoginForm(true);
  };

  const handleSignupClick = () => {
    setIsLoginForm(false);
  };

  const handleSignupLinkClick = () => {
    handleSignupClick();
  };
  const handleLoginKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleLoginClick();
    }
  };

  const handleSignupLinkKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleLoginClick();
    }
  };

  const handleSignupKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSignupClick();
    }
  };

  return (
    <div>
      <NavBar />
      <div className="wrapper">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <div className="title login">Login Form</div>
          <h1>...</h1>
          <div className="title signup">Signup Form</div>
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <input
              type="radio"
              name="slide"
              id="login"
              checked={isLoginForm}
              readOnly
            />
            <input
              type="radio"
              name="slide"
              id="signup"
              checked={!isLoginForm}
              readOnly
            />
            <button
              type="button"
              className={`slide login ${isLoginForm ? 'active' : ''}`}
              onClick={handleLoginClick}
              onKeyDown={handleLoginKeyDown}
              role="radio"
              aria-checked={isLoginForm}
              tabIndex={0}
            >
              Login
            </button>
            <button
              type="button"
              className={`slide signup ${!isLoginForm ? 'active' : ''}`}
              onClick={handleSignupClick}
              onKeyDown={handleSignupKeyDown}
              role="radio"
              aria-checked={!isLoginForm}
              tabIndex={0}
            >
              Signup
            </button>
            <div className="slider-tab" />
          </div>
          <div className="form-inner">
            {isLoginForm ? (
              <form action="#" className="login">
                <div className="field">
                  <div className="field-label">Email Address</div>
                  <input
                    type="text"
                    id="email-login"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="field">
                  <div className="field-label">Password</div>
                  <input
                    type="password"
                    id="password-login"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="pass-link">
                  <button
                    type="button"
                    onClick={handleSignupLinkClick}
                    onKeyDown={handleSignupLinkKeyDown}
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="field btn">
                  <div className="btn-layer" />
                  <input type="submit" value="Login" />
                </div>
                <div className="signup-link">
                  Not a member?{' '}
                  <button
                    type="button"
                    onClick={handleSignupLinkClick}
                    onKeyDown={handleSignupLinkKeyDown}
                  >
                    Signup now
                  </button>
                </div>
              </form>
            ) : (
              <form action="#" className="signup">
                <div className="field">
                  <div className="field-label">Email Address</div>
                  <input
                    type="text"
                    id="email-signup"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="field">
                  <div className="field-label">Password</div>
                  <input
                    type="password"
                    id="password-signup"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="field">
                  <div className="field-label">Confirm password</div>
                  <input
                    type="password"
                    id="confirm-password-signup"
                    placeholder="Confirm password"
                    required
                  />
                </div>
                <div className="field btn">
                  <div className="btn-layer" />
                  <input type="submit" value="Signup" />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
