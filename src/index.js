import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import Home from './components/homePage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <Home />,
  document.getElementById('app')
);
