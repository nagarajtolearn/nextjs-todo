import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center pt-2 mb-2 gap-5 text-2xl border-t-2 solid ">
        <i className="fa-brands fa-square-twitter cursor-pointer duration-300 hover:opacity-50"></i>
        <i className="fa-brands fa-square-facebook cursor-pointer duration-300 hover:opacity-50"></i>
        <i className="fa-brands fa-square-github cursor-pointer duration-300 hover:opacity-50"></i>
      </div>
      <p className="text-center text-sm pb-2">Designed by Nagaraj Biradar</p>
    </>
  );
};

export default Footer;
