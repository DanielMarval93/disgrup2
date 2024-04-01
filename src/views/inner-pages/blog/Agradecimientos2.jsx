import React, { useContext, useRef } from "react";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../components/footer/FooterTwo";
import HeaderDefault from "../../../components/header/HeaderDefault";
import PortfolioAgradecimientos from "../../../components/portfolio/PortfolioAgradecimientos";
import RefContext from "../../../components/context/RefContext";
import BlogThree from "../../../components/blog/BlogThree";

const Agradecimientos = () => {
  const { ultimosVideosSection, setUltimosVideosSection } =
    useContext(RefContext);

  setUltimosVideosSection(useRef(null));

  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>Videos - Agradecimientos</title>
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
          >
            
            <article className="ptf-single-post">
              {/* <!--Post Header--> */}
            
              <header className="ptf-single-post__header ptf-single-post__header--style-1">
                <div className="container ">
                  <h1 className="ptf-single-post__title">
                    <span className="has-accent-1"> Agradecimientos</span>{" "}
                  </h1>
                  <div className="row">
                    <div className="col-xl-8 offset-xl-2">
                      <div className="ptf-single-post__content">
                        {/* <!--Spacer--> */}
                        <div
                          className="ptf-spacer"
                          style={{ "--ptf-xxl": "2rem", "--ptf-md": "2.5rem" }}
                        ></div>
                        <p>
                          En el canal youtube de la Fundación Disgrup, cada día
                          más personas famosas, influencers, youtubers y en
                          general relevantes en cualquier disciplina, se
                          acercan, con la motivación de agradecer de todo
                          corazón, la labor y el esfuerzo que desde la Fundación
                          estamos realizando, y así también ellos estan
                          colaborando, y ponen su «granito de arena». Todos los
                          actos de buena voluntad, nos ayudan en nuestra misión,
                          de mejorar las vidas de las personas con discapacidad.
                        </p>
                
                      </div>
                    </div>
                  </div>
                </div>
              </header>

              {/* <!--Post Media--> */}
              <div className="ptf-single-post__headerTwo ptf-single-post__header--style-1">
                <div
                  className="container-xxl"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "auto",
                  }}
                >
                  <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                      <div className="ptf-single-post__meta ">
                        <div class="ratio ratio-16x9">
                          <iframe
                            src="https://www.youtube.com/embed/XaB7dP-b2to?si=xWTZpf6ERyT2dmfd"
                            title="YouTube video"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                      {/* <!--Post Info--> */}
                      <div
                        className="ptf-spacer"
                        style={{
                          "--ptf-xxl": "2.5rem",
                          "--ptf-md": "2.5rem",
                        }}
                      ></div>
                      {/* <!--Post Content--> */}
                      <div className="ptf-single-post__content">
                        El pizzero youtuber con más de 1 millón de suscriptores,
                        nos brinda su apoyo y agradece personalmente nuestra
                        labor para conseguir un mundo mejor para el colectivo de
                        personas con discapacidad
                      </div>
                    </div>
                    <div className="col-xl-8 offset-xl-2">
                      <div
                        className="ptf-spacer"
                        style={{
                          "--ptf-xxl": "2.5rem",
                          "--ptf-md": "2.5rem",
                        }}
                      ></div>

                      {/* <!--Divider--> */}
                      <div className="ptf-divider"></div>
                      <div
                        className="ptf-spacer"
                        style={{
                          "--ptf-xxl": "2.5rem",
                          "--ptf-md": "2.5rem",
                        }}
                      ></div>

                      <div ref={ultimosVideosSection}>
                        <h2 className="has-accent-1">Ultimos Videos</h2>
                          
                        <BlogThree />
                      </div>
                      <div
                        className="ptf-spacer"
                        style={{
                          "--ptf-xxl": "2.5rem",
                          "--ptf-md": "2.5rem",
                        }}
                      ></div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </article>
          </div>
        </div>
        {/* End .main */}

        {/* <!--Footer--> */}
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
    </div>
  );
};

export default Agradecimientos;
