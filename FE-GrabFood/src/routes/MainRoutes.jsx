import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

//import pages
import Home from "../pages/Home";
import Result from "../pages/Result";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/Result" component={Result} /> */}
          <Route exact path="/:category" component={Result} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
