import React from "react";
import { Card } from "react-bootstrap";
//other components
import Search from "./Search";

const CardIntro = (props) => {
  return (
    <div>
      <Card className="Card-intro pt-4">
        <Card.Body>
          <Card.Title>Selamat Pagi</Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle> */}
          <Card.Text>
            <h1 className="">
              Makanannya mau diantar ke mana <br /> hari ini?
            </h1>
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
