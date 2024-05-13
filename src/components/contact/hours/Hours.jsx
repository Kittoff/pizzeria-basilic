import React from "react";

const Hours = () => {
  return (
    <div className="flex flex-col items-center h-[10.438rem] w-[10.438rem] bg-bg sm:w-1/2 2xl:h-[308px] 2xl:w-[420px]">
      <h2
        className={` text-[1.875rem] text-primary font-bold 2xl:text-[3.75rem]`}
      >
        Horaires
      </h2>
      <div className="text-[1.125rem]">
        <div className="text-center">
          <div className="text-[1.25rem] 2xl:text-[2.25rem]">
            Lundi au Vendredi
          </div>
          <div className="text-[1.25rem] 2xl:text-[2.25rem]">
            <div>11h45 - 14h</div>
            <div>18h30 - 21h30</div>
          </div>
        </div>
      </div>
      <div className="text-2xl text-primary font-bold">
        Fermé samedi et dimanche
      </div>
    </div>
  );
};

export default Hours;
