import Image from "next/image.js";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" text-bg mt-20 bg-primary w-full h-12 text-[12px] font-bold">
      <div className="h-12 flex justify-around items-center">
        <div>Pizzeria Basilic</div>
        <a target="_blank" href="http://www.youtube.com">
          <Image src="/logo.png" width={40} height={40} alt="logo" />
        </a>
        <div className="flex">
          <div className="flex items-center">
            <FaFacebook /> Partager
          </div>
          <div className="flex items-center pl-3">
            <FaSquareXTwitter /> Post
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;