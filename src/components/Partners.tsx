import React from "react";
import Slider from "react-infinite-logo-slider";
import "../assets/PartnerBrand.css";
const Partners = () => {
  return (
    <div className="container-fluid accordion-body">
      <div className="row">
        <div className="col">
          <h1>Our Partners Brands</h1>
        </div>
        <div className="col partner-brand">
          <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={"#fff"}
          >
            <Slider.Slide>
              <img
                src="https://logosandtypes.com/wp-content/uploads/2020/08/woolworths.svg"
                alt="any"
                width="150"
                height="150"
              />
            </Slider.Slide>
            <Slider.Slide>
              <img
                src="https://logosandtypes.com/wp-content/uploads/2020/08/7-eleven.svg"
                alt="any2"
                width="150"
                height="150"
              />
            </Slider.Slide>
            <Slider.Slide>
              <img
                src="https://logosandtypes.com/wp-content/uploads/2023/11/arkansas-travelers.svg"
                alt="any3"
                width="150"
                height="150"
              />
            </Slider.Slide>
            <Slider.Slide>
              <img
                src="https://logosandtypes.com/wp-content/uploads/2024/06/tenkara-usa.svg"
                alt="any3"
                width="150"
                height="150"
              />
            </Slider.Slide>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Partners;
