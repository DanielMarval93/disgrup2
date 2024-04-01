import React, { useState } from "react";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../components/footer/FooterTwo";
import HeaderDefault from "../../../components/header/HeaderDefault";
import ImageGridTwo from "../../../components/image-grid/ImageGridTwo";
import ModalVideo from "react-modal-video";

const BlogDetails = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>Disgrup - Conocenos</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />
        {/* End  HeaderHomeDefault */}

        <div className="main">
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay="0"
          >
            <article className="ptf-single-post">
              {/* <!--Post Header--> */}
              <header className="ptf-single-post__header ptf-single-post__header--style-1">
                <div className="container-xxl">
                  <h1 className="ptf-single-post__title">¿Como nace</h1>
                  <h1>
                    {" "}
                    <span className="has-accent-1">Fundación Disgrup</span>?
                  </h1>
                  <div className="ptf-single-post__meta">
                    
                    
                    <div
                      className="ptf-video-button"
                      onClick={() => setOpen(true)}
                      style={{
                        "--ptf-title-color": "var(--ptf-accent-1)",
                        marginLeft: "2rem",
                      }}
                    >
                      <a href="/" rel="nofollow">
                        <i className="lnil lnil-play"></i>
                      </a>
                      <div className="ptf-video-button__title">
                        Nuestra <br />
                        historia
                      </div>
                    </div>
                      <br/>
                      
                    
                   
                  </div>
                </div>
              </header>
       
              {/* <!--Post Wrapper--> */}
              <div className="ptf-single-post__wrapper">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-8 offset-xl-2">
                      {/* <!--Post Info--> */}

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        
                      </div>

                      {/* <!--Spacer--> */}
                   

                      {/* <!--Post Excerpt--> */}
                      <div className="ptf-single-post__excerpt has-accent">
                        A fines del año 2009, Guillermo Egido acababa de salir
                        del hospital con 33 años, luego de encontrarse con un
                        cambio significativo en su vida
                      </div>

                      {/* <!--Post Content--> */}
                      <div className="ptf-single-post__content">
                        <p>
                          Supo que si el destino había decidido un cambio
                          trascendental en su vida, de alguna manera o de otra,
                          el también haría algo para colaborar con aquellas
                          personas que se encontraban en una situación similar a
                          la suya. Tres meses despues, el primero de Enero de
                          2010, nace la Fundación Disgrup.
                        </p>
                        <p>
                          El nombre no fue aleatorio, sino que resulta
                          trascendental para el trabajo que Guillermo fijaría
                          como sustento de un proyecto social, que permitiese
                          mejorar la calidad de vida de las personas con
                          discapacidad. En Cataluña, donde Disgrup tiene su
                          dirección física, «GRUP» significa grupo, y «DIS»,
                          claramente, alude a la condición de las personas que
                          son objeto de las acciones que se realizarán a lo
                          largo de los años.
                        </p>
                        {/* <!--Spacer--> */}
                        <div
                          className="ptf-spacer"
                          style={{ "--ptf-xxl": "5rem", "--ptf-md": "2.5rem" }}
                        ></div>

                        <ImageGridTwo />

                        {/* <!--Spacer--> */}
                        <div
                          className="ptf-spacer"
                          style={{ "--ptf-xxl": "5rem", "--ptf-md": "2.5rem" }}
                        ></div>
                        <h3 className="has-accent-1">
                          ¿Qué hace la fundación por las personas con
                          discapacidad?
                        </h3>
                        {/* <!--Spacer--> */}
                        <div
                          className="ptf-spacer"
                          style={{
                            "--ptf-xxl": "1.875rem",
                            "--ptf-md": "1.5625rem",
                          }}
                        ></div>
                        <p>
                          Los personas con discapacidad acceden a múltiples
                          servicios, a partir de convenios que se van realizando
                          día a día. Entre otros, inserción laboral,
                          financiamiento bancario, mensajería con descuentos,
                          viajes mas económicos, adaptaciones para vehículos,
                          sistemas de alarmas y, la novedad de este año, el
                          innovador proyecto de crowdfounding que ha sido
                          bautizado como «Disdeseo». Las cuotas para pertenecer
                          a la fundación son gratuitas siempre y cuando la
                          persona que lo solicite tenga una discapacidad
                          acresitada. No obstante, cualquier particular o
                          empresa puede hacer su donación y colaborar para que
                          cada uno de estos proyectos se haga realidad.
                        </p>
                        <section className="ptf-custom--3992 jarallax">
                          <div className="container">
                            <div className="row">
                              <div className="col-lg-7">
                                {/* <!--Spacer--> */}
                                <div
                                  className="ptf-spacer"
                                  style={{
                                    "--ptf-xxl": "3.125rem",
                                    "--ptf-lg": "0",
                                  }}
                                ></div>
                                {/* <!--Animated Block--> */}
                                <div
                                  className="ptf-animated-block"
                                  data-aos="fade"
                                  data-aos-delay="0"
                                >
                                  <h3 className="fz-36 has-accent-1">
                                    Boligrafo Solidario
                                  </h3>
                                  {/* <!--Spacer--> */}
                                  <div
                                    className="ptf-spacer"
                                    style={{ "--ptf-xxl": "1.875rem" }}
                                  ></div>
                                  {/* <!--Spacer--> */}
                                  <div
                                    className="ptf-spacer"
                                    style={{
                                      "--ptf-xxl": "1rem",
                                      "--ptf-md": "2.5rem",
                                    }}
                                  ></div>
                                  <p
                                    className="fz-18 has-black-color"
                                    style={{ maxWidth: "30rem" }}
                                  >
                                    Por último, y para incrementar la cantidad
                                    de ayudas que Disgrup otorga mes a mes,
                                    desde hace años se comenzó el proyecto del
                                    Boli Solidario. Con este elemento que todo
                                    el mundo necesita utilizar, proponemos
                                    semana a semana estar presentes en
                                    diferentes puntos de la península Ibérica,
                                    haciendo que las personas en la vía pública
                                    puedan adquirir un bolígrafo con el que
                                    están ayudando en forma rápida y directa.
                                    Asimismo, quienes están en nuestros stands,
                                    son personas con discapacidad afines a la
                                    Fundación que tienen una razón cada día para
                                    vestirse, salir de sus casas, y encontrar un
                                    lugar de vinculación y contención social.
                                  </p>
                                  <p
                                    className="fz-18 has-black-color"
                                    style={{ maxWidth: "30rem" }}
                                  >
                                    Nuestro lema, ser innovadores, rápidos y
                                    eficaces. Es por eso que siempre estamos
                                    actualizados con las últimas tendencias y
                                    tecnologías. Utilizamos nuestros
                                    conocimientos y experiencia para desarrollar
                                    estrategias de vanguardia y proyectos
                                    únicos, destacando por encima de la
                                    competencia.
                                  </p>
                                </div>
                                {/* <!--Spacer--> */}
                                <div
                                  className="ptf-spacer"
                                  style={{
                                    "--ptf-xxl": "2.125rem",
                                    "--ptf-lg": "0",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </section>
                        <p>
                          Para sintetizar,{" "}
                          <span
                            style={{ fontWeight: "bold" }}
                            className="has-accent-1"
                          >
                            la Fundación Disgrup intenta ser un colectivo
                          </span>
                          , un grupo de personas que por diversas
                          circunstancias, intentan concienciar, ayudar y mejorar
                          en diversos aspectos que tienen que ver con la
                          discapacidad
                        </p>
                        <div
                          className="ptf-spacer"
                          style={{
                            "--ptf-xxl": "2.875rem",
                            "--ptf-md": "1.5625rem",
                          }}
                        ></div>
                        <h3 className="has-accent-1">
                          Charlas de concienciación
                        </h3>
                        {/* <!--Spacer--> */}
                        <div
                          className="ptf-spacer"
                          style={{
                            "--ptf-xxl": "2.875rem",
                            "--ptf-md": "1.5625rem",
                          }}
                        ></div>
                        <p>
                          Ofrecemos a escuelas, institutos y universidades,
                          instituciones públicas o privadas, charlas con el
                          objetivo de fomentar la concienciación de la realidad
                          de las personas discapacitadas. Queremos dar a conocer
                          el punto de vista y la experiencia de la vida
                          cotidiana desde la discapacidad con la convicción
                          firme de que las diferencias no nos hacen desiguales y
                          con el propósito de construir una sociedad más
                          respetuosa, cohesionada y solidaria. Disgrup es una
                          fundación que trabaja para la plena integración en la
                          sociedad de las personas discapacitadas.
                        </p>
                      </div>
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
      </div>{" "}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="D6daFM-p8Mg"
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default BlogDetails;
