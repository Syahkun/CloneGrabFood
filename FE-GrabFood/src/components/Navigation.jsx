import React from "react";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import $ from "jquery";

const Navigation = (props) => {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $("#nav-home").addClass("transparent");
      $("#logo-white").addClass("display-none");
      $("#logo-green").removeClass("display-none");
    } else if ($(document).scrollTop() < 50) {
      $("#nav-home").removeClass("transparent");
      $("#logo-white").removeClass("display-none");
      $("#logo-green").addClass("display-none");
    }
  });
  return (
    <div className="">
      <Navbar id="nav-home">
        <Navbar.Brand className="logo-box" href="#home">
          <img
            id="logo-white"
            src="https://food.grab.com/static/images/logo-grabfood-white.svg"
            alt="..."
            className="logo-size "
          />
          <img
            id="logo-green"
            src="https://food.grab.com/static/images/logo-grabfood.svg"
            alt="..."
            className="display-none logo-size "
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {/* <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
