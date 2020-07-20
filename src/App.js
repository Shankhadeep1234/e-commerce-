import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomPage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomPage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
