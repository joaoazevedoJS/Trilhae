import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';

const Routes: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" exact component={Signin} />
      <Route path="/signup" exact component={Signup} />
      <Route path="**" exact component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
