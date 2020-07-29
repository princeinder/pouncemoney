import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const AboutUs = () => {
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
      <section className="about-sec">
        <div className="container">
          <div className="row">
            <div className="offset-1 col-lg-10">
              <div className="row">
                <div className="col-lg-6">
                  <div className="about-img">
                    <img src="img/about-img.jpg" alt="about-img" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-text">
                    <h2 className="text-uppercase">About me</h2>
                    <p>
                      I love self-made hustlers. You’ve figured out how to make
                      money on your own terms, doing what you love. That’s
                      insanely hard. I know hand because I worked relentlessly
                      to grow my last company from zero to multi-million dollars
                      in revenue. Working tirelessly +15 hour days, on a plane
                      +50% of the time, never knowing how much money we would be
                      making from month to month.
                      <br />
                      This type of hustle should be rewarded not punished.
                      <br />
                      Unfortunately, banks don’t understand this. Multiple
                      income streams and fluctuating income streams scares them.
                      Most bankersdon’t even know an 8-year-old reviewing toys
                      on YouTube can make +$26MM.
                      <br />
                      That means if you are an influencer, content creator or
                      freelancer – the bank isn’t going to be very helpful. It
                      could be VERY HARD to get a credit card, a line of credit
                      or even a mortgage!
                      <br />
                      That is why I built Pounce Money.
                      <br />
                      Prior to my last company, I spent 10 years of my life as
                      an investor (my fund was actually rated #1 in Canada 3 of
                      the 7 years I ran it). I invested in hundreds of small
                      private and public speculative companies. I understand
                      risk but I also understand reward.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <h3>
                If you’re working hard to grow your craft and I can see that in
                your numbers - followers &amp; financials - then I want to help
                you grow!
              </h3>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
