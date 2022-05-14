import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const submitBtn = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("message send", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div className="py-5">
      <div className="container shadow-lg rounded-3 border-start border-5 border-info">
        <div className="row py-4">
          <div className="col-12 col-md-3">
            <div className="row">
              <div className="col-12 text-center py-3">
                <i className="fas fa-map-marker-alt fs-1 mb-3 text-info"></i>
                <h3>Address</h3>
                <p className="text-muted">
                  Singair <br /> Dhaka, Manikganj
                </p>
              </div>
              <div className="col-12 text-center py-3">
                <i className="fas fa-phone-alt fs-1 mb-3 text-info"></i>
                <h3>Phone</h3>
                <p className="text-muted">
                  +8801700775804 <br /> +88001852651478
                </p>
              </div>
              <div className="col-12 text-center py-3">
                <i className="fas fa-envelope fs-1 mb-3 text-info"></i>
                <h3>Email</h3>
                <p className="text-muted">
                  safinxr@gmail.com
                  <br />
                  safinkhan04@gmaol.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-9 ">
            <h3 className="text-info mt-2">Send us a message</h3>
            <p>
              If you have any question or if you want to send feedback you can
              leave your message here. Thanks for visiting our website
            </p>
            <form onSubmit={submitBtn}>
              <input
                type="text"
                className="form-control py-3 mb-5"
                placeholder="Enter your name"
                required
              />
              <input
                type="email"
                className="form-control py-3 mb-5"
                placeholder="Enter your Email"
                required
              />
              <textarea className="form-control mb-2 py-5" required />

              <button type="submit" className="btn btn-info  px-lg-4">
                Submit
              </button>
              <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />    
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
