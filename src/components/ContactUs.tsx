import React from "react";
import { SectionHeading } from "@/components/index";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { TbMessageCircle2 } from "react-icons/tb";

const ContactUs: React.FC = () => {
  return (
    <section className="section-spacing2 md:mx-32">
      <SectionHeading subHeading={"Contacts"} heading={"Contact Us"} />

      <div className="md:px-3 px-10 rounded-xl shadow">
        <div className="grid md:grid-cols-2 md:gap-10 gap-5">
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
