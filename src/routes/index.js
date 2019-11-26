import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";
import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Request from "../pages/Forgot/Request";
import Reset from "../pages/Forgot/Reset";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/forgot" component={Request} />
      <Route path="/reset" component={Reset} />
      <Route path="/dashboard" isPrivate component={Dashboard} />
    </Switch>
  );
}