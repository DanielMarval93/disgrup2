import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../../components/footer/FooterTwo";
import HeaderDefault from "../../../../components/header/HeaderDefault";
import SocialFour from "../../../../components/social/SocialFour";

const NoticiaTeoriaDefienden = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>
          Disgrup - Noticias - Los que en teoría defienden nuestros derechos{" "}
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
                  Los que en teoría defienden{" "}
                  </h1>
                  <h1>
                    {" "}
                    <span className="has-accent-1">
                    nuestros derechos
                    </span>
                  </h1>
                  <div className="ptf-single-post__meta">
                    <span className="cat">Disgrup</span>
                    <span className="date"> Feb 9, 2021</span>
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
                        <div className="col-lg-6">
                          <p>
                            Ser una persona con discapacidad en esta sociedad es
                            complicado porque no se cumplen todos los requisitos
                            para vivir en un mundo accessible. Y para esto
                            tenemos unas grandes entidades y federaciones que en
                            teoría luchan por los derechos de las personas con
                            discapacidad.
                          </p>
                          <p>
                            No obstante, me he dado cuenta que muchas veces esta
                            protección que nos otorgan no se cumple del todo.
                            Sobre todo si ves que són ellas mismas las que
                            incumplen las normativas que nos afectan.
                          </p>
                        </div>
                        <div className="col-lg-6 ">
                          <img
                            src={require("../../../../assets/img/blog/post-5.jpg")}
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
                        A modo de ejemplo puedo decir fehacientemente que hay
                        una federación de personas con discapacidad física en
                        Barcelona que no tiene ni adaptada su sede, y llevan
                        allí más de 10 años. Su excusa es que están pendientes
                        de trasladarse a una planta baja, cuando una adaptación
                        accesible tendría un coste menor y además estaría
                        subvencionada en parte por la administración.
                      </p>

                      <p>
                        En mi opinión, eso se llama desinterés y una falta de
                        respeto al colectivo. Así, nos encontramos que en 2021
                        ni los que en teoría defienden nuestros derechos cumplen
                        con las leyes de accesibilidad ni con los derechos de
                        las personas con discapacidad.
                      </p>

                      <p>
                        Pero es que, además, esa federación permite a las
                        administraciones incumplir las leyes y los derechos
                        humanos que afectan a las personas con discapacidad. La
                        entidad que presido le comunicó por escrito el pasado
                        mes de enero un incumplimiento sistemático de estas
                        leyes y derechos humanos de las personas con
                        discapacidad por parte del Ayuntamiento de Barcelona. A
                        día de hoy todavía no hemos recibido respuesta. ¿Por
                        qué?
                      </p>

                      <p>
                        Todo esto me lleva a pensar, ¿realmente estas grandes
                        entidades que reciben subvenciones millonarias defienden
                        todos los derechos de las personas con discapacidad, o
                        sólo algunos?. Por otro lado, hay que reconocer que no
                        todo lo que hacen estas grandes entidades y federaciones
                        es malo. Yo, por ejemplo, he podido ir al gimnasio como
                        cada viernes gracias a que esa federación gestiona al
                        Ayuntamiento de Barcelona los asistentes de vestuario
                        para las personas con discapacidad. Una de cal y otra de
                        arena. No es suficiente.
                      </p>

                      <p style={{"fontStyle":"italic"}}>Guillermo Egido, presidente de la Fundación Disgrup</p>

                      <p>
                        Fuente:{" "}
                        <a href="https://diarideladiscapacitat.cat/">
                          https://diarideladiscapacitat.cat/
                        </a>
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

export default NoticiaTeoriaDefienden;
