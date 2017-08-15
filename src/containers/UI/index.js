import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import UiBadge from './UiBadge';
import UiBase from './UiBase';
import UiComponents from './UiComponents';
import './ui.css';

const UI = () => {
  return (
    <Switch>
      <Route exact path="/ui" component={UiBase} />
      <Route path="/ui/badge" component={UiBadge} />
      <Route path="/ui/components" component={UiComponents} />
    </Switch>
  );
};

export default UI;
