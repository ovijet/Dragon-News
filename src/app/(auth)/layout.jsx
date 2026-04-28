import Navbar from "@/component/Navber";
import React from "react";

const AuthPage = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default AuthPage;
