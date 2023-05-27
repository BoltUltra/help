import React from "react";
import Image from "next/image";
import { logo } from "../../public";
import Link from "next/link";
import { DownloadButtons } from "@/components/index";

const Footer: React.FC = () => {
  return (
    <section className="lg:px-32 md:px-10 px-5 md:py-20 py-10">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-5 md:gap-7 gap-10 md:text-left text-center font-montserrat text-gray-600 text-sm">
        <div className="space-y-3">
          <Image src={logo} alt={"logo"} className="w-32 md:mx-0 mx-auto" />
          <p>Make your to-do list wherever you are with our mobile app.</p>
          <p>©2023. All rights reserved.</p>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-primary">About Us</h3>
          <ul className="space-y-3">
            <li>
              <Link href={"/"}>Frequently Asked Question</Link>
            </li>
            <li>
              <Link href={"/"}>Confidentiality Policy</Link>
            </li>
            <li>
              <Link href={"/"}>Contact</Link>
            </li>
            <li>
              <Link href={"/"}>Blog</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold text-primary">Contacts</h3>
          <ul className="space-y-3">
            <li>+351-965-990-000</li>
            <li>@helpyou@gmail.com</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold text-primary">Download our App</h3>
          <p>Tackle your to-do list wherever you are with our mobile app.</p>
          <DownloadButtons />
        </div>
      </div>
      <p className="text-center font-montserrat text-gray-600 text-sm pt-5">
        By using this website, you understand the information being presented is
        provided for informational purposes only
      </p>
    </section>
  );
};

export default Footer;
