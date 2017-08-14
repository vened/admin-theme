import {
  Icon,
  Layout,
} from 'antd';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleCollapsed } from '../../store/Sider/reducer';
import './Header.css';

const { Header } = Layout;

class AdminHeader extends PureComponent {
  render() {
    return (
      <Header style={{
        position: 'fixed',
        width: '100%',
        height: '70px',
        padding: this.props.collapsed ? '0px 31px 0px 80px' : '0px 31px 0px 256px',
      }}>
        <Icon
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.props.toggleCollapsed}
          style={{ fontSize: 16, color: '#fff' }}
        />
      </Header>
    );
  }
}


AdminHeader.propTypes = {
  currentPage: PropTypes.string.isRequired,
  collapsed: PropTypes.bool,
};

const mapStateToProps = state => ({
  currentPage: state.Header.currentPage,
  collapsed: state.Sider.collapsed,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleCollapsed,
}, dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminHeader);
