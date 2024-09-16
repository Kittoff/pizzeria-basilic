import React from "react";

const Reviews = ({ name, date, title, testimonial }) => {
  return (
    <div className="flex flex-col rounded-xl justify-center text-bg items-center bg-customWhite ">
      <div className=" select-none flex flex-col gap-2 min-h-40 max-w-md w-full bg-customWhite p-3 pt-0 rounded-md mt-8 shadow-md ">
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row justify-between w-full ">
            <p className="text-xs">{name}</p>
            <p className="text-xs italic">{date}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full ">
          <h3 className="text-xl font-bold">{title}</h3>
        </div>

        <div className="text-sm">{testimonial}</div>
      </div>
    </div>
  );
};

export default Reviews;
