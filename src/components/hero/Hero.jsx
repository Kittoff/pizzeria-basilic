import React from "react";
import Image from "next/image.js";
import { FaAnglesDown } from "react-icons/fa6";

const Hero = () => {
  return (
    <main
      className={` min-h-[80vh] flex flex-col items-center justify-center `}
    >
      <div className={` lg:pt-[70px] flex flex-col items-center lg:flex-row`}>
        <div className="lg:w-60% flex flex-col items-center lg:items-start lg:justify-center lg:flex-row">
          <div className=" lg:-mr-[300px] xl:-mr-[400px] 2xl-mt-[20px]">
            <h1 className="lg:w-full text-[38px] font-bold  xl:w-[80%] lg:text-[66px]  sm:text-[50px]">
              A chaque bouchée, un peu d’
              <span className="text-primary">Italie!</span>
            </h1>
            <p
              className={` mt-11 text-[0.75rem] lg:w-[70%] xl:w-[70%] lg:text-[21px] sm:text-[15px] lg:text-left `}
            >
              Nos pizzas vous invitent à une expérience chaleureuse et
              délicieuse. Elles vous enveloppent de saveurs authentiques, vous
              transportant instantanément en Italie.
            </p>
          </div>

          <div className="lg:w-40%">
            <div className="w-[335px] h-[160px]  lg:w-[448px] lg:mt-[70px] xl:mt-[50px] lg:-right-[66px] lg:top-[174px] xl:w-[600px]">
              <Image
                className="mt-[50px]"
                alt="hero section pizza image"
                src="/pizza2.png"
                width={848}
                height={31}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mt-[50px]">
        <FaAnglesDown size={40} className="mt-[21px]" />
      </div>
    </main>
  );
};

export default Hero;
