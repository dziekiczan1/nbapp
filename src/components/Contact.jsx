import React, { useState } from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
} from "react-icons/ai";

const FORM_ENDPOINT = process.env.REACT_APP_KEY_FORM_ENDPOINT;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  return (
    <div className="flex flex-row">
      <div className="w-1/2 py-4 px-8">
        {submitted ? (
          <div className="flex flex-col justify-center items-center">
            <p className="text-2xl">Thank you!</p>
            <p className="text-md mb-4">We'll be in touch soon.</p>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <p className="text-5xl font-bold mb-4 text-[#d13c1b]">
              Contact Us!
            </p>
            <p className="text-center text-lg mb-8">
              If you have any questions or queries a member of staff will always
              be happy to help. Feel free to contact us by telephone or email
              and we will be sure to get back to you as soon as possible.
            </p>
          </div>
        )}
        <form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
          className="shadow-md bg-[#FEFBE7] py-4 px-8 h-96"
        >
          <div className="m-3">
            <input
              type="text"
              placeholder="Your name"
              name="name"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring ring-[#fdf6c7] w-full"
              required
            />
          </div>
          <div className="m-3">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring ring-[#fdf6c7] w-full"
              required
            />
          </div>
          <div className="m-3">
            <textarea
              placeholder="Your message"
              name="message"
              rows="4"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring ring-[#fdf6c7] w-full"
              required
            />
          </div>
          <div className="m-3 flex justify-center items-center">
            <button
              className="bg-[#F9EBC8] text-[#d13c1b] active:bg-[#fdf6c7] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:bg-[#fdf6c7] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Send a message
            </button>
          </div>
        </form>
      </div>
      <div className="w-1/2  py-4 px-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.814214988353!2d21.038355615946145!3d52.26491866285378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc3cd0f071f3%3A0x5cdc9811aece7688!2sKamienna%201%2C%2003-441%20Warszawa!5e0!3m2!1spl!2spl!4v1657982505704!5m2!1spl!2spl"
          style={{ height: "450px", width: "100%" }}
          allowFullScreen=""
          loading="lazy"
          title="Contact Us"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="flex flex-col mt-8">
          <div className="flex flex-row items-center mb-4">
            <div className="shadow-md bg-[#FEFBE7] p-2">
              <AiOutlineEnvironment className="text-4xl text-[#d13c1b]" />
            </div>
            <span className="ml-2 text-xl">
              Piotr Rzadkowolski <br />
              ul. Kamienna 1, 03-441 Warszawa
            </span>
          </div>
          <div className="flex flex-row items-center mb-4">
            <div className="shadow-md bg-[#FEFBE7] p-2">
              <AiOutlineMail className="text-4xl text-[#d13c1b]" />
            </div>
            <span className="ml-2 text-xl">
              <a href="mailto:bordini.smash@gmail.com">
                bordini.smash@gmail.com
              </a>
            </span>
          </div>
          <div className="flex flex-row items-center mb-4">
            <div className="shadow-md bg-[#FEFBE7] p-2">
              <AiOutlinePhone className="text-4xl text-[#d13c1b]" />
            </div>
            <span className="ml-2 text-xl">+48 (505) 933-394</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
