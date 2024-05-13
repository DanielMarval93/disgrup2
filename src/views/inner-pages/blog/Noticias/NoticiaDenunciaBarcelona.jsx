import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../../components/footer/FooterTwo";
import HeaderDefault from "../../../../components/header/HeaderDefault";
import SocialFour from "../../../../components/social/SocialFour";

const NoticiaDenunciaBarcelona = () => {
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
                src="assets/img/blog/single-post/post-media-1.jpg"
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
                  <h1 className="ptf-single-post__title ">Denunciamos al</h1>
                  <h1>
                    {" "}
                    <span className="has-accent-1">
                      Ayuntamiento de Barcelona
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
                            Hemos denunciado el incumplimiento por parte del
                            Ayuntamiento de Barcelona de las leyes de
                            accesibilidad y transporte, con la consecuente
                            discriminación a las personas con discapacidad,
                            vulnerando los derechos fundamentales de este
                            colectivo. Nuestra Fundación lucha justamente para
                            cuidar los derechos de las personas con
                            discapacidad, para que éstos tengan el mismo lugar
                            como ciudadanos. Por esa razón, hemos procedido a
                            denunciar al ayuntamiento de Barcelona hace
                            aproximadamente un mes, y aún no hemos recibido
                            ninguna respuesta.
                          </p>
                        </div>
                        <div className="col-lg-6">
                          <img
                            src="assets/img/blog/grid/post-9.jpg"
                            alt="imagen"
                            style={{ paddingTop: "2.2rem" }}
                          />
                        </div>
                        <div
                          className="ptf-spacer"
                          style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                        ></div>
                      </div>
                      <p>
                        Según el relevamiento realizado por nuestro equipo, se
                        necesitan 50 millones de Euros para realizar las
                        adaptaciones arquitectónicas necesarias en nuestra
                        ciudad. De esta manera, se podría cumplir con el cupo de
                        taxis adaptados que marca la ley, como así también con
                        los ascensores en las estaciones del Metro y con las
                        rampas de los autobuses (ya que hemos identificado que,
                        en algunos casos, las rampas de las nuevas unidades que
                        salen a la calle cumplen menos su función que la de los
                        autobuses que ya tienen unos años).
                      </p>

                      {/* <!--Spacer-->*/}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                      ></div>
                      <p>
                        Esta cifra puede parecer una enormidad por sí sola, pero
                        al contrastarla con otras erogaciones que efectúa
                        nuestra Ciudad, el cumplimiento de la ley de
                        Accesibilidad no debería ser un problema mayor. Por
                        ejemplo, se han proyectado 112 millones de Euros de
                        gasto, para la realización de un parque de Servicios en
                        la zona de Magoria. Por menos del 50% de ese valor
                        podría saldarse una deuda que el ayuntamiento tiene con
                        los más de 134 mil discapacitados que viven en nuestra
                        ciudad.
                      </p>
                      <p>
                        Antes de iniciar el proceso de denuncia ante la
                        Fiscalía, hemos puesto en conocimiento de esta denuncia
                        a la Síndica de Greuges de Barcelona, al Sindic de
                        Greuges de Calaunya, al Instituto Municipal de Personas
                        con Discapacidad, al Defensor del Pueblo, al
                        Departamento de Treball y al European Disability Forum,
                        entre otros.
                      </p>

                      {/* <!--Spacer-->*/}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.5rem", "--ptf-md": "1.5rem" }}
                      ></div>
                      {/* <!--Post Excerpt--> */}
                      <div className="ptf-single-post__excerpt2">
                        Comentario del Presidente de Disgrup: "Es muy triste y
                        decepcionante como las administraciones que en teoría
                        tienen que velar por tu integración y por tus derechos,
                        omitan las leyes que permiten la integración plena del
                        discapacitado en la sociedad. Y mientras tanto, gastan
                        dinero público en medidas electoralistas".
                      </div>
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

export default NoticiaDenunciaBarcelona;
