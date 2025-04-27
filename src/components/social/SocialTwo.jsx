import React from "react";

const socialList = [
  {
    iconName: "socicon-facebook",
    link: "https://www.facebook.com/FundacionDisgrup",
    iconClass: "facebook",
  },

  {
    iconName: "socicon-youtube",
    link: "https://www.youtube.com/channel/UCT27QafVVL5BLAo9O_QBEcA",
    iconClass: "youtube",
  },
  {
    iconName: "socicon-instagram",
    link: "https://www.instagram.com/fundaciondisgrup/",
    iconClass: "instagram",
  },
];

const SocialTwo = () => {
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
    </>
  );
};

export default SocialTwo;
