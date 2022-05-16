import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./AddItems.css";

const AddItems = () => {
    const [user, loading, error] = useAuthState(auth);
  const addHandel = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const supplier = e.target.supplier.value;
    const img = e.target.img.value;
    const postData ={name, email, description, price, quantity, supplier, img}
    fetch('http://localhost:5000/product', {
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(postData)    
    })
    .then(res => res.json())
    .then(data =>{
        alert('product added');
        e.target.reset();
    })
  };

  return (
    <div className="background-img">
      <div className=" container">
        <div className="text-center">
          <h2 className="rounded fw-bold py-2 px-4 shadow-lg text-info mt-4 d-inline-block bg-white">
            Add Item
          </h2>
        </div>
        <div className="col-12 col-md-5 mx-auto my-4 shadow-lg p-4 p-md-5 rounded bg-white">
          {/* ⭕⭕⭕⭕⭕⭕ form ⭕⭕⭕⭕⭕⭕ */}
          <form onSubmit={addHandel}>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Title
              </label>
              <input type="text" className="form-control" name="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={user.email}
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                name="description"
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Price
              </label>
              <input type="number" className="form-control" name="price" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Quantity
              </label>
              <input type="number" className="form-control" name="quantity" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Supplier
              </label>
              <input type="text" className="form-control" name="supplier" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Image URL
              </label>
              <input type="text" className="form-control" name="img" />
            </div>
            <button type="submit" className="btn btn-info w-100">
              Add to Stock
            </button>
          </form>
        </div>
        <div className="ajriya-div"></div>
      </div>
    </div>
  );
};

export default AddItems;
