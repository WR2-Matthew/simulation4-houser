import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';
import StepOne from './components/StepOne/StepOne';
import StepTwo from './components/StepTwo/StepTwo';
import StepThree from './components/StepThree/StepThree';

export default (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route path='/wizard' component={Wizard} />
    <Route path='/wizard/step#1' component={StepOne} />
    <Route path='/wizard/step#2' component={StepTwo} />
    <Route path='/wizard/step#3' component={StepThree} />
  </Switch>
);