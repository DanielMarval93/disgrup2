import React, { useState } from "react";
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

  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <Slider {...settings}>
        <div className="ptf-showcase-image image-3">
          <div className="ptf-showcase-slide">
            <div className="container">
              <div className="row">
                <div className="col-lg-11">
                  <div className="col-lg-7">
                    <h1
                      className="fz-80 fz-80--sm lh-1 has-white-color"
                      style={{ marginLeft: "3.5rem", marginTop: "5.5rem" }}
                    >
                      <span className="has-accent-1">Fundacion</span> <br />
                      Disgrup
                    </h1>

                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "1rem" }}
                    ></div>
                    <p
                      className="fz-20 has-white-color"
                      style={{ maxWidth: "34.375rem", marginLeft: "4rem" }}
                    >
                      Ayudamos a las personas con discapacidad
                    </p>

                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "0.625rem" }}
                    ></div>
                  </div>

                  <div className="d-flex " style={{ marginLeft: "4.8rem" }}>
                    {/* Dona Button */}
                    <Link
                      className="ptf-btn ptf-btn--primary ptf-btn--inversed"
                      style={{ fontSize: "36px" }}
                      to="/dona"
                      target="_self"
                    >
                      Dona
                    </Link>

                    {/* Bizum Button */}
                    <Link
                      className="ptf-btn ptf-btn--primary ptf-btn--inversed"
                      style={{ fontSize: "36px", marginLeft: "2.3rem" }}
                      onClick={handleButtonClick} // Attach click handler
                      target="_self"
                    >
                      Promo
                    </Link>
                  </div>
                </div>

                <div className="col-lg-1">
                  <div
                    className="carrousel-wrapper"
                    style={{ width: "800px", display: "inline-block" }}
                  >
                    <Tooltip />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>

      {/* Modal Image - Render it outside of the container */}
      {isModalOpen && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 9999,
          }}
          onClick={handleOverlayClick} // Close modal if overlay clicked
        >
          <div
            style={{
              width: "50%", // Reduce width to 50%
              height: "90%", // Reduce height to 60%
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="https://fundacion-disgrup.sumupstore.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://i.imgur.com/iAtz2Zw.jpeg"
              alt="Hello World!"
              className="promo-image"
            />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroAgency;
