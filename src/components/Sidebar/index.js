import React from 'react';
import Nav from '../../components/Nav';
import SidebarHeader from '../../components/SidebarHeader';
import navData from './navData';
import './sidebar.css';

function Sidebar() {
  return (
    <div className="Sidebar">
      <SidebarHeader />
      <Nav data={navData} />
    </div>
  );
}

export default Sidebar;
