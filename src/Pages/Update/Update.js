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
        <h2 className="rounded fw-bold p-2 shadow-lg text-info my-3 d-inline-block">
          Stock Update
        </h2>
      </div>
      <div>
        <div className="row g-5 shadow-lg my-4">
          <div className="col-12 col-md-6">
            <div className="">
                <img className="img-width" src={img} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className=" bg-primary">
              <h1>kdsjfk</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
