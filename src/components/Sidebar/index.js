import React from 'react';
import FontAwesome from 'react-fontawesome';
import SidebarHeader from '../../components/SidebarHeader';
import './sidebar.css';

function Sidebar() {
  return (
    <div className="Sidebar">
      <SidebarHeader />
      <FontAwesome name='rocket'/>
    </div>
  );
}

export default Sidebar;
