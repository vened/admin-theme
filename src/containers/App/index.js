import {
  Icon,
  Layout,
  Menu,
} from 'antd';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
// import {
//   Route,
//   Switch,
// } from 'react-router-dom';
// import Sidebar from '../../components/Sidebar';
// import Dashboard from '../../containers/Dashboard';
// import Header from '../../containers/Header';
// import UI from '../../containers/UI';
import './App.css';

const { Header, Sider, Content } = Layout;

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>

        <Header style={{
          position: 'fixed',
          width: '100%',
          height: '70px',
          padding: this.state.collapsed ? '0px 31px 0px 80px' : '0px 31px 0px 256px',
        }}>
          <Icon
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
            style={{ fontSize: 16, color: '#08c' }}
          />
        </Header>

        <Layout style={{ 'flexDirection': 'row', overflowX: 'hidden' }}>
          <Sider
            style={{ left: 0 }}
            width="240"
            collapsedWidth="64"
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span>nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span>nav 3</span>
              </Menu.Item>
            </Menu>
          </Sider>

          <Layout style={{ height: '100vh' }}>
            <Content style={{
              margin: '0',
              padding: '70px 0 0 0',
              background: '#fff',
              overflow: 'initial',
            }}>
              <div style={{
                display: 'flex',
                flexFlow: 'row wrap',
                alignItems: 'flex-start',
                padding: '16px',
              }}>

                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
                <h1>Content</h1>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

App.propTypes = {
  PROP: PropTypes.string.isRequired,
};

// const App = () => (
//   <div className="defaultTheme App">
//     <aside>
//       <Sidebar />
//     </aside>
//     <div className="AppMain">
//       <Header />
//       <main>
//         <Switch>
//           <Route exact path="/" component={Dashboard} />
//           <Route path="/ui" component={UI} />
//         </Switch>
//       </main>
//     </div>
//   </div>
// );
//

export default App;
