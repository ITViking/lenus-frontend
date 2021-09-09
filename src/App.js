import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WeightIn from './pages/WeightIn';
import Weight from './pages/Home';

export default function App() {

  return (
    <Switch>
      <Route exact path="/" component={Weight} />
      <Route path="/weight/:id" component={WeightIn} />
    </Switch>
  )
}
