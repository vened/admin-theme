import {
  Icon,
  Layout,
} from 'antd';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AdminUser from '../../components/AdminUser';
import {
  siderCollapsed,
  siderUnCollapsed,
} from '../../store/Sider/reducer';
import './Header.css';

const { Header } = Layout;

class AdminHeader extends PureComponent {

  handleCollapsed = () => {
    if (this.props.collapsed) {
      this.props.siderUnCollapsed();
    } else {
      this.props.siderCollapsed();
    }
  };

  render() {
    return (
      <Header className="AdminHeader" style={{ paddingLeft: this.props.collapsed ? this.props.siderWidth + 16 : '256px' }}>
        <section className="AdminHeaderInset">
          <Icon
            type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.handleCollapsed}
            style={{ fontSize: 16 }}
          />
          <AdminUser />
        </section>
      </Header>
    );
  }
}


AdminHeader.propTypes = {
  currentPage: PropTypes.string.isRequired,
  collapsed: PropTypes.bool,
  siderWidth: PropTypes.number,
  siderCollapsed: PropTypes.func,
  siderUnCollapsed: PropTypes.func,
};

const mapStateToProps = state => ({
  currentPage: state.Header.currentPage,
  collapsed: state.Sider.collapsed,
  siderWidth: state.Sider.siderWidth,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  siderCollapsed,
  siderUnCollapsed,
}, dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminHeader);
