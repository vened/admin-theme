import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import UiBase from './UiBase';
import UiGeneral from './UiGeneral';

const UI = () => (
  <Switch>
    <Route exact path="/ui" component={UiBase} />
    <Route path="/ui/general" component={UiGeneral} />
  </Switch>
);

export default UI;
