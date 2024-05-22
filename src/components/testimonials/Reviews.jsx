import React from "react";

const Reviews = ({ name, date, title, testimonial }) => {
  return (
    <div>
      <body class="flex flex-col justify-center text-bg items-center bg-customWhite ">
        <div class=" select-none flex flex-col gap-2 min-h-40 max-w-md w-full bg-customWhite  p-3 rounded-md mt-8 shadow-md ">
          <div class="flex flex-row justify-between w-full">
            <div class="flex flex-row justify-between w-full">
              <p class="text-xs">{name}</p>
              <p class="text-xs italic">{date}</p>
            </div>
          </div>
          <div class="flex flex-row justify-between w-full ">
            <h3 class="text-xl font-bold">{title}</h3>
          </div>

          <div class="text-sm">{testimonial}</div>
        </div>
      </body>
    </div>
  );
};

export default Reviews;
