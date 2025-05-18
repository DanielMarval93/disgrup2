import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../../components/footer/FooterTwo";
import HeaderDefault from "../../../../components/header/HeaderDefault";

const Noticia7 = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>
          Disgrup - Noticias - La Fundación Disgrup explica de manera sencilla la Ley de Dependencia y su aplicación{" "}
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
                  La Fundación Disgrup explica la{" "}
                  </h1>
                  <h1>
                    {" "}
                    <span className="has-accent-1">
                    Ley de Dependencia y su aplicación
                    </span>
                  </h1>
                  <div className="ptf-single-post__meta">
                    <span className="cat">Disgrup</span>
                    <span className="date"> Jul 24, 2024</span>
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
                          La Fundación Disgrup, una organización comprometida con mejorar la calidad de vida de las personas con discapacidad, organizó una conferencia para explicar de manera clara y accesible la **Ley de Dependencia y su aplicación. Este evento, dirigido a familias, cuidadores y personas con discapacidad, tuvo como objetivo despejar dudas y facilitar el acceso a los recursos y prestaciones que ofrece esta ley.
                          </p>
                          <p> La Ley de Dependencia, oficialmente conocida como Ley 39/2006, es una normativa española que busca garantizar el derecho de las personas en situación de dependencia a recibir atención y apoyo para realizar actividades básicas de la vida diaria.
                          </p>
                        </div>
                        <div className="col-lg-6 ">
                          <img
                            src={"https://i.imgur.com/uTgCWGL.jpeg"}
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
<p> Durante la conferencia, los expertos de la Fundación Disgrup explicaron los aspectos clave de la ley, como los **tres grados de dependencia (moderada, severa y gran dependencia), los tipos de prestaciones económicas y los servicios disponibles, que incluyen ayudas a domicilio, centros de día y residencias.                                </p>
                          <p>
                          Uno de los puntos destacados de la conferencia fue la explicación paso a paso del proceso para solicitar el reconocimiento de la dependencia. Los asistentes aprendieron como presentar la solicitud, qué documentación es necesaria y como se realiza la valoración por parte de los equipos de profesionales. Además, se abordaron temas como los plazos de resolución y los recursos disponibles en caso de desacuerdo con la valoración.
                          </p>
                      <p>
                      La Fundación Disgrup también destacó la importancia de conocer los derechos que ampara esta ley, especialmente en lo relacionado con la autonomía personal y la calidad de vida. La conferencia finalizó con un espacio de preguntas y respuestas, donde los participantes pudieron resolver dudas específicas y recibir asesoramiento personalizado.
                      </p>

                      <p>
                      Este tipo de iniciativas reflejan el compromiso de la Fundación Disgrup con la inclusión y el empoderamiento de las personas con discapacidad y sus familias. Al facilitar el acceso a información clara y práctica, la fundación contribuye a que más personas puedan beneficiarse de los recursos que ofrece la Ley de Dependencia, promoviendo una sociedad más justa y solidaria.

                      </p>

                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.5rem", "--ptf-md": "1.5rem" }}
                      ></div>

                      <div className="col-lg-8 offset-lg-2  ">
                          <img
                            src={"https://i.imgur.com/F0KsdD5.jpeg"}
                            alt="imagen"
                            style={{ paddingTop: "0rem" }}
                          />
                        </div>

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

export default Noticia7;
