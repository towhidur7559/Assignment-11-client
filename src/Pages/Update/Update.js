import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Update = () => {
  const [reset, setReset] = useState(0);
  const { productId } = useParams();
  const [product, setProduct] = useState({});



  useEffect(() => {
    fetch(`http://localhost:5000/product/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [reset]);
  const { img, name, price, description, quantity, supplier, email } = product;

  const deliverAndAdd = (value) => {

    let newquantity;

    if (value) {
      newquantity = quantity + value
    } else {
      newquantity = quantity - 1;
    }
    const newData = { newquantity };

    fetch(`http://localhost:5000/product/${productId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        setReset(reset + 1);
      });
  };



  const addHandel =(e)=>{
    e.preventDefault()
      const value =parseInt(e.target.number.value);
      if(value >0){
        deliverAndAdd(value);
      }
      else{
        alert('Are you dumb 😑😑 Add a proper value')
      }
      e.target.reset();
  }

  // 🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟 HTML 🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟

  return (
    <div className="container">
      <div className="text-center">
        <h2 className="rounded fw-bold py-2 px-4 shadow-lg text-info mt-4 d-inline-block">
          Stock Update
        </h2>
      </div>
      <div className="mb-5">
        <div className="row g-5 shadow-lg rounded pb-5 pb-md-2 my-4">
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
              <h3 className="mb-1">Email: {email}</h3>
              <div className="d-flex mt-5 pt-2 mb-3">
                <button
                  onClick={() => deliverAndAdd(false)}
                  className="btn btn-info px-4  me-2 "
                >
                  Deliver <i className="fa-solid fa-truck"></i>
                </button>
                <form onSubmit={addHandel} className="d-flex ">
                  <input type="number" className="form-control" name="number" required />
                  <button className="ms-2 px-3 btn btn-info" type="submit">
                    Add
                  </button>
                </form>
              </div>
              <div className="d-flex">
                <Link className="btn btn-info px-5" to="/manageitems">
                  Manage items <i className="fa-solid fa-list-check"></i>
                </Link>
                <Link className="btn btn-info px-5 ms-2" to="/additems">
                  Add items <i className="fa-solid fa-circle-plus"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
