import React from "react";
import {
  Route,
  withRouter,
  Switch
} from "react-router-dom";

import PrivateRoute from './privateRoute';

import HomePage from '../containers/home/homePage'
import ExamplePage from '../containers/example/examplePage'
import PageNotFound from "../containers/pageNotFound";
import DefaultRoute from "./defaultRoute";

class Routing extends React.Component {

  render() {
    return (
      <Switch>
        <DefaultRoute exact path={`/`} component={HomePage}/>

        <PrivateRoute path={`/example`} component={ExamplePage}/>

        <Route component={PageNotFound}/>
      </Switch>
    )
  }
}



/*
const AdminRoute = ({component: Component, appState, ...rest}) => (
  <Route {...rest} render={props => (
    (appState.userState.isAuthenticated ) ? (
      <Component {...props} userState={appState.userState} contractState={appState.contractState}
                 employeeState={appState.employeeState}/>
    ) : (
        <Redirect to={{
            pathname: "/login",
            state: {from: props.location}
          }}
        />
    )
  )}/>
);
*/
export default withRouter(Routing);