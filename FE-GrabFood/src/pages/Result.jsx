import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

//import components
import Navigation from "../components/Navigation2";
import CardRestoran from "../components/CardRestoran";
import FiturIntro from "../components/FiturIntro";
import Footer from "../components/Footer";
import FooterFinal from "../components/FooterFinal";
import SearchPage from "../components/Search2";
import BreadCrumb from "../components/BreadCrumbs";
import CarouselComp from "../components/CarouselRes2";

//import actions
import {
  getRestoByJarakTerdekat,
  getListRestoranByProgram,
  getListRestoranBySearch,
  changeInputSearch,
  changeInputLokasi,
  getLatLonLokasi,
} from "../store/actions/restoranActions";

// get distance from lon lat
// const distance = (lat1, lon1, lat2, lon2, unit) => {
//   if (lat1 === lat2 && lon1 === lon2) {
//     return 0;
//   } else {
//     var radlat1 = (3.14 * lat1) / 180;
//     var radlat2 = (3.14 * lat2) / 180;
//     var theta = lon1 - lon2;
//     var radtheta = (3.14 * theta) / 180;
//     var dist =
//       Math.sin(radlat1) * Math.sin(radlat2) +
//       Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
//     if (dist > 1) {
//       dist = 1;
//     }
//     dist = Math.acos(dist);
//     dist = (dist * 180) / Math.PI;
//     dist = dist * 60 * 1.1515;
//     if (unit === "K") {
//       dist = dist * 1.609344;
//     }
//     if (unit === "N") {
//       dist = dist * 0.8684;
//     }
//     return dist;
//   }
// };

class Result extends Component {
  handleRequestCategoryProgram = async (program, promo) => {
    await this.props.history.replace("/program" + program || "/promo" + promo);
    this.props.getListRestoranByProgram(program, promo);
  };
  handleRequestCategoryRestoran = async (category, lokasi) => {
    await this.props.history.replace("/" + category);
    this.props.getListRestoranBySearch(category, lokasi);
  };
  handleRequestCategorySearch = async (keyword, lokasi) => {
    await this.props.history.replace("/search=" + lokasi);
    this.props.getListRestoranBySearch(keyword, lokasi);
  };
  handleRequestJarakTerdekat = async () => {
    await this.props.history.replace("/Jarak-terdekat");
    this.props.getRestoByJarakTerdekat();
  };
  // convertObjectAddDistance = async (listRestorans) => {
  //   const lokasiLatLon = this.props.dataRestoran.lokasiLatLon;
  //   // let listRestorans = this.props.dataRestoran.listRestoran;
  //   let dataList = [];
  //   await listRestorans.map((item, key) =>
  //     lokasiLatLon.map((it, key) =>
  //       dataList.push({
  //         nama: item.nama,
  //         gambar: item.gambar,
  //         promo: item.promo,
  //         nama_menu: item.menu.nama_menu,
  //         distance: distance(item.lat, item.lon, it.lat, it.lon, "K"),
  //       })
  //     )
  //   );
  //   return dataList;
  // };
  render() {
    console.warn("cek props result", this.props);
    const listLokasi = this.props.dataRestoran.listLokasi;
    const isLoading = this.props.dataRestoran.isLoading;

    let listRestorans = this.props.dataRestoran.listRestoran;

    // console.warn("listRestorans", listRestorans);
    // console.warn("dataList", dataList);
    // const datalistX = dataList;
    // this.props.location.pathname === "/Jarak-terdekat"
    //   ? (dataList = this.props.dataRestoran.listDummy)
    //   : (dataList = datalistX);
    const splitArray = (array, size) => {
      if (!array.length) {
        return [];
      }
      const head = array.slice(0, size);
      const tail = array.slice(size);
      return [head, ...splitArray(tail, size)];
    };
    let listRestoransX = listRestorans;
    this.props.location.pathname === "/Jarak-terdekat"
      ? (listRestorans = this.props.dataRestoran.listDummy)
      : (listRestorans = listRestoransX);
    // this.handleRequestJarakTerdekat()
    //   ? (listRestorans = dataList)
    //   : (listRestorans = listRestorans);
    const splitlistRestoran = splitArray(listRestorans, 4);

    // console.warn("cek lan lot res", lokasiLatLon);
    return (
      <div>
        <React.Fragment>
          <Container fluid style={{ marginTop: "-7vmax" }}>
            <Navigation
              listLokasi={listLokasi}
              inputLokasi={(event) => this.props.changeInputLokasi(event)}
              getListCategory={this.handleRequestCategorySearch}
              lokasi={this.props.dataRestoran.lokasi}
            />
          </Container>
          <Container fluid className="px-5 py-1" style={{ marginTop: "7vmax" }}>
            <SearchPage
              inputKeyword={(event) => this.props.changeInputSearch(event)}
              handleRequestSearch={this.handleRequestCategorySearch}
              lokasi={this.props.dataRestoran.lokasi}
              keyword={this.props.dataRestoran.search}
            />
          </Container>
          <CarouselComp
            getListByProgram={this.handleRequestCategoryProgram}
            getHandleLIstTerdekat={this.handleRequestJarakTerdekat}
          />
          {isLoading ? (
            <div style={{ textAlign: "center" }}>Sabar Jek LOading....</div>
          ) : (
            <div className="">
              <Container fluid className="empty-res"></Container>
              <Container fluid className="px-5">
                <Container
                  fluid
                  className="mt-3"
                  style={{ marginLeft: "12px" }}
                >
                  <BreadCrumb
                    nama_menu={this.props.location.pathname.replace(
                      /[^\w\s]/gi,
                      ""
                    )}
                  />
                </Container>
                <p className="pb-2 text-result">
                  <span className="text-path">
                    {this.props.location.pathname.replace(/[^\w\s]/gi, "")}
                    &nbsp;di &nbsp;
                  </span>
                  <span className="text-result-di">
                    {this.props.dataRestoran.lokasi}
                  </span>
                </p>
              </Container>
              <Container fluid className="px-5 cont-res2">
                <Col lg={2}></Col>
                {splitlistRestoran.map((baris) => (
                  <Row className="mb-4">
                    {baris.map((item, value) => (
                      <>
                        {/* {lokasiLatLon.map((it, key) => ( */}
                        {this.props.location.pathname === "/Jarak-terdekat" ? (
                          <CardRestoran
                            nama_restoran={item.nama}
                            gambar={item.gambar}
                            promo={item.promo}
                            menu={item.nama_menu}
                            distance={item.distance}
                            // lat={item.lat}
                            // lon={item.lon}
                            // latLokasi={item.lokasi.lat}
                            // lonLokasi={item.lokasi.lon}
                          />
                        ) : (
                          <CardRestoran
                            nama_restoran={item.nama}
                            gambar={item.gambar}
                            promo={item.promo}
                            menu={item.menu.nama_menu}
                            // distance={item.distance}
                            lat={item.lat}
                            lon={item.lon}
                            latLokasi={item.lokasi.lat}
                            lonLokasi={item.lokasi.lon}
                          />
                        )}

                        {/* ))} */}
                      </>
                    ))}
                  </Row>
                ))}
                <Col lg={2}></Col>
              </Container>
            </div>
          )}
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

const mapDispatchToProps = {
  getRestoByJarakTerdekat,
  getListRestoranByProgram,
  getListRestoranBySearch,
  changeInputSearch: (event) => changeInputSearch(event),
  changeInputLokasi: (event) => changeInputLokasi(event),
  getLatLonLokasi,
};

const mapStateToProps = (state) => {
  return {
    dataRestoran: state.restoran,
    dataMenu: state.menu,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
