import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { setPage } from '../../store/Header/reducer';
import {
  decrement,
  decrementAsync,
  increment,
  incrementAsync,
} from '../../store/UI/reducer';

class UI extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setPage({currentPage: 'UI'});
  }

  render() {
    return (
      <div>
        <h1>UI</h1>
        <p>Count: {this.props.count}</p>

        <p>
          <button onClick={this.props.increment} disabled={this.props.isIncrementing}>Increment</button>
          <button onClick={this.props.incrementAsync} disabled={this.props.isIncrementing}>Increment Async</button>
        </p>

        <p>
          <button onClick={this.props.decrement} disabled={this.props.isDecrementing}>Decrementing</button>
          <button onClick={this.props.decrementAsync} disabled={this.props.isDecrementing}>Decrement Async</button>
        </p>

        <p>
          <button onClick={() => this.props.changePage()}>Go to about page via redux</button>
        </p>
      </div>
    );
  }
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
  setPage,
  changePage: () => push('/'),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UI);
