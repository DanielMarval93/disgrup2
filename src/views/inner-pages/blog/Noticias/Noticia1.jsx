import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../../components/footer/FooterTwo";
import HeaderDefault from "../../../../components/header/HeaderDefault";

const Noticia1 = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>
          Disgrup - La Fundación Disgrup desea a todos unas Felices Fiestas
          llenas de Inclusión y Solidaridad{" "}
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
                      Felices Fiestas llenas de{" "}
                    </h1>
                    <h1>
                      {" "}
                      <span className="has-accent-1">
                        Inclusión y Solidaridad
                      </span>
                    </h1>
                    <div className="ptf-single-post__meta">
                      <span className="cat">Disgrup</span>
                      <span className="date"> Dec 23, 2024</span>
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
                            En estas fechas tan especiales, la Fundación
                            Disgrup, una organización dedicada a mejorar la
                            calidad de vida de las personas con discapacidad,
                            quiere enviar un mensaje de alegría, esperanza y
                            gratitud a todos sus beneficiarios, colaboradores,
                            voluntarios y amigos. *¡Felices fiestas! * es el
                            deseo que la fundación comparte con toda la
                            comunidad, recordando que la Navidad es una época
                            para celebrar la inclusión, la solidaridad y el
                            espíritu de superación.
                          </p>
                          <p>
                            Este año ha estado lleno de desafíos, pero también
                            de logros significativos. Desde la organización de
                            talleres inclusivos. Disgrup ha trabajado
                            incansablemente para romper barreras y crear
                            oportunidades.
                          </p>
                        </div>
                        <div className="col-lg-6 ">
                          <img
                            src={require("../../../../assets/img/blog/post-15.jpeg")}
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
                      <p>Cada sonrisa, cada avance y cada
                            testimonio de superación han sido la mayor
                            recompensa para todos los que forman parte de esta
                            gran familia. En estas fiestas, la fundación quiere
                            destacar la importancia de la inclusión. Por ello,
                            ha organizado diversas actividades navideñas
                            adaptadas y eventos solidarios, para que todos, sin
                            importar sus capacidades, puedan disfrutar de la
                            magia de la Navidad. Además, en colaboración con la
                            Cruz Roja, ha participado en la recogida de juguetes
                            inclusivos, asegurando que los Reyes Magos lleguen a
                            todos los hogares.
                            </p>
                      <p>
                        La Fundación Disgrup también quiere agradecer a todas
                        las personas y entidades que han apoyado su labor
                        durante este año. Gracias a las donaciones, el
                        voluntariado y el compromiso de empresas y particulares,
                        ha sido posible llevar a cabo proyectos que transforman
                        vidas y construyen un futuro más justo y accesible. Cada
                        gesto de generosidad ha sido una luz que ilumina el
                        camino hacia la inclusión.
                      </p>

                      <p>
                        En este mensaje navideño, la fundación invita a todos a
                        reflexionar sobre el verdadero significado de estas
                        fiestas: compartir, cuidar y celebrar la diversidad. Que
                        estas Navidades sean una oportunidad para acercarnos a
                        quienes más lo necesitan, para tender puentes y para
                        recordar que, juntos, somos más fuertes.
                      </p>

                      <p>
                        La Fundación Disgrup les desea unas felices fiestas
                        llenas de amor, paz y momentos inolvidables. Que el
                        próximo año esté cargado de nuevos proyectos, logros y,
                        sobre todo, de inclusión. ¡Gracias por ser parte de esta
                        gran familia y por hacer posible un mundo mejor para
                        todos! ¡Feliz Navidad y próspero Ano Nuevo! 🎄✨
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

export default Noticia1;
