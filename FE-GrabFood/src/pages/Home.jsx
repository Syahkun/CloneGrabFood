import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

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
  doLogout,
  changeInputPengguna,
} from "../store/actions/penggunaActions";
import {
  // getListRestoranByCategory,
  getListRestoranBySearch,
  changeInputLokasi,
  getListLokasiRestoran,
} from "../store/actions/restoranActions";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount = async () => {
    //get list menu from API
    this.props.getListMenu();
    // this.props.getListRestoranByCategory();
    this.props.getListLokasiRestoran();
  };

  handleRequestCategoryRestoran = async (category, lokasi) => {
    await this.props.history.replace("/" + category);
    this.props.getListRestoranBySearch(category, lokasi);
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
    const listLokasixxx = this.props.dataRestoran.listLokasi;
    console.warn("list lokasi xxx", listLokasixxx);
    return (
      <div>
        <Container fluid>
          <Navigation
            doLogout={this.props.doLogout}
            changeInputPengguna={this.props.changeInputPengguna}
            dataPengguna={this.props.dataPengguna}
          />
          <Row sm>
            <Intro />
          </Row>
          <Row>
            <CardIntro
              listLokasi={listLokasixxx}
              inputLokasi={(el) => this.props.changeInputLokasi(el)}
              getListCategory={(category, lokasi) =>
                this.handleRequestCategoryRestoran(category, lokasi)
              }
              lokasi={this.props.dataRestoran.lokasi}
            />
          </Row>
        </Container>
        <Container fluid className="px-5">
          <p className="pb-5 text-pasti">
            <br />
            <br />
            Pasti ada sesuatu buat tiap orang!
          </p>
        </Container>
        <Container fluid className="px-5 cont-cardmenu">
          {splitListMenu.map((baris) => (
            <Row className="mb-4">
              {baris.map((item, value) => (
                <CardMenu
                  nama_menu={item.nama_menu}
                  gambar_menu={item.gambar_menu}
                  getListCategory={(category, lokasi) =>
                    this.handleRequestCategoryRestoran(category, lokasi)
                  }
                  lokasi={this.props.dataRestoran.lokasi}
                />
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
  changeInputPengguna,
  doLogout,
  getListMenu,
  // getListRestoranByCategory,
  getListRestoranBySearch,
  getListLokasiRestoran,
  changeInputLokasi: (el) => changeInputLokasi(el),
};

const mapStateToProps = (state) => {
  return {
    dataPengguna: state.pengguna,
    dataMenu: state.menu,
    dataRestoran: state.restoran,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
