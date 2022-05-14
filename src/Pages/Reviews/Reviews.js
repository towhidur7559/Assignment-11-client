import React from "react";
import './Reviews.css';

const Reviews = () => {
  return (
    <div className="container my-5">
      <div className="pt-5 pb-3">
        <h2 className="text-center fw-bold mb-0">
          Find out how business owners around the world{" "}
        </h2>
        <h2 className="text-center fw-bold">
          are growing with QuickBooks Commerce
        </h2>
      </div>
      <div className="my-5 d-md-flex justify-content-center align-items-center">
        <img className="rounded img-width" src="https://i.ibb.co/Lt76Z5b/boss-2-min.png" alt="" />
        <div className="review-text">
            <h1 className="color-hotpink"><i className="fa-solid fa-quote-left"></i></h1>
            <h3>Invest in a warehouse space, and turn it into a online store where you can sell direct to consumers while using PC HOUSe to manage inventory, wholesale & web orders.”</h3>
            <p className=" mt-4">Aymansadik Kaz, Owner of 10pc FC </p>
        </div>
      </div>
      <div className="my-5 d-md-flex justify-content-center align-items-center">
        <div>
        <img className="rounded img-width" src="https://i.ibb.co/WKSHXBD/boss-3-min.png" alt="" />
        </div>
        <div className="review-text-right">
            <h1 className="color-hotpink"><i className="fa-solid fa-quote-left"></i></h1>
            <h3>We’ve used PC HOUSE from the early days to power the inventory control aspect of our website for B2B as well as B2C to enable more seamless business operations.”</h3>
            <p className=" mt-4">Aymansadik Kaz, Owner of 10pc FC </p>
        </div>
      </div>
      <div className="pb-5 my-5 d-md-flex justify-content-center align-items-center">
        <img className="rounded img-width" src="https://i.ibb.co/j3kgFmZ/boss-1-min.png" alt="" />
        <div className="review-text">
            <h1 className="color-hotpink"><i className="fa-solid fa-quote-left"></i></h1>
            <h3>Five years in and I’d say that PC HOUSE was our fourth employee, I don’t know what we’d do without it.”</h3>
            <p className=" mt-4">Sara McCarthy, Co-Founder at Ireland Craft Beverages</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
