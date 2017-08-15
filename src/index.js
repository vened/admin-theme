import React from 'react';
import { render } from 'react-dom';

import App from './containers/App';
import './index.css';
import './styles/defaultTheme.less';
// @import "~antd/dist/antd.less";   // import official less entry file
// @import "your-theme-file.less";
import registerServiceWorker from './registerServiceWorker';

render(
  <App />,
  document.getElementById('root'),
);
registerServiceWorker();
