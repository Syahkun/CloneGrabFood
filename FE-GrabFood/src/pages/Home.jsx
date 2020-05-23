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
  getListMakananByCategory,
  changeInputLokasi,
} from "../store/actions/makananActions";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount = async () => {
    //get list menu from API
    this.props.getListMenu();
    console.warn("cek props home", this.props);
    console.warn("cek lokasi", this.props.dataMakanan.lokasi);
  };

  handleRequestCategoryMakanan = async (category, lokasi) => {
    await this.props.history.replace("/" + category);
    this.props.getListMakananByCategory(category, lokasi);
  };
  render() {
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
    return (
      <div>
        <Container fluid>
          <Navigation />
          <Row sm>
            <Intro />
          </Row>
          <Row>
            <CardIntro
              inputLokasi={this.props.changeInputLokasi}
              lokasi={this.props.dataMakanan.lokasi}
            />
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
                    lokasi={this.props.dataMakanan.lokasi}
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
  getListMakananByCategory,
  changeInputLokasi,
};

const mapStateToProps = (state) => {
  return {
    dataMenu: state.menu,
    dataMakanan: state.makanan,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
