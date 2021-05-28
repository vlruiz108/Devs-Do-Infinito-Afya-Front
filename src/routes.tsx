import React from 'react';
import PrivateRoutes from './privateRoutes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/pages/Home';
import Login from './views/pages/Login';
import Teste from './views/pages/Teste';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/teste" component={Teste} />
        <PrivateRoutes exact path="/Home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;