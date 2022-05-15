import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <div className="container d-md-flex justify-content-around alin-items-center">
        <div
          className="p-4 p-md-4 shadow-lg mb-1 m-md-5 login-form bg-white rounded
      col-md-4"
        >
          <form className="">
            <h1 className="text-center">Login</h1>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                name="name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                required
              />
            </div>
            <button type="submit" className="btn bg-pink w-100">
              Login
            </button>
            <p className="my-2">
              Don't have an account ?{" "}
              <Link
                className="
        text-danger text-decoration-none"
                to="/signup"
              >
                Signup
              </Link>
            </p>
          </form>
          <p className="text-center mt-4 mb-2">Or Login using</p>
          <button className="btn w-100 border border-primary text-primary">
            <i class="fa-brands fa-google"></i> Continue With Google
          </button>
        </div>

        <img
          className="login-img col-6"
          src="https://i.ibb.co/k5rKtTc/login.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
