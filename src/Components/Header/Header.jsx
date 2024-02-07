import React from "react";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="lg:h-20 w-full bg-[#1C2B35] lg:flex justify-between items-center  ">
      <Link to='/'><img className="lg:ml-10" src={logo} alt="" /></Link>
      <div className="text-white lg:mr-10 space-x-7 font-semibold ">
        <Link to="/orders">Order review</Link>
        <Link to="/">Shop</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Log In</Link>
      </div>
    </nav>
  );
};

export default Header;
