import React from "react";
import banner from "../../public/Banner.jpg";
const Banner = () => {
  return (
    <>
      <div className="  flex flex-col md:flex-row max-w-screen-2xl container mx-auto my-12 md:px-20 px-4">
        <div className="mt-20 md:mt-28 w-full md:w-1/2 order-2 md:order-1">
          <p className="font-bold text-4xl leading-tight">
            Hello, Welcomes have to learn something{" "}
            <span className="text-pink-500 font-semibold ">
              new everyday!!!
            </span>
          </p>
          <p className="mt-14 text-xl">
            When I look back, I am so impressed again with the life-giving power
            of literature. If I were a young person today, trying to gain a
            sense of myself in the world, I would do that again by reading, just
            as I did when I was young.
          </p>
          <div className="mt-6">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Enter your Email "
              />
            </label>
            <button className="btn btn-active btn-secondary mt-4  hover:bg-pink-400 duration-500">
              Submit
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 order-1">
          <img src={banner} className="w-92 h-92 mt-4 mx-1 rounded-md" alt="Books" />
        </div>
      </div>
    </>
  );
};

export default Banner;
