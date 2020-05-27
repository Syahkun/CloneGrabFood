import React from "react";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";

const CarouselRes = () => {
  return (
    <Container fluid className="mt-3">
      <Row>
        {/* <CardGroup>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup> */}
        <Col className="mt-3">
          <img
            src="https://d1sag4ddilekf6.cloudfront.net/compressed/merchants/IDGFSTI00001m7h/hero/8049afdd8e0849c48546b30d8d09c254_1583083290569537786.jpg"
            alt="..."
            className=""
            style={{ width: "11rem", borderRadius: "8px", height: "112%" }}
          />
          <div
            className="shadow"
            style={{
              width: "11rem",
              borderRadius: "8px",
              height: "112%",
              backgroundColor: "rgba(0,0,0,.4)",
              position: "relative",
              top: "-111px",
            }}
          ></div>
        </Col>
        <Col className="mt-3">
          <img
            src="https://d1sag4ddilekf6.cloudfront.net/compressed/merchants/6-CYLTJKNYERDETN/hero/2dc330e46860424a8a7dedc9adadf373_1589145437798858363.jpg"
            alt="..."
            className=""
            style={{ width: "11rem", borderRadius: "8px", height: "112%" }}
          />{" "}
          <div
            className="shadow"
            style={{
              width: "11rem",
              borderRadius: "8px",
              height: "112%",
              backgroundColor: "rgba(0,0,0,.4)",
              position: "relative",
              top: "-111px",
            }}
          ></div>
        </Col>
        <Col className="mt-3">
          <img
            src="https://d1sag4ddilekf6.cloudfront.net/compressed/merchants/6-CZDHLEBZAECXFA/hero/41b031352cbe49ba914d0c223848569b_1587342918628894395.jpeg"
            alt="..."
            className=""
            style={{ width: "11rem", borderRadius: "8px", height: "112%" }}
          />{" "}
          <div
            className="shadow"
            style={{
              width: "11rem",
              borderRadius: "8px",
              height: "112%",
              backgroundColor: "rgba(0,0,0,.4)",
              position: "relative",
              top: "-111px",
            }}
          ></div>
        </Col>
        <Col className="mt-3">
          <img
            src="https://d1sag4ddilekf6.cloudfront.net/compressed/merchants/6-CY4WNENDR26VVX/hero/2c566c164a9e43bcaa998be30074bcd0_1587460155630105999.jpeg"
            alt="..."
            className=""
            style={{ width: "11rem", borderRadius: "8px", height: "112%" }}
          />{" "}
          <div
            className="shadow"
            style={{
              width: "11rem",
              borderRadius: "8px",
              height: "112%",
              backgroundColor: "rgba(0,0,0,.4)",
              position: "relative",
              top: "-111px",
            }}
          ></div>
        </Col>
        <Col className="mt-3">
          <img
            src="https://d1sag4ddilekf6.cloudfront.net/compressed/merchants/IDGFSTI00003o8r/hero/7dd04fb4785944f4b9e91549e1e71836_1584348938135860769.jpeg"
            alt="..."
            className=""
            style={{ width: "11rem", borderRadius: "8px", height: "112%" }}
          />{" "}
          <div
            className="shadow"
            style={{
              width: "11rem",
              borderRadius: "8px",
              height: "112%",
              backgroundColor: "rgba(0,0,0,.4)",
              position: "relative",
              top: "-111px",
            }}
          ></div>
        </Col>
        <Col className="mt-3">
          <img
            src="https://dtlscuh0h90jk.cloudfront.net/seller/photos/8647_382.jpg"
            alt="..."
            className=""
            style={{ width: "11rem", borderRadius: "8px", height: "112%" }}
          />{" "}
          <div
            className="shadow"
            style={{
              width: "11rem",
              borderRadius: "8px",
              height: "112%",
              backgroundColor: "rgba(0,0,0,.4)",
              position: "relative",
              top: "-111px",
            }}
          ></div>
        </Col>
      </Row>
    </Container>
  );
};

export default CarouselRes;
