import React, { useEffect, useState } from "react";
import AllProduct from "./AllProduct";

const ManageItems = () => {
const [products , setProducts] = useState([]);
useEffect(()=>{
    fetch('http://localhost:5000/product')
    .then(res => res.json())
    .then(data => setProducts(data))
},[]);

  return (
    <div className="container">
      <div className="text-center">
        <h2 className="rounded fw-bold p-2 shadow-lg text-info mt-4 d-inline-block">
          Manage Items
        </h2>
      </div>
      <div className="row g-4">
          {
              products.map(product => <AllProduct 
              key={product._id}
              data={product}
              ></AllProduct>)
          }
      </div>
    </div>
  );
};

export default ManageItems;
