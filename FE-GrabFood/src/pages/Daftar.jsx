import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  postPengguna,
  changeInputPengguna,
} from "../store/actions/penggunaActions";
import { connect } from "react-redux";
//import Component

class Daftar extends Component {
  postSignup = async () => {
    await this.props.history.replace("/");
    this.props.postPengguna();
  };
  postLogin = async () => {
    await this.props.doLogin();
    console.warn("page login", this.props);
    const is_login = this.props.dataPengguna.is_login;
    if (is_login === true) {
      this.props.history.push("/");
    }
  };
  render() {
    return (
      <div className="login-back">
        <div class="wrapper fadeInDown">
          <div id="formContent">
            <div class="fadeIn first">
              {/* <img
                src="https://image.flaticon.com/icons/png/512/2885/2885665.png"
                id="icon"
                alt="User Icon"
                
              />
              <img
                src="https://image.flaticon.com/icons/png/512/2885/2885662.png"
                id="icon"
                alt="User Icon"
            
              /> */}
              <img
                src="https://image.flaticon.com/icons/svg/2885/2885625.svg"
                id="icon"
                alt="User Icon"
              />
            </div>

            <form onSubmit={(element) => element.preventDefault()}>
              <input
                onChange={(element) => this.props.changeInputPengguna(element)}
                type="text"
                id="your name"
                class="fadeIn second"
                name="namaPengguna"
                placeholder="your name"
              />
              <input
                onChange={(element) => this.props.changeInputPengguna(element)}
                type="text"
                id="password"
                class="fadeIn third"
                name="kataKunci"
                placeholder="password"
              />
              <input
                onChange={(element) => this.props.changeInputPengguna(element)}
                type="text"
                id="address"
                class="fadeIn five"
                name="alamat"
                placeholder="address"
              />
              <input
                onClick={() => this.postSignup()}
                type="submit"
                class="fadeIn fourth"
                value="sign up"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {
  changeInputPengguna,
  postPengguna,
};

const mapStateToProps = (state) => {
  return {
    dataPengguna: state.pengguna,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Daftar);
