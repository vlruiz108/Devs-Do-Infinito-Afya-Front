import { Route, Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const PrivateRoutes: any = ({ component: Component, path: Path, ...rest }: any) => {
  const isLogin: string | null = localStorage.getItem('@TokenAGMed');

  const isSectionActive: any = () => {
    if (isLogin === null) {
      return false
    } else {
      const onlyToken: any = isLogin
      const tokenPayLoad: any = jwt.decode(onlyToken)
      const expSeconds = tokenPayLoad.exp;
      const timeNow = Date.now() / 1000;

      return timeNow > expSeconds ? false : true
    }
  }

  return (
    <Route {...rest} render={props => (
      isSectionActive() ? <Component {...props} /> : <Redirect to="/login" />
    )} />
  );
}

export default PrivateRoutes;