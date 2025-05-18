import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../../components/footer/FooterTwo";
import HeaderDefault from "../../../../components/header/HeaderDefault";

const Noticia8 = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>
          Disgrup - Noticias - La Fundación Disgrup se une a la Cruz Roja en la recogida de juguetes para los Reyes Magos{" "}
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
                  Disgrup se une a la Cruz Roja en la recogida{" "}
                  </h1>
                  <h1>
                    {" "}
                    <span className="has-accent-1">
                    de juguetes para los Reyes Magos
                    </span>
                  </h1>
                  <div className="ptf-single-post__meta">
                    <span className="cat">Disgrup</span>
                    <span className="date"> Dec 29, 2024</span>
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
                          La *Fundación Disgrup, una organización dedicada a mejorar la calidad de vida de las personas con discapacidad, ha anunciado que hará la recogida de juguetes en la Cruz Roja con motivo de la llegada de los Reyes Magos. Esta iniciativa solidaria, que se llevará a cabo durante el mes de diciembre, tiene como objetivo asegurar que todos los niños, especialmente aquellos en situación de vulnerabilidad o con discapacidad, reciban un regalo en estas fechas tan especiales.

                          </p>
                          <p>
                          La Fundación Disgrup, conocida por su compromiso con la inclusión y la solidaridad, se ha sumado a esta campaña con entusiasmo, movilizando a sus voluntarios y colaboradores para recolectar juguetes nuevos y adaptados. Estos juguetes no solo buscan entretener, sino también fomentar el desarrollo cognitivo, sensorial y motor de los niños con discapacidad. Juguetes como puzles adaptados, muñecos con texturas especiales o juegos sensoriales serán especialmente valorados.
                          </p>
                        </div>
                        <div className="col-lg-6 ">
                          <img
                            src={"https://i.imgur.com/2Cz9wvF.jpeg"}
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
                      Además de la recogida de juguetes, la fundación organizará talleres de sensibilización para explicar la importancia de regalar juguetes inclusivos y como estos pueden contribuir al desarrollo integral de los niños. Estos talleres estarán abiertos al público y se llevarán a cabo en colaboración con la Cruz Roja.
                      </p>

                      <p>
                      La campaña culminará con la entrega de los juguetes a las familias beneficiarias en un acto festivo que contará con la participación de voluntarios de ambas organizaciones. Este evento no solo busca repartir regalos, sino también transmitir un mensaje de esperanza y solidaridad, recordando que la Navidad es una época para compartir y cuidar de los más vulnerables.
                      </p>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.5rem", "--ptf-md": "1.5rem" }}
                      ></div>

                      <div className="col-lg-8 offset-lg-2  ">
                          <img
                            src={"https://i.imgur.com/T5tkS9t.jpeg"}
                            alt="imagen"
                            style={{ paddingTop: "0rem" }}
                          />
                        </div>
                        <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.5rem", "--ptf-md": "1.5rem" }}
                      ></div>

                      <p>
                      Con esta iniciativa, la Fundación Disgrup refuerza su compromiso con la inclusión y demuestra que, trabajando juntos, es posible hacer realidad la magia de los Reyes Magos para todos los niños. ¡Únete a esta causa y ayuda a iluminar la Navidad de quienes más lo necesitan!
                      </p>

                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.5rem", "--ptf-md": "1.5rem" }}
                      ></div>

                      <div className="col-lg-8 offset-lg-2  ">
                          <img
                            src={"https://i.imgur.com/rgAQVtF.jpeg"}
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

export default Noticia8;
