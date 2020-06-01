import React from "react";
import { Card } from "react-bootstrap";
// import Math from math;

const distance = (lat1, lon1, lat2, lon2, unit) => {
  if (lat1 === lat2 && lon1 === lon2) {
    return 0;
  } else {
    var radlat1 = (3.14 * lat1) / 180;
    var radlat2 = (3.14 * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (3.14 * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit === "K") {
      dist = dist * 1.609344;
    }
    if (unit === "N") {
      dist = dist * 0.8684;
    }
    return dist;
  }
};

const generateRandomNumber = () => {
  var min = 4.0,
    max = 5.0,
    highlightedNumber = Math.random() * (max - min) + min;

  return highlightedNumber;
};
// var Distance = require("geo-distance");
const CardRestoran = (props) => {
  console.warn("cek props cardrestran ajay", props);
  const lat = parseFloat(props.lat);
  const lon = parseFloat(props.lon);
  const latLokasi = parseFloat(props.latLokasi);
  const lonLokasi = parseFloat(props.lonLokasi);

  const dis_restolok = distance(lat, lon, latLokasi, lonLokasi, "K");
  const rating = generateRandomNumber();
  return (
    <section>
      <Card className="cardresto-comp">
        <div className="crop-card-res">
          <img
            className=""
            variant="top"
            src={props.gambar}
            style={{ position: "relative" }}
            alt="..."
          />
        </div>
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
          <p className="text-resto-pil">
            <img
              src="https://food.grab.com/static/images/icons/icon-preferred-merchant.svg"
              alt="..."
              className=""
            />
            Restoran Pilihan
          </p>
          <p className="title-menu">{props.nama_restoran}</p>
          <p className="text-menu">{props.menu}</p>
          {props.distance ? (
            <p className="text-rating">
              <img
                className="star-rating"
                src="https://image.flaticon.com/icons/svg/2107/2107957.svg"
                alt=""
              />
              {rating.toFixed(1)}&nbsp;&nbsp;&nbsp;&nbsp;
              {parseFloat(props.distance).toFixed(1)}
              km
            </p>
          ) : (
            <p className="text-rating">
              <img
                className="star-rating"
                src="https://image.flaticon.com/icons/svg/2107/2107957.svg"
                alt=""
              />
              {rating.toFixed(1)}&nbsp;&nbsp;&nbsp;&nbsp;
              {dis_restolok.toFixed(1)}
              km
            </p>
          )}
        </Card.Body>
      </Card>
    </section>
  );
};

export default CardRestoran;
