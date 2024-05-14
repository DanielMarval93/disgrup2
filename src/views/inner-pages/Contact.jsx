import React from "react";
import { Helmet } from "react-helmet";
import HeaderDefault from "../../components/header/HeaderDefault";
import CopyRightTwo from "../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../components/footer/FooterTwo";
import ContactForm from "../../components/ContactForm";
import Address from "../../components/Address";
import ImageGridFive from "../../components/image-grid/ImageGridFive";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Fundacion Disgrup - Dona</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderDefault />
      {/* End Header */}

      <div className="ptf-main">
        <div  className="ptf-page ptf-page--contact">
          <section>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>

            <div className="container-xxl" >
              <div className="row">
                <div className="col-xl-10">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    
                    <h1 className="large-heading">
                      Colabora con <br />
                      Fundacion <span className="has-accent-1">Disgrup</span>
                    </h1>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "2.5rem" }}
                    ></div>

                    {/* <!--Social Icon--> */}
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* Contact top portion */}

            <div
                  className="ptf-divider"
                  style={{
                    "--ptf-height": "1px",
                    "--ptf-color": "var(--ptf-color-14)",
                  }}
                ></div>
          </section>
          {/* End section contact header */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay="0"
          >
            <div className="container">
              
              <div className="row">
                <ImageGridFive/>
                 {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "3.25rem", "--ptf-md": "3.125rem" }}
            ></div>

                <div className="col-lg-5 ">
                  <h1 className="has-accent-1">Beneficios</h1>
                  <div
                  className="ptf-spacer"
                  style={{
                    "--ptf-xxl": "1.5rem",
                    "--ptf-md": "1.5rem",
                  }}
                ></div>
                  <p style={{fontSize:"22px"}}>
                    Donar a la Fundación Disgrup no solo es altruista, también
                    ofrece ventajas fiscales. La Ley del IRPF permite deducir un
                    porcentaje de las donaciones en la declaración de la renta,
                    generalmente entre el 25% y el 75%. Las donaciones
                    periódicas pueden proporcionar una desgravación adicional.
                    Esto permite a los contribuyentes destinar una parte de sus
                    impuestos a apoyar a personas con discapacidad,
                    contribuyendo así a mejorar su calidad de vida y promover su
                    inclusión en la sociedad.
                  </p>
                </div>
                <div className="col-lg-5 offset-lg-2">
    
                  <img
                    alt="Donacion bizum"
                    src="https://i.imgur.com/7mG5f1v.jpg"
                  />
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{
                    "--ptf-xxl": "1.5rem",
                    "--ptf-md": "1.5rem",
                  }}
                ></div>
              </div>
              
            </div>
          </div>
                 {/* <!--Divider--> */}
                 <div
                  className="ptf-divider"
                  style={{
                    "--ptf-height": "1px",
                    "--ptf-color": "var(--ptf-color-14)",
                  }}
                ></div>
                      <div
                  className="ptf-spacer"
                  style={{
                    "--ptf-xxl": "3.5rem",
                    "--ptf-md": "1.5rem",
                  }}></div>
          <section>
            <div className="container-xxl">
              <div className="row">
                <div className="col-lg-4">
                  <Address />
                </div>
                {/* End .col */}

                <div className="col-lg-8">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="300"
                  >
                    <h5 className="fz-14 text-uppercase has-3-color fw-normal">
                      Tell us about your project and goals.
                    </h5>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "3.125rem" }}
                    ></div>
                    <ContactForm />
                    {/* End ContactForm */}
                  </div>
                </div>
                {/* End .col */}
              </div>
            </div>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
          </section>
        </div>
      </div>

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
    </div>
  );
};

export default Contact;
