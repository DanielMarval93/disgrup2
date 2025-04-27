import React from "react";

const SocialShare = [
  {
    iconName: "socicon-youtube",
    link: "https://www.youtube.com/channel/UCT27QafVVL5BLAo9O_QBEcA",
    iconClass: "youtube",
  },
 
  {
    iconName: "socicon-facebook",
    link: "https://www.facebook.com/FundacionDisgrup",
    iconClass: "facebook",
  },
  {
    iconName: "socicon-instagram",
    link: "https://www.instagram.com/fundaciondisgrup/",
    iconClass: "instagram",
  },

];
const Social = () => {
  return (
    <div className="ptf-offcanvas-menu__socials">
      {/* <!--Social Icon--> */}
      {SocialShare.map((icon, i) => (
        <a
          className={`ptf-social-icon ptf-social-icon--style-3  ${icon.iconClass}`}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          key={i}
        >
          <i className={icon.iconName}></i>
        </a>
      ))}
    </div>
  );
};

export default Social;
