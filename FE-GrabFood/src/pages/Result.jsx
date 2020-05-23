import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
// import { connect } from "react-redux";
import Navigation from "../components/Navigation2";
// import Intro from "../components/Introduction";
// import CardIntro from "../components/CardIntro";
import CardFood from "../components/CardFood";
import FiturIntro from "../components/FiturIntro";
import Footer from "../components/Footer";
import FooterFinal from "../components/FooterFinal";
import SearchPage from "../components/Search2";
import BreadCrumb from "../components/BreadCrumbs";
//import actions

class Result extends Component {
  render() {
    console.warn("cek props result", this.props);

    const listMakanans = this.props.dataMakanan.listMakanan;
    console.warn("cek list maknans", listMakanans);

    const splitArray = (array, size) => {
      if (!array.length) {
        return [];
      }
      const head = array.slice(0, size);
      const tail = array.slice(size);
      return [head, ...splitArray(tail, size)];
    };

    // const removalSysmbol = (str) => {
    //   str.replace(/[^\w\s]/gi, "");
    // };

    // const { listProducts, isLoading } = this.props.dataproducts;
    // const listProducts = this.props.dataproducts.listProducts;
    const splitListMakanan = splitArray(listMakanans, 4);
    return (
      <div>
        <React.Fragment>
          <Container fluid style={{ marginTop: "-7vmax" }}>
            <Navigation />
            {/* <Row>
              <CardIntro />
            </Row> */}
          </Container>
          <Container fluid className="px-5 py-5" style={{ marginTop: "7vmax" }}>
            <SearchPage />
          </Container>
          <Container fluid className="px-5">
            <Container fluid className="mt-3">
              <BreadCrumb
                nama_menu={this.props.location.pathname.replace(
                  /[^\w\s]/gi,
                  ""
                )}
              />
            </Container>
            <h1 className="pb-2">
              {this.props.location.pathname.replace(/[^\w\s]/gi, "")}&nbsp;di{" "}
              {this.props.dataMakanan.lokasi}
            </h1>
          </Container>
          <Container fluid className="px-5">
            <Col lg={2}></Col>
            {splitListMakanan.map((baris) => (
              <Row className="mb-4">
                {baris.map((item, value) => (
                  <Col>
                    <CardFood
                      nama_makanan={item.nama}
                      gambar={item.gambar}
                      promo={item.promo}
                    />
                  </Col>
                ))}
              </Row>
            ))}
            <Col lg={2}></Col>
          </Container>
          <Container
            fluid
            class="mx-5 pb-5"
            style={{
              backgroundColor: "#f7f7f7",
              marginTop: "6rem",
              paddingBottom: "5.7rem",
            }}
          >
            <FiturIntro />
          </Container>
          <Footer />
          <FooterFinal />
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataMakanan: state.makanan,
    dataMenu: state.menu,
  };
};

export default connect(mapStateToProps)(Result);
