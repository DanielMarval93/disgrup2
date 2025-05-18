import React, { useState} from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../../components/footer/FooterTwo";
import HeaderDefault from "../../../../components/header/HeaderDefault";
import ModalVideo from "react-modal-video";




const Noticia3 = () => {

  const [isOpen, setOpen] = useState(false);
const [isVideoId, setVideoId,] = useState(false);

  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>
        Disgrup - Noticias - La Fundación Disgrup crea su himno: un canto a la
        inclusión y la superación{" "}
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
                  La Fundación Disgrup crea su himno:{" "}                  </h1>
                  <h1>
                    {" "}
                    <span className="has-accent-1">
                    un canto a la inclusión y la superación
                    </span>
                  </h1>
                  <div className="ptf-single-post__meta">
                    <span className="cat">Disgrup</span>
                    <span className="date"> Sep 20, 2024</span>
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
                            La Fundación Disgrup, una organización comprometida
                            con mejorar la vida de las personas con
                            discapacidad, ha dado un paso más en su misión de
                            promover la inclusión y la igualdad con la creación
                            de su propio **himno. Esta pieza musical, compuesta
                            especialmente para la fundación, se ha convertido en
                            un símbolo de esperanza, superación y unidad para
                            todos aquellos que forman parte de esta gran
                            familia.
                          </p>
                          <p>
                            El himno, titulado "Juntos somos más fuertes", es
                            una obra emotiva y motivadora que refleja los
                            valores fundamentales de la Fundación Disgrup: la
                            inclusión, la solidaridad y la lucha por un mundo
                            sin barreras. La letra, escrita en colaboración con
                            personas con discapacidad, voluntarios y
                            profesionales de la fundación, transmite un mensaje
                            claro: *"Nada es imposible cuando caminamos
                            juntos"*. La música, por su parte, combina melodías
                            inspiradoras con ritmos que invitan a la reflexión y
                            al optimismo.
                          </p>
                        </div>
                        <div
                          className="ptf-spacer"
                          style={{ "--ptf-xxl": "1.5rem", "--ptf-md": "1rem" }}
                        ></div>
                        <div className="col-lg-8 offset-lg-2 ">
                        <img
                              src={"https://i.imgur.com/QzY9VrG.jpeg"}
                              alt="blog"
                              loading="lazy"
                              onClick={() => {
                                setOpen(true);
                                setVideoId("6MrfFWsmQYc");
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
                      La presentación del himno tuvo lugar durante un evento especial organizado por la fundación, donde asistieron beneficiarios, colaboradores y representantes de entidades aliadas. El momento más emotivo llegó cuando un coro formado por personas con discapacidad interpretó por primera vez el himno, arrancando aplausos y lágrimas entre el público. Este acto no solo celebró la creación de una canción, sino que también reafirmó el compromiso de la fundación con la inclusión y la diversidad.
El himno de la Fundación Disgrup no es solo una canción, sino una herramienta más para sensibilizar a la sociedad sobre la importancia de la inclusión

                      </p>

                      <p>
                      Próximamente, estará́ disponible en las redes sociales y plataformas digitales de la fundación, para que todos puedan escucharlo, compartirlo y sentirse parte de este movimiento.
Con este himno, la Fundación Disgrup demuestra una vez más que, a través de la música y la unión, es posible construir un mundo más justo y accesible para todos. "Juntos somos más fuertes" es el lema que guía esta iniciativa y que seguirá́ inspirando a miles de personas.

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

export default Noticia3;
