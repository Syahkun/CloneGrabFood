import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  doLogin,
  doLogout,
  changeInputPengguna,
} from "../store/actions/penggunaActions";
import { connect } from "react-redux";
//import Component

class Login extends Component {
  postLogin = async () => {
    console.warn("props");
    await this.props.doLogin();
    console.warn("page login", this.props);
    const is_login = this.props.dataPengguna.is_login;
    if (is_login === true) {
      this.props.history.push("/");
    }
  };
  render() {
    return (
      <div className="daftar-back">
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
                src="https://image.flaticon.com/icons/png/512/2885/2885677.png"
                id="icon"
                alt="User Icon"
              />
            </div>

            <form onSubmit={(element) => element.preventDefault()}>
              <input
                onChange={(element) => this.props.changeInputPengguna(element)}
                type="text"
                id="login"
                class="fadeIn second"
                name="namaPengguna"
                placeholder="login"
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
                onClick={() => this.postLogin()}
                type="submit"
                class="fadeIn fourth"
                value="Log In"
              />
            </form>

            <div id="formFooter">
              <a class="underlineHover" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {
  changeInputPengguna,
  doLogout,
  doLogin,
};

const mapStateToProps = (state) => {
  return {
    dataPengguna: state.pengguna,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
