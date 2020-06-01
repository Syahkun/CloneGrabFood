import React from "react";
import { Card } from "react-bootstrap";
//other components
import Search from "./Search";

const CardIntro = (props) => {
  return (
    <div>
      <Card className="Card-intro pt-4">
        <Card.Body>
          <Card.Title>
            <p className="text-titleintro">Selamat Pagi</p>{" "}
          </Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle> */}
          <Card.Text>
            <p className="text-cardintro">
              Makanannya mau diantar ke mana <br /> hari ini?
            </p>
          </Card.Text>
          <Search {...props} />
          {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardIntro;
