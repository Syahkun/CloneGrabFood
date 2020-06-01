import React from "react";
import Carousel from "react-multi-carousel";
// import { Container } from "react-bootstrap";
// import { img } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

const CarouselComp = (props) => {
  const changeRouterTerdekat = async () => {
    if (props.getHandleLIstTerdekat) {
      props.getHandleLIstTerdekat();
    } else {
      await props.history.replace("/Jarak-terdekat");
    }
  };
  const changeRouter = async (program, promo) => {
    if (props.getListByProgram) {
      props.getListByProgram(program, promo);
    } else {
      await props.history.replace("/program" + program || "/promo" + promo);
    }
  };
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite={false}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 4500,
            min: 1024,
          },
          items: 6,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 3,
          partialVisibilityGutter: 30,
        },
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={2}
      swipeable
    >
      <div
        className="div-caroures"
        value="Jarak terdekat"
        onClick={() => changeRouterTerdekat()}
      >
        <img
          src="https://d1sag4ddilekf6.cloudfront.net/compressed/merchants/IDGFSTI00001m7h/hero/8049afdd8e0849c48546b30d8d09c254_1583083290569537786.jpg"
          alt="..."
          className="carou-item"
        />
        <p className="">Terdekat</p>
        {/* <div className="shadow"></div> */}
      </div>
      <div
        className="div-caroures"
        value="parade diskon"
        onClick={() => changeRouter("parade diskon", "")}
      >
        <img
          src="https://d1sag4ddilekf6.cloudfront.net/compressed/merchants/6-CYLTJKNYERDETN/hero/2dc330e46860424a8a7dedc9adadf373_1589145437798858363.jpg"
          alt="..."
          className="carou-item"
        />
        <p className="">Parade Diskon!</p>
      </div>
      <div
        className="div-caroures"
        value={true}
        onClick={() => changeRouter("", true)}
      >
        <img
          src="https://d1sag4ddilekf6.cloudfront.net/compressed/merchants/6-CZDHLEBZAECXFA/hero/41b031352cbe49ba914d0c223848569b_1587342918628894395.jpeg"
          alt="..."
          className="carou-item"
        />
        <p className="">Promosi</p>
      </div>
      <div
        className="div-caroures"
        value="pasti untung"
        onClick={() => changeRouter("pasti untung", "")}
      >
        <img
          src="https://d1sag4ddilekf6.cloudfront.net/compressed/merchants/6-CY4WNENDR26VVX/hero/2c566c164a9e43bcaa998be30074bcd0_1587460155630105999.jpeg"
          alt="..."
          className="carou-item"
        />
        <p className="">Pasti Untung</p>
      </div>
      <div
        className="div-caroures"
        value="berjuta menunya"
        onClick={() => changeRouter("berjuta menunya", "")}
      >
        <img
          src="https://d1sag4ddilekf6.cloudfront.net/compressed/merchants/IDGFSTI00003o8r/hero/7dd04fb4785944f4b9e91549e1e71836_1584348938135860769.jpeg"
          alt="..."
          className="carou-item"
        />
        <p className="">Berjuta Menunya</p>
      </div>
      <div
        className="div-caroures"
        value="grabmart"
        onClick={() => changeRouter("grabmart", "")}
      >
        <img
          src="https://dtlscuh0h90jk.cloudfront.net/seller/photos/8647_382.jpg"
          alt="..."
          className="carou-item"
        />
        <p className="">GrabMart</p>
      </div>
      <div
        className="div-caroures"
        value="grabchicken all in one"
        onClick={() => changeRouter("grabmart", "")}
      >
        >
        <img
          src="https://dtlscuh0h90jk.cloudfront.net/seller/photos/8647_382.jpg"
          alt="..."
          className="carou-item"
        />
        <p className="">GrabChicken All in One</p>
      </div>
      <div
        className="div-caroures"
        value="menu siap masak"
        onClick={() => changeRouter("menu siap masak", "")}
      >
        <img
          src="https://dtlscuh0h90jk.cloudfront.net/seller/photos/8647_382.jpg"
          alt="..."
          className="carou-item"
        />
        <p className="">Menu Siap Masak</p>
      </div>
    </Carousel>
  );
};

export default CarouselComp;
