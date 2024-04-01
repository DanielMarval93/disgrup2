import React from "react";
//import {
//  FacebookShareButton,
//  LinkedinShareButton,
//  TelegramShareButton,
//  TwitterShareButton,
//  WhatsappShareButton,
//} from "react-share";

const SocialFour = () => {
  return (
    <>
      {/* <!--Social Icon--> */}
      <a
        className="ptf-social-icon ptf-social-icon--style-4 whatsapp"
        href="/"
        target="_blank"
      >
        <i className="socicon-whatsapp"></i>
      </a>
            {/* <!--Social Icon--> */}
            <a
        className="ptf-social-icon ptf-social-icon--style-4 telegram"
        href="/"
        target="_blank"
      >
        <i className="socicon-telegram"></i>
      </a>
      {/* <!--Social Icon--> */}
      <a
        className="ptf-social-icon ptf-social-icon--style-4 facebook"
        href="/"
        target="_blank"
      >
        <i className="socicon-facebook"></i>
      </a>
      {/* <!--Social Icon--> */}
      <a
        className="ptf-social-icon ptf-social-icon--style-4 twitter"
        href="/"
        target="_blank"
      >
        <i className="socicon-twitter"></i>
      </a>
    
      {/* <!--Social Icon--> */}
      <a
        className="ptf-social-icon ptf-social-icon--style-4 linkedin"
        href="/"
        target="_blank"
      >
        <i className="socicon-linkedin"></i>
      </a>
    </>
  );
};

export default SocialFour;
