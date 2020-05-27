import React from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar, FormControl, Button, Form } from "react-bootstrap";
// import $ from "jquery";

const Navigation = (props) => {
  console.warn("cek navi 2", props);
  return (
    <div className="">
      <Navbar id="nav-result">
        <Navbar.Brand className="logo-box" style={{ marginRight: "7vmin" }}>
          {" "}
          <Link to="/">
            <img
              id="logo"
              src="https://food.grab.com/static/images/logo-grabfood.svg"
              alt="..."
              className="logo-size "
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Form inline>
          <FormControl
            value={props.lokasi}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
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
