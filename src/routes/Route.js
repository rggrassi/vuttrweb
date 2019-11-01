import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { store } from '../store';

export default function RouterWrapper(props) {
    const { component: Component, isPrivate, ...rest } = props;

    const { signed } = store.getState().auth;

    if (!signed && isPrivate) {
        return <Redirect to={{ pathname: '/', state: { from: props.location } }}/>
    }

    if (signed && !isPrivate) {
        return <Redirect to='/dashboard'/>
    }

    return <Route {...rest} render={props => (
        <Component {...props}/>
    )}/>
}