import React from "react";
import { Helmet } from "react-helmet";
import HeaderDefault from "../../../components/header/HeaderDefault";
//import ServiceOne from "../../../components/service/ServiceOne";//
import Approach from "../../..//components/service/Approach";
import ContactJarallax from "../../../components/jarallax/ContactJarallax";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import ImageGrid from "../../../components/image-grid/ImageGrid";
import ServiceOne from "../../../components/service/ServiceOne";

import Background from '../../../assets/img/service.jpg';
import Pricing from "../../../components/pricing/Pricing";

import AnimatedCursor
 from "react-animated-cursor";

const Service = () => {
  return (
    <div>
      <Helmet>
        <title>Icy Media Agency - Noticias</title>
      </Helmet>
      {/* End Page SEO Content */}

      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color= "240,1,69"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />

      <HeaderDefault />
      {/* End Header */}

      <div className="ptf-main">
        <div></div>
        <div className="ptf-page ptf-page--services" style={{backgroundImage: Background, background:"#f394c0"}}>


          
                       {/*=============================================
                Start Service Section
              ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" ,}}
              
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-lg-3">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 large-heading has-accent-1">
                        Nuestros <br />
                        Servicios
                      </h2>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "2.5rem" }}
                      ></div>
                      <p className="fz-18">
                      Colaboramos con empresas como la tuya para aumentar tus ganancias. Creamos impacto, dirigimos visitas a tu sitio web, conectamos con tus clientes y hacemos crecer tus ventas. ¡Damos un giro positivo a tu negocio!
                      </p>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{
                        "--ptf-lg": "4.375rem",
                        "--ptf-md": "2.1875rem",
                      }}
                    ></div>
                  </div>
                  <div className="col-lg-8 offset-lg-1">
                    <ServiceOne />
                  </div>
                </div>
                {/* End .row */}
                
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
                ></div>

                
                <ImageGrid />
                                {/* <!--Divider--> */}
                                <div className="ptf-divider"></div>
              </div>
                            {/* <!--Spacer--> */}
                            <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
              ></div>
              {/* End .container-xxl */}
            </section>
            {/* End service */}


          
           

          {/*=============================================
            Our Approach Section
        ============================================== */}
          <section
            className="has-accent-1-background"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "assets/img/root/service-bubble.png"
              })`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "100% calc(100% + 120px)",
            }}
          >
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
            <div className="container-xxl">
              {/* <!--Animated Block--> */}
              <div
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay="0"
              >
                <h2 className="h1 large-heading" style={{color:"white"}}>Como lo hacemos</h2>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "7.5rem", "--ptf-md": " 3.75rem" }}
              ></div>
              <Approach />
            </div>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
          </section>

                    {/*=============================================
            Start Pricing section
            ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
              ></div>
              <div className="container">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1 large-heading has-accent-1">
                    Paquetes
                  </h2>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "3.75rem", "--ptf-md": "1.875rem" }}
                ></div>
              </div>
              <div className="container">
                <div className="row" style={{ "--bs-gutter-x": "2rem" }}>
                  <Pricing />
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
              ></div>
            </section>

          {/*=============================================
          Start Contact Section 
          ============================================== */}
          <section
            className="jarallax jarallax-img"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL +
                "assets/img/services-call-to-action-background.png"
              })`,
            }}
          >
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": " 12.5rem", "--ptf-md": "6.25rem" }}
            ></div>
            <ContactJarallax />
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
          </section>
        </div>
      </div>

          


      {/*=============================================
        Start Footer
        ============================================== */}
      <footer className="ptf-footer ptf-footer--style-1">
        <div className="container-xxl">
          <div className="ptf-footer__top">
            <Footer />
          </div>
          <div className="ptf-footer__bottom">
            <CopyRight />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Service;
