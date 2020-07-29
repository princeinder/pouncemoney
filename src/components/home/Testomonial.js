import React from "react";
import OwlCarousel from "react-owl-carousel";
const Testimonial = () => {
  return (
    <OwlCarousel className="owl-theme" loop margin={10} items={1} nav>
      <div className="item">
        <img src="img/client-1.png" alt="client" />
        <p>
          "I just got $5k from Pounce Money to promote my new dog clothing brand
          on Instagram. I used the money to prototype the product and buy ads to
          promote it to my following. There is no way the bank would have given
          the money to do this!"
        </p>
        <h4>– Marvin Marvster, CA</h4>
      </div>
      <div className="item">
        <img src="img/client-1.png" alt="client" />
        <p>
          “Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s”
        </p>
        <h4>– Daniel Barrios, CA</h4>
      </div>
      <div className="item">
        <img src="img/client-1.png" alt="client" />
        <p>
          “Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s”
        </p>
        <h4>– Daniel Barrios, CA</h4>
      </div>
    </OwlCarousel>
  );
};

export default Testimonial;
