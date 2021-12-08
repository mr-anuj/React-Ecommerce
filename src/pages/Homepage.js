import React from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import LatestProduct from "../components/LatestProduct";
import Navbar from "../components/Navbar";
import TrendingProduct from "../components/TrendingProduct";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <LatestProduct />
      <TrendingProduct />
      <Footer />
    </>
  );
};

export default Homepage;
