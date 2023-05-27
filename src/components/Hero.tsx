import React from "react";
import Image from "next/image";
import { angel1, angel2, angel3, apple, google, heroImg } from "../../public";
import Link from "next/link";

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
  ];
  return (
    <section className="hero md:px-20 grid grid-cols-7 gap-5">
      <div className="md:col-span-3 md:text-left text-center">
        <h1 className="font-raleway md:text-6xl text-3xl font-bold pb-3">
          Revolutionizing Everyday Work
        </h1>
        <p className="font-montserrat text-lg mb-5">
          Everyday work is important, but it’s also time consuming. We can help.
        </p>
        <div className="flex items-center space-x-5 mb-5">
          <Link href={"/"}>
            <Image
              src={apple}
              alt={"download from apple store"}
              className="md:w-40 w-20"
            />
          </Link>
          <Link href={"/"}>
            <Image
              src={google}
              alt={"download from google play store"}
              className="md:w-40 w-20"
            />
          </Link>
        </div>
        <div className="flex items-center space-x-1 font-montserrat">
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
        <div className="grid grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <div className="space-y-5">
              <div className="flex justify-end">
                <div className="bg-[#2B4E8C] w-[70%] py-6 rounded-xl text-center font-raleway">
                  <p className="text-white text-2xl font-bold leading-snug">
                    +1500 <br /> Helpers
                  </p>
                </div>
              </div>
              <div className="h-64 overflow-hidden overflow-y-scroll rounded-xl bg-[#F0F4FF] p-5 space-y-3">
                {helpers.map((helper) => (
                  <div className="flex items-center space-x-2">
                    <Image
                      src={helper.img}
                      alt={`Math.random()*5000`}
                      className="h-20 w-24 rounded-3xl object-cover"
                    />
                    <div className="font-montserrat text-sm text-gray-600">
                      <h3 className="font-bold text-xl text-black">
                        {helper.name}
                      </h3>
                      <p className="">{helper.role}</p>
                      <p className="flex space-x-3">
                        <span>{helper.date}</span>
                        <span>{helper.time}</span>
                      </p>
                      <p>{helper.rate}</p>
                    </div>
                    <button className="flex space-x-2 bg-black text-white px-2 py-1 items-center font-montserrat rounded-xl text-sm">
                      <i className="fa-solid fa-timer"></i>
                      <span>Reschedule</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <Image
              src={heroImg}
              alt={"hero-img"}
              className="rounded-xl h-96 object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
