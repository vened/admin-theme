import PropTypes from 'prop-types';
import React from 'react';
import FontAwesome from 'react-fontawesome';
import shortid from 'shortid';
import './Nav.css';

function Nav(props) {
  return (
    <nav>
      <ul className="admin-nav">
        {props.data.map((item) => {
          return (
            <li
              className="admin-nav-item"
              key={shortid.generate()}
            >
              <a
                className="admin-nav-item-link"
                href={item.path}
              >
                <span className="admin-nav-item-icon">
                  <FontAwesome name={item.faIcon} />
                </span>
                <span className="admin-nav-item-label">
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Nav;
