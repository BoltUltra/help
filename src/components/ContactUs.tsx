import React from "react";
import { SectionHeading } from "@/components/index";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { TbMessageCircle2 } from "react-icons/tb";
import Image from "next/image";
import { contact } from "../../public";
import { BsTelephone } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

const ContactUs: React.FC = () => {
  return (
    <section className="section-spacing2 lg:mx-32">
      <SectionHeading subHeading={"Contacts"} heading={"Contact Us"} />

      <div className="md:px-10 sm:px-3 py-10 rounded-xl shadow-lg">
        <div className="grid lg:grid-cols-2 gap-10 lg:px-0 md:px-5 px-3">
          <div>
            <div className="relative">
              <div className="absolute left-[20%] top-[25%] w-[70%] mx-auto h-[70%] bg-primary rounded-full"></div>
              <Image
                src={contact}
                alt={"Contact Image"}
                className="mx-auto grayscale"
              />
            </div>
            <div className="flex md:flex-row flex-col items-center md:justify-around font-montserrat pt-5 md:space-y-0 space-y-3">
              <div className="flex space-x-2">
                <BsTelephone className="text-2xl" />
                <p className="flex flex-col">
                  <span className="font-bold">Call us</span>
                  <span className="text-sm text-gray-600">
                    +251-965-990-000
                  </span>
                </p>
              </div>
              <div className="flex space-x-2">
                <MdAlternateEmail className="text-2xl" />
                <p className="flex flex-col">
                  <span className="font-bold">Our email</span>
                  <span className="text-sm text-gray-600">
                    @helpyou@gmail.com
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <form className="font-montserrat space-y-5">
              <div className="flex items-center space-x-3 px-5 py-3 rounded-3xl text-gray-500 shadow-xl">
                <div>
                  <AiOutlineUser className="text-2xl" />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    className="background-transparent w-full focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-3 px-5 py-3 rounded-3xl text-gray-500 shadow-xl">
                <div>
                  <AiOutlineMail className="text-2xl" />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Your Subject"
                    className="background-transparent w-full focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex start space-x-3 px-5 py-3 rounded-3xl text-gray-500 shadow-xl">
                <div>
                  <TbMessageCircle2 className="text-2xl" />
                </div>
                <div className="w-full">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    rows={9}
                    className="background-transparent w-full focus:outline-none"
                  ></textarea>
                </div>
              </div>
              <button className="bg-primary text-white py-3 rounded-3xl w-full">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
