"use client";
import React from "react";
import { SectionHeading } from "@/components/index";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const Faq: React.FC = () => {
  const faqs: any[] = [
    {
      question: "What do you need to become a HelpInc?",
      answer:
        "Once you complete registration steps including creating your Tasker profile, make sure you draw your work area map and set schedule availability to show up in Client search results. If you don’t get task invitations, consider adjusting your rates, your work area, adding availability and additional categories, and editing your profile information to make sure it’s clear to Clients which services you offer.",
    },
    {
      question: "How do I get a job?",
      answer:
        "Once you complete registration steps including creating your Tasker profile, make sure you draw your work area map and set schedule availability to show up in Client search results. If you don’t get task invitations, consider adjusting your rates, your work area, adding availability and additional categories, and editing your profile information to make sure it’s clear to Clients which services you offer.",
    },
    {
      question: "Do I need experience for the task?",
      answer:
        "Once you complete registration steps including creating your Tasker profile, make sure you draw your work area map and set schedule availability to show up in Client search results. If you don’t get task invitations, consider adjusting your rates, your work area, adding availability and additional categories, and editing your profile information to make sure it’s clear to Clients which services you offer.",
    },
    {
      question: "How long does it take to process my registration?",
      answer:
        "Once you complete registration steps including creating your Tasker profile, make sure you draw your work area map and set schedule availability to show up in Client search results. If you don’t get task invitations, consider adjusting your rates, your work area, adding availability and additional categories, and editing your profile information to make sure it’s clear to Clients which services you offer.",
    },
    {
      question: "How will I get the money?",
      answer:
        "Once you complete registration steps including creating your Tasker profile, make sure you draw your work area map and set schedule availability to show up in Client search results. If you don’t get task invitations, consider adjusting your rates, your work area, adding availability and additional categories, and editing your profile information to make sure it’s clear to Clients which services you offer.",
    },
    {
      question: "What categories of tasks can I perform on TaskRabbit?",
      answer:
        "Once you complete registration steps including creating your Tasker profile, make sure you draw your work area map and set schedule availability to show up in Client search results. If you don’t get task invitations, consider adjusting your rates, your work area, adding availability and additional categories, and editing your profile information to make sure it’s clear to Clients which services you offer.",
    },
  ];
  return (
    <section className="section-spacing2 lg:mx-32">
      <SectionHeading
        subHeading={"Question"}
        heading={"Frequently Asked Questions"}
      />
      <div>
        <div className="grid md:grid-cols-2 md:gap-x-10 md:gap-y-5 gap-5">
          {faqs.map((faq, index) => (
            <div key={faq.question}>
              <div>
                <div className="shadow p-3 rounded-xl">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="py-2 flex w-full items-center justify-between text-left">
                          <span>{faq.question}</span>
                          <ChevronRightIcon
                            className={`${
                              open ? "rotate-90 transform" : ""
                            } w-5`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500 text-center text-sm px-4 py-2">
                          {faq.answer}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
