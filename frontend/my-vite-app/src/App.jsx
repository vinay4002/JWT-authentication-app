import { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const res = await fetch('http://localhost:3000/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setMessage('Error registering user');
    }
  };

  const handleLogin = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });
      const data = await res.json();
      if (data.token) {
        setToken(data.token);
        setMessage(data.message);
        setIsLoggedIn(true); // ✅ mark login success
      } else {
        setMessage(data.message || 'Login failed');
      }
    } catch (err) {
      setMessage('Error logging in');
    }
  };

  const handleProfile = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/profile', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setMessage(data.message + ' | UserId: ' + data.userId);
    } catch (err) {
      setMessage('Error fetching profile');
    }
  };

  return (
    <div className="App">
      <h1>authentication demo</h1>
      {!isLoggedIn && (
        <>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <div style={{ marginTop: '10px' }}>
            <button onClick={handleRegister}>Register</button>
            <button onClick={handleLogin}>Login</button>
          </div>
        </>
      )}


      {isLoggedIn && (
        <div style={{ marginTop: '10px' }}>
          <button onClick={handleProfile}>Get Profile</button>
        </div>
      )}

      <p style={{ marginTop: '20px' }}>{message}</p>
    </div>
  );
}

export default App;