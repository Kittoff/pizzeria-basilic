import React from "react";

const Maps = () => {
  return (
    <div className="bg-iframe-loader">
      <iframe
        className=" h-[334px] w-[334px] sm:w-full 2xl:w-[420px] 2xl:h-[308px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2835.6029916892744!2d-0.4042339241032739!3d44.707303783621235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd553d8fa3a9687f%3A0x297ac6b8e3ebf35!2s29%20Av.%20du%20G%C3%A9n%C3%A9ral%20de%20Gaulle%2C%2033550%20Langoiran!5e0!3m2!1sfr!2sfr!4v1712307620147!5m2!1sfr!2sfr"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Maps;
