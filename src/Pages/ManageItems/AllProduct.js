import React from "react";
import "./Allproduct.css";

const AllProduct = ({ data }) => {
  const { img, name, price, description, quantity, supplier, email } = data;
  return (
    <div className="col-12 col-md-6">
        <div className=" shadow-lg p-3 d-flex justify-content-between rounded ">
      <div className="d-flex">
        <img width={90} src={img} alt="" />
        <div className="ms-md-5 mx-2">
          <h5>{name.slice(1, 25)}...</h5>
          <p className="mb-0">Quantity: {quantity}</p>
          <p className="mb-0">Price: ${price}</p>
        </div>
      </div>
      <div className="d-flex flex-column">
        <button className=" btn btn-info my-1">Update</button>
        <button className=" btn btn-danger my-1">Delate</button>
      </div>
    </div>
    </div>
  );
};

export default AllProduct;
