import {
  Icon,
  Layout,
  Menu,
} from 'antd';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import navData from '../../navData';
import {
  collapsedBreakpoint,
  unCollapsedBreakpoint,
} from '../../store/Sider/reducer';
import './sidebar.css';

const SubMenu = Menu.SubMenu;
const { Sider } = Layout;

class Sidebar extends PureComponent {

  handleClick = (e) => {
    this.setState({ current: e.key });
  };

  renderMenuItem = (menuItem, key) => {
    if (menuItem.children) {
      return this.renderSubMenu(menuItem, key);
    }
    return (
      <Menu.Item key={key}>
        <NavLink
          to={menuItem.path}
        >
          <FontAwesome name={menuItem.faIcon} />
          <span>{menuItem.label}</span>
        </NavLink>
      </Menu.Item>
    );
  };

  renderSubMenu = (item, key) => {
    return (
      <SubMenu
        key={key}
        title={<span><Icon type={item.faIcon} /><span>{item.label}</span></span>}
      >
        {item.children.map((subMenuItem, key) => this.renderMenuItem(subMenuItem, `sub-${key}`))}
      </SubMenu>
    );
  };

  renderMenu = () => {
    return (
      <Menu theme="dark" mode="inline" onClick={this.handleClick}>
        {navData.map((menuItem, key) => this.renderMenuItem(menuItem, key))}
      </Menu>
    );
  };

  handleCollapsed = (collapsed) => {
    if (collapsed) {
      this.props.collapsedBreakpoint();
    } else {
      this.props.unCollapsedBreakpoint();
    }
  };

  render() {
    return (
      <Sider
        className="AdminSidebar"
        style={this.props.siderWidth === 0 && { position: 'fixed' }}
        width="240"
        breakpoint="sm"
        collapsedWidth={this.props.siderWidth}
        trigger={null}
        onCollapse={this.handleCollapsed}
        collapsed={this.props.collapsed}
      >
        {this.renderMenu()}
      </Sider>
    );
  }
}

Sidebar.propTypes = {
  collapsed: PropTypes.bool,
  siderWidth: PropTypes.number,
  collapsedBreakpoint: PropTypes.func,
  unCollapsedBreakpoint: PropTypes.func,
};

const mapStateToProps = state => ({
  collapsed: state.Sider.collapsed,
  siderWidth: state.Sider.siderWidth,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  collapsedBreakpoint,
  unCollapsedBreakpoint,
}, dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
