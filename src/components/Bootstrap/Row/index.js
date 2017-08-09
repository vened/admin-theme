import PropTypes from 'prop-types';
import React from 'react';

const Row = (props) => (
  <div className="row">
    {React.Children.toArray(props.children)}
  </div>
);

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Row;
