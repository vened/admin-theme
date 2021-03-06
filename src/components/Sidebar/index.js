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
import shortid from 'shortid';
import SidebarHeader from '../../components/SidebarHeader';
import navData from '../../navData';
import {
  siderCollapsed,
  siderUnCollapsed,
} from '../../store/Sider/reducer';
import './sidebar.css';

const SubMenu = Menu.SubMenu;
const { Sider } = Layout;

class Sidebar extends PureComponent {

  renderMenuItem = (menuItem) => {
    if (menuItem.children) {
      return this.renderSubMenu(menuItem);
    }
    return (
      <Menu.Item key={shortid.generate()}>
        <NavLink
          to={menuItem.path}
        >
          {menuItem.faIcon && <FontAwesome name={menuItem.faIcon} />}
          <span>{menuItem.label}</span>
        </NavLink>
      </Menu.Item>
    );
  };

  renderSubMenu = (item) => (
    <SubMenu
      key={shortid.generate()}
      title={<span><Icon type={item.faIcon} /><span>{item.label}</span></span>}
    >
      {item.children.map((subMenuItem) => this.renderMenuItem(subMenuItem))}
    </SubMenu>
  );

  renderMenu = () => (
    <Menu theme="dark" mode="inline">
      {navData.map((menuItem) => this.renderMenuItem(menuItem))}
    </Menu>
  );

  handleCollapsed = (collapsed) => {
    if (collapsed) {
      this.props.siderCollapsed();
    } else {
      !this.props.collapsedDefault && this.props.siderUnCollapsed();
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
        collapsible={false}
        onCollapse={this.handleCollapsed}
        collapsed={this.props.collapsed}
      >
        <SidebarHeader />
        {this.renderMenu()}
      </Sider>
    );
  }
}

Sidebar.propTypes = {
  collapsed: PropTypes.bool,
  collapsedDefault: PropTypes.bool,
  siderWidth: PropTypes.number,
  siderCollapsed: PropTypes.func,
  siderUnCollapsed: PropTypes.func,
};

const mapStateToProps = state => ({
  collapsed: state.Sider.collapsed,
  collapsedDefault: state.Sider.collapsedDefault,
  siderWidth: state.Sider.siderWidth,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  siderCollapsed,
  siderUnCollapsed,
}, dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
