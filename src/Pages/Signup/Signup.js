import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Signup.css";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../Loading/Loading";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";

const Signup = () => {
  const [allError, setAllError] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [sendEmailVerification, sending, Verror] =
    useSendEmailVerification(auth);

  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from?.pathname || "/";


  // 🍔🍔🍔🍔🍔🍔🍔🍔🍔Signup area 🍔🍔🍔🍔🍔🍔🍔🍔🍔

  const submitted = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password === confirmPassword) {
      setAllError("");
      createUserWithEmailAndPassword(email, password);
    } else {
      setAllError("Password didn't match, check your password");
    }
  };

  const googleSignup = () => {
    signInWithGoogle();
  };
  if (user) {
    sendEmailVerification()
    navigate(from, { replace: true });
  }
  if (googleUser) {
    navigate(from, { replace: true });
  }
  if(sending){
    Swal.fire({
      icon: 'success',
      title: 'A Verification email has been sent to your account  ',
      showConfirmButton: false,
      timer: 3000
    })
  }

  // 🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟 HTML 🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟

  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <div className="container d-md-flex justify-content-around align-items-center">
        <div
          className="p-4 p-md-4 shadow-lg mb-1 m-md-5 login-form bg-white rounded
      col-md-4"
        >
          <form onSubmit={submitted}>
            <h1 className="text-center">Signup</h1>
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
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                required
              />
            </div>
            <p className="text-danger">{allError || error?.message}</p>
            <button type="submit" className="btn btn-info w-100">
              {loading ? <Loading></Loading> : "Signup"}
            </button>
            <p className="my-2">
              Already have an account ?{" "}
              <Link
                className="
        text-danger text-decoration-none"
                to="/login"
              >
                Login
              </Link>
            </p>
          </form>
          <p className="text-center mt-4 mb-2">Or Signup using</p>
          <p className="text-danger">{googleError?.message}</p>
          <button
            onClick={googleSignup}
            className="btn w-100 border border-primary text-primary"
          >
            <i className="fa-brands fa-google"></i> Continue With Google
          </button>
        </div>

        <img
          className="login-img col-6"
          src="https://i.ibb.co/zspttYQ/signup-min.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Signup;
