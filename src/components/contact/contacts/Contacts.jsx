import React from "react";
import { inter } from "@/src/utils/font.jsx";
import Image from "next/image.js";
import { useUrlChange } from "@/src/utils/sectionTitle/useUrlChange.jsx";

const Contacts = () => {
  const urlChanged = useUrlChange();

  // Données des contacts
  const contactsData = [
    {
      iconSrc: "/phone.png",
      altText: "phone icon",
      text: "05 57 54 57 17",
      textSize: "text-12 sm:text-xl",
    },
    {
      iconSrc: "/mail.png",
      altText: "arobase icon",
      text: "basilic.pizza@gmail.com",
      textSize: "text-[0.7rem] sm:text-xl",
      link: "mailto:basilic.pizza@gmail.com",
    },
    {
      iconSrc: "/pin.png",
      altText: "pin location icon",
      text: "29 AVENUE DU GENERAL DE GAULLE 33550 LANGOIRAN",
      textSize: "text-[0.6rem] sm:text-[15px]",
    },
  ];

  return (
    <div className="bg-primary w-[10.438rem] h-[10.438rem] flex flex-col items-center text-bg sm:w-1/2">
      <h2 className={`${inter.className} text-[1.875rem] font-bold`}>
        Contacts
      </h2>
      <div className="flex flex-col justify-between pb-2 h-full pl-2 items-start">
        {contactsData.map((contact, index) => (
          <div key={index} className="flex items-center mb-2">
            <div className="relative h-[15px] w-[15px] sm:h-[30px] sm:w-[30px] flex-shrink-0">
              <Image
                className={`mr-1 ${urlChanged && "-z-50"}`}
                alt={contact.altText}
                src={contact.iconSrc}
                layout="fill"
                objectFit="cover"
              />
            </div>
            {contact.link ? (
              <a href={contact.link} className={`ml-2 ${contact.textSize}`}>
                {contact.text}
              </a>
            ) : (
              <span className={`ml-2 ${contact.textSize}`}>{contact.text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
