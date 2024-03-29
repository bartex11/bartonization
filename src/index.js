import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.scss';
import {I18nextProvider} from 'react-i18next';

import i18n from './i18n';
import App from './App';


ReactDOM.render (
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
  document.getElementById ('root')
);
