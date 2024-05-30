import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Tooltip from "../Tooltip";


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
              <div className="row">
                <div className="col-lg-11">
                  <h1
                    className="fz-100 fz-100--sm lh-1 has-white-color"
                    style={{ marginLeft: "3rem", marginTop: "5rem" }}
                  >
                    <span className="has-accent-1">Fundacion</span> <br />
                    Disgrup
                  </h1>

                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "1rem" }}
                  ></div>
                  <p
                    className="fz-24 has-white-color"
                    style={{ maxWidth: "34.375rem", marginLeft: "4rem" }}
                  >
                    Ayudamos a las personas con discapacidad
                  </p>

                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "1.625rem" }}
                  ></div>

                  <div className="d-flex " style={{ marginLeft: "5.3rem" }}>
                    {/* <!--Button--> */}
                    <Link
                      className="ptf-btn ptf-btn--primary"
                      style={{ fontSize: "36px" }}
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
                
                
                <div className="col-lg-1" >

                  <div className="carrousel-wrapper" style={{ width: "800px" , display: "inline-block" }}>
                    <Tooltip/>
                        {/* <ImageWithTooltip 
                          style={{ maxWidth: "60px" }}
                          alt="aef"
                          src="https://pngimg.com/uploads/disabled/disabled_PNG8.png"
                          tooltipText= "jfdskfdksjhfdskfsd"
                          />
                        <ImageWithTooltip
                          style={{ maxWidth: "60px", marginTop: "20px" }}
                          alt="aef"
                          src="https://th.bing.com/th/id/R.7109d9ada3c7245323c7648f9fdb6b7c?rik=WaWvmP4wCTnQCg&riu=http%3a%2f%2fcdn-01.media-brady.com%2fstore%2fstfr%2fmedia%2fcatalog%2fproduct%2fd%2fm%2fdmeu_pslc2_670_1_std.lang.all.png&ehk=zfbj9zE%2fFs5w6icSY%2b9TkSSyDDNI%2ffrC9liZx%2bY%2f608%3d&risl=&pid=ImgRaw&r=0"
                          tooltipText= "jfdskfdksjhfdskfsd"
                        />
                        <ImageWithTooltip
                          style={{ maxWidth: "60px" , marginTop: "20px"}}
                          alt="aef"
                          src="https://th.bing.com/th/id/OIP.yGoK0gv0wh63HrkmxFndcgHaHa?rs=1&pid=ImgDetMain"
                          tooltipText= "jfdskfdksjhfdskfsd"
                        />
                        <ImageWithTooltip
                          style={{ maxWidth: "60px", marginTop: "20px" }}
                          alt="aef"
                          src="https://w7.pngwing.com/pngs/117/374/png-transparent-intellectual-disability-international-day-of-disabled-persons-gizarteratzea-mentally-s-text-area-learning-disability-thumbnail.png"
                          tooltipText= "jfdskfdksjhfdskfsd"
                        />
                        <ImageWithTooltip
                        src="https://i.imgur.com/7oXavVK.jpeg" 
                        alt="aef" 
                        tooltipText="Texto de tooltip 5" 
        /> */}
      </div>
    </div>
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
