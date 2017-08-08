import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import {
  decrement,
  decrementAsync,
  increment,
  incrementAsync,
} from '../../store/UI/reducer';

function UI(props) {
  return (
    <div>
      <h1>UI</h1>
      <p>Count: {props.count}</p>

      <p>
        <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
        <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
      </p>

      <p>
        <button onClick={props.decrement} disabled={props.isDecrementing}>Decrementing</button>
        <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
      </p>

      <p>
        <button onClick={() => props.changePage()}>Go to about page via redux</button>
      </p>
    </div>
  );
}

UI.propTypes = {
  prop: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  count: state.UI.count,
  isIncrementing: state.UI.isIncrementing,
  isDecrementing: state.UI.isDecrementing,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/'),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UI);
