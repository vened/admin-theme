import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Panels from '../../components/Bootstrap/Panels';
import { setPage } from '../../store/Header/reducer';
import { DatePicker } from 'antd';

class UiComponents extends PureComponent {
  componentDidMount() {
    this.props.setPage({ currentPage: 'UiComponents' });
  }

  render() {
    return (
      <div>
        <DatePicker />
        <Panels />
      </div>
    );
  }
}

UiComponents.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
  setPage,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UiComponents);
