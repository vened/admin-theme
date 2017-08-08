import React from 'react';
import { Route, } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Dashboard from '../../containers/Dashboard';
import Header from '../../containers/Header';
import UI from '../../containers/UI';
import './App.css';

const App = () => (
  <div className="defaultTheme App">
    <aside>
      <Sidebar />
    </aside>
    <div className="AppMain">
      <Header />
      <main>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/ui" component={UI} />
      </main>
    </div>
  </div>
);

export default App;
