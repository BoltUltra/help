import React from "react";
import Link from "next/link";
import Image from "next/image";
import { apple, google } from "../../public";

const DownloadButtons: React.FC = () => {
  return (
    <div className="flex items-center lg:justify-start justify-center space-x-5 mb-5">
      <Link href={"/"}>
        <Image
          src={apple}
          alt={"download from apple store"}
          className="md:w-40 w-32"
        />
      </Link>
      <Link href={"/"}>
        <Image
          src={google}
          alt={"download from google play store"}
          className="md:w-40 w-32"
        />
      </Link>
    </div>
  );
};

export default DownloadButtons;
