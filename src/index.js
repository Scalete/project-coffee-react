import React from 'react';
import ReactDOM from 'react-dom';

import './fonts/fonts.scss'
import './index.scss';
import './styles/core.scss'
import App from './components/app/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
