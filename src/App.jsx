import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Form } from './components/Form';
import { User } from './components/User';

export const App = () => (
  <Router>
    <Switch>
      <Route exact path="/"><Form /></Route>
      <Route exact path="/user"><User /></Route>
    </Switch>
  </Router>
);
