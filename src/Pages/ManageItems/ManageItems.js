import React, { useEffect, useState } from "react";
import AllProduct from "./AllProduct";
import Swal from "sweetalert2";

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
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
        fetch(`http://localhost:5000/product/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            setReset(reset + 1);
          });
      }
    });
  };

  //🍟🍟🍟🍟🍟🍟🍟🍟🍟 HTML 🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟
  return (
    <div className="container">
      <div className="text-center">
        <h2 className="rounded fw-bold py-2 px-4 shadow-lg text-info mt-4 d-inline-block">
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
