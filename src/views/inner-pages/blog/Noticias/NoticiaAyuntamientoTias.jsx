import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../../components/footer/FooterTwo";
import HeaderDefault from "../../../../components/header/HeaderDefault";
import SocialFour from "../../../../components/social/SocialFour";

const NoticiaAyuntamientoTias = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>
          Disgrup - Noticias - El Ayuntamiento de Tías en Lanzarote NO cumple la
          Ley{" "}
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
                    El Ayuntamiento de Tías en{" "}
                  </h1>
                  <h1>
                    Lanzarote{" "}
                    <span className="has-accent-1">NO cumple la Ley</span>
                  </h1>
                  <div className="ptf-single-post__meta">
                    <span className="cat">Disgrup</span>
                    <span className="date"> Jul 28, 2021</span>
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
                          <h4 className="has-accent-1">
                            Pese que casí todos los ayuntamientos de España no
                            cumplen las leyes de accesibilidad, cuando renuevan
                            calles, cumplen la ley, en Tías “NO”:
                          </h4>
                        </div>
                        {/* <!--Spacer-->*/}
                        <div
                          className="ptf-spacer"
                          style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                        ></div>
                        <div className="col-lg-6">
                          <p>
                            El pasado año, una vez terminada la obra de la calle
                            Roque nublo y dos de sus perpendiculares, calle el
                            Paraíso y calle los Afrechos, de Puerto Del Carmen (
                            Ayuntamiento de Tías-Lanzarote-Islas Canarias ). Nos
                            dimos cuenta de la mala fe de dicho consistorio; la
                            calle no reúne las medidas contempladas por la ley
                            de accesibilidad actual ( ¿dónde está el
                            interventor? ):
                          </p>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                          <img
                            src={require("../../../../assets/img/blog/post-3.jpg")}
                            alt="imagen"
                            style={{ paddingTop: "0rem" }}
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
                        Roque Nublo tiene una pendiente mucho mayor que el 4%
                        máximo permitido por la ley, y las calles el Paraíso y
                        los Afrechos tienen aproximadamente 90 cm de ancho de
                        acera, cuando la actual ley dice que no pueden tener
                        menos de 150 cm. libres.
                      </p>
                      <div className="col-lg-8 offset-lg-2">
                      <div class="ratio ratio-16x9">
                          <iframe
                            src="https://www.youtube.com/embed/xB88QxnK__E?si=8cwYp1l9AV5YyTWE"
                            title="YouTube video"
                            allowfullscreen
                          ></iframe>
                        </div>
                        </div>
   {/* <!--Spacer-->*/}
   <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                      ></div>

                      <h5>
                        Consultamos al ayuntamiento y nos dicen que hacerlo bajo
                        los parámetros de la ley es muy caro y no es posible
                        para las arcas municipales (¿Será verdad?).
                      </h5>

                      
                      {/* <!--Spacer-->*/}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                      ></div>

                      <p>
                        Prevalece la economía a la vida, si has tenido un
                        problema y sufres una discapacidad o has nacido con una
                        discapacidad que sepas que el ayuntamiento de Tías
                        seguirá sin cumplir las leyes de accesibilidad para
                        ponerte la vida más difícil y complicada, si tienes un
                        accidente, que puede ser mortal, “SE SIENTE”, no haber
                        tenido discapacidad.
                      </p>
                      <p>
                        Aquí se vuelve a demostrar lo poco que le importan a las
                        administraciones, las personas con discapacidad. En
                        especial al ayuntamiento de Tías, el cual no cumple la
                        ley, ni los derechos humanos de las personas con
                        discapacidad; pero eso si, no cumplimos ni la ley, ni
                        los derechos humanos, pero pedimos subvenciones a la
                        Comunidad Europea.
                      </p>
                      <p>
                        Y no es lo único también podríamos hablar entre varias
                        actuaciones del Ayuntamiento obviando a las personas con
                        discapacidad, las duchas de la playa de Matagorda, que
                        en el proyecto iban con asiento para personas con
                        movilidad reducida y cuando se ejecutó se pusieron
                        duchas sin asiento ó el plan de accesibilidad del
                        municipio que no sale.
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

export default NoticiaAyuntamientoTias;
