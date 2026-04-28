import BreakingNews from "@/component/BrakingNews";
import Header from "@/component/Header";
import Navbar from "@/component/Navber";
import React from "react";
const layout = ({ children }) => {
  return (
    <>
      <Header />
      <BreakingNews />
      <Navbar />
      {children}
    </>
  );
};

export default layout;
