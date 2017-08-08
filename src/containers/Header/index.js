import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import './Header.css';

function Header(props) {
  return (
    <header>
      <h1>
        {props.currentPage}
      </h1>
    </header>
  );
}

Header.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  currentPage: state.Header.currentPage,
});

export default connect(
  mapStateToProps,
)(Header);
