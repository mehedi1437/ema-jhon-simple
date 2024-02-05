import React from "react";
import logo from "../../images/Logo.svg";
import { Link, Router } from "react-router-dom";

const Header = () => {
  return (
    <nav className="lg:h-20 w-full bg-[#1C2B35] lg:flex justify-between items-center  ">
      <img className="lg:ml-10" src={logo} alt="" />
      <div className="text-white lg:mr-10 space-x-7 font-semibold ">
        <a href="#">Order</a>
        <a href="#">Order review</a>
        <a href="#">Manage Inventory</a>
        <a href="#">Log In</a>
      </div>
    </nav>
  );
};

export default Header;
