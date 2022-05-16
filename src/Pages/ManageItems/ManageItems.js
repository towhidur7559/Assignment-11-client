import React, { useEffect, useState } from "react";
import AllProduct from "./AllProduct";

const ManageItems = () => {
  const [reset, setReset] = useState(0);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [reset]);

  //⭕❗⭕❗⭕❗⭕❗⭕❗⭕❗ Delete area⭕❗⭕❗⭕❗⭕❗⭕❗⭕❗
  const deleteBtn = (id) => {
    const sure = window.confirm("are you sure");

    if (sure) {
      fetch(`http://localhost:5000/product/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setReset(reset + 1);
        });
    }
  };

  //🍟🍟🍟🍟🍟🍟🍟🍟🍟 HTML 🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟
  return (
    <div className="container">
      <div className="text-center">
        <h2 className="rounded fw-bold p-2 shadow-lg text-info mt-4 d-inline-block">
          Manage Items
        </h2>
      </div>
      <div className="row g-4 mt-2">
        {products.map((product) => (
          <AllProduct
            key={product._id}
            data={product}
            deleteBtn={deleteBtn}
          ></AllProduct>
        ))}
      </div>
    </div>
  );
};

export default ManageItems;
