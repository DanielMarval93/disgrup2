import React from "react";

const socialList = [
  {
    iconName: "socicon-whatsapp",
    link: "https://wa.me/34622063782?text=Hola!%20estaria%20interesado%20en%20un%20proyecto%20con%20ustedes",
    iconClass: "whatsapp",
  },
  {
    iconName: "socicon-instagram",
    link: "https://www.instagram.com/icymediagency",
    iconClass: "instagram",
  },
  {
    iconName: "socicon-linkedin",
    link: "https://www.linkedin.com/",
    iconClass: "linkedin",
  },
];

const SocialThree = () => {
  return (
    <>
      {socialList.map((val, i) => (
        <a
          className="ptf-social-icon ptf-social-icon--style-1"
          target="_blank"
          rel="noopener noreferrer"
          href={val.link}
          key={i}
        >
          <i className={val.iconName}></i>
        </a>
      ))}
      {/* <!--Social Icon--> */}
    </>
  );
};

export default SocialThree;
