import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import './styles/defaultTheme.less';

render(
  <App />,
  document.getElementById('root'),
);
registerServiceWorker();
