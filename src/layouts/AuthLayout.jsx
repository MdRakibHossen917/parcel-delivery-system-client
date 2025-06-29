import React from "react";
import { Outlet } from "react-router";
import authImg from "../assets/authImage.png";
import ProFirstLogo from "../pages/shared/ProFastLogo/ProFastLogo";
 

const AuthLayout = () => {
  return (
    <div className=" p-13 bg-base-200">
      <div>
        <ProFirstLogo></ProFirstLogo>
      </div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <img src={authImg} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
