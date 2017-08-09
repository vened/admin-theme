import PropTypes from 'prop-types';
import React from 'react';

const Col = (props) => {
  let colClass = [];

  if (props.size.xs) {
    colClass.push(`col-xs-${props.size.xs}`);
  }
  if (props.size.xsOffset) {
    colClass.push(`col-xs-offset-${props.size.xsOffset}`);
  }
  if (props.size.xsPull) {
    colClass.push(`col-xs-pull-${props.size.xsPull}`);
  }
  if (props.size.xsPush) {
    colClass.push(`col-xs-push-${props.size.xsPush}`);
  }

  if (props.size.sm) {
    colClass.push(`col-sm-${props.size.sm}`);
  }
  if (props.size.smOffset) {
    colClass.push(`col-sm-offset-${props.size.smOffset}`);
  }
  if (props.size.smPull) {
    colClass.push(`col-sm-pull-${props.size.smPull}`);
  }
  if (props.size.smPush) {
    colClass.push(`col-sm-push-${props.size.smPush}`);
  }

  if (props.size.md) {
    colClass.push(`col-md-${props.size.md}`);
  }
  if (props.size.mdOffset) {
    colClass.push(`col-md-offset-${props.size.mdOffset}`);
  }
  if (props.size.mdPull) {
    colClass.push(`col-md-pull-${props.size.mdPull}`);
  }
  if (props.size.mdPush) {
    colClass.push(`col-md-push-${props.size.mdPush}`);
  }

  if (props.size.lg) {
    colClass.push(`col-lg-${props.size.lg}`);
  }
  if (props.size.lgOffset) {
    colClass.push(`col-lg-offset-${props.size.lgOffset}`);
  }
  if (props.size.lgPull) {
    colClass.push(`col-lg-pull-${props.size.lgPull}`);
  }
  if (props.size.lgPush) {
    colClass.push(`col-lg-push-${props.size.lgPush}`);
  }

  return (
    <div className={colClass.join(' ')}>
      {React.Children.toArray(props.children)}
    </div>
  );
};

Col.propTypes = {
  md: PropTypes.string,
  size: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default Col;
