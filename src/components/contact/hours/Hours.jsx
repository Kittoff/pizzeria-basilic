import React from "react";
import styles from "./style.module.scss";
import { inter } from "@/src/utils/font.jsx";

const Hours = () => {
  return (
    <div className="flex flex-col items-center h-[10.438rem] w-[10.438rem] bg-bg">
      <h2
        className={`${inter.className} xs:text-[1.875rem] text-primary font-bold`}
      >
        Horraires
      </h2>
      <div className="xs:text-[1.125rem]">
        <div className="text-center">
          <div className="xs:text-[1.25rem]">Lundi au Vendredi</div>
          <div className="xs:text-[1.25rem]">
            <div>11h45 - 14h</div>
            <div>18h30 - 21h30</div>
          </div>
        </div>
      </div>
      <div className="xs:text-[0.75rem] text-primary font-bold">
        Fermé samedi et dimanche
      </div>
    </div>
  );
};

export default Hours;
