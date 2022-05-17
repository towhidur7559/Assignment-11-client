import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";
import { useLocation, useNavigate } from "react-router-dom";

const Verified = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);
  const [user, loading, error] = useAuthState(auth);

  if (user?.emailVerified) {
    navigate(from, { replace: true });
  }
  

  return (
    <div
      style={{
        backgroundImage: "url('https://i.ibb.co/DW2m4Rx/3646374.jpg')",
        backgroundSize: "cover",
        height: "90vh",
        width: "100%",
        backgroundPosition: "center center",
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="container ">
        <div className="bg-white p-5 col-12 col-md-5 rounded shadow-lg mx-auto">
          <h2>Verify your Email</h2>
          <p>We have sent an email to {user?.email}</p>
          <p>You need to verify your email to continue.</p>
          <br></br>
          <p>
            if you have not received the verification email, please check your
            "Spam" folder. You can also clink the resend button below to have a
            another email send to you{" "}
          </p>
          <button
            onClick={async () => {
              await sendEmailVerification();
              Swal.fire({
                icon: "success",
                title: "A Verification email has been sent to your account  ",
                showConfirmButton: false,
                timer: 3000,
              });
            }}
            className="btn btn-info"
          >
            {sending ? <Loading></Loading> : "Resend Email"}
          </button>
          <button
            onClick={()=>window.location.reload()}
            className="btn btn-success ms-2"
          >
            Verification Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verified;
