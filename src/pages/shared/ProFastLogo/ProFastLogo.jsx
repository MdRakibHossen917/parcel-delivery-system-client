import React from "react";
import logo from "../../../assets/logo.png";

const ProFirstLogo = () => {
  return (
    <div className="flex items-end">
      <img className="mb-1" src={logo} alt="" />
      <p className="text-3xl font-extrabold -ml-2">ProFast</p>
    </div>
  );
};

export default ProFirstLogo;
