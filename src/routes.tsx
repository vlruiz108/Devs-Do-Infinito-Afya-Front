import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/pages/Home';
import Login from './views/pages/Login';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;