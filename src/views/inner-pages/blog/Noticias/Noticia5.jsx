import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../../components/footer/FooterTwo";
import HeaderDefault from "../../../../components/header/HeaderDefault";

const Noticia5 = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>
          Disgrup - Noticias - La Fundación Disgrup presenta en la Casa del
          Tíbet de Barcelona su proyecto inclusivo del Camino de Santiago para
          personas con discapacidad{" "}
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
                      Presentamos en la Casa del Tíbet de Barcelona proyecto de{" "}
                    </h1>
                    <h1>
                      {" "}
                      <span className="has-accent-1">
                        Camino de Santiago para personas con discapacidad
                      </span>
                    </h1>
                    <div className="ptf-single-post__meta">
                      <span className="cat">Disgrup</span>
                      <span className="date"> Jun 27, 2024</span>
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
                            El pasado 27 de Junio, la Fundación Disgrup,
                            una organización dedicada a mejorar la calidad de
                            vida de las personas con discapacidad, realizó una
                            emotiva presentación en la Casa del Tibet de
                            Barcelona. El acto estuvo centrado en su próximo
                            proyecto: facilitar la realización del Camino de
                            Santiago para personas con discapacidad, que tendrá́
                            lugar del 1 al 7 de julio. Este evento marcó un hito
                            en la promoción de la inclusión y la accesibilidad
                            en una de las rutas de peregrinación más
                            emblemáticas del mundo.
                          </p>
            
                        </div>
                        <div className="col-lg-6 ">
                          <img
                            src={"https://i.imgur.com/tJIuk9Z.jpeg"}
                            alt="imagen"
                            style={{ paddingTop: "3rem" }}
                          />
                        </div>
                        <div
                          className="ptf-spacer"
                          style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                        ></div>
                      </div>

                                  <p>
                            Durante la presentación, los representantes de la
                            Fundación Disgrup explicaron los detalles de esta
                            iniciativa, que busca romper barreras y demostrar
                            que el Camino de Santiago es una experiencia
                            accesible para todos, independientemente de sus
                            capacidades físicas o cognitivas. El proyecto
                            incluirá́ adaptaciones específicas, como vehículos
                            especializados, guías capacitados y rutas diseñadas
                            para garantizar la seguridad y comodidad de los
                            participantes. Además, se contará con el apoyo de
                            voluntarios y profesionales que acompañaran a los
                            peregrinos en cada etapa del recorrido.
                          </p>
                      <p>
                        La elección de la Casa del Tíbet como sede de la
                        presentación no fue casual. Este espacio, conocido por
                        su compromiso con la paz y la inclusión, simboliza los
                        valores que la Fundación Disgrup quiere transmitir con
                        este proyecto: solidaridad, respeto y superación
                        personal. Durante el acto, se proyectaron testimonios de
                        personas con discapacidad que han participado en
                        ediciones anteriores, destacando como esta experiencia
                        transformadora les permitió́ conectar con la naturaleza,
                        consigo mismos y con los demás.
                      </p>



                      <p>
                        El Camino de Santiago, declarado Patrimonio de la
                        Humanidad por la UNESCO, es un viaje espiritual y
                        cultural que atrae a miles de peregrinos cada año. Sin
                        embargo, para las personas con discapacidad, esta
                        travesía puede presentar desafíos significativos. La
                        Fundación Disgrup busca cambiar esta realidad,
                        promoviendo una visión inclusiva que permita a todos
                        vivir esta experiencia única.
                      </p>

                      {/* <!--Spacer-->*/}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                      ></div>

                      <div className="col-lg-8 offset-lg-2  ">
                          <img
                            src={"https://i.imgur.com/T6AG3sV.jpeg"}
                            alt="imagen"
                            style={{ paddingTop: "0rem" }}
                          />
                        </div>

                        
                      {/* <!--Spacer-->*/}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                      ></div>
                        
                      <p>
                        Con este proyecto, la Fundación Disgrup no solo busca
                        facilitar el acceso al Camino de Santiago, sino también
                        sensibilizar a la sociedad sobre la importancia de la
                        inclusión y la accesibilidad. Del 1 al 7 de julio, un
                        grupo de valientes peregrinos demostrará que, con el
                        apoyo adecuado, no hay límites para alcanzar los sueños.{" "}
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

export default Noticia5;
