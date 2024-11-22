/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React from "react";
import Navbar from "./_component/navbar";
import Footer from "./_component/footer";
import Gallery from "./_component/gallery";
import ShortStory from "./_component/shortstory";
import Carousel from "./_component/carousel";

const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col drawer-content">
          <Navbar />   
          <Carousel />
          <ShortStory />
          <Gallery />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
