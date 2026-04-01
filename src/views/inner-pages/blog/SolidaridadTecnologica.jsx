import React, { useState} from "react";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../components/footer/FooterTwo";
import HeaderDefault from "../../../components/header/HeaderDefault";
import ModalVideo from "react-modal-video";


const SolidaridadTecnologica= () => {
  const [isOpen, setOpen] = useState(false);
 

  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid"      >
      <Helmet>
        <title>Disgrup - Conocenos</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />
        {/* End  HeaderHomeDefault */}

        <div className="main">
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay="0"
            style={{
                          backgroundColor:"black"}}
          >
            <article className="ptf-single-post">
              {/* <!--Post Header--> */}
              <header className="ptf-single-post__header ptf-single-post__header--style-1">
                <div className="container-xxl"      >
                  <h1 className="ptf-single-post__title"      style={{
                          color:"white"
                        }}>En
                  
                    {" "}
                    <span className="has-accent-1">Construccion</span>
                  </h1>

                </div>
              </header>
       
              {/* <!--Post Wrapper--> */}
              <div className="ptf-single-post__wrapper">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                      {/* <!--Post Info--> */}

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        
                     
                        <div
                          className="ptf-spacer"
                          style={{
                            "--ptf-xxl": "2.875rem",
                            "--ptf-md": "1.5625rem",
                          }}
                        ></div>

                    {/*    <h1 onClick={() => scrollDown(charlaSection, 20)}>test</h1>*/}
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        {/* End .main */}

      {/* <!--Footer--> */}
      <footer className="ptf-footer ptf-footer--style-3">
              <div className="container">
                <div className="row">
                  <div className="col-xl-10 offset-xl-2">
                    <div className="ptf-footer__top">
                      <FooterTwo />
                    </div>
                    {/* End .ptf-footer__top */}

                    <div className="ptf-footer__bottom">
                      <CopyRightTwo />
                    </div>
                    {/* End .ptf-footer__bottom */}
                  </div>
                </div>
              </div>
            </footer>
      </div>{" "}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="D6daFM-p8Mg"
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default SolidaridadTecnologica;
