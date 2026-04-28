import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
const Header = () => {
  return (
    <div className="space-y-2 py-5">
      <Image
        src={logo}
        alt="Logo"
        width={300}
        height={300}
        className="mx-auto"
      />
      <div className="text-center">
        <h1>Journalism Without Fear or Favour</h1>
        <p>{new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Header;
