import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-6 my-3 p-3">
        <div className="card bg-base-100 dark:bg-slate-950 dark:text-white w-4/5 shadow-xl hover:scale-105 duration-300">
          <figure>
            <img
              className="rounded-md w-80 h-96"
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.Author}</p>
            <p>{item.title}</p>
            <div className="card-actions  justify-between">
              <div className="badge badge-outline cursor-pointer">
                Rs. {item.price}
              </div>
              <div className="px-1 text-sm rounded-full border-[2px] cursor-pointer hover:bg-pink-500 duration-300 hover:text-white">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
