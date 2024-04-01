import React from "react";
import SocialTwo from "../../social/SocialTwo";

const logo = "assets/img/root/logo-white.png";

const CopyRightTwo = () => {
  return (
    <div className="row align-items-center">
      <div className="col-12 col-md-3">
        <a href="index.html">
          <img src={logo} alt="" loading="lazy" style={{height: "100px"}}/>
        </a>
      </div>
      {/* End .col */}

      <div className="col-12 col-md-5" >
        <p className="ptf-footer-copyright has-3-color"
        style={{"marginLeft":"4rem"}}>
          ©2023 &nbsp;
          <span className="has-white-color">
            <a
              href="https://www.disgrup.org"
              rel="noopener noreferrer"
              target="_blank"
            >
             © Fundacion Disgrup.
            </a><br></br>
          </span>
          Todos los derechos reservados.
        </p>
      </div>
      {/* End .col */}

      <div className="col-12 col-lg">
        <div className="ptf-footer-socials has-white-color"
        style={{"marginLeft":"4rem"}}>
          <SocialTwo />
          {/* <!--Social Icon--> */}
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CopyRightTwo;
