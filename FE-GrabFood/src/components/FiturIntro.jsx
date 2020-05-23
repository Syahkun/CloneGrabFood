import React from "react";
import { Card, CardDeck } from "react-bootstrap";

const FiturIntro = () => {
  return (
    <CardDeck>
      <Card style={{ marginTop: "9vmax" }} id="card-fitur">
        <Card.Img
          className="mx-auto"
          style={{ width: "10rem", marginBottom: "1rem" }}
          variant="top"
          src="https://food.grab.com/static/page-home/bottom-food-options.svg"
        />
        <Card.Body className="px-sm-auto mx-sm-auto">
          <Card.Title>Restoran yang dikuratori</Card.Title>
          <Card.Text style={{ fontSize: "1vmax" }}>
            Dari cemilan sampai makanan porsi besar, kami tidak akan membatasi
            <br />
            nafsu makanmu. Langsung saja pesan semua yang kamu mau.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ marginTop: "10vmax" }} id="card-fitur">
        <Card.Img
          className="mb-sm-4 mx-auto"
          style={{ width: "10rem", marginBottom: "1rem" }}
          variant="top"
          src="https://food.grab.com/static/images/ilus-cool-features-app.svg"
        />
        <Card.Body className="px-sm-auto mx-sm-auto">
          <Card.Title>Ada fitur keren lainnya di aplikasi</Card.Title>
          <Card.Text style={{ fontSize: "1vmax" }}>
            Download aplikasi Grab untuk bisa pakai metode pembayaran lainnya
            <br />
            dan nikmati kemudahan komunikasi dengan pengemudimu.
          </Card.Text>
          <img
            style={{
              marginLeft: "1vmax",
              marginRight: "1vmax",
              marginTop: "0.8rem",
            }}
            src="https://food.grab.com/static/images/logo-appstore.svg"
            alt=""
          />
          <img
            style={{
              marginLeft: "1vmax",
              marginRight: "1vmax",
              marginTop: "0.8rem",
            }}
            src="https://food.grab.com/static/images/logo-playstore.svg"
            alt=""
            className=""
          />
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

export default FiturIntro;
