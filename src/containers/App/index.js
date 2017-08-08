import React from 'react';
import {
  Link,
  Route,
} from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Dashboard from '../../containers/Dashboard';
import UI from '../../containers/UI';
import './App.css';

const App = () => (
  <div className="defaultTheme App">
    <aside>
      <Sidebar />
    </aside>
    <main>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/ui" component={UI} />
    </main>
  </div>
);

export default App;
