import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPage } from '../../store/Header/reducer';

class UiGeneral extends PureComponent {
  componentDidMount() {
    this.props.setPage({ currentPage: 'UiGeneral' });
  }

  render() {
    return (
      <div>
        <h1>UiGeneral</h1>
      </div>
    );
  }
}

UiGeneral.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
  setPage,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UiGeneral);
