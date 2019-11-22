import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";
import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ForgotRequest from "../pages/ForgotRequest";
import ForgotConfirm from "../pages/ForgotConfirm";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/forgot" component={ForgotRequest} />
      <Route path="/reset/:token" component={ForgotConfirm} />
      <Route path="/dashboard" isPrivate component={Dashboard} />
    </Switch>
  );
}
