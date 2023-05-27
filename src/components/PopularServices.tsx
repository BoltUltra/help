"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  cleaning,
  electrical,
  helpMoving,
  homeRepairs,
  mounting,
  plumbing,
  yardWork,
} from "../../public";
import Image from "next/image";
import { SectionHeading } from "@/components/index";

const PopularServices: React.FC = () => {
  const services: any[] = [
    {
      img: cleaning,
      service: "Cleaning",
      requests: 500,
    },
    {
      img: helpMoving,
      service: "Help Moving",
      requests: 450,
    },
    {
      img: yardWork,
      service: "Yard Work",
      requests: 400,
    },
    {
      img: plumbing,
      service: "Plumbing Help",
      requests: 500,
    },
    {
      img: mounting,
      service: "Mounting",
      requests: 400,
    },
    {
      img: homeRepairs,
      service: "Home Repairs",
      requests: 300,
    },
    {
      img: electrical,
      service: "Electrical Help",
      requests: 350,
    },
  ];
  return (
    <section className="section-spacing2 text-center">
      <SectionHeading heading={"Popular Services"} subHeading={"Popular"} />
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
          }}
          className="mySwiper font-montserrat"
        >
          {services.map((service) => (
            <div key={service.requests}>
              <SwiperSlide className="">
                <Image
                  src={service.img}
                  alt={service.service}
                  className="h-64 object-cover rounded-xl"
                />
                <div className="mt-3 space-y-1">
                  <p className="font-semibold text-lg">{service.service}</p>
                  <p className="text-sm">+{service.requests} requests</p>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularServices;
