import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Contact = () => {
  return (
    <>
      <Navbar />
      <div className=" justify-center items-center text-center min-h-screen dark:text-white mt-18 pt-16">
        <div className="flex justify-center flex-col gap-y-4 mt-20">
          <h1 className="text-2xl font-bold">Get in touch</h1>
          <p className="text-xl font-medium">
            We love to hear all the positives, but more importantly all the
            critical feedback that helps us improve & grow.
          </p>
          <h2 className="text-2xl font-bold">REACH US HERE</h2>
          <p className="text-lg font-medium">support@kitab.com</p>

          <textarea
            className="text-black mx-32 rounded-md px-5 py-3 border"
            rows={5}
            placeholder="Ask Any question"
          />
        </div>
        <button className=" mt-10 text-white bg-rose-700 px-3 py-2 border-none rounded-md cursor-pointer hover:bg-rose-500 duration-300">
          Submit
        </button>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
