import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="justify-center items-center text-center min-h-screen dark:text-white mt-18 pt-20 ">
        <div className="flex flex-col items-start justify-start gap-y-6">
          <h1 className="text-xl font-semibold mt-20 ml-10">
            THE UNFOLDING TALE OF KITAB.COM: WHERE EVERY PAGE IS A NEW
            ADVENTURE!
          </h1>
          <p className="text-start ml-10 text-lg">
            Picture this: A world where every book is a treasure waiting to be
            discovered, where literary wonders abound, and where the thrill of
            reading knows no bounds. That's the magic we're conjuring at
            Kitabay.com! It all began with a simple yet daring dream: to
            transform the way you experience the joy of reading. Armed with
            enthusiasm and fueled by caffeine (because let's face it, coffee and
            books are a match made in heaven), we set out on a wild journey to
            curate the quirkiest, most delightful collection of books you've
            ever laid eyes on.
          </p>
          <h1 className="text-xl font-semibold mt-20 ml-10">
            THE MYSTERY UNFOLDS
          </h1>
          <p className="text-start ml-10 text-lg">
            But hold onto your bookmarks, folks, because we're about to drop the
            bombshell of bookish excitement: the Kitabay.com Mystery Box!
            Picture this: a box filled with literary surprises, a treasure trove
            of books handpicked just for you. It's like Christmas morning, but
            better (because who needs socks when you can have books?). And guess
            what? We're not stopping there! We've organized big scale books
            events in Jaipur and Bangalore featuring our very own Mystery box
            concept, where you can fill your box with whichever book you desire
            out of thousands! Our events have always been well received with
            love and we plan to do a lot more of these the in the future.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
