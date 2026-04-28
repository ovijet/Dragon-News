import Link from "next/link";
import React from "react";
import user from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./share/NavLink";
const Navbar = () => {
  return (
    <div className="flex justify-between container mx-auto ">
      <div></div>
      <ul className="flex gap-5 mt-5">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          <NavLink href="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="flex gap-5 mt-5">
        <Image src={user} alt="User" width={50} height={50} />
        <button className="btn btn-primary">
          <Link href="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
