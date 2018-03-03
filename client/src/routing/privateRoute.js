import React from 'react';
import {Redirect, Route} from "react-router-dom";

export default class PrivateRoute extends React.Component {

  render() {
    const {component: Component, ...rest} = this.props;
    const authenticated = true;

    if (!authenticated) {
      return (
        <Redirect to={{
          pathname: "/login",
          state: {from: this.props.location}
        }}
        />
      );
    }

    return (
      <Route {...rest} render={props => (
        <Component {...props} />
      )}/>
    )
  }
}