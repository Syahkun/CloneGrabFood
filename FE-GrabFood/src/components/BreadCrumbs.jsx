import React from "react";
import { Breadcrumb } from "react-bootstrap";
const BreadCrumbs = (props) => {
  return (
    <div className="">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Menu
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{props.nama_menu}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumbs;
