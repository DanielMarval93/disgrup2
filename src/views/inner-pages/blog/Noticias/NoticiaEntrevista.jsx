import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../../components/footer/FooterTwo";
import HeaderDefault from "../../../../components/header/HeaderDefault";
import SocialFour from "../../../../components/social/SocialFour";

const NoticiaEntrevista = () => {
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
                    Entrevista a Guillermo Egido Conde{" "}
                  </h1>
                  <h1>
                    fundador y presidente de{" "}
                    <span className="has-accent-1">Disgrup</span>
                  </h1>
                  <div className="ptf-single-post__meta">
                    <span className="cat">Disgrup</span>
                    <span className="date"> Nov 27, 2023</span>
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
                            Hoy en día, los programas diseñados para mejorar la
                            calidad de vida de las personas con discapacidad han
                            tomado especial relevancia, por el que cada vez más
                            personas y organizaciones contribuyen con ellos.
                          </p>
                          <div
                            className="ptf-spacer"
                            style={{
                              "--ptf-xxl": "0.8rem",
                              "--ptf-md": "0.8rem",
                            }}
                          ></div>

                          <p>
                            La Fundación Disgrup propone iniciativas para lograr
                            un cambio trascendental en la vida de las personas
                            con discapacidad, a través de diferentes acciones
                            enfocadas en la asistencia y la concienciación.
                            Guillermo Egido Conde, fundador de la fundación,
                            detalla las actividades que llevan a cabo y señala
                            la importancia del apoyo que brindan otras personas
                            e instituciones comprometidas con esta causa.
                          </p>
                          <div
                            className="ptf-spacer"
                            style={{
                              "--ptf-xxl": "0.8rem",
                              "--ptf-md": "0.8rem",
                            }}
                          ></div>
                        </div>
                        <div
                          className="ptf-spacer"
                          style={{ "--ptf-xxl": "2rem", "--ptf-md": "1rem" }}
                        ></div>

                        <div className="col-lg-8 offset-lg-2">
                          <img
                            src={require("../../../../assets/img/blog/post-11.jpg")}
                            alt="imagen"
                            style={{ paddingTop: "0rem" }}
                          />
                        </div>
                        <div
                          className="ptf-spacer"
                          style={{ "--ptf-xxl": "2.8rem", "--ptf-md": "1rem" }}
                        ></div>
                      </div>

                      <p style={{ fontWeight: "bold" }}>
                        ¿Cuál fue el principal motivo para la creación de la
                        Fundación Disgrup?
                      </p>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "0.8rem", "--ptf-md": "0.8rem" }}
                      ></div>

                      <p>
                        En 2005 sufrí un cavernoma cerebral y siete derrames. Al
                        sufrir una discapacidad en tu propia carne y estar
                        ingresado más de un año en el hospital, te da tiempo a
                        pensar muchas cosas y entre ellas "que las personas con
                        discapacidad no tienen los servicios y las prestaciones
                        que deberían tener".
                      </p>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "0.8rem", "--ptf-md": "0.8rem" }}
                      ></div>

                      <p style={{ fontWeight: "bold" }}>
                        ¿Qué actividades se llevan a cabo dentro de la fundación
                        para ayudar a las personas con discapacidad?
                      </p>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "0.8rem", "--ptf-md": "0.8rem" }}
                      ></div>

                      <p>
                        La fundación brinda ayudas personalizadas a cada una de
                        las personas con discapacidad que lo solicitan, siempre
                        que la fundación esté en predisposición de hacer
                        efectiva esta, ya que cada persona necesita una ayuda
                        diferente. También, hacemos acciones genéricas y actos
                        solidarios, como comidas con personas con discapacidad,
                        viajes, ferias, carreras solidarias...
                      </p>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "0.8rem", "--ptf-md": "0.8rem" }}
                      ></div>

                      <p style={{ fontWeight: "bold" }}>
                        ¿En qué consisten las charlas de concienciación que
                        brinda la fundación?
                      </p>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "0.8rem", "--ptf-md": "0.8rem" }}
                      ></div>

                      <p>
                        Estas charlas van principalmente dirigidas a jóvenes y
                        niños y lo que se intenta hacer es que desde pequeños
                        vean a las personas con discapacidad no como bichos
                        raros, sino como personas que forman parte de la
                        sociedad y se cuente con ellos para las diferentes
                        actividades de la vida cotidiana.
                      </p>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "0.8rem", "--ptf-md": "0.8rem" }}
                      ></div>

                      <p style={{ fontWeight: "bold" }}>
                        ¿Cómo logran financiar los servicios a los que acceden
                        las personas con discapacidad?
                      </p>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "0.8rem", "--ptf-md": "0.8rem" }}
                      ></div>

                      <p>
                        Nos financiamos a través de empresas y personas
                        privadas, mediante donaciones privadas. Además, hacemos
                        estrategias solidarias para recaudar fondos como cenas
                        benéficas, rifas y también cogemos alguna subvención
                        pública, aunque muy pocas, para hacer actividades muy
                        concretas, como, por ejemplo, el Camino de Santiago para
                        personas con discapacidad, intercambios vacacionales...
                      </p>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "0.8rem", "--ptf-md": "0.8rem" }}
                      ></div>

                      <p style={{ fontWeight: "bold" }}>
                        ¿Qué sensación te genera cuando las personas con
                        discapacidad que reciben la ayuda de la fundación
                        mejoran su calidad de vida?
                      </p>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "0.8rem", "--ptf-md": "0.8rem" }}
                      ></div>

                      <p>
                        Normalmente, le damos ayudas a personas con discapacidad
                        que no se lo pueden permitir, entonces están muy
                        agradecidas. Por ejemplo, contribuimos dando cosas que
                        no pueden tener, como una silla de ruedas eléctrica, una
                        prótesis ortopédica, sesiones de fisioterapia, terapia
                        ocupacional, o logopedia. También hay otro tipo de
                        personas con discapacidad a destacar que es que están
                        llamando todos los días, pero cuando reciben la ayuda
                        nunca más se supo.
                      </p>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "0.8rem", "--ptf-md": "0.8rem" }}
                      ></div>

                      <p style={{ fontWeight: "bold" }}>
                        ¿De qué manera pueden contribuir el resto de personas al
                        trabajo de la Fundación Disgrup?
                      </p>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "0.8rem", "--ptf-md": "0.8rem" }}
                      ></div>

                      <p>
                        Pueden entrar en la página web de disgrup.org y hacer
                        una donación. Una donación recurrente donando 12 euros
                        al mes (144 € al año), de los cual Hacienda les va a
                        devolver el 80 %. Aparte, pueden hacer donaciones por
                        Bizum al 06740 y, de forma gratuita, pueden suscribirse
                        al canal de YouTube de la fundación y dar
                        visualizaciones. Cuantas más visualizaciones haya mejor,
                        ya que con un número de visualizaciones determinado, la
                        plataforma al final paga. Además, hay empresas que les
                        servimos como imagen, como la reciente incorporación a
                        la fundación de la marca de sillas de ruedas eléctricas
                        QUANTUM #1 for rehab power, a la que aprovecho para
                        agradecerle la confianza depositada en la fundación.
                      </p>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "0.8rem", "--ptf-md": "0.8rem" }}
                      ></div>

                      <p style={{ fontWeight: "bold" }}>
                        ¿Qué rol cumplen las redes sociales y plataformas
                        digitales en su objetivo de fortalecer y aumentar el
                        alcance del proyecto?
                      </p>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "0.8rem", "--ptf-md": "0.8rem" }}
                      ></div>

                      <p>
                        Tanto las redes sociales como las plataformas digitales
                        son un método muy efectivo y muy económico a la hora de
                        difundir información. A través de esas redes y
                        plataformas podemos conseguir financiación y también que
                        la población en general sepa a qué destinamos los
                        recursos recibidos, y de las acciones que hacemos.
                      </p>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "0.8rem", "--ptf-md": "0.8rem" }}
                      ></div>

                      <p style={{ fontWeight: "bold" }}>
                        ¿Por qué crees que los derechos de las personas con
                        discapacidad en España, no se cumplen?
                      </p>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "0.8rem", "--ptf-md": "0.8rem" }}
                      ></div>

                      <p>
                        Pese a que hay multitud de entidades dedicadas a la
                        discapacidad grandes e importantes en España, que
                        reciben subvenciones y dinero público para hacer que las
                        leyes y los derechos de las personas con discapacidad se
                        cumplan, desgraciadamente, ese dinero no llega para
                        todas las demandas del colectivo y las leyes y derechos
                        que emanan a las personas con discapacidad en España no
                        se cumplen.
                      </p>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "0.8rem", "--ptf-md": "0.8rem" }}
                      ></div>

                      <p>
                        En vista de la importancia que tiene el trabajo de la
                        Fundación Disgrup para las personas con discapacidad, la
                        colaboración externa resulta fundamental para la
                        sostenibilidad de los proyectos. Al ser testigo de las
                        dificultades que sufren las personas con discapacidad,
                        Guillermo Egido Conde busca generar un cambio sustancial
                        en el contexto de la sociedad española.
                      </p>

                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.2rem", "--ptf-md": "1.2rem" }}
                      ></div>

                      <p style={{ fontStyle: "italic" }}>
                        Fuente:{" "}
                        <a href="https://www.diariosigloxxi.com/texto-diario/mostrar/4629549/solidaridad-entrevista-guillermo-egido-conde-fundador-presidente-fundacion-disgrup">
                          www.diariosigloxxi.com
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

export default NoticiaEntrevista;
