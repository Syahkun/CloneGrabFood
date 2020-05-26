import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { connect } from "react-redux";
//import component
import Navigation from "../components/Navigation";
import Intro from "../components/Introduction";
import CardIntro from "../components/CardIntro";
import CardMenu from "../components/CardMenu";
import FiturIntro from "../components/FiturIntro";
import Footer from "../components/Footer";
import FooterFinal from "../components/FooterFinal";
//import actions
import { getListMenu } from "../store/actions/menuActions";
import {
  getListRestoranByCategory,
  changeInputLokasi,
  getListLokasiRestoran
} from "../store/actions/restoranActions";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount = async () => {
    //get list menu from API
    this.props.getListMenu();
    // this.props.getListRestoranByCategory();
    this.props.getListLokasiRestoran();
    console.warn("cek props home", this.props);
    console.warn("cek props getListRestoranByCategory", this.props.getListRestoranByCategory());
    // console.warn("cek lokasi", this.props.dataRestoran.lokasi);
  };

  handleRequestCategoryMakanan = async (category, lokasi) => {
    await this.props.history.replace("/" + category);
    this.props.getListRestoranByCategory(category, lokasi);
  };
  render() {
    // const listKota = this.props.dataRestoran.listMakanan.kota;
    const listMenu = this.props.dataMenu.listMenu;
    const splitArray = (array, size) => {
      if (!array.length) {
        return [];
      }
      const head = array.slice(0, size);
      const tail = array.slice(size);
      return [head, ...splitArray(tail, size)];
    };
    const splitListMenu = splitArray(listMenu, 4);
    const listLokasixxx = this.props.dataRestoran.listLokasi
    console.warn("list lokasi xxx", listLokasixxx)
    return (
      <div>
        <Container fluid>
          <Navigation />
          <Row sm>
            <Intro />
          </Row>
          <Row>
            {/* {listRestoran.map((item, key) => ( */}
            <CardIntro
              listLokasi={listLokasixxx}
              inputLokasi={this.props.changeInputLokasi}
              // lokasi={this.props.dataRestoran.listRestoran.lokasi_restoran}
              getListCategory={(category, lokasi) =>
                this.handleRequestCategoryMakanan(category, lokasi)
              }
              lokasi={this.props.dataRestoran.lokasi}
            />
            {/* ))}  */}
          </Row>
        </Container>
        <Container fluid className="px-5">
          <h1 className="pb-5">
            <br />
            <br />
            Pasti ada sesuatu buat tiap orang!
          </h1>
        </Container>
        <Container fluid className="px-5">
          {/* <Col lg={2}></Col> */}
          {splitListMenu.map((baris) => (
            <Row className="mb-4">
              {baris.map((item, value) => (
                <Col>
                  <CardMenu
                    nama_menu={item.nama_menu}
                    gambar_menu={item.gambar_menu}
                    getListCategory={(category, lokasi) =>
                      this.handleRequestCategoryMakanan(category, lokasi)
                    }
                    lokasi={this.props.dataRestoran.lokasi}
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
      </div>
    );
  }
}

const mapDispatchToProps = {
  getListMenu,
  getListRestoranByCategory,
  getListLokasiRestoran,
  changeInputLokasi: (el) => changeInputLokasi(el) ,
};

const mapStateToProps = (state) => {
  return {
    dataMenu: state.menu,
    dataRestoran: state.restoran,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
