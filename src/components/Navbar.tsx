"use client";
import React, { useState } from "react";
import Image from "next/image";
import { logo } from "../../public";
import Link from "next/link";
import { MdClose, MdOutlineMenuOpen } from "react-icons/md";

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navItems = [
    { title: "Home", link: "/" },
    { title: "Contact", link: "/contact" },
    { title: "Confidentiality Policy", link: "/confidentiality-policy" },
    { title: "About Us", link: "/about-us" },
    { title: "Blog", link: "/blog" },
  ];

  const toggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <nav className="fixed top-0 z-10 w-full bg-white">
        <div className="flex items-center lg:ml-20 md:ml-10 ml-5 lg:space-x-44 space-x-32 md:py-7 py-5">
          <Image src={logo} alt={"logo"} className="w-20" />
          <ul className="md:flex items-center justify-between lg:space-x-10 md:space-x-7 font-montserrat hidden">
            {navItems.map((item) => (
              <li key={item.title}>
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <button
          className="md:hidden fixed top-5 right-5 z-20 text-white"
          onClick={toggle}
        >
          {isNavOpen ? (
            <MdClose className="text-4xl bg-primary rounded dark:text-white p-1" />
          ) : (
            <MdOutlineMenuOpen className="text-4xl p-1 bg-primary rounded dark:text-white" />
          )}
        </button>

        <div
          className={`${
            isNavOpen ? "md:hidden block" : "md:hidden hidden"
          } fixed top-0 h-screen z-10 bg-white w-full p-5 space-y-5`}
        >
          <Link href={"/"}>
            <Image src={logo} className="md:w-64 w-32" alt="logo" />
          </Link>
          <div className="flex flex-col space-y-10 font-raleway font-semibold text-xl pt-10">
            {navItems.map((item, index) => (
              <Link href={item.link} key={index} onClick={toggle}>
                {item.title}
              </Link>
            ))}
          </div>
          <div></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
