import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./App.css";  // Import the CSS file

function Signup() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!id || !password) {
      setError('Please enter both username and password.');
      return;
    }

    try {
      const response = await fetch('http://3.38.191.164/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, password }),
      });

      if (response.ok) {
        alert('Signup successful! Please login.');
        navigate('/login');
      } else {
        const data = await response.json();
        setError(data.message || 'Signup failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
