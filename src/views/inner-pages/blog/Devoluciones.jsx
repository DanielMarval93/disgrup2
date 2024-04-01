import React from "react";
import { Helmet } from "react-helmet";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import HeaderDefault from "../../../components/header/HeaderDefault";

const Devoluciones = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>Disgrup - Devoluciones</title>
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
              {/* <!--Post Wrapper--> */}
              <div className="ptf-single-post__wrapper">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-8 offset-xl-2">
                      {/* <!--Post Info--> */}

                      {/* <!--Post Excerpt--> */}
                      <div className="ptf-single-post__excerpt">
                        <h2 className="has-accent-1 important!">
                          POLITICA DE DEVOLUCIONES Y REEMBOLSOS
                        </h2>
                        {/* <!--Spacer--> */}
                        <div
                          className="ptf-spacer"
                          style={{
                            "--ptf-xxl": "1rem",
                            "--ptf-md": "1.5rem",
                            color: "var",
                          }}
                        ></div>

                        <div
                          className="ptf-spacer"
                          style={{
                            "--ptf-xxl": "1rem",
                            "--ptf-md": "1.5rem",
                            color: "var",
                          }}
                        ></div>
                        {/* <!--Divider--> */}
                        <div className="ptf-divider"></div>
                      </div>

                      {/* <!--Post Content--> */}
                      <div className="ptf-single-post__content">
                        <section>
                          <p>
                            En la Fundación Disgrup, estamos comprometidos con
                            la transparencia y la satisfacción de nuestros
                            donantes y colaboradores. A continuación,
                            presentamos nuestra política de devoluciones y
                            reembolsos para las donaciones realizadas a nuestra
                            organización:
                          </p>

                          {/* <!--Spacer--> */}
                          <div
                            className="ptf-spacer"
                            style={{
                              "--ptf-xxl": "2.5rem",
                              "--ptf-md": "2.5rem",
                            }}
                          ></div>
                        </section>

                        <section>
                          <h5 className="has-accent-1 important!">
                            DEVOLUCIONES:
                          </h5>
                          {/* <!--Spacer--> */}
                          <div
                            className="ptf-spacer"
                            style={{
                              "--ptf-xxl": "1rem",
                              "--ptf-md": "1rem",
                            }}
                          ></div>
                          <ul>
                            <p>
                              <span style={{ fontWeight: "bold" }}>
                                Donaciones no reembolsables:
                              </span>{" "}
                              Todas las donaciones realizadas a la Fundación
                              Disgrup son consideradas no reembolsables.
                              Entendemos que las circunstancias pueden cambiar y
                              que pueden surgir errores involuntarios al
                              realizar donaciones, pero debido a la naturaleza
                              de nuestro trabajo y la necesidad constante de
                              apoyo financiero, no podemos procesar devoluciones
                              de donaciones.
                            </p>{" "}
                          </ul>
                          {/* <!--Spacer--> */}
                          <div
                            className="ptf-spacer"
                            style={{
                              "--ptf-xxl": "2.5rem",
                              "--ptf-md": "2.5rem",
                            }}
                          ></div>
                        </section>
                        <section>
                          <h5 className="has-accent-1 important!">
                            REEMBOLSOS:
                          </h5>
                          <div
                            className="ptf-spacer"
                            style={{
                              "--ptf-xxl": "1rem",
                              "--ptf-md": "1rem",
                            }}
                          ></div>
                          <ul>
                            <p>
                              <span style={{ fontWeight: "bold" }}>
                                Errores de donación:
                              </span>{" "}
                              En caso de que se produzca un error al realizar
                              una donación a la Fundación Disgrup, solicitamos
                              que nos contacten lo antes posible para que
                              podamos investigar y resolver el problema. Si se
                              realiza una donación no autorizada o incorrecta,
                              haremos todo lo posible para corregir el error y,
                              si es posible, procesar un reembolso.
                            </p>

                            <div
                              className="ptf-spacer"
                              style={{
                                "--ptf-xxl": "1rem",
                                "--ptf-md": "1rem",
                              }}
                            ></div>
                            <p>
                              <span style={{ fontWeight: "bold" }}>
                                Transparencia y comunicación:
                              </span>{" "}
                              Nos comprometemos a mantener una comunicación
                              abierta y transparente con nuestros donantes. Si
                              surge alguna pregunta o inquietud relacionada con
                              una donación, invitamos a nuestros donantes a
                              ponerse en contacto con nosotros para que podamos
                              abordar sus preocupaciones y resolver cualquier
                              problema que pueda surgir.
                            </p>
                          </ul>
                          {/* <!--Spacer--> */}
                          <div
                            className="ptf-spacer"
                            style={{
                              "--ptf-xxl": "3rem",
                              "--ptf-md": "3rem",
                            }}
                          ></div>
                        </section>

                        <section>
                          <h5 className="has-accent-1 important!">CONTACTO:</h5>
                          <div
                            className="ptf-spacer"
                            style={{
                              "--ptf-xxl": "1rem",
                              "--ptf-md": "1rem",
                            }}
                          ></div>
                          <p>
                            Si necesitas más información sobre nuestra política
                            de devoluciones y reembolsos, o si deseas reportar
                            un error en una donación, no dudes en ponerte en
                            contacto con nosotros a través de los siguientes
                            medios:
                          </p>
                          <div
                            className="ptf-spacer"
                            style={{
                              "--ptf-xxl": "1rem",
                              "--ptf-md": "1rem",
                            }}
                          ></div>
                          <ul>
                            <li>
                            Teléfono: +34 932 265 050
                            </li>
                            <li>
                            Correo electrónico: info@disgrup.org
                            </li>
                            <li>
                            Dirección: Calle Aragón 61, 3º 2ª, 08015 Barcelona
                              </li>
                          </ul>
                          <div
                            className="ptf-spacer"
                            style={{
                              "--ptf-xxl": "1rem",
                              "--ptf-md": "1rem",
                            }}
                          ></div>
                          <p>
                            Agradecemos sinceramente tu apoyo y generosidad
                            hacia la Fundación Disgrup y estamos aquí para
                            ayudarte en cualquier momento.
                          </p>
                        </section>
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
        <footer className="ptf-footer ptf-footer--style-1">
          <div className="container-xxl">
            <div className="ptf-footer__top has-black-color">
              <Footer />
            </div>
            <div className="ptf-footer__bottom">
              <CopyRight />
            </div>
          </div>
        </footer>
      </div>{" "}
    </div>
  );
};

export default Devoluciones;
