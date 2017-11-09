import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPage } from '../../store/Header/reducer';

class Crud extends PureComponent {
  componentDidMount() {
    this.props.setPage({ currentPage: 'Crud' });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        Crud
      </div>
    );
  }
}

Crud.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
  setPage,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Crud);
