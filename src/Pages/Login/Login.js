import React from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from?.pathname || "/";

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

// 🍔🍔🍔🍔🍔🍔🍔🍔🍔Signup area 🍔🍔🍔🍔🍔🍔🍔🍔🍔

const submitted = (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  signInWithEmailAndPassword(email, password);
  
};

const googleSignup = () => {
  signInWithGoogle()
};

if (user || googleUser) {
  navigate(from, { replace: true });
}

  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <div className="container d-md-flex justify-content-around alin-items-center">
        <div
          className="p-4 p-md-4 shadow-lg mb-1 m-md-5 login-form bg-white rounded
      col-md-4"
        >
          <form onSubmit={submitted}>
            <h1 className="text-center">Login</h1>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                name="email"
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
            <p className="text-danger">{error?.message}</p>
            <button type="submit" className="btn btn-info w-100">
            {loading ? <Loading></Loading> : "Login"}
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
          <p className="text-danger">{googleError?.message}</p>
          <button onClick={googleSignup} className="btn w-100 border border-primary text-primary">
            <i className="fa-brands fa-google"></i> Continue With Google
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
