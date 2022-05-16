import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AllProduct = ({ data, deleteBtn }) => {
  const { img, name, price, quantity, _id } = data;

  const navigate = useNavigate();
  const updateBtn = (id) => {
    navigate(`/update/${id}`);
  };

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
          <button onClick={() => updateBtn(_id)} className=" btn btn-info my-1">
            Update
          </button>
          <button
            onClick={() => deleteBtn(_id)}
            className=" btn btn-danger my-1"
          >
            Delate
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
