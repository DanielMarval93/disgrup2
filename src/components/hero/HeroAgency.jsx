import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const HeroAgency = () => {
  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    fade: true,
    speed: 4500,
    slidesToShow: 1,
    slidesToScroll: 0,
    autoplay: false,
    adaptiveHeight: false,
  };
  return (
    <>
      <Slider {...settings}>
        <div className="ptf-showcase-image image-3">
          <div className="ptf-showcase-slide">
            <div className="container">
              <h1
                className="fz-100 fz-100--sm lh-1 has-white-color"
                style={{ marginLeft: "2.5rem" }}
              >
                <span className="has-accent-1">Fundacion</span> <br />
                Disgrup
              </h1>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.125rem" }}
              ></div>
              <p
                className="fz-24 has-white-color"
                style={{ maxWidth: "34.375rem", marginLeft: "3rem" }}
              >
                Ayudamos a las personas con discapacidad
              </p>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "1.625rem" }}
              ></div>

              <div className="d-flex "
              
              style={{ "marginLeft": "5.3rem" }}>
                {/* <!--Button--> */}
                <Link
                  className="ptf-btn ptf-btn--primary"
                  
                style={{ "fontSize": "36px" }}
                  to="/contact"
                  target="_self"
                >
                  Dona
                </Link>

                {/*
                <div
                    className="ptf-video-button"
                    onClick={() => setOpen(true)}
                    style={{
                      "--ptf-title-color": "var(--ptf-color-white)",
                      marginLeft: "2rem",
                    }}
                  >
                    <a href="/" rel="nofollow">
                      <i className="lnil lnil-play"></i>
                    </a>
                    <div className="ptf-video-button__title">
                      Nuestra <br />
                      historia

                      </div>
                    </div>
                    */}
                {/* <!--Button--> 
                <Link
                  className="ptf-btn ptf-btn--secondary"
                  to="/conocenos"
                  style={{ marginLeft: "2rem", marginRight: "2rem" }}
                >
                  Conocenos
                </Link>*/}
              </div>
            </div>
          </div>
        </div>
        {/* End .ptf-showcase-image 

        <div className="ptf-showcase-image image-2">
          <div className="ptf-showcase-slide">
            <div className="container">
              <h1 className="fz-100 fz-90--lg lh-1 has-white-color text-center">
                 <br />
                  <span className="has-accent-1"><br />Participa</span> 
              </h1>
              {/* <!--Spacer--> 
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.125rem" }}
              ></div>

              <div className="d-flex justify-content-center">

                {/* <!--Button--> 
                <Link className="ptf-btn ptf-btn--primary" to="/contact" target="_self">
                
                  Eventos
                
                </Link>
                {/* <!--Button--> 
              </div>
            </div>
          </div>
        </div>
        {/* End .ptf-showcase-image 

        <div className="ptf-showcase-image image-1">
          <div className="ptf-showcase-slide">
            <div className="container">
              <h1 className="fz-100 fz-100--sm lh-1 has-white-color text-center">
              Haz una
              <br/>
              <span className="has-accent-3"> Donacion</span> 
              </h1>

              {/* <!--Spacer--> 
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.125rem" }}
              ></div>


              {/* <!--Spacer--> 
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.625rem" }}
              ></div>
              <div className="d-flex  justify-content-center">
                
                {/* <!--Button--> 
                <Link className="ptf-btn ptf-btn--primary" to="/contact" target="_self">
                
                  Ayudanos
                
                </Link>
                {/* <!--Video Button--> 
                <div
                  className="ptf-video-button"
                  onClick={() => setOpen(true)}
                  style={{
                    "--ptf-title-color": "var(--ptf-color-white)",
                    marginLeft: "2rem",
                  }}
                >
                  <a href="/" rel="nofollow">
                    <i className="lnil lnil-play"></i>
                  </a>
                  <div className="ptf-video-button__title">
                    Nuestra <br />
                    Hitoria
                  </div>
                </div>
              

              </div>
            </div>
          </div>
        </div>
        {/* End .ptf-showcase-image */}
      </Slider>
      {/*
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="D6daFM-p8Mg"
        onClose={() => setOpen(false)}
      />
      */}
      {/* End Youtube Modal video */}
    </>
  );
};

export default HeroAgency;
