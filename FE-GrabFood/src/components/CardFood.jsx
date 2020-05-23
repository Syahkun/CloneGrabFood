import React from "react";
import { Card } from "react-bootstrap";

const CardFood = (props) => {
  console.warn("cekk props makanan", props);
  return (
    <section>
      <Card style={{ width: "18rem" }} className="Card-menu">
        <Card.Img
          className="card-menu"
          variant="top"
          src={props.gambar}
          style={{ position: "relative" }}
        />
        {props.promo ? (
          <img
            style={{ position: "absolute", top: "1px", left: "-18px" }}
            src="https://img.icons8.com/color/48/000000/discount--v1.png"
            alt="..."
          />
        ) : (
          <></>
        )}

        <Card.Body style={{ padding: "0" }}>
          <p className="pt-3 title-menu">{props.nama_makanan}</p>
        </Card.Body>
      </Card>
    </section>
  );
};

export default CardFood;
