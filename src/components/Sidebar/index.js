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
import navData from '../../navData';
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

  render() {
    return (
      <Sider
        className="AdminSidebar"
        style={{ left: 0 }}
        width="240"
        collapsedWidth="64"
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
      >
        {this.renderMenu()}
      </Sider>
    );
  }
}

Sidebar.propTypes = {
  collapsed: PropTypes.bool,
};

const mapStateToProps = state => ({
  collapsed: state.Sider.collapsed,
});

export default connect(
  mapStateToProps,
)(Sidebar);
