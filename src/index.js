import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeIcons } from '@uifabric/icons';

import './_styles/index.css';

// Register icons and pull the fonts from the default SharePoint cdn
initializeIcons();
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
