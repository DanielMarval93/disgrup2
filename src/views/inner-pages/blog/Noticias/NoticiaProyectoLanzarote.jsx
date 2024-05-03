import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../../components/footer/FooterTwo";
import HeaderDefault from "../../../../components/header/HeaderDefault";
import SocialFour from "../../../../components/social/SocialFour";

const NoticiaProyectoLanzarote = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>
          Disgrup - Noticias - Denunciamos al Ayuntamiento de Barcelona{" "}
        </title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />
        {/* End  HeaderHomeDefault */}

        <div className="main">
          <article className="ptf-single-post">
            {/* <!--Post Header--> */}
            <div style={{ position: "relative" }}>
              {/* Overlapping Image */}
              <img
                src={require("../../../../assets/img/blog/post-media-1.jpg")}
                alt="blog post"
                loading="lazy"
                style={{ width: "100%", height: "25rem" }}
              />

              {/* Header Component */}
              <header
                className="ptf-single-post__header ptf-single-post__header--style-1"
                style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
              >
                <div className="container-xxl">
                  <h1 className="ptf-single-post__title ">
                    Avanza el proyecto de una Residencia para{" "}
                  </h1>
                  <h1>
                    {" "}
                    <span className="has-accent-1">
                      Discapacitados en Lanzarote
                    </span>
                  </h1>
                  <div className="ptf-single-post__meta">
                    <span className="cat">Disgrup</span>
                    <span className="date"> Mar 31, 2019</span>
                  </div>
                </div>
              </header>
            </div>

            {/* <!--Post Media-->
            <div className="ptf-single-post__media">
              <div
                className="container-xxl"
                style={{ position: "relative", width: "100%", height: "auto" }}
              >
                <img
                  src="assets/img/blog/single-post/post-media-1.jpg"
                  alt="blog post"
                  loading="lazy"
                  style={{ width: "100%", height: "40rem" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <img src="assets/img/blog/grid/post-9.jpg" alt="imagen" />
                </div>
              </div>
            </div>
 */}
            {/* <!--Post Wrapper--> */}
            <div className="ptf-single-post__wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                    {/* <!--Post Info--> 
                    <div className="ptf-single-post__info">
                      <a className="author" href="/">
                        <i className="lnil lnil-user"></i>by <span>Admin</span>
                      </a>
                      <a className="view" href="/">
                        <i className="lnil lnil-eye"></i>5,6k Views
                      </a>
                      <a className="comments" href="/">
                        <i className="lnil lnil-comments"></i>3 Comments
                      </a>
                      <a className="report" href="/">
                        <i className="lnil lnil-warning"></i>Report
                      </a>
                    </div>
                    */}

                    {/* <!--Post Content--> */}
                    <div className="ptf-single-post__content">
                      {/* <!--Images-->
                         <ImageGridTwo />

                      {/* <!--Spacer--> 
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "5rem", "--ptf-md": "2.5rem" }}
                      ></div>

                      */}
                      <div className="row">
                        <div className="col-lg-6">
                        <p>
                        En la última reunión realizada entre nuestro presidente
                        y autoridades del Gobierno de Tías, se han producido
                        importantes avances en el compromiso gubernamental
                        necesario, para poder llevar adelante el proyecto de una
                        residencia para personas con discapacidad en Lanzarote.
                      </p>
                        </div>
                        <div className="col-lg-4 offset-lg-1">
                          <img
                            src={require("../../../../assets/img/blog/post-8.jpg")}
                            alt="imagen"
                            style={{ paddingTop: "1rem" }}
                          />
                        </div>
                        <div
                          className="ptf-spacer"
                          style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                        ></div>
                      </div>

                      {/* <!--Spacer-->*/}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                      ></div>
               

                      <p>
                        Los asesores del Ayuntamiento han expresado que existía
                        una voluntad previa para crear un proyecto de protección
                        oficial para la tercera edad. La propuesta de Disgrup es
                        la de realizar un mix de ambos proyectos, ampliando el
                        complejo de apartamentos para discapacitados que
                        habíamos propuesto, para que pueda incluir a ambos
                        grupos.
                      </p>

                      <p>
                        Cabe destacar que el objetivo de la residencia es el de
                        lograr una mayor autonomía de las personas con
                        discapacidad: una vida independiente, y a un bajo coste.
                        Justamente allí es donde se ubica la diferencia
                        sustancial de nuestra propuesta, puesto que existen
                        otras iniciativas, pero que son muy caras para los
                        usuarios. Por otro lado, creemos que Canarias es el
                        lugar ideal para poder materializarlo. Su clima es ideal
                        para muchas de las personas con discapacidad, y con el
                        compromiso de los municipios, pueden lograrse las
                        adaptaciones en la vía pública necesarias para lograr un
                        entorno perfecto.
                      </p>

                      <p>
                        El ayuntamiento parece estar muy interesado, por lo que
                        esperamos seguir avanzando con esta propuesta muy
                        pronto.
                      </p>

                      {/* <!--Spacer-->*/}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.5rem", "--ptf-md": "1.5rem" }}
                      ></div>
            
                      <footer className="ptf-single-post__footer2">
                        {/* <!--Post Socials--> */}
                        <div className="ptf-post-socials">
                          <span>Compartir</span>
                          <SocialFour />
                        </div>
                      </footer>
                    </div>

                    {/* <!--Post Footer--> */}
                    <footer className="ptf-single-post__footer">
                      {/* <!--Post Tags--> */}
                      <div className="ptf-post-navigation ptf-post-navigation--style-1">
                        
                        <Link
                          className="h1 ptf-filled-link"
                          to="/Noticias"
                        >
                           Más Noticias
                        </Link>
                      </div>
                    </footer>
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
    </div>
  );
};

export default NoticiaProyectoLanzarote;
