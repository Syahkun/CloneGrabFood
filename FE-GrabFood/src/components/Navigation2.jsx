import React from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Search from "./SearchNavRes";
// import InputSearch from "./InputSearch";
// import $ from "jquery";

const Navigation = (props) => {
  console.warn("cek navi 2", props);
  return (
    <div className="">
      <Navbar id="nav-result" style={{ height: "89px" }}>
        <Navbar.Brand className="logo-box" style={{ marginRight: "7vmin" }}>
          <Link to="/">
            <img
              id="logo-nav-2"
              style={{ width: "auto", height: "24px" }}
              src="https://food.grab.com/static/images/logo-grabfood.svg"
              alt="..."
              className="logo-size "
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Search {...props} />
        <Navbar.Collapse></Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
