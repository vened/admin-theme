import {
  Layout,
  LocaleProvider,
} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import ContentHeading from '../../components/ContentHeading';
import Sidebar from '../../components/Sidebar';
import AdminHeader from '../../components/AdminHeader';
import Dashboard from '../../containers/Dashboard';
import UI from '../../containers/UI';
import store, { history } from '../../store';
import './App.css';

const { Content } = Layout;

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <LocaleProvider locale={enUS}>
            <Layout style={{ minHeight: '100vh' }}>
              <AdminHeader />
              <Layout style={{ flexDirection: 'row', overflowX: 'hidden' }}>
                <Sidebar />
                <Layout style={{ height: '100vh' }}>
                  <Content style={{
                    margin: '0',
                    padding: '64px 0 0 0',
                    // background: '#fff',
                    overflow: 'auto',
                  }}
                  >
                    <main style={{ padding: '16px' }}>
                      <ContentHeading />
                      <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/ui" component={UI} />
                      </Switch>
                    </main>
                  </Content>
                </Layout>
              </Layout>
            </Layout>
          </LocaleProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
}

App.propTypes = {
  collapsed: PropTypes.bool,
};

export default App;
