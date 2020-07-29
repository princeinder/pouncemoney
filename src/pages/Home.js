import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Testimonial from "../components/home/Testomonial";

const Home = () => {
  return (
    <div className="main">
      <Header />
      <div className="modal fade" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
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
                      min={1000}
                      max={5000}
                    />
                    <div className="range-out">
                      <div className="float-left left-value">
                        <i className="fa fa-dollar" />
                        <span className="range-slider__value">$1000</span>
                      </div>
                      <p className=" text-right">$5000</p>
                    </div>
                  </div>
                  <label>I make money on:</label>
                  <select>
                    <option value="null">Select</option>
                    <option value="youtube">Youtube</option>
                    <option value="twitch">Twitch</option>
                    <option value="spotify">Spotify</option>
                    <option value="fiverr">Fiverr</option>
                    <option value="upwork">Upwork</option>
                    <option value="onlyFans">OnlyFans</option>
                    <option value="multiple">Multiple Sites</option>
                  </select>
                  <button className="btn btn-block " type="submit">
                    Apply Now
                  </button>
                </form>
                <p className="text-center">
                  Available in US &amp; Canada Only. New Countries Coming Soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix" />
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-text">
                <h2 className="text-uppercase">
                  The World's <span>First Lender</span>
                </h2>
                <h3 className="text-uppercase">for Content creators</h3>
                <form>
                  <label id="range-label" htmlFor="customRange">
                    How much money do you need?
                  </label>
                  <div className="range-slider" id="range2">
                    <input
                      className="range-slider__range"
                      type="range"
                      defaultValue={1}
                      min={1000}
                      max={5000}
                    />
                    <div className="range-out">
                      <div className="float-left left-value">
                        <i className="fa fa-dollar" />
                        <span className="range-slider__value">1000</span>
                      </div>
                      <p className=" text-right">$5000</p>
                    </div>
                  </div>
                  <label>I make money on:</label>
                  <select>
                    <option value="null">Select</option>
                    <option value="youtube">Youtube</option>
                    <option value="twitch">Twitch</option>
                    <option value="spotify">Spotify</option>
                    <option value="fiverr">Fiverr</option>
                    <option value="upwork">Upwork</option>
                    <option value="onlyFans">OnlyFans</option>
                    <option value="multiple">Multiple Sites</option>
                  </select>
                  <button className="btn btn-block " type="submit">
                    Apply Now
                  </button>
                </form>
                <p>
                  Available in US &amp; Canada Only. New Countries Coming Soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="clearfix" />
      <section className="land-money    text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="text-uppercase">
                We currently <span>lend money</span> to content creators from:
              </h2>
              <ul>
                <li>
                  <img src="img/onlyfans.png" alt="onlyfans-logo" />
                </li>
                <li>
                  <img src="img/fiveer.png" alt="fiveer-logo" />
                </li>
                <li>
                  <img src="img/logo-youtube.png" alt="logo-youtube" />
                </li>
                <li>
                  <img src="img/twitch.png" alt="twitch-logo" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="step-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="text-uppercase text-center">3 Simple Steps</h2>
            </div>
          </div>
          <div className="row step-3">
            <div className="offset-1 col-lg-10">
              <div className="step-box">
                <div className="img-step">
                  <img src="img/step-1.png" alt="step-1" />
                  <h3>1</h3>
                </div>
                <div className="text-step">
                  <h4>Apply</h4>
                  <a href="loan_applications.html">temp link</a>
                  <p>
                    We give you a “money advance” between $1,000-5,000. We don't
                    check your credit score. We check your earnings – you
                    connect your bank account. We will give you an automatic
                    offer.
                  </p>
                </div>
              </div>
              <div className="step-box">
                <div className="img-step">
                  <img src="img/step-2.png" alt="step-2" />
                  <h3>2</h3>
                </div>
                <div className="text-step">
                  <h4>Receive</h4>
                  <p>
                    If you are approved, we make a direct deposit of money into
                    your bank account within 24-48 hours.
                  </p>
                </div>
              </div>
              <div className="step-box">
                <div className="img-step">
                  <img src="img/step-3.png" alt="step-3" />
                  <h3>3</h3>
                </div>
                <div className="text-step">
                  <h4>Repay</h4>
                  <p>
                    Repayment is made from your future earnings. We take a
                    percentage of your monthly earnings (determined when we
                    offer you the “money advance”) until we recoup the capital
                    we provided to you in full plus the fees. There is no fixed
                    repayment date. You can use this “money advance” similar to
                    a line of credit. Use it when you need it – repay it back
                    when you don’t.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="clearfix" />
      <section className="testimonials-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="text-center">Client Testimonials</h1>
              <Testimonial />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
