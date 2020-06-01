import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

//import pages
import Home from "../pages/Home";
import Result from "../pages/Result";
import Login from "../pages/Login";
import Daftar from "../pages/Daftar";
// import Eks from "../pages/Eks2";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Restoran" component={Result} />
          <Route exact path="/:category" component={Result} />
          <Route exact path="/search=:keyword" component={Result} />
          <Route exact path="/program:program" component={Result} />
          <Route exact path="/promo:promo" component={Result} />
          <Route exact path="/Jarak-terdekat" component={Result} />
          <Route exact path="/login/pengguna" component={Login} />
          <Route exact path="/daftar/pengguna" component={Daftar} />
          {/* <Route exact path="/eks" component={Eks} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
