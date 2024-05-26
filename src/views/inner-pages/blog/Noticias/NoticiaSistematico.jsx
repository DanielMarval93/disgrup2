import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../../components/footer/FooterTwo";
import HeaderDefault from "../../../../components/header/HeaderDefault";
import SocialFour from "../../../../components/social/SocialFour";

const NoticiaSistematico = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>
          Disgrup - Noticias - Existe un incumplimiento sistemático de la
          normativa legal en el ámbito de las personas con discapacidad{" "}
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
                  <h3 className="ptf-single-post__title ">
                    Existe un incumplimiento sistemático de{" "}
                  </h3>
                  <h3>la normativa legal en el ámbito de </h3>
                  <h3>
                    <span className="has-accent-1">
                      las personas con discapacidad
                    </span>
                  </h3>
                  <div className="ptf-single-post__meta">
                    <span className="cat">Disgrup</span>
                    <span className="date"> Dic 1, 2021</span>
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
                          <h4 className="has-accent-1">
                            Pese que casí todos los ayuntamientos de España no
                            cumplen las leyes de accesibilidad, cuando renuevan
                            calles, cumplen la ley, en Tías “NO”:
                          </h4>
                        </div>
                        {/* <!--Spacer-->*/}
                        <div
                          className="ptf-spacer"
                          style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                        ></div>
                        <div className="col-lg-6">
                          <p>
                            Entrevista realizada en ‘diari de la discapacitat’,
                            al Presidente de la Fundación Disgrup, Guillermo
                            Egido.
                          </p>
                          <p>
                            El presidente de la Fundación Disgrup cree que las
                            entidades del sector no defienden bien los intereses
                            del colectivo.
                          </p>
                          <p>
                            A finales de 2009, Guillermo Egido acababa de salir
                            del hospital tras haber sufrido un cavernoma que
                            estalló en el tronco cerebral y le produjo una
                            discapacidad del 88%. La vida le dio un giro de 360
                            grados que le hizo tomar conciencia de lo complicado
                            que es ser una persona con discapacidad en un mundo
                            sin adaptar.
                          </p>
                        </div>
                        <div className="col-lg-6 ">
                          <img
                            src={require("../../../../assets/img/blog/post-2.jpg")}
                            alt="imagen"
                            style={{ paddingTop: "2rem" }}
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
                        A finales del mismo año creó la Fundación Disgrup, de la
                        que actualmente es presidente, «para ayudar a mejorar la
                        calidad de vida de las personas con discapacidad y
                        luchar por sus derechos»
                      </p>
                      <p>
                        En esta entrevista nos acercamos a la figura de este
                        activista del sector de la discapacidad y también a su
                        fundación.
                      </p>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                      ></div>
                      <p style={{ fontWeight: "700", fontStyle: "italic" }}>
                        Ha pasado más de una década desde que te cambió
                        radicalmente la vida. ¿Qué te has adaptado a esta nueva
                        vida?
                      </p>
                      <p>
                        Yo hasta ese momento no había tenido ninguna relación
                        con la discapacidad. Tras estar un año en coma en el
                        Hospital del Valle de Hebrón, estuve seis meses más en
                        camilla, para terminar finalmente en una silla de
                        ruedas. Toda esta nueva situación te da mucho tiempo
                        para pensar. Y lo primero que me di cuenta es que en
                        nuestro país no se cumplen la mayor parte de las leyes
                        que hacen referencia a las personas con discapacidad. Y
                        eso que estamos en un país democrático. Por eso desde el
                        primer momento que tomé conciencia de la situación, me
                        puse a trabajar para intentar cambiar esta situación.
                      </p>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                      ></div>
                      <p style={{ fontWeight: "700", fontStyle: "italic" }}>
                        ¿Por eso creaste la Fundación Disgrup?
                      </p>
                      <p>
                        Sí. La Fundación nació en diciembre de 2009 con el
                        objetivo de mejorar la calidad de vida de las personas
                        con discapacidad. Desde su creación hemos ayudado a
                        muchas personas a conseguirlo pero necesitamos llegar a
                        más gente. Entre otras cosas este es uno de los motivos
                        por los que próximamente iniciaré una colaboración con
                        su diario. En vuestra página hay muchos ejemplos de
                        ayudas a personas individuales.
                      </p>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                      ></div>
                      <p style={{ fontWeight: "700", fontStyle: "italic" }}>
                        ¿Pero no se trata de trabajar para el colectivo?
                      </p>
                      <p>
                        Para nosotros es muy importante poner nombre, apellido e
                        incluso DNI a las personas que ayudamos, porque queremos
                        que la gente sepa donde destinamos los escasos recursos
                        que obtenemos a través de donaciones particulares. Pero
                        también trabajamos para el colectivo, para mejorar la
                        accesibilidad de nuestro entorno y sobre todo para hacer
                        cumplir las normativas vigentes.
                      </p>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                      ></div>
                      <p style={{ fontWeight: "700", fontStyle: "italic" }}>
                        ¿Pero esta tarea no la realizan las entidades e
                        instituciones del sector de la discapacidad?
                      </p>
                      <p>
                        En teoría sí pero en la práctica no defienden nuestros
                        intereses como debieran. Un ejemplo claro son las
                        continuas denuncias que hacemos llegar sobre
                        accesibilidad en Barcelona y que nunca se resuelven.
                      </p>
                      <p>
                        ¿No tiene la ciudad un Plan de Accesibilidad? ¿Por qué
                        las entidades no las obligan a cumplir?. Lo mismo pasa
                        con la ley de accesibilidad universal, que es de
                        obligado cumplimiento desde diciembre de 2017. Como
                        nadie la cumplía se ha dado una moratoria de 10 años. Es
                        como si yo decidiera dejar de pagar el IBI durante una
                        década. ¿Me aplicarían la moratoria? Seguro que no. Hay
                        multitud de ejemplos como estos, por eso no entiendo que
                        las entidades del sector no presionen más a las
                        administraciones. Si nuestra fundación tuviera dinero
                        contrataríamos un abogado exclusivamente para poner
                        denuncias de accesibilidad. Pero la justicia en nuestro
                        país es cara y lenta, por lo que quizás no interesa.
                      </p>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                      ></div>
                      <p style={{ fontWeight: "700", fontStyle: "italic" }}>
                        Pero en otros aspectos sí se está avanzando, como en el
                        nuevo modelo de atención a las personas y el derecho a
                        la vida independiente …
                      </p>
                      <p>
                        Sí. En este tema estoy de acuerdo en que es
                        imprescindible este modelo centrado en las personas. Yo,
                        por ejemplo, no tengo recursos para disfrutar de un
                        asistente personal. Por eso hace 3 años me apunté a la
                        lista de espera en la ciudad de Barcelona. Recuerdo que
                        entonces me dijeron que era el número 76 en la lista.
                        Pasados 3 años todavía estoy esperando. Esto significa
                        que el modelo es bueno porque hay demanda, pero quizás
                        no tanto la gestión. Yo pienso que en realidad no hay
                        voluntad política de solucionar estos temas. ¿Cuántos
                        votos daría destinar más recursos a un tema como este?.
                      </p>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                      ></div>
                      <p style={{ fontWeight: "700", fontStyle: "italic" }}>
                        Quizás lo que hace falta es ir todos a una para hacer
                        más presión, como en el tema de la reforma de las
                        pensiones, que también afecta a las personas con
                        discapacidad. El sábado hay una manifestación en Madrid
                        en la que participará la Fundación Disgrup. ¿Por qué su
                        presencia?
                      </p>
                      <p>
                        Porque es un tema importante para todos. Es una
                        convocatoria del COESPE a nivel nacional. De Barcelona
                        salen 30 autobuses y 3 AVES. Nosotros iremos, por un
                        lado, para protestar que la reforma anunciada por el
                        Gobierno revalorizará las pensiones sobre el IPC pero
                        sólo del año 2022. Y a partir de este año a buscarse la
                        vida.
                      </p>
                      <p>
                        Por otra parte, con respecto a las personas con
                        discapacidad, tenemos constancia de que se están
                        haciendo valoraciones del grado de discapacidad en forma
                        no presencial, un hecho que está afectando a la realidad
                        de la situación de muchas personas. Y esto se debe parar
                        como sea.
                      </p>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
                      ></div>
                      <p style={{ fontWeight: "700", fontStyle: "italic" }}>
                        A pesar de que no es aún época navideña, ¿qué deseos
                        pedirías en tu Carta de los Reyes?
                      </p>
                      <p>
                        Ya no soy un niño pero si tuviera que pedir algo sería
                        que se cumplieran las normativas respecto a la
                        accesibilidad y que se respetaran los derechos de las
                        personas con discapacidad.
                      </p>
                      
                      <p style={{ fontWeight: "700"}}>
                        Fuente:{" "}
                        <a href="https://diarideladiscapacitat.cat/">
                          diarideladiscapacitat.cat
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

export default NoticiaSistematico;
