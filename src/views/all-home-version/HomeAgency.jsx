import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
// import CounterTwo from "../../components/counter/CounterTwo";//
import CopyRightTwo from "../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../components/footer/FooterTwo";
import HeaderAgency from "../../components/header/HeaderAgency";
import HeroAgency from "../../components/hero/HeroAgency";
import PortfolioTwo from "../../components/portfolio/PortfolioTwo";
//import Team from "../../components/team/Team";
//import TestimonialTwo from "../../components/testimonial/TestimonialTwo";//
import BlogHistorias from "../../components/blog/BlogHistorias";
import BlogDestacados from "../../components/blog/BlogDestacados";

import CookieConsent from "react-cookie-consent";
import Slider from "../../components/Slider";
import Slider2 from "../../components/Slider2";



const HomeAgency = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--home-agency">
      <Helmet>
        <title>Fundacion Disgrup</title>
      </Helmet>
      {/* End Page SEO Content */}

      <CookieConsent
        location="bottom"
        buttonText="I agree"
        cookieName="myAppCookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>

      <div className="ptf-site-wrapper__inner">
        <HeaderAgency />
        {/* End Header Agency */}

        <div className="ptf-main">
          <div className="ptf-page ptf-page--home-agency">
            {/*=============================================
          Start Our Hero Section howcase 3
          ============================================== */}
            <div className="ptf-showcase-3 swiper-container">
              <div className="swiper-wrapper">
                <HeroAgency />
              </div>
            </div>
            <section>
              <div className="col-lg-3 offset-lg-9"> 

              </div>
            </section>

            {/*=============================================
          Start Call to Counter section
          ============================================== */}
            <section>
              <div
                className="row align-items-center has-accent-1-background"
                style={{ "--bs-gutter-y": "2rem", padding : "10px"}}
              >
                <div className="col-12">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    style={{
                      overflowX: "auto",
                      whiteSpace: "nowrap",
                    }}
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <div>
                      {/* <!--Divider--> */}
                      <Slider2/>
                      {/* <div className="align-items-center" style={{ width: "800px" , display: "inline-block" }} >
                        <img
                          style={{ maxWidth: "150px" , marginRight: "40px", marginLeft: "10px" }}
                          alt="aef"
                          src="https://identitatcorporativa.gencat.cat/web/.content/Documentacio/descarregues/identificacio/BN/idb_c_blanc.png"
                        />
                        <img
                          style={{ maxWidth: "150px", marginRight: "40px" }}
                          alt="aef"
                          src="https://ccfundacions.cat/wp-content/uploads/2019/05/logo-white.png"
                        />
                        <img
                          style={{ maxWidth: "80px", marginRight: "40px" }}
                          alt="aef"
                          src="https://disgrup.org/wp-content/uploads/2023/02/carrusel-web-fundacion-500-%C3%97-250-px-5.svg"
                        />
                        <img
                          style={{ maxWidth: "150px", marginRight: "40px" }}
                          alt="aef"
                          src="https://disgrup.org/wp-content/uploads/2023/02/carrusel-web-fundacion-500-%C3%97-250-px-6.svg"
                        />
                        <img
                          style={{ maxWidth: "170px", marginRight: "40px" }}
                          alt="aef"
                          src="https://www.sanidad.gob.es/diseno/img/MSA.Gob-bn-positivo-gris.svg"
                        />
                        <img
                          style={{ maxWidth: "100px", marginRight: "40px" }}
                          alt="aef"
                          src="https://disgrup.org/wp-content/uploads/2023/05/14-1024x390.png"
                        />
                        <img
                          style={{ maxWidth: "170px", marginRight: "40px" }}
                          alt="aef"
                          src="https://upload.wikimedia.org/wikipedia/commons/0/00/Logotipo_del_Ministerio_de_Justicia.svg"
                        />
                      </div> */}
                    </div>
                  </div>
                </div>
                {/* End .col */}
                {/* <CounterTwo />*/}
              </div>
            </section>

            <section>
              {/* <!--Divider--> */}
              <div className="ptf-divider"></div>
            </section>
            {/* End .ptf-devider */}

            <section className="ptf-custom--3993 jarallax" style={{ marginLeft: "1rem", marginRight: "1rem" }}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 offset-lg-7">
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "4.125rem", "--ptf-lg": "2.5rem" }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h3
                        className="ptf-post__title has-accent-1 agradecimientos-title"
                        style={{ fontSize: "48px" }}
                      >
                        Quienes Somos
                      </h3>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.875rem" }}
                      ></div>
                      <h5
                        className="has-black-color"
                        style={{ maxWidth: "30rem", fontSize: "20px" }}
                      >
                        «Cada uno sabe sus dificultades. Las personas con
                        discapacidad ya bastante tienen con lo que tienen»{" "}
                      </h5>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "2rem", "--ptf-md": "2.5rem" }}
                      ></div>
                      <p
                        className="fz-18 has-black-color"
                        style={{ maxWidth: "26rem",fontSize: "16px" }}
                      >
                        Señala su fundador al referirse al sentido que le impuso
                        a este grupo de personas que trabajan desde hace más de
                        diez años brindándoles ayuda directa a las personas con
                        discapacidad de toda España, que van desde productos
                        ortopédicos, hasta terapias a las que de otra manera no
                        accederían y que mejoran sensiblemente su día a día.
                      </p>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1rem", "--ptf-md": "1.5rem" }}
                      ></div>
                      <p
                        className="fz-18 has-black-color"
                        style={{ maxWidth: "26rem",fontSize: "16px" }}
                      >
                        Sin embargo, el objetivo de la Fundación no sólo es el
                        de la asistencia, sino que también se realizan trabajos
                        de concienciación sobre temáticas vinculadas, y de
                        elaboración de propuestas (accesibilidad) y de proyectos
                        para su tratamiento y discusión posterior por aquellos
                        que tienen poder de decisión a nivel local.
                      </p>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "5.125rem", "--ptf-lg": "2.5rem" }}
                    ></div>
                  </div>
                </div>
              </div>
            </section>
            {/* End  Advertising Banner */}

            <section style={{ marginLeft: "1rem", marginRight: "1rem" }}>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3rem", "--ptf-md": "3rem" }}
              ></div>
              <div
                className="ptf-divider"
                style={{
                  "--ptf-height": "1px",
                  "--ptf-color": "var(--ptf-color-14)",
                }}
              ></div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3rem", "--ptf-md": "3rem" }}
              ></div>
              <div className="container">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <row>
                    <div className="col-lg-8">
                      <h3
                        className="ptf-post__title has-accent-1 agradecimientos-title"
                        style={{ fontSize: "48px"}}
                      >
                        <Link to="/videos-ayudas">
                          Videos Destacados
                        </Link>
                      </h3>
                    </div>
                  </row>
                </div>

                <div
                  className="row"
                  style={{
                    "--bs-gutter-x": "10.625rem",
                    "--bs-gutter-y": " 5.3125rem",
                  }}
                >
                  <div
                    className="ptf-isotope-grid row"
                    style={{
                      "--bs-gutter-x": "3rem",
                      "--bs-gutter-y": "3rem",
                      marginLeft: "0",
                      marginRight: "0",
                    }}
                  >
                    <BlogDestacados />
                  </div>
                </div>
              </div>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "0.5rem", "--ptf-md": "0rem" }}
              ></div>
            </section>
            {/* End  Advertising Big Title */}

            {/*============================================}=
        Service Section
      ============================================== */}
            <section style={{ marginLeft: "1rem", marginRight: "1rem" }}>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3rem", "--ptf-md": "5rem" }}
              ></div>
              <div
                className="ptf-divider"
                style={{
                  "--ptf-height": "1px",
                  "--ptf-color": "var(--ptf-color-14)",
                }}
              ></div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <row>
                    <div className="col-lg-8">
                      <h3
                        className="ptf-post__title has-accent-1 agradecimientos-title"
                        style={{ fontSize: "50px"}}
                      >
                        <Link to="/videos-ayudas">
                          Disgrup Ayuda a<br></br>la Discapacidad
                        </Link>
                      </h3>
                    </div>
                  </row>
                </div>

                <div
                  className="row"
                  style={{
                    "--bs-gutter-x": "10.625rem",
                    "--bs-gutter-y": " 5.3125rem",
                  }}
                >
                  <div
                    className="ptf-isotope-grid row"
                    style={{
                      "--bs-gutter-x": "3rem",
                      "--bs-gutter-y": "3rem",
                      marginLeft: "0",
                      marginRight: "0",
                    }}
                  >
                    <BlogHistorias />
                  </div>
                </div>
              </div>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "4.5rem", "--ptf-md": "5rem" }}
              ></div>
              
            </section>

            {/*=============================================
          Start Latest Works section
          ============================================== */}
            
            
            <section style={{ marginLeft: "1rem", marginRight: "1rem" }}>
              <div
                className="ptf-divider"
                style={{
                  "--ptf-height": "1px",
                  "--ptf-color": "var(--ptf-color-14)",
                }}
              ></div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container">
                
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h3
                    className="ptf-post__title has-accent-1 agradecimientos-title"
                    style={{ fontSize: "48px" }}
                  >
                    <Link to="/noticias">Ultimas Noticias</Link>
                  </h3>
                </div>
                {/* End .ptf-animated-block */}

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "2.25rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <div className="row ptf-custom--3991 jarallax">
                    <div className="ptf-isotope-grid col-lg-7">
                      <PortfolioTwo />
                    </div>


                    <div
                className="ptf-divider"
                style={{
                  "--ptf-height": "1px",
                  "--ptf-color": "var(--ptf-color-14)",
                }}
              ></div>

                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "3rem" }}
                    ></div>
                    <div>
                      <section>


                        
                        
                        <h4
                          className="ptf-post__title has-accent-1 agradecimientos-title"
                          style={{ fontSize: "48px" }}
                        >
                          Agradecimientos
                        </h4>
                        <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "1rem" }}
                    ></div>

                        
                      </section>
                    </div>
                    {/* End .ptf-isotope-grid */}
                  </div>
                </div>
              </div>
            </section>
            <section style={{ marginLeft: "1rem", marginRight: "1rem" }}>
            <div
                          className="row align-items-center has-white-color"
                          style={{ "--bs-gutter-y": "2rem" }}
                        >
                          <div className="col-13">
                            {/* <!--Animated Block--> */}
                            <div
                              className="ptf-animated-block"
                              style={{
                                overflowX: "auto",
                                whiteSpace: "nowrap",
                              }}
                              data-aos="fade"
                              data-aos-delay="0"
                            >
                              <div>
                                {/* <!--Divider--> */}
                                {/*<SecondCarrousel/>*/}
                                <Slider/>

                                {/* <div className="align-items-center">
                                  <img
                                    style={{ maxWidth: "150px", marginRight: "40px", marginLeft: "10px"}}
                                    alt="aef"
                                    src="https://disgrup.org/wp-content/uploads/2023/02/ajuntament-de-barcelona-limes_reduides-15_rgb-1-300x112-1.png"
                                  />
                                  <img
                                    style={{ maxWidth: "150px", marginRight: "40px" }}
                                    alt="aef"
                                    src="https://disgrup.org/wp-content/uploads/2023/02/logo_1360597455-300x44-1.jpg"
                                  />
                                  <img
                                    style={{ maxWidth: "80px", marginRight: "40px" }}
                                    alt="aef"
                                    src="https://disgrup.org/wp-content/uploads/2023/02/logo-fundacion-miro-bcn.jpg"
                                  />
                                  <img
                                    style={{ maxWidth: "100px", marginRight: "40px" }}
                                    alt="aef"
                                    src="https://disgrup.org/wp-content/uploads/2023/02/logo-immb-300x123-1.jpg"
                                  />
                                  <img
                                    style={{ maxWidth: "100px", marginRight: "40px" }}
                                    alt="aef"
                                    src="https://disgrup.org/wp-content/uploads/2023/02/logo-poble-espanyol-Bcn-1.jpg"
                                  />
                                  <img
                                    style={{ maxWidth: "100px", marginRight: "40px" }}
                                    alt="aef"
                                    src="https://disgrup.org/wp-content/uploads/2023/02/Logo-TMB.svg_-300x139-1.png"
                                  />
                                  <img
                                    style={{ maxWidth: "100px", marginRight: "40px" }}
                                    alt="aef"
                                    src="https://disgrup.org/wp-content/uploads/2023/04/Ferrocarrils-Generalitat-Cat.jpeg"
                                  />
                                </div> */}
                              </div>
                            </div>
                          </div>
                          {/* End .col */}
                          {/* <CounterTwo />*/}
                        </div>
            </section>
            <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2rem" }}
                    ></div>

            {/*=============================================
          Start Our Crew/Team section
          ============================================== 
            <section className="ptf-custom--1569">
              {/* <!--Spacer--> 
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
              ></div>
              <div className="container">
                {/* <!--Animated Block--> 
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1 large-heading has-accent-1">Nuestro Equipo</h2>
                </div>
                {/* <!--Spacer--> 
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                ></div>
              </div>
              <div className="container">
                <div className="ptf-team-member-grid ptf-team-member-grid--4-columns">
                  <Team />
                </div>
              </div>
              {/* <!--Spacer--> 
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

          */}

            {/*=============================================
          Start Footer section
          ============================================== */}
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
          </div>
          {/* End .ptf-page */}
        </div>
        {/* End .ptf-main */}
      </div>
      {/* End .ptf-site-wrapper__inner */}
    </div>
  );
};

export default HomeAgency;
