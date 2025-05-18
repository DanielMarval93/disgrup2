import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../../components/footer/FooterTwo";
import HeaderDefault from "../../../../components/header/HeaderDefault";
import ModalVideo from "react-modal-video";

const Noticia6 = () => {
  const [isOpen, setOpen] = useState(false);
  const [isVideoId, setVideoId] = useState(false);

  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>
          Disgrup - Ayúdanos: Haz tu donación a la Fundación Disgrup y apoya a
          las personas con discapacidad{" "}
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
                      Haz tu donación a la Fundación Disgrup y{" "}
                    </h1>
                    <h1>
                      {" "}
                      <span className="has-accent-1">
                        apoya a las personas con discapacidad
                      </span>
                    </h1>
                    <div className="ptf-single-post__meta">
                      <span className="cat">Disgrup</span>
                      <span className="date"> Nov 02, 2024</span>
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
                            La Fundación Disgrup, una organización sin ánimo de
                            lucro dedicada a mejorar la calidad de vida de las
                            personas con discapacidad, lanza una campaña de
                            donaciones para continuar su labor transformadora.
                            Con el lema *"Ayúdanos, haz tu donación"*, la
                            fundación busca el apoyo de la sociedad para
                            financiar proyectos que promueven la inclusión, la
                            accesibilidad y la autonomía de quienes enfrentan
                            barreras físicas, sensoriales o cognitivas. Desde su
                            creación, la Fundación Disgrup ha trabajado
                            incansablemente para crear oportunidades y romper
                            estereotipos. Entre sus iniciativas destacan
                            programas de formación laboral, actividades
                            deportivas adaptadas, talleres de arte terapéutico y
                            proyectos de ocio inclusivo. Además, recientemente
                            presentó en la Casa del Tíbet de Barcelona su
                            proyecto estrella: facilitar el Camino de Santiago
                            para personas con discapacidad, que se llevará a
                            cabo del 1 al 7 de julio. Este tipo de iniciativas
                            no solo mejoran la calidad de vida de los
                            participantes, sino que también sensibilizan a la
                            sociedad sobre la importancia de la inclusión.
                          </p>
                          <p>
                            Sin embargo, para seguir adelante con estos
                            proyectos, la fundación necesita el apoyo de todos.
                            Las donaciones son vitales para cubrir los costes de
                            adaptación de infraestructuras, adquisición de
                            equipos especializados, formación de profesionales y
                            organización de actividades. Cada euro aportado se
                            convierte en una herramienta para construir un mundo
                            más justo y accesible.
                          </p>
                        </div>
                        <div
                          className="ptf-spacer"
                          style={{ "--ptf-xxl": "1.5rem", "--ptf-md": "1rem" }}
                        ></div>
                        <div className="col-lg-8 offset-lg-2 ">
                          <img
                            src={"https://i.imgur.com/tpYnzUm.jpeg"}
                            alt="blog"
                            loading="lazy"
                            onClick={() => {
                              setOpen(true);
                              setVideoId("4NdAgl-cARY");
                            }}
                          />
                        </div>
                        <div
                          className="ptf-spacer"
                          style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                        ></div>
                      </div>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                      ></div>
                      <h6>¿Como puedes ayudar?</h6>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                      ></div>
                      <p>
                        Hacer una donación es sencillo y puede realizarse a
                        través de la página web de la Fundación Disgrup. Además
                        de contribuciones económicas, la fundación también
                        acepta voluntariado y colaboraciones con empresas que
                        deseen sumarse a la causa. Las donaciones, por pequeñas
                        que sean, tienen un impacto enorme. Por ejemplo, con 50
                        euros se puede costear una sesión de terapia
                        ocupacional, mientras que con 200 euros se puede adaptar
                        un tramo de ruta para que sea accesible para sillas de
                        ruedas. La Fundación Disgrup no solo busca financiación,
                        sino también crear una red de personas comprometidas con
                        la inclusión. Cada donación es un paso hacia una
                        sociedad más equitativa, donde las personas con
                        discapacidad puedan desarrollar todo su potencial y
                        vivir con dignidad.
                      </p>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                      ></div>
                      <h6>Haz tu donación hoy y sé parte del cambio.</h6>

                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                      ></div>
                      <p>
                        Juntos, podemos construir un futuro donde nadie se quede
                        atrás. Visita la página web de la Fundación Disgrup y
                        descubre como tu contribución puede transformar vidas.
                        Porque la inclusión no es solo un derecho, es una
                        responsabilidad de todos. ¡Ayúdanos a hacerla realidad!
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
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={isVideoId}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default Noticia6;
