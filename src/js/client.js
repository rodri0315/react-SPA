import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// import styles from '../sass/grayscale.scss';
import cssStyles from '../css/grayscale.css';

import About from './pages/About';
import Favorites from './pages/Favorites';
import Layout from "./pages/Layout";
import Settings from './pages/Settings';
import Todos from './pages/Todos';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory} >
    <Route path="/" component={Layout}>
      <IndexRoute component={Todos}></IndexRoute>
      <Route path="favorites" name="favorites" component={Favorites}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
      <Route path="about" name="about" component={About}></Route>
    </Route>
  </Router>, 
  app);
