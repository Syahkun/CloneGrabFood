import React from "react";
import { Card } from "react-bootstrap";

const CardMenu = (props) => {
  const changeRouter = async (category, lokasi) => {
    if (props.getListCategory) {
      props.getListCategory(category, lokasi);
    } else {
      // await props.history.replace("/" + category);
    }
  };
  console.warn("cek compo cardmenu", props);
  return (
    <section>
      <div className="cardresto-comp">
        <Card style={{ width: "18rem" }} className="Card-menu">
          <Card.Img
            value={props.nama_menu}
            onClick={() => changeRouter(props.nama_menu, props.lokasi)}
            className="card-menu"
            variant="top"
            src={props.gambar_menu}
          />
          <Card.Body style={{ padding: "0" }}>
            <p className="pt-3 title-menu">{props.nama_menu}</p>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
};

export default CardMenu;
