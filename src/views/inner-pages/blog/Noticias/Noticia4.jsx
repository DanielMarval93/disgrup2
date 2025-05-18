import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../../components/footer/FooterTwo";
import HeaderDefault from "../../../../components/header/HeaderDefault";

const Noticia4 = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>
          Disgrup - Noticias - La Fundación Pere Terres nos invita a la Comida
          Conferencia Coloquio con el molt honorable Josep Rull i Andreu.{" "}
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
                      La Fundación Pere Terres nos invita a Conferencia con el
                      molt honorable{" "}
                    </h1>
                    <h1>
                      {" "}
                      <span className="has-accent-1">Josep Rull i Andreu.</span>
                    </h1>
                    <div className="ptf-single-post__meta">
                      <span className="cat">Disgrup</span>
                      <span className="date"> Feb 20, 2025</span>
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
                            La Fundación Disgrup, dedicada a apoyar a personas
                            con discapacidad, ha sido invitada a un evento
                            significativo organizado por la Fundación Pere
                            Tares. El encuentro, titulado “Que Ningú No Quedi
                            Enrere,” contará con la presencia del honorable
                            Josep Rull i Andreu y promete ser un espacio de
                            reflexión y diálogo sobre la inclusión social.
                          </p>
                          <p>
                            Este tipo de eventos son cruciales para visibilizar
                            las necesidades de las personas con discapacidad,
                            promoviendo un entorno más inclusivo y equitativo.
                            La participación de Disgrup en este coloquio subraya
                            su compromiso continuo con la causa, y su
                            colaboración con otras entidades refuerza la
                            importancia de unir esfuerzos para no dejar a nadie
                            atrás.
                          </p>
                        </div>
                        <div className="col-lg-6 ">
                          <img
                            src={"https://i.imgur.com/2FDG0ka.jpeg"}
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
                        La Fundación Pere Tarrés, conocida por su labor social,
                        ha organizado esta comida-conferencia para fomentar el
                        intercambio de ideas y experiencias que puedan impulsar
                        políticas y acciones concretas. La invitación a Josep
                        Rull i Andreu, una figura destacada en el ámbito
                        político, añade un valor especial al evento, brindando
                        la oportunidad de discutir sobre como las políticas
                        públicas pueden adaptarse para garantizar la igualdad de
                        oportunidades.
                      </p>

                      <p>
                        En resumen, este evento representa una excelente ocasión
                        para que la Fundación Disgrup continúe su labor de
                        sensibilización y apoyo, trabajando en conjunto con
                        otras organizaciones y lideres para construir un futuro
                        más inclusivo para todos. La colaboración y el diálogo
                        abierto son esenciales para que nadie quede atrás en
                        nuestra sociedad.
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

export default Noticia4;
