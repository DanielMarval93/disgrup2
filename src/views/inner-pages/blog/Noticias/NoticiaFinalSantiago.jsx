import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../../components/footer/FooterTwo";
import HeaderDefault from "../../../../components/header/HeaderDefault";
import SocialFour from "../../../../components/social/SocialFour";

const NoticiaFinalSantiago = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>
          Disgrup - Noticias - Fundacion Disgrup completa el Camino de Santiago
          en silla de ruedas{" "}
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
                  <h1 className="ptf-single-post__title ">
                    Fundacion Disgrup completa el
                  </h1>
                  <h1>
                    <span className="has-accent-1">Camino de Santiago</span> en
                    silla de ruedas
                  </h1>
                  <div className="ptf-single-post__meta">
                    <span className="cat">Disgrup</span>
                    <span className="date"> Feb 9, 2021</span>
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
                        <div>
                          <p>
                            En el turismo español, el recorrido histórico,
                            natural y cultural que propone el Camino de Santiago
                            es uno de los más interesantes de la región. En la
                            Fundación Disgrup, que ayuda a personas con
                            discapacidad, se han propuesto recorrer el camino de
                            Santiago en silla de ruedas para defender los
                            derechos de los discapacitados.
                          </p>
                          <p>
                            Esta iniciativa es parte de un movimiento de reclamo
                            que lleva adelante esta fundación, en torno a la
                            premisa de que los derechos de las personas con
                            discapacidad no están garantizados en España.
                          </p>
                        </div>

                        <div
                          className="ptf-spacer"
                          style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                        ></div>
                      </div>
                      <row>
                        <h5>
                          El recorrido de la Fundación Disgrup en el Camino de
                          Santiago en silla de ruedas
                        </h5>
                      </row>
                      {/* <!--Spacer-->*/}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                      ></div>

                      <div className="row">
                        <div className="col-lg-8">
                          <p>
                            La aventura empezó el 17 de junio y terminó el 24 de
                            junio llegando a la conocida Plaza Do Obradoiro en
                            Santiago, lugar donde todos los peregrinos se
                            encuentran al finalizar el Camino. Allí, los
                            aventureros de la Fundación Disgrup pudieron
                            reivindicar que hay muchos caminos durante el
                            recorrido que no están adaptados y no se cumplen los
                            derechos de este colectivo.
                          </p>
                          <p>
                            Debido a los largos kilómetros de recorrido, el
                            nivel de resistencia física necesaria para este
                            recorrido es alto. Por ello, la preparación previa
                            determina en gran parte la capacidad del grupo para
                            sortear dificultades en el camino. Algunos de los
                            obstáculos que surgen por el camino se relacionan
                            con la adaptación de las sillas de ruedas a esta
                            actividad. Por momentos incluso se necesitan ajustar
                            o reponer partes para poder continuar. Otra
                            dificultad importante, que además es parte del
                            reclamo fundamental que realiza la Fundación
                            Disgrup, es la escasa cantidad de opciones de
                            hoteles y albergues adaptados para personas con
                            silla de ruedas. Se debe tener en cuenta también que
                            la época más recomendable para realizar este
                            recorrido para personas con movilidad reducida no es
                            precisamente el verano, ya que las altas
                            temperaturas y una mayor concurrencia de personas
                            puede generar inconvenientes para avanzar a paso
                            constante en cada etapa.
                          </p>
                        </div>
                        <div className="col-lg-4" style={{ paddingTop: "5rem" }}>
                          <img
                            src={require("../../../../assets/img/blog/post-12.jpg")}
                            alt="imagen"
                            style={{ paddingTop: "0rem" }}
                          />
                        </div>
                        <div
                          className="ptf-spacer"
                          style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                        ></div>
                      </div>
                      <h5>
                        Fundación Disgrup peregrina hasta el fin del Camino de
                        Santiago por los derechos de las personas con
                        discapacidad
                      </h5>

                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.5rem", "--ptf-md": "1.5rem" }}
                      ></div>

                      <p>
                        La labor de la Fundación Disgrup se centra en promover
                        los derechos de las personas con discapacidad. Una de
                        sus mayores contribuciones a este objetivo es su
                        servicio de auditorías de accesibilidad. Por otro lado,
                        la meta de hacer respetar y ampliar los derechos de las
                        personas con discapacidad es lo que originó la
                        peregrinación por el Camino de Santiago. Esta se
                        desarrolla en el marco de un reclamo por el respeto y
                        cumplimiento de estos derechos en toda España, y
                        llegando a la catedral de Santiago el 24 de junio. Con
                        una gran concurrencia, Fundación Disgrup espera plasmar
                        esta experiencia en su canal de YouTube para compartir
                        el mensaje de su lucha por la mejora de calidad de vida
                        de las personas con discapacidad y para que todo el
                        mundo que lo desee, pueda ayudar gratuitamente a las
                        personas con discapacidad cada vez que vea un vídeo del
                        canal.
                      </p>  
                      
                        <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "0.5rem", "--ptf-md": "0.5rem" }}
                      ></div>

                  

                      <p>
                        Fuente:{" "}
                        <a href="https://www.diariocomo.es/la-fundacion-disgrup-reivindica-el-cumplimiento-de-los-derechos-de-las-personas-con-discapacidad-en-espana-con-su-llegada-al-final-del-camino-de-santiago-en-sillas-de-ruedas/?fbclid=IwAR0_LzIK8kWIbN6MBQF950P-fd00WTwtwBvCf487oHZ9KIwK-ygri6-gEmw">
                        www.diariocomo.es
                        </a>
                      </p>

                      {/* <!--Spacer-->*/}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.5rem", "--ptf-md": "1.5rem" }}
                      ></div>

                      <footer className="ptf-single-post__footer2">
                        {/* <!--Post Socials--> */}
                        <div className="ptf-post-socials">
                          <span>Compartir</span>
                          <SocialFour />
                        </div>
                      </footer>
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

export default NoticiaFinalSantiago;
