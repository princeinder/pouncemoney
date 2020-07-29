import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Signin = () => {
  return (
    <div className="main">
      <Header />
      <div className="modal fade" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
              <div className="pop-left">
                <img src="img/pop-left.jpg" alt="pop-left" />
              </div>
              <div className="pop-right banner-text">
                <h2 className="text-uppercase">
                  The World's <span>First Lender</span>
                </h2>
                <h3 className="text-uppercase">for Content creators</h3>
                <form>
                  <label id="range-label" htmlFor="customRange">
                    How much money do you need?
                  </label>
                  <div className="range-slider">
                    <input
                      className="range-slider__range"
                      type="range"
                      defaultValue={1}
                      min={0}
                      max={5000}
                    />
                    <div className="range-out">
                      <div className="float-left left-value">
                        <i className="fa fa-dollar" />
                        <span className="range-slider__value">0</span>
                      </div>
                      <p className=" text-right">$5000</p>
                    </div>
                  </div>
                  <label>I make money on:</label>
                  <select>
                    <option value={0}>Select</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </select>
                  <button className="btn btn-block " type="submit">
                    Apply Now
                  </button>
                </form>
                <p className="text-center">
                  *Currently Available to U.S and Candadians Citizens only.We
                  will be expanding to other countries soon!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix" />
      <section className="sign-sec">
        <div className="container">
          <div className="form-bx">
            <div className="row">
              <div className="col-lg-7 left-sign">
                <img src="img/sign-left.jpg" alt="sign-up" />
              </div>
              <div className="col-lg-5">
                <div className="form-content">
                  <img
                    className="text-center d-block w-100 form-logo"
                    src="img/logo.png"
                    alt="logo"
                  />
                  <form action method="post">
                    <div className="row">
                      <div className="input-group form-group col-md-12">
                        <input
                          type="text"
                          name="email"
                          placeholder="Email"
                          className="form-control"
                        />
                      </div>
                      <div className="input-group form-group  col-md-12">
                        <input
                          type="password"
                          name="password1"
                          placeholder="Password"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        name="btn"
                        defaultValue="Login"
                        className="btn btn-primary w-100 d-block text-uppercase login_btn"
                      />
                    </div>
                    <h4>Don't Have An Account Yet?</h4>
                    <p>Sign-up for PounceMoney.com</p>
                    <a href="# ">Forget Password?</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Signin;
