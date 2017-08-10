import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import UiBase from './UiBase';
import UiGeneral from './UiGeneral';
import UiComponents from './UiComponents';

const UI = () => (
  <Switch>
    <Route exact path="/ui" component={UiBase} />
    <Route path="/ui/general" component={UiGeneral} />
    <Route path="/ui/components" component={UiComponents} />
  </Switch>
);

export default UI;
