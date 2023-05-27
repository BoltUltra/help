import React from "react";
import Image from "next/image";
import { angel1, angel2, angel3, apple, google, heroImg } from "../../public";
import Link from "next/link";
import { DownloadButtons } from "@/components/index";

const Hero: React.FC = () => {
  const helpers = [
    {
      name: "Angel R.",
      role: "Furniture Assembly",
      date: "Apr 24",
      time: "12:30pm",
      rate: "$44.39/hr",
      img: angel1,
    },
    {
      name: "Angel R.",
      role: "Furniture Assembly",
      date: "Apr 24",
      time: "12:30pm",
      rate: "$44.39/hr",
      img: angel2,
    },
    {
      name: "Angel R.",
      role: "Furniture Assembly",
      date: "Apr 24",
      time: "12:30pm",
      rate: "$44.39/hr",
      img: angel3,
    },
    {
      name: "Angel R.",
      role: "Furniture Assembly",
      date: "Apr 24",
      time: "12:30pm",
      rate: "$44.39/hr",
      img: angel1,
    },
    {
      name: "Angel R.",
      role: "Furniture Assembly",
      date: "Apr 24",
      time: "12:30pm",
      rate: "$44.39/hr",
      img: angel2,
    },
    {
      name: "Angel R.",
      role: "Furniture Assembly",
      date: "Apr 24",
      time: "12:30pm",
      rate: "$44.39/hr",
      img: angel3,
    },
  ];
  return (
    <section className="hero section-spacing grid md:grid-cols-7 md:gap-5 gap-10 items-center">
      <div className="md:col-span-3 md:text-left text-center">
        <h1 className="font-raleway md:text-6xl text-4xl font-bold md:pb-3 pb-2">
          Revolutionizing Everyday Work
        </h1>
        <p className="font-montserrat md:text-lg mb-5">
          Everyday work is important, but it’s also time consuming. We can help.
        </p>
        <DownloadButtons />
        <div className="flex items-center space-x-1 font-montserrat md:justify-start justify-center">
          <p className="font-bold text-4xl">4.8</p>
          <div>
            <p className="flex space-x-1 text-yellow-400">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-duotone fa-star-half"></i>
            </p>
            <p className="text-gray-700">990+ Reviews</p>
          </div>
        </div>
      </div>
      <div className="md:col-span-4">
        <div className="grid md:grid-cols-5 gap-4">
          <div className="md:col-span-3">
            <div className="space-y-5">
              <div className="flex md:justify-end">
                <div className="bg-[#2B4E8C] w-[70%] py-6 rounded-xl text-center font-raleway">
                  <p className="text-white text-2xl font-bold leading-snug">
                    +1500 <br /> Helpers
                  </p>
                </div>
              </div>
              <div className="h-64 overflow-hidden overflow-y-scroll rounded-xl bg-[#F0F4FF] p-3 space-y-3">
                {helpers.map((helper) => (
                  <div
                    className="flex items-center space-x-2"
                    key={`${helper.name}${Math.random() * 5000}}`}
                  >
                    <div>
                      <Image
                        src={helper.img}
                        alt={`Math.random()*5000`}
                        className="md:h-20 md:w-24 w-14 h-14 md:rounded-3xl rounded-full object-cover"
                      />
                    </div>

                    <div className="font-montserrat md:text-sm text-xs text-gray-600">
                      <h3 className="font-bold md:text-xl text-base text-black">
                        {helper.name}
                      </h3>
                      <p className="">{helper.role}</p>
                      <p className="flex space-x-3">
                        <span>{helper.date}</span>
                        <span>{helper.time}</span>
                      </p>
                      <p>{helper.rate}</p>
                    </div>
                    <button className="md:flex hidden md:space-x-2 space-x-4 bg-black text-white px-2 py-1 items-center font-montserrat rounded-xl text-sm">
                      <i className="fa-solid fa-timer"></i>
                      <span>Reschedule</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <Image
              src={heroImg}
              alt={"hero-img"}
              className="rounded-xl h-96 object-cover object-center md:block hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
