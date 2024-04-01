import React, { useContext, useRef } from "react";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../components/footer/FooterTwo";
import HeaderDefault from "../../../components/header/HeaderDefault";
import PortfolioTerapia from "../../../components/portfolio/PortfolioTerapia";
import RefContext from "../../../components/context/RefContext";

const Terapia = () => {
  const { ejerciciosSection, setTerapiaSection } =
    useContext(RefContext);

  setTerapiaSection(useRef(null));

  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>Videos - Terapia</title>
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
                    Terapia Ocupacional
                  </h1>
                  <h1>
                    {" "}
                    <span className="has-accent-1">con Candi</span>
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
                        En la Fundación Disgrup nos preocupamos por la salud
                          mental y física de todo el colectivo de personas con
                          discapacidad, pero también de cualquier persona. Es
                          por ello, que en nuestra sección de vídeos «Terapia
                          ocupacional con Candi», que encontrarás en nuestro
                          canal youtube, te proponemos una serie de ejercicios
                          de Terapia ocupacional, para que puedas realizar en
                          casa o en cualquier lugar.
                        </p>
                        {/* <!--Spacer--> */}
                        <div
                          className="ptf-spacer"
                          style={{
                            "--ptf-xxl": "1rem",
                            "--ptf-md": "1rem",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </header>

              {/* <!--Post Media--> */}
              <div className="ptf-single-post__header ptf-single-post__header--style-1">
                <div
                  className="container-xxl"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "auto",
                  }}
                >
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                      <div className="ptf-single-post__meta">
                        <div class="ratio ratio-16x9">
                        <iframe
                            src="https://www.youtube.com/embed/qiMeao6QX4E?si=6qTUgbIVt5mAynSb"
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
                      ▶ Nuestra compañera Candi nos trae un nuevo "Challenge", el nº 10 en Terapia Ocupacional. 
¡¡ Si quires saber más, dale al play ⏩!!
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

                      <div ref={ejerciciosSection}>
                        <h2 className="has-accent-1">Ultimos Videos</h2>

                        <PortfolioTerapia />
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

export default Terapia;
