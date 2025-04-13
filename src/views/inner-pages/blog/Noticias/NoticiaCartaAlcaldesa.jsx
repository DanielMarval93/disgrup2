import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../../components/footer/FooterTwo";
import HeaderDefault from "../../../../components/header/HeaderDefault";

const NoticiaProyectoLanzarote = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>Disgrup - Noticias - Carta a la alcaldesa de Barcelona</title>
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
                    Carta a la alcaldesa{" "}
                  </h1>
                  <h1>
                    {" "}
                    <span className="has-accent-1">de Barcelona</span>
                  </h1>
                  <div className="ptf-single-post__meta">
                    <span className="cat">Disgrup</span>
                    <span className="date"> Dic 22, 2020</span>
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
                        <div className="col-lg-8">
                          <p>
                            Guillermo Egido, con documento nacional de identidad
                            número 46352817C, con una discapacidad de un 88% (se
                            adjunta como documento número 1) usuario de silla de
                            ruedas, ciudadano natal de Barcelona y presidente de
                            la Fundación Disgrup, de ayuda a las personas con
                            discapacidad, con sede central en Barcelona.
                          </p>
                          <p>
                            Le quería hacer partícipe por si lo desconoce, que
                            Barcelona a día de hoy, no cumple la ley de
                            accesibilidad ni los derechos humanos de las más de
                            140.000 personas con discapacidad censadas en la
                            ciudad de la cual es alcaldesa (aunque como ya sabrá
                            «el desconocimiento de la ley no exime su
                            cumplimiento»), hecho que denuncie el 1 de marzo de
                            2019 con número de registro 1-2019-0127644-1 (se
                            adjunta como documento número 2) que a día de hoy no
                            ha tenido respuesta, hecho que se reclamó mediante
                            escrito que se presentó el 26 de noviembre de 2020
                            con número de registro 1-2020-0416436-1 (se adjunta
                            como documento número 3), entre la presentación del
                            primer y segundo escrito, he hecho conocedores de la
                            denuncia para su supuesta intervención y aplicación,
                            a:
                          </p>
                        </div>
                        <div className="col-lg-4">
                          <img
                            src={require("../../../../assets/img/blog/post-6.jpeg")}
                            alt="imagen"
                            style={{ paddingTop: "6rem" }}
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

                      <div className="row">
                        <div className="col-lg-5">
                          <ol>
                            <li>Ajuntament de Barcelona</li>
                            <li>
                              Instituto Municipal de Personas con Discapacidad
                              del Ayuntamiento de Barcelona
                            </li>
                            <li>Sindic de Greuges de Barcelona</li>
                            <li>Sindic de Greuges de Catalunya</li>
                            <li>Defensor del pueblo</li>
                            <li>Federación Ecom</li>
                            <li>Turismo de Barcelona</li>
                            <li>European Disability Forum</li>
                            <li>Casa Real</li>
                            <li>Ministerio de la Presidencia</li>
                            <li>Comisión Europea</li>
                            <li>Fiscalía Provincial de Barcelona</li>
                            <li>Afers Socials i families</li>
                            <li>
                              Departamento de la Presidencia de la Generalitat
                              de Catalunya
                            </li>
                          </ol>
                        </div>

                        <div
                          className="col-lg-7"
                          style={{ paddingTop: "1.5rem" }}
                        >
                          <p>
                            De toda la lista anterior, el único que no ha
                            omitido la denuncia, y está haciendo algo es el
                            Defensor del Pueblo, pero en su último escrito me
                            indica que, transcribe literalmente:
                          </p>

                          <p>
                            «La ausencia de respuesta a este último
                            requerimiento sería expresiva de una falta de
                            colaboración de la Administración para cumplir con
                            el deber legal impuesto por la Ley Orgánica 3/1981,
                            de 6 de abril, del Defensor del Pueblo, y daría
                            lugar a los efectos previstos en la misma ley,
                            incluidos el informe correspondiente a los Cortes
                            Generales y la declaración de la actitud hostil y
                            entorpecedora, según lo previsto en los artículos
                            18.2 y 24.1» (Se adjunta como documento número 4)
                          </p>
                        </div>
                      </div>

                      {/* <!--Spacer-->*/}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                      ></div>
                      <p>
                        Así que todo el mundo se lava las manos, y al que
                        interviene no le responden en varias ocasiones, y aquí
                        sigue sin pasar nada, seguimos incumpliendo la ley y los
                        derechos humanos, todo el mundo lo sabe, y lo más
                        curioso, es que Barcelona tiene superávit, ¿Tiene
                        explicación esto?
                      </p>

                      <p>
                        Pongamos un ejemplo real: el servicio de Taxi, que por
                        ley debería haber un 5% de la flota de vehículos
                        adaptados, que resultaría en 525 Taxis, y a duras penas
                        llegamos a 100, esto es algo que se podía haber
                        solucionado hace mucho tiempo, pero falta la voluntad
                        política, que hoy es inexistente, y como eso casi todo.
                      </p>

                      <p>
                        Porque demostrado con hechos, parece que su gobierno
                        prefiere hacer un carril bici de punta a punta de
                        Barcelona, o un parque infantil -entiendo que son
                        necesarios, pero hay necesidades más básicas que están
                        desatendidas… antes de cumplir la ley y adaptar bien la
                        ciudad, y dejar personas como yo disfrutar de una vida
                        digna, porque nosotros no hemos hecho nada malo. ¿Sabe
                        lo difícil que es vivir en un mundo discapacitado, y en
                        un semi confinamiento permanente durante toda tu vida?
                        En cambio, usted que se proclama tan social, así como su
                        partido y que defiende tanto el cumplimiento en igualdad
                        de condiciones de la ley, y las injusticias del gobierno
                        español al catalán.
                      </p>

                      <p>
                        Señora Colau, solo le pido que utilice su cargo para
                        arreglar esta injusticia, se cumpla la ley y los
                        derechos humanos, porque actualmente se está
                        perjudicando a las más de 140.000 personas con
                        discapacidad de su ciudad y sus familias en su día a
                        día.
                      </p>

                      <p>
                        Esperando una respuesta ante esta presunta
                        discriminación, vulneración de derechos fundamentales e
                        incumplimiento sistemático de la ley.
                      </p>

                      <p style={{"fontStyle":"italic"}}>En Barcelona, 18 de diciembre de 2020</p>

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

export default NoticiaProyectoLanzarote;
