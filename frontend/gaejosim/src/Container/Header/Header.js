import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./Header.css";
// import logo from './logo.png';

// TODO: login 상태일 때는 로그아웃 버튼으로 디스플레이, 아니면 login 버튼으로 디스플레이.

class Header extends Component {
  state = {
    clickLogin: false,
    clickMyPage: false,
  };

  onClickLoginButton = () => {
    this.setState({ clickLogin: true });
  };

  onClickMyPageButton = () => {
    this.setState({ clickMyPage: true });
  };

  render() {
    let redirect = null;
    if (this.state.clickLogin) {
      redirect = <Redirect to="/login" />;
    }
    if (this.state.clickMyPage) {
      redirect = <Redirect to="/my" />;
    }
    return (
      <div className="Header">
        {redirect}
        {/* <img className='logoImage' alt='logo-img' src={logo} /> */}
        <button
          className="loginButton"
          onClick={() => this.onClickLoginButton()}
        >
          로그인
        </button>
        <button
          className="mypageButton"
          onClick={() => this.onClickMyPageButton()}
        >
          마이페이지
        </button>
      </div>
    );
  }
}

export default Header;
