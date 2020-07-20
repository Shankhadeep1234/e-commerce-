import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomPage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomPage} />
      </Switch>
    </div>
  );
}

export default App;
