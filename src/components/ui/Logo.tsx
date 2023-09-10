import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../icons/logo.svg";

const Logo = () => {
  return (
    <Link to={'/'} className="logo">
      <img src={logo} alt=""/>
      <div>Leonid Ivanov</div>
    </Link>
  );
};

export default Logo;