import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/product/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const { img, name, price, description, quantity, supplier, _id } = product;

  return (
    <div className="container">
      <div className="text-center">
        <h2 className="rounded fw-bold p-2 shadow-lg text-info my-2 d-inline-block">
          Stock Update
        </h2>
      </div>
      <div>
        <div className="row g-5 shadow-lg rounded my-4">
          <div className="col-12 col-md-6">
            <div className="">
              <img className="img-width" src={img} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="">
              <h1>{name}</h1>
              <p className="text-justify">
                <small>{description}</small>
              </p>
              <h3 className="mb-1">Price: ${price}</h3>
              <h3 className="mb-1">Quantity: {quantity}</h3>
              <h3 className="mb-1">Supplier: {supplier}</h3>
              <div className="d-flex my-3">
              <button className="btn btn-info px-5 fw-bold me-2 ">
                Deliver
              </button>
              <form className="d-flex ">
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <input className="ms-2 btn btn-info" type="submit" value="Add" />
              </form>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
