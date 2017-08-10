import PropTypes from 'prop-types';
import React from 'react';

const renderPanelHeading = (props) => {
  if (props.heading && !props.title) {
    return (
      <div className="panel-heading">
        {props.heading}
      </div>
    );
  }
  if (!props.heading && props.title) {
    return (
      <div className="panel-heading">
        <h3 className="panel-title">
          {props.title}
        </h3>
      </div>
    );
  }
  if (props.heading && props.title) {
    return (
      <div className="panel-heading">
        <h3 className="panel-title">
          {props.title}
        </h3>
      </div>
    );
  }
};

const Panel = (props) => (
  <div className="panel panel-default">
    {renderPanelHeading(props)}
    <div className="panel-body">
      {React.Children.toArray(props.children)}
    </div>
    {props.footer &&
     <div className="panel-footer">
       {props.footer}
     </div>
    }
  </div>
);

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  footer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

export default Panel;
