import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { store } from '../store';
import Auth from '../pages/layouts/auth';
import Default from '../pages/layouts/default';

export default function RouterWrapper(props) {
    const { component: Component, isPrivate, ...rest } = props;

    // const { signed } = store.getState().auth;
    const signed = false;

    if (!signed && isPrivate) {
      return <Redirect to={{ pathname: '/', state: { from: props.location } }}/>
    }

    if (signed && !isPrivate) {
      return <Redirect to='/dashboard'/>
    }

    const Layout = signed ? Default : Auth;

    return <Route {...rest} render={props => (
      <Layout>
        <Component {...props}/>
      </Layout>
    )}/>
}

RouterWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RouterWrapper.defaultProps = {
  isPrivate: false
};