import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { 
  LOGIN_ROUTE, 
  COMPANY_ROUTE, 
  PROJECT_ROUTE, 
  SPRINT_ROUTE, 
  TASK_ROUTE, 
  USER_ROUTE,  
} from 'core/utils/routes';

import Login from 'features/login/Login';
import Company from 'features/company/Company';
import Project from 'features/project/Project';
import Sprint from 'features/sprint/Sprint';
import Task from 'features/task/Task';
import User from 'features/user/User';

function App() {
  return (
    <Router>
      <Route exact path={LOGIN_ROUTE} component={Login} />
      <Route path={COMPANY_ROUTE} component={Company} />
      <Route path={PROJECT_ROUTE} component={Project} />
      <Route path={SPRINT_ROUTE} component={Sprint} />
      <Route path={TASK_ROUTE} component={Task} />
      <Route path={USER_ROUTE} component={User} />
    </Router>
  );
}

export default App;
