import React from "react";
import Image from "next/image.js";
import { FaAnglesDown } from "react-icons/fa6";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main className={`min-h-[80vh] flex flex-col items-center justify-center`}>
      <div className={`pt-[20%] flex flex-col items-center lg:flex-row`}>
        <div className="lg:w-60% flex flex-col items-center lg:items-start lg:justify-center lg:flex-row">
          <div className="lg:-mr-[300px] xl:-mr-[400px] 2xl-mt-[20px]">
            <h1 className="lg:w-full text-[38px] font-bold xl:w-[45vw] 2xl:bg-green-600 2xl:w-[50vw] xl:bg-red-700 2xl:text-[110px] lg:text-[66px] sm:text-[50px]">
              A chaque bouchée, un peu d’
              <span className="text-primary">Italie!</span>
            </h1>
            <p
              className={`mt-11 text-[0.75rem] lg:w-[70%] 2xl:w-[70%] lg:text-[21px] sm:text-[15px] lg:text-left 2xl:text-[30px]`}
            >
              Nos pizzas vous invitent à une expérience chaleureuse et
              délicieuse. Elles vous enveloppent de saveurs authentiques, vous
              transportant instantanément en Italie.
            </p>
          </div>

          <div className="lg:w-40%">
            <div className="w-[335px] h-[160px] lg:w-[448px] lg:mt-[70px] 2xl:mt-[120px] 2xl:ml-[100px] lg:-right-[66px] lg:top-[174px] 2xl:w-[800px]">
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
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -20 }} // Move up by 20 pixels
        transition={{
          duration: 1,
          repeat: Infinity, // Repeat indefinitely
          repeatType: "reverse", // Reverse the animation back down
        }}
        className="lg:mt-[50px]"
      >
        <FaAnglesDown size={40} className="mt-[calc(100%+2rem)] mb-[180px]" />
      </motion.div>
    </main>
  );
};

export default Hero;
