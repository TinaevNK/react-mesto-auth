import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({component: Component, ...props}) => {
  return (
    <Route>
      {
        () => props.loggedIn === true ? <Component {...props} /> : <Redirect to="./sign-in" />
      }
    </Route>
  )
}

export default ProtectedRoute;
