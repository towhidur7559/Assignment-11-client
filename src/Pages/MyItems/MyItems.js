import React, { useEffect, useState } from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import AllProduct from "../ManageItems/AllProduct";
import Swal from "sweetalert2";

const MyItems = () => {
  const [reset, setReset] = useState(0);
  const [products, setProducts] = useState([]);

  const [user, loading, error] = useAuthState(auth);
  const email = user.email;

  useEffect(() => {
    fetch(`http://localhost:5000/product?email=${email}`)
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
console.log(products);
//🍟🍟🍟🍟🍟🍟🍟🍟🍟 HTML 🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟
  return (
    <div>
      <div className="container">
        <div className="text-center">
          <h2 className="rounded fw-bold py-2 px-4 shadow-lg text-info mt-4 d-inline-block">
            My Items
          </h2>
        </div>
        <div className="row g-4 mt-2 pb-4">
          {products.map((product) => (
            <AllProduct
              key={product._id}
              data={product}
              deleteBtn={deleteBtn}
            ></AllProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyItems;
