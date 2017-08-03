import React from 'react';
import Logo from '../../components/Logo';
import './sidebarHeader.css';

function SidebarHeader() {
  return (
    <div className="SidebarHeader">
      <div className="text-center">
        <Logo />
      </div>
      <div className="text-center">
        Admin
      </div>
    </div>
  );
}

export default SidebarHeader;
