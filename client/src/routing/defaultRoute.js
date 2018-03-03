import React from 'react';
import PropTypes from 'prop-types';
import {Route} from "react-router-dom";

const DefaultRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={props => (
      <Component {...props} />
    )}/>
  );
};

DefaultRoute.propTypes = {
  component: PropTypes.any.isRequired
};

export default DefaultRoute;
