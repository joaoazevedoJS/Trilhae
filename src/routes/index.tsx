import React, { FC } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Page from './Page';

import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';
import SendMailSucessed from '../pages/SendMailSucessed';
import SignupSucessed from '../pages/SignupSucessed';

import Helcome from '../pages/Logged/Helcome';
import Courses from '../pages/Logged/Courses';
import Points from '../pages/Logged/Points';
import Awards from '../pages/Logged/Awards';
import Classroom from '../pages/Logged/Classroom';
import Forgot from '../pages/Forgot';

const Routes: FC = () => (
  <BrowserRouter>
    <Switch>
      <Page path="/" exact component={Home} />
      <Page path="/signin" exact component={Signin} />
      <Page path="/signup" exact component={Signup} />
      <Page path="/forgot" exact component={Forgot} />
      <Page path="/sucess/mail" exact component={SendMailSucessed} />
      <Page path="/sucess/signup" exact component={SignupSucessed} />

      <Page path="/logged/helcome" exact component={Helcome} isPrivate />
      <Page path="/logged/courses" exact component={Courses} isPrivate />
      <Page path="/logged/points" exact component={Points} isPrivate />
      <Page path="/logged/awards" exact component={Awards} isPrivate />
      <Page
        path="/logged/classroom/:course"
        exact
        component={Classroom}
        isPrivate
      />

      <Page path="**" exact component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
