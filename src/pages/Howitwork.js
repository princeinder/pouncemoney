import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Howitwork = () => {
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
                  <p>
                    We lend between $500 -$2,000. We don't check your credit-We
                    check your earnings! And we lend up to 3x your monthly
                    earnings.
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
                    We direct deposit the money into your bank accounts with in
                    24-48hrs!
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
                    Repayment is made from your future earnings.A
                    percentage(decided when we offer you the loan) of your
                    monthly earnings is applied until we recoup the capital we
                    provided to you in full plus the fees. There is no set
                    repayment date,as we understand your earnings can fluctuate
                    throughout the year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="clearfix" />
      <section className="case-study">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="study-text">
                <h3 className="text-uppercase">Case Study</h3>
                <ul>
                  <li>You make $100/month on OnlyFans</li>
                  <li>
                    We offer you $500 at a 10-30% payback fee depending length
                    of time you need money &amp; our special analysis
                  </li>
                  <li>
                    Every month we will automatically withdraw this amount from
                    your bank account plus a fee of 3% upfront until the loan is
                    paid back
                  </li>
                  <li>
                    If you don't make as much one month you don't pay back as
                    much,if you make more one month you pay back more.We are
                    aligned with you!
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5">
              <img src="img/case-img.png" alt="case-img" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Howitwork;
