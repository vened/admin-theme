import React from 'react';
import './Logo.css';
import logo from './logo.svg';

function Logo() {
  return (
    <div className="Logo">
      <img src={logo} className="Logo-img" alt="logo" />
    </div>
  );
}

export default Logo;
