import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  const goToSignup = () => {
    navigate('/signup');
  };

  return (
    <div>
      <h2>Welcome</h2>
      <button onClick={goToLogin}>Login</button>
      <br></br>
      <button onClick={goToSignup}>Signup</button>
    </div>
  );
}

export default LandingPage;
