import PropTypes from 'prop-types';
import React from 'react';
import './AdminPanel.css';

const AdminPanel = (props) => {
  return (
    <div className="AdminPanel">
      {props.title &&
       <div className="AdminPanelHeader">
         {props.title}
       </div>
      }
      <div className="AdminPanelBody">
        {React.Children.toArray(props.children)}
      </div>
    </div>
  );
};

AdminPanel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default AdminPanel;
