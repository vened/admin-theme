import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPage } from '../../store/Header/reducer';

class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setPage({currentPage: 'Dashboard'});
  }

  render() {
    return (
      <div>
        Dashboard
      </div>
    );
  }
}

Dashboard.propTypes = {
  prop: PropTypes.string.isRequired,
};


const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
  setPage,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
