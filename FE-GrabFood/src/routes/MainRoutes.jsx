import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

//import pages
import Home from "../pages/Home";
import Restoran from "../pages/Result";
// import Eks from "../pages/Eks2";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Restoran" component={Restoran} />
          <Route exact path="/:category" component={Restoran} />
          <Route exact path="/search=:keyword" component={Restoran} />
          {/* <Route exact path="/eks" component={Eks} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
