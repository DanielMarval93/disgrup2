import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../../components/footer/FooterTwo";
import HeaderDefault from "../../../../components/header/HeaderDefault";

const NoticiaFaltanTaxis = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>
          Disgrup - Noticias - Exigen aumento la flota de taxis para
          discapacitados{" "}
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
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h1 className="ptf-single-post__title ">
                    Exigen aumento la flota de{" "}
                  </h1>
                  <h1>
                    taxis para{" "}
                    <span className="has-accent-1">discapacitados</span>
                  </h1>
                  <div className="ptf-single-post__meta">
                    <span className="cat">Disgrup</span>
                    <span className="date"> Ene 1, 2010</span>
                  </div>
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
                        <div className="col-lg-12">
                          <p>
                            Usuarios del eurotaxi de Barcelona exigen al
                            Instituto Metropolitano del Taxi (IMET) que cumpla
                            con la sentencia publicada hace ahora justo un año
                            por la que la Justicia le condenó a tomar medidas
                            para ampliar la flota de taxis adaptados a personas
                            con movilidad reducida en un plazo máximo de seis
                            meses.
                          </p>
                          <p>
                            En noviembre de 2022, el Juzgado de lo Contencioso
                            Administrativo nº11 de Barcelona condenó al IMET a
                            planificar las medidas a llevar a cabo para cumplir
                            con el porcentaje del 5% de licencias de taxis
                            adaptados sobre la flota total de licencias del Área
                            Metropolitana de Barcelona.
                          </p>
                        </div>
                        <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "2rem", "--ptf-md": "1rem" }}
                      ></div>
                        
                        <div className="col-lg-8 offset-lg-2">
                          <img
                            src={require("../../../../assets/img/blog/post-10.jpg")}
                            alt="imagen"
                            style={{ paddingTop: "0rem" }}
                          />
                        </div>
                        <div
                          className="ptf-spacer"
                          style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                        ></div>
                      </div>

                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "2rem", "--ptf-md": "1rem" }}
                      ></div>

                   
                      <p>
                        La Justicia daba un plazo total máximo de seis meses
                        desde la resolución fechada el 7 de noviembre de 2022,
                        para que el número de vehículos adaptados en el servicio
                        de taxi del AMB al traslado de personas con movilidad
                        reducida fuera de, al menos, el 5% de la flota total de
                        taxis. En los primeros dos meses, el IMET quedaba
                        obligado a presentar la batería de medidas con las que
                        pretendía llegar a ese porcentaje.
                      </p>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                      ></div>
                      <p>
                        Contra esa resolución cabía recurso, pero, en enero de
                        2023, tras no haberse presentado, el Juzgado publicó una
                        diligencia comunicando al IMET la resolución firme de lo
                        dictado dos meses antes, e instaba al Institut a llevar
                        a efecto el cumplimiento de la resolución. Es decir,
                        instaba a la administración barcelonesa a poner remedio
                        y ampliar la flota de eurotaxis.
                      </p>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                      ></div>
                      <p>
                        Los denunciantes particulares afectados por la falta de
                        eurotaxis exigen y recuerdan el IMET, un año después, la
                        obligación del cumplimiento de la sentencia. La
                        Fundación Disgrup, a través de su presidente Guillermo
                        Egido, ha insistido en que, a pesar de llevar quince
                        años luchando por el taxi accesible, y a pesar de
                        sentencias judiciales como esta, “les están tomando el
                        pelo”. Por su parte, el IMET se defiende asegurando que
                        es imposible cumplir este mandato. Egido también
                        denuncia lamenta o critica que las instituciones que
                        reciben dinero público no estén tomando cartas en el
                        asunto.
                      </p>

                      {/* <!--Spacer-->*/}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.5rem", "--ptf-md": "1.5rem" }}
                      ></div>
        {/* <footer className="ptf-single-post__footer2">
                        {/* <!--Post Socials--> 
                        <div className="ptf-post-socials">
                          <span>Compartir</span>
                          <SocialFour />
                        </div>
                      </footer>*/}
                    </div>

                    {/* <!--Post Footer--> */}
                    <footer className="ptf-single-post__footer">
                      {/* <!--Post Tags--> */}
                      <div className="ptf-post-navigation ptf-post-navigation--style-1">
                        <Link className="h1 ptf-filled-link" to="/Noticias">
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

export default NoticiaFaltanTaxis;
