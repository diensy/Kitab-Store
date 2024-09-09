import React, { useEffect, useState } from "react";

import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res= await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchBook();
  }, []);
  return (
    <>
      <div className="">
        <div className=" justify-center items-center text-center">
          <h1 className="text-2xl mt-16 pt-16 text-center font-semibold md:text-4xl ">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Books are important for the mind, heart, and soul. But don't take it
            from us: These quotes about reading speak for themselves.The power
            to be found between the pages of a book is formidable, indeed. And
            these 80 inspiring quotes about books and importance of reading are
            here to remind you of that. From beloved bestsellers to iconic
            celebrities, these quotes exemplify the benefits of reading and of a
            good books to comfort, challenge, and inspire you. For, as author
            Anna Quindlen says, "Books are the plane, and the train, and the
            road. They are the destination, and the journey. They are home."
          </p>
          <Link to="/">
            <button className="text-white bg-pink-500 mt-10 px-3 py-2 rounded-md hover:bg-pink-700 duration-300 ">
              Back
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-8 p-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
