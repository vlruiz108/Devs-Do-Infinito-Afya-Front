import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
}> = (props) => {
  return localStorage.getItem('@token') ? (
    <Route exact path={props.path} component={props.component} />
  ) : (
    <Redirect to="/" />
  );
};
export default PrivateRoute;