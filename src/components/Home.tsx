import React from "react";
import Header from "./Header";
import { Carousel } from "./Carousel";
import ProductCategories from "./ProductCategories";
import NewArrivals from "./NewArrivals";
import { Portfolio } from "./Portfolio";
import Footer from "./Footer";
import Partners from "./Partners";

const Home = () => {
  return (
    <div>
      <Header promtionHeader="Free deliveries everywhere" />
      <Carousel />

      <div className="container">
        <ProductCategories />
      </div>
      <Partners />
      <div className="container">
        <NewArrivals />
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
