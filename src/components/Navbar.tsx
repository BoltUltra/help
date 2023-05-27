import React from "react";
import Image from "next/image";
import { logo } from "../../public";
import Link from "next/link";

const Navbar: React.FC = () => {
  const navItems = [
    { title: "Home", link: "/" },
    { title: "Contact", link: "/contact" },
    { title: "Confidentiality Policy", link: "/confidentiality-policy" },
    { title: "About Us", link: "/about-us" },
    { title: "Blog", link: "/blog" },
  ];
  return (
    <>
      <nav className="flex items-center md:px-32 md:space-x-44 py-7">
        <Image src={logo} alt={"logo"} className="w-20" />
        <ul className="flex items-center justify-between space-x-10 font-montserrat">
          {navItems.map((item) => (
            <li key={item.title}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
