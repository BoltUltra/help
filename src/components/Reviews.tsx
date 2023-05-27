"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { AiFillStar } from "react-icons/ai";
import { betsy, ray, seema, soowon, tracy } from "../../public";
import Image from "next/image";
import { SectionHeading } from "@/components/index";

const Reviews: React.FC = () => {
  const testimonials: any[] = [
    {
      img: soowon,
      name: "Soowon E.",
      date: "April 8, 2023",
      feedback:
        "Angel was the best handyman I've ever hired. He was proactive, positive, efficient and truly wanted to help with everything we needed. He's an expert that you can trust in any handman task. I'd definitely hire him again.",
    },
    {
      img: betsy,
      name: "Betsy T.",
      date: "April 1, 2022",
      feedback:
        "Punctual, great communication, great work. I look forward to working with Thomas again!",
    },
    {
      img: ray,
      name: "Ray E.",
      date: "April 1, 2022",
      feedback:
        "Great cleaning! Reliable and was able to accommodate my schedule. Would recommend - thanks Nikolina!",
    },
    {
      img: seema,
      name: "Seema H.",
      date: "April 1, 2022",
      feedback:
        "Irina’s work was excellent and our home was left spotless. Great communication throughout. Highly recommended.",
    },
    {
      img: tracy,
      name: "Tracy M.",
      date: "April 7, 2023",
      feedback:
        "Irina’s work was excellent and our home was left spotless. Great communication throughout. Highly recommended.",
    },
  ];
  return (
    <section className="section-spacing2">
      <SectionHeading subHeading={"Reviews"} heading={"Feedback from you"} />
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
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
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
          modules={[Pagination]}
          className="mySwiper font-montserrat py-10"
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.requests} className="border">
              <SwiperSlide className="font-montserrat md:p-5 p-5 shadow-xl rounded-3xl md:h-96 h-80 flex flex-col justify-between">
                <div className="">
                  <div className="flex flex-col justify-center items-center">
                    <Image
                      src={testimonial.img}
                      alt={testimonial.feedback}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <h4 className="font-montserrat font-semibold text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="flex space-x-1">
                      <AiFillStar className="text-yellow-400" />
                      <AiFillStar className="text-yellow-400" />
                      <AiFillStar className="text-yellow-400" />
                      <AiFillStar className="text-yellow-400" />
                      <AiFillStar className="text-yellow-400" />
                    </p>
                  </div>
                  <div className="py-5">
                    <p className="text-sm">
                      &quot;{testimonial.feedback}&quot;
                    </p>
                  </div>
                </div>
                <p className="text-right text-sm font-semibold">
                  {testimonial.date}
                </p>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
