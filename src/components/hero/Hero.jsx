import { inter, poppins, urbanist } from "../../utils/font.jsx";
import React from "react";
import Image from "next/image.js";
import { useUrlChange } from "@/src/utils/sectionTitle/useUrlChange.jsx";

const Hero = () => {
  const urlChanged = useUrlChange();
  return (
    <main
      className={`${urbanist.className} min-h-[75vh] flex flex-col items-center  `}
    >
      <div
        className={`pt-[154px] 2xl:pt-[70px] flex flex-col items-center lg:flex-row `}
      >
        <div className="lg:w-60% flex flex-col items-center lg:items-start lg:justify-center 2xl:flex-row">
          <div className=" 2xl:-mr-[300px] 2xl-mt-[20px]">
            <h1 className="2xl:w-full text-[38px] font-bold lg:bg-blue-400 xl:bg-slate-500 xl:w-[63%] 2xl:text-[66px] 2xl:bg-lime-300 md:bg-red-500 sm:text-[50px]">
              A chaque bouchée, un peu d’
              <span className="text-primary">Italie!</span>
            </h1>
            <p
              className={`${poppins.className} mt-11 text-[0.75rem] 2xl:w-[70%] 2xl:text-[21px] sm:text-[15px] lg:text-left `}
            >
              Nos pizzas vous invitent à une expérience chaleureuse et
              délicieuse. Elles vous enveloppent de saveurs authentiques, vous
              transportant instantanément en Italie.
            </p>
          </div>

          <div className="lg:w-40%">
            <div className="w-[335px] h-[160px]  2xl:w-[748px]  2xl:-right-[66px] 2xl:top-[174px]">
              <Image
                className="mt-[50px]"
                alt="hero section pizza image"
                src="/pizza.png"
                width={848}
                height={31}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="2xl:mt-[50px]">
        <Image
          alt=" icon scroll"
          className="mt-[21px]"
          src="/icon-scroll.png"
          width={25}
          height={25}
        />
      </div>
    </main>
  );
};

export default Hero;
