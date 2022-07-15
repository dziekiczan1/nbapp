import React, { useState } from "react";

const FORM_ENDPOINT = process.env.REACT_APP_KEY_FORM_ENDPOINT;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className="flex flex-row">
      <div className="w-1/2 shadow-md bg-[#FEFBE7] my-4 mx-8">
        <form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d461137.3939038397!2d-74.19312494690939!3d40.598035284961725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatua%20Wolno%C5%9Bci!5e0!3m2!1spl!2spl!4v1657920334438!5m2!1spl!2spl"
          style={{ height: "450px", width: "100%" }}
          allowFullScreen=""
          loading="lazy"
          title="Contact Us"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
