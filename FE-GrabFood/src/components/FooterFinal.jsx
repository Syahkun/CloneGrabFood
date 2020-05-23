import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FooterFinal = () => {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#363a45", height: "17vmax", color: "white" }}
    >
      <Row>
        <Col>
          <p style={{ marginLeft: "4vmax", marginTop: "3vmax" }}>
            GrabFood tersedia di
          </p>
          <Row style={{ fontSize: "1vmax" }}>
            <Col style={{ marginLeft: "4vmax" }}>
              Indonesia
              &nbsp;|&nbsp;Filipina&nbsp;|&nbsp;Thailand&nbsp;|&nbsp;Vietnam&nbsp;|&nbsp;Singapura
            </Col>
          </Row>
          <Row>
            <Col>
              <p style={{ marginLeft: "4vmax", marginTop: "2vmax" }}>
                © Grab 2020
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} style={{ marginLeft: "4vmax" }}>
              Ketentuan Layanan • Kebijakan Privasi
            </Col>
          </Row>
        </Col>
        <Col>
          <Row
            style={{ marginRight: "4vmax", marginTop: "3vmax" }}
            className="d-flex justify-content-end"
          >
            <span>
              <img
                className="mr-4"
                src={require("../images/facebook-3-512.png")}
                alt="..."
                style={{ width: "2vmax" }}
              />
              <img
                className="mr-4"
                src={require("../images/instagram-512.png")}
                alt="..."
                style={{ width: "2vmax" }}
              />
              <img
                className=""
                src={require("../images/twitter-512.png")}
                alt="..."
                style={{ width: "2vmax" }}
              />
            </span>
          </Row>
          <Row
            className="d-flex justify-content-end"
            style={{ marginRight: "4vmax", marginTop: "8vmin" }}
          >
            <img
              style={{ width: "9vmax", marginRight: "2vmax" }}
              src="https://food.grab.com/static/images/logo-appstore.svg"
              alt="..."
            />
            <img
              style={{ width: "9vmax" }}
              src="https://food.grab.com/static/images/logo-playstore.svg"
              alt="..."
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterFinal;
