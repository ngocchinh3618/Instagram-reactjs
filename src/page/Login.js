import React, { Component } from "react";
import Sigin1 from "../assets/images/sigin/1.jpg";
import Sigin2 from "../assets/images/sigin/2.jpg";
import Sigin3 from "../assets/images/sigin/3.jpg";
import Sigin4 from "../assets/images/sigin/4.jpg";
import Sigin5 from "../assets/images/sigin/5.jpg";
import Download from "../assets/images/sigin/download.png";
import GooglePlay from "../assets/images/sigin/googlePlay.png";
import Logo from "../assets/images/Instagram-Logo.png";
import Input from "../common/Input";
import { AiFillFacebook } from "react-icons/ai";
import { IconContext } from "react-icons";
import Btn from "../common/Btn";
import DataUser from "../data/users.json";
import * as actionTypes from "../store/actiontypes";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      submit: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  btnChange(e) {
    console.log("text", e.target.value);
  }

  handleChange(e) {
    console.log(e.target.value);
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  login() {
    console.log("object");
  }

  componentDidMount() {}

  render() {
    return (
      <section className="box__login">
        <article className="login">
          <div className="login__left">
            <div className="login__left__carousel">
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-interval="2000"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={Sigin1} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={Sigin2} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={Sigin3} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={Sigin4} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={Sigin5} className="d-block w-100" alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="login__right">
            <section className="login__right__top">
              <div className="login-img">
                <img className="img" src={Logo} alt="logo" />
              </div>
              <div className="login-phone">
                <Input
                  placeholder="Phone number, username, or email"
                  type="text"
                  name="username"
                  onChangeEvent={this.handleChange}
                />
              </div>
              <div className="login-password">
                <Input
                  placeholder="password"
                  type="password"
                  name="password"
                  onChangeEvent={this.handleChange}
                />
              </div>
              <div className="login-btn">
                <Btn
                  txt="Log In"
                  btnLogin={() =>
                    this.props.onLogIn(this.state.username, this.state.password)
                  }
                />
              </div>
              <div className="line">
                <div className="line__left"></div>
                <div className="line__center">OR</div>
                <div className="line__right"></div>
              </div>
              <div className="login-fb">
                <IconContext.Provider
                  className="App-logo"
                  value={{ color: "#385185", size: "20px" }}
                >
                  <AiFillFacebook />
                </IconContext.Provider>
                <div>
                  <a className="login-fb__txt" href="!#">
                    {" "}
                    Log in with Facebook
                  </a>
                </div>
              </div>
              <div className="forgot-pw">
                <a href="!#">Forgot password?</a>
              </div>
            </section>
            <section className="login__right__center">
              <div className="sign-up">
                <p>
                  Don't have an account?{" "}
                  <a className="sign-up__a" href="!#">
                    Sign up
                  </a>
                </p>
              </div>
            </section>

            <section className="login__right__end">
              <p className="get-app">Get the app.</p>
              <div className="img-dload">
                <a
                  href="https://apps.apple.com/app/instagram/id389801252?vt=lo"
                  target="_blank"
                >
                  <img src={Download} alt="App store" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=14C1803F-BF0D-43A9-A795-1C903CC52C65&utm_content=lo&utm_medium=badge"
                  target="_blank"
                >
                  <img src={GooglePlay} alt="google Play" />
                </a>
              </div>
            </section>
          </div>
        </article>
        <footer className="footerr">
          <div className="footerr__start">
            <div className="item">
              <a href="!#">About</a>
            </div>
            <div className="item">
              <a href="!#">Blog</a>
            </div>
            <div className="item">
              <a href="!#">Jobs</a>
            </div>
            <div className="item">
              <a href="!#">Help</a>
            </div>
            <div className="item">
              <a href="!#">API</a>
            </div>
            <div className="item">
              <a href="!#">Privacy</a>
            </div>
            <div className="item">
              <a href="!#">Terms</a>
            </div>
            <div className="item">
              <a href="!#">Top Accounts</a>
            </div>
            <div className="item">
              <a href="!#">Hashtags</a>
            </div>
            <div className="item">
              <a href="!#">Locations</a>
            </div>
          </div>
          <div className="footerr__center">
            <div className="item">
              <a href="!#">Beauty</a>
            </div>
            <div className="item">
              <a href="!#">Dance</a>
            </div>
            <div className="item">
              <a href="!#">Fitness</a>
            </div>
            <div className="item">
              <a href="!#">Food & Drink</a>
            </div>
            <div className="item">
              <a href="!#">Home & Garden</a>
            </div>
            <div className="item">
              <a href="!#">Music</a>
            </div>
            <div className="item">
              <a href="!#">Visual Arts</a>
            </div>
          </div>
          <div className="footerr__endd">
            <p>© 2021 Instagram from Facebook</p>
          </div>
        </footer>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogIn: (username, password) =>
      dispatch({
        type: actionTypes.LOGIN,
        username: username,
        password: password,
      }),
    onLogOut: () => dispatch({ type: actionTypes.LOGOUT }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
