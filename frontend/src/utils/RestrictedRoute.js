import { Route, Redirect } from "react-router-dom";

const RestrictedRoute = ({ children, ...rest }) => {
  const authenticated = false;

  return (
    <Route {...rest}>
      {!authenticated ? <Redirect to="/login" /> : children}
    </Route>
  );
};

export default RestrictedRoute;
