"use client";
import  BorderBeam from "./magicui/border-beam";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import AnimatedGridPattern from "./magicui/animated-grid-pattern";
import { cn } from "../../lib/utils";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_04ltas4',
        'template_m1i488h',
        {
          from_name: form.name,
          to_name: "Khubaib",
          from_email: form.email,
          to_email: "khubaibwasim75@gmail.com",
          message: form.message,
        },
        '200yNFK481lymDH3s'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="flex justify-center items-center mb-10 px-4 sm:px-6 lg:px-8">
      <div
        className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden border border-white rounded-md"
      >
        <motion.div
          className="flex-1 bg-black p-8 lg:w-[60rem] md:w-[48rem] rounded-md w-full max-w-3xl mx-auto shadow-lg shadow-black"
        >
          <p className="sm:text-[18px] text-[14px] text-gray-300 uppercase tracking-wider">
            Get in touch
          </p>
          <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Contact.
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-black placeholder:dark:text-white text-black dark:text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 placeholder:text-black placeholder:dark:text-white text-black dark:text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-black placeholder:dark:text-white text-black dark:text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold border border-white"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
         
        </motion.div>
      </div>
          {/* <BorderBeam size={250} duration={12} delay={9} />
        <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.5}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )} */}
      {/* /> */}
    </section>
  );
};

export default Contact;
