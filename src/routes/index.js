import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";
import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ForgotRequest from "../pages/Forgot/Request";
import ForgotReset from "../pages/Forgot/Reset";

export default function Routes() {
  return (
    <Switch>
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/forgot' component={ForgotRequest} />
      <Route path='/reset/:token?' component={ForgotReset} />
      <Route path='/' exact isPrivate component={Dashboard} />
    </Switch>
  );
}