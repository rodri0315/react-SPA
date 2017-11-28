import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// import styles from '../sass/grayscale.scss';
import cssStyles from '../css/grayscale.css';

import About from './pages/About';
import Archives from './pages/Archives';
import Featured from './pages/Featured';
import Layout from "./pages/Layout";
import Settings from './pages/Settings';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory} >
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="archives(/:article)" name="archives" component={Archives}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
      <Route path="about" name="about" component={About}></Route>
    </Route>
  </Router>, 
  app);
