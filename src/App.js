import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Homepage/>
      </Route>
      <Route path="/dashboard">
        <Dashboard/>
      </Route>
      <Redirect to="/"/>
    </Switch>
  );
}

export default App;
