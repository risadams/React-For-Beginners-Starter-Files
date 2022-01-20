import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import StorePicker from './StorePicker';
import App from './App';

const Router = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StorePicker}></Route>
        <Route path="/store/:storeId" component={App}></Route>
        <Route component={() => <h1>404</h1>}></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);

export default Router;