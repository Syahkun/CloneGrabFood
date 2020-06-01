import React from "react";
// import { Breadcrumb } from "react-bootstrap";
const BreadCrumbs = (props) => {
  return (
    <div className="bread-res">
      <p className="">
        <a href="/" className="">
          Home&nbsp;&nbsp;
        </a>
        <img
          src="https://food.grab.com/static/images/icons/icon-next.svg"
          alt=""
          className=""
        />
        <a href="/">&nbsp;&nbsp;Menu&nbsp;&nbsp;</a>
        <img
          src="https://food.grab.com/static/images/icons/icon-next.svg"
          alt=""
          className=""
        />{" "}
        <a href="/" className="" style={{ color: "black" }}>
          &nbsp;&nbsp;{props.nama_menu}&nbsp;&nbsp;
        </a>
      </p>
    </div>
  );
};

export default BreadCrumbs;
