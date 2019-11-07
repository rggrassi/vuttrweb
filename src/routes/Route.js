import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { store } from '../store';
import Auth from '../pages/layouts/auth';

export default function RouterWrapper(props) {
    const { component: Component, isPrivate, ...rest } = props;

    const { signed } = store.getState().auth;

    if (!signed && isPrivate) {
      return <Redirect to={{ pathname: '/', state: { from: props.location } }}/>
    }

    if (signed && !isPrivate) {
      return <Redirect to='/dashboard'/>
    }

    //const Layout = signed ? DefaultLayout : Auth

    return <Route {...rest} render={props => (
      <Auth>
        <Component {...props}/>
      </Auth>
    )}/>
}

RouterWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RouterWrapper.defaultProps = {
  isPrivate: false
};