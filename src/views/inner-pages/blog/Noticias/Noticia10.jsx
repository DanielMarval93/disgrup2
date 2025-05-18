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
          Disgrup - Halloween para personas con discapacidad en Lanzarote{" "}
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
                      Halloween para personas con{" "}
                    </h1>
                    <h1>
                      {" "}
                      <span className="has-accent-1">
                        discapacidad en Lanzarote
                      </span>
                    </h1>
                    <div className="ptf-single-post__meta">
                      <span className="cat">Disgrup</span>
                      <span className="date"> Oct 30, 2024</span>
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
                            La Fundación Disgrup, conocida por su incansable
                            labor en apoyo a las personas con discapacidad,
                            organizó recientemente un evento especial de
                            Halloween en Lanzarote. Esta celebración fue
                            diseñada para ofrecer un espacio inclusivo y
                            accesible, permitiendo que todos disfrutaran de la
                            magia de esta festividad.
                          </p>
                          <p>
                            El evento se llevó́ a cabo en un ambiente festivo y
                            seguro, con decoraciones temáticas, música, y
                            actividades adaptadas para que todos pudieran
                            participar. Desde un concurso de disfraces hasta
                            talleres de manualidades, la jornada estuvo llena de
                            actividades pensadas para garantizar la diversión y
                            la integración.
                          </p>
                        </div>
                        <div
                          className="ptf-spacer"
                          style={{ "--ptf-xxl": "1.5rem", "--ptf-md": "1rem" }}
                        ></div>
                        <div className="col-lg-8 offset-lg-2 ">
                          <img
                            src={"https://i.imgur.com/8y6yz2k.jpeg"}
                            alt="blog"
                            loading="lazy"
                            onClick={() => {
                              setOpen(true);
                              setVideoId("LsxHaS35TP4");
                            }}
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
                        Uno de los aspectos más destacables fue la inclusión de
                        actividades sensoriales y adaptadas, que permitieron a
                        los asistentes disfrutar de la celebración a su propio
                        ritmo y de acuerdo a sus capacidades. La Fundación
                        Disgrup se esforzó́ por crear un ambiente donde cada
                        persona se sintiera bienvenida y valorada.
                      </p>

                      <p>
                        La respuesta de la comunidad fue extraordinariamente
                        positiva, resaltando la importancia de crear más eventos
                        inclusivos como este. Los participantes y sus familias
                        expresaron su gratitud por la oportunidad de celebrar
                        Halloween en un entorno amigable y adaptado a sus
                        necesidades.
                      </p>
                      <p>
                        Con este tipo de iniciativas, la Fundación Disgrup sigue
                        demostrando su compromiso con la inclusión y la
                        igualdad, marcando la diferencia en la vida de muchas
                        personas. Sin duda, este evento de Halloween en
                        Lanzarote se recordará como una celebración llena de
                        alegría, inclusión y espíritu comunitario.
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
