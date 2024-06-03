import React, { useEffect, useState } from "react";
import Image from "next/image.js";
import { FiPhoneCall } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { IoIosPin } from "react-icons/io";
import { useRouter } from "next/router";

const Contacts = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  const [addressIndex, setAddressIndex] = useState(10);

  useEffect(() => {
    if (currentPath !== "/contact") {
      setAddressIndex(0);
    }
  }, [currentPath]);
  const openGoogleMaps = () => {
    const address = "29 AVENUE DU GENERAL DE GAULLE 33550 LANGOIRAN";
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      address
    )}`;
    window.open(googleMapsUrl, "_blank");
  };

  // Données des contacts
  const contactsData = [
    {
      iconSrc: FiPhoneCall,
      altText: "phone icon",
      text: "05 57 54 57 17",
      textSize: "text-12 sm:text-xl  md:text-xl lg:text-[30px]",
      link: "tel:0557545717",
      className: "h-[20px] w-[20px]",
    },
    {
      iconSrc: MdAlternateEmail,
      altText: "arobase icon",
      text: "basilic.pizza@gmail.com",
      textSize: "text-[0.7rem] sm:text-xl  lg:text-[30px] md:text-xl",
      link: "mailto:basilic.pizza@gmail.com",
      className: "h-[20px] w-[20px]",
    },
    {
      iconSrc: IoIosPin,
      altText: "pin location icon",
      text: "29 AVENUE DU GENERAL DE GAULLE 33550 LANGOIRAN",
      textSize: "text-[0.6rem] sm:text-[15px] 2xl:text-[22px]",
      onClick: openGoogleMaps,
      className: `h-[40px] w-[40px]`,
    },
  ];

  return (
    <div className="bg-primary w-[10.438rem] h-[10.438rem] flex flex-col items-center text-bg sm:w-1/2 2xl:h-[308px] 2xl:w-[420px]">
      <h2 className="text-[1.875rem] font-bold 2xl:text-[3.75rem]">Contacts</h2>
      <div className="flex flex-col justify-between pb-2 h-full pl-2 items-start">
        {contactsData.map((contact, index) => (
          <div
            key={index}
            className={`flex items-center mb-2 cursor-pointer underline  z-${addressIndex}`}
            onClick={contact.onClick ? contact.onClick : null}
          >
            {typeof contact.iconSrc === "function" ? (
              <contact.iconSrc
                className={`${contact.className} 2xl:h-[40px] 2xl:w-[40px] `}
              />
            ) : (
              <Image
                className={`${contact.className} mr-1`}
                alt={contact.altText}
                src={contact.iconSrc}
                width={20}
                height={20}
              />
            )}
            {contact.link ? (
              <a href={contact.link} className={`ml-2 ${contact.textSize}`}>
                {contact.text}
              </a>
            ) : (
              <span
                className={`ml-2 ${contact.textSize}`}
                onClick={contact.onClick ? contact.onClick : null}
              >
                {contact.text}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
