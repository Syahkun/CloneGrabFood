import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Col, Row } from "react-bootstrap";
import $ from "jquery";

//import function

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
  const namaPengguna = localStorage.getItem("namaPengguna");
  const postSignout = async () => {
    await props.doLogout();
  };
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
          <Navbar.Text className="ml-auto text-navbar">
            {props.dataPengguna.is_login ? (
              <Container>
                <Row>
                  <Col>
                    <Link to="/login/pengguna">
                      <i>{namaPengguna}</i>
                    </Link>
                  </Col>
                  <Col>
                    <Link to="/">
                      <i onClick={() => postSignout()}>Keluar</i>{" "}
                    </Link>
                  </Col>
                </Row>
              </Container>
            ) : (
              <Container>
                <Row>
                  <Col>
                    <Link to="/login/pengguna">
                      <i>Masuk</i>
                    </Link>
                  </Col>
                  <Link to="/daftar/pengguna">
                    <Col>
                      <i href="daftar">Daftar</i>{" "}
                    </Col>
                  </Link>
                </Row>
              </Container>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;

// Signed in as: <a href="#login">Mark Otto</a>
