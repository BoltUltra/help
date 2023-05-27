import React from "react";
import { DownloadButtons, SectionHeading } from "@/components/index";
import Image from "next/image";
import { app } from "../../public";

const OurApp: React.FC = () => {
  return (
    <section className="section-spacing2">
      <SectionHeading subHeading={"Join Us"} heading={"Our App"} />
      <div className="grid md:grid-cols-2 md:gap-20 gap-10 items-center">
        <div>
          <Image src={app} alt={"Our App"} />
        </div>
        <div className="md:text-left text-center space-y-3">
          <h3 className="font-raleway md:text-7xl text-4xl font-bold">
            Download Our App Now
          </h3>
          <div className="space-y-2 text-gray-700 font-montserrat">
            <p>Make your to-do list wherever you are with our mobile app.</p>
            <p>
              <span className="font-semibold">Help</span> is an easy way to find
              qualified and reliable local Helpers for everything from
              assembling and installing furniture to moving and cleaning
            </p>
          </div>
          <DownloadButtons />
        </div>
      </div>
    </section>
  );
};

export default OurApp;
