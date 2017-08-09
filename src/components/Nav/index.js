import PropTypes from 'prop-types';
import React from 'react';
import FontAwesome from 'react-fontawesome';
import { NavLink } from 'react-router-dom';
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
              <NavLink
                to={item.path}
                className="admin-nav-item-link"
              >
                <span className="admin-nav-item-icon">
                  {item.faIcon ? <FontAwesome name={item.faIcon} />
                    : <FontAwesome name="angle-right" />
                  }
                </span>
                <span className="admin-nav-item-label">
                  {item.label}
                </span>
              </NavLink>
              {item.children &&
               <Nav data={item.children} />
              }
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
