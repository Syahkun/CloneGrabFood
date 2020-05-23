import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#eaeff2", paddingBottom: "5vmax" }}
    >
      {" "}
      <Row style={{ height: "6vmax" }}>
        {" "}
        <img
          style={{ margin: "3vmax 0 2vmax 5vmax" }}
          src="https://food.grab.com/static/images/logo-grabfood-mono.svg"
          alt=""
          className=""
        />{" "}
      </Row>
      <hr />
      <Row>
        <Col style={{ marginLeft: "4vmax" }}>
          <h4 style={{ marginBottom: "3vmin" }}>Sering dicari</h4>
          <p style={{ fontSize: "1vmax" }}>
            Ayam Bakar
            <br /> Ayam Penyet
            <br /> Bubble Tea
            <br /> Burger
            <br /> Pencuci Mulut
            <br /> Pizza
            <br /> Promo GrabFood
            <br /> Seafood
            <br /> Sushi
          </p>
        </Col>
        <Col style={{ marginLeft: "5vmax" }}>
          <h4 style={{ marginBottom: "3vmin" }}>Makanan Populer</h4>
          <p style={{ fontSize: "1vmax" }}>
            Makanan Cina
            <br /> Makanan Cepat Saji
            <br /> Makanan India
            <br /> Makanan Indonesia
            <br /> Makanan Italia
            <br /> Makanan Jepang
            <br /> Makanan Korea
            <br /> Makanan Thailand
            <br /> Vietnamese Food
          </p>
        </Col>
        <Col style={{ marginLeft: "5vmax" }}>
          <h4 style={{ marginBottom: "3vmin" }}>Tentang Grab</h4>
          <p style={{ fontSize: "1vmax" }}>
            Tentang Grab
            <br /> Tentang GrabFood
            <br /> Blog
          </p>
        </Col>
        <Col style={{ marginLeft: "5vmax" }}>
          <h4 style={{ marginBottom: "3vmin" }}>Bantuan</h4>
          <p style={{ fontSize: "1vmax" }}>
            Bantuan
            <br /> Yang Sering Ditanya
            <br /> Yuk Jadi Mitra Restoran GrabFood
            <br />
            Yuk Jadi Mitra Pengemudi Grab
          </p>
        </Col>
        {/* <Col sm={1}></Col> */}
      </Row>
    </Container>
  );
};

export default Footer;
