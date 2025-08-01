import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('Logged out!');
  };

  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/login">Login</Link> |{" "}
      <Link to="/register">Register</Link> |{" "}
      <Link to="/dashboard">Dashboard</Link> |{" "}
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
