import React from "react";
import "./TopBanner.css";
import Typed from "react-typed";

const TopBanner = () => {
  return (
    <div className="top-banner mb-5 d-flex justify-content-center align-items-center">
      <div>
        <h1 className="fw-bold display-4 text-color m-2">
        <Typed
        strings={[
          'Welcome To PC HOUSE ',
          'Here You Can Find Your Dream PC']}
          typeSpeed={40}
          backSpeed={50}
          loop
        ></Typed>
        </h1>
      </div>
    </div>
  );
};

export default TopBanner;
