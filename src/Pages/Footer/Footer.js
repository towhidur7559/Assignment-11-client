import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="text-center p-5 bg-black">
      <p>
        <small className="text-white">
          Copyright &copy; {year} PC HOUSE XR
        </small>
      </p>
      <h4>
        <i class="mx-3 text-white fa-brands fa-facebook"></i>
        <i class="mx-3 text-white fa-brands fa-google"></i>
        <i class="mx-3 text-white fa-brands fa-instagram-square"></i>
        <i class="mx-3 text-white fa-brands fa-twitter"></i>
        <i class="mx-3 text-white fa-brands fa-linkedin"></i>

      </h4>
    </footer>
  );
};

export default Footer;
