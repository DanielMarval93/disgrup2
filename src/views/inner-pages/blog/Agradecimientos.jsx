import React, { useState } from "react";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../components/footer/FooterTwo";
import HeaderDefault from "../../../components/header/HeaderDefault";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

const blogContent = [

  {
    img: "thanks-1",
    cat: "Fundador de la Casa del Tíbet",
    title: "Thubten Wangchen",
    date:"",
    videoId: "KJK-mxNAotM?si=N7_BfKDrkrB0bxR8",
    route: "https://www.youtube.com/watch?v=KJK-mxNAotM",
  },
  {
    img: "thanks-2",
    cat: "Subcampeón del Mundo",
    title: "Lionel Morales",
    date:"",
    videoId: "ni3Hwc4JWWQ?si=rlrHYRFeWOdml5VT",
    route: "https://www.youtube.com/watch?v=ni3Hwc4JWWQ",
  },
  {
    img: "thanks-3",
    cat: "Locutor Radio Mollet",
    title: "Josep Roca",
    date:"",
    videoId: "aPv6sFioSEE?si=M4em6C6fVj5I7wfb",
    route: "https://www.youtube.com/watch?v=aPv6sFioSEE",
  },
  {
    img: "thanks-4",
    cat: "Vice presidente de Barcelona Comerç",
    title: "Lluis Llanas",
    date:"",
    videoId: "cGgBDyc5x74?si=UWH3tS2lvWf5e13s",
    route: "https://www.youtube.com/watch?v=cGgBDyc5x74",
  },
  {
    img: "thanks-5",
    cat: "Activista social / Portavoz de COESPE",
    title: "Ramon Franquesa",
    date:"",
    route: "https://www.youtube.com/watch?v=cGgBDyc5x74",
    videoId: "FHAO7_SHFII?si=IwOR-2uoKcKaXuJf",
  },
  {
    img: "thanks-6",
    cat: "Fundación Esport Solidari Internacional",
    title: "Josep Maldonado",
    date:"",
    route: "https://www.youtube.com/watch?v=fwtHJCTLbF8",
    videoId: "fwtHJCTLbF8?si=6vXlefydguOAT4jA",
  },
  {
    img: "thanks-7",
    cat: "Critico de Moda / Presentador de Television",
    title: "Erik Putzbach",
    date:"",
    route: "https://www.youtube.com/watch?v=zIbm5690LKI",
    videoId: "zIbm5690LKI?si=9yYhc9ADHVU9V2d4",
  },
  {
    img: "thanks-8",
    cat: "Pizzero / YouTuber",
    title: "Pino Prestanizzi",
    date:"",
    route: "https://www.youtube.com/watch?v=XaB7dP-b2to",
    videoId: "XaB7dP-b2to?si=OAfCDLjEXFt3rSrY",
  },

];

const Agradecimientos = () => {
  const [isOpen, setOpen] = useState(false);
  const [isVideoId, setVideoId] = useState(false);

  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>Fundacion Disgrup - Agradecimientos</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />
        {/* End  HeaderHomeDefault */}

        <div className="main">
          <div className="ptf-page ptf-page--blog-grid">
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2rem", "--ptf-md": "2rem" }}
              ></div>

              <div className="container-xxl">
                <header className="ptf-single-post__header ptf-single-post__header--style-1">
                  <div className="container ">
                    <h1 className="ptf-single-post__title">
                      <span className="has-accent-1"> Agradecimientos</span>{" "}
                    </h1>
                    <div className="row">
                      <div className="col-xl-8 offset-xl-2">
                        <div className="ptf-single-post__content">
                          {/* <!--Spacer--> */}
                          <div
                            className="ptf-spacer"
                            style={{
                              "--ptf-xxl": "2rem",
                              "--ptf-md": "2.5rem",
                            }}
                          ></div>
                          <p>
                            En el canal youtube de la Fundación Disgrup, cada
                            día más personas famosas, influencers, youtubers y
                            en general relevantes en cualquier disciplina, se
                            acercan, con la motivación de agradecer de todo
                            corazón, la labor y el esfuerzo que desde la
                            Fundación estamos realizando, y así también ellos
                            estan colaborando, y ponen su «granito de arena».
                            Todos los actos de buena voluntad, nos ayudan en
                            nuestra misión, de mejorar las vidas de las personas
                            con discapacidad.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>

             

                <div className="row">
                  <div className="col-xl-8 col-lg-8">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
     
                    </div>
                  </div>
                  {/* End .col */}
                  <div className="col-xl-3 offset-xl-1 col-lg-4">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    ></div>
                  </div>
                </div>
              </div>
              {/* End .container-xxl */}
            </section>

            {/*=============================================
            Start Blog Grider section
            ============================================== */}
            <section>
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                ></div>
                {/* End .ptf-animated-block */}
              </div>
              {/* End .container-xxl */}

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "1.75rem", "--ptf-md": "1.375rem" }}
              ></div>
            </section>

            <section>
              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div
                  className="ptf-divider"
                  style={{
                    "--ptf-height": "1px",
                    "--ptf-color": "var(--ptf-color-14)",
                  }}
                ></div>
              </div>
            </section>
            {/* End continaer devider */}

            {/*=============================================
            Start Blog Grid section
            ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "4rem", "--ptf-md": "2.375rem" }}
              ></div>

              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <div
                    className="ptf-isotope-grid row"
                    style={{
                      "--bs-gutter-x": "3rem",
                      "--bs-gutter-y": "3rem",
                      marginLeft: "0",
                      marginRight: "0",
                    }}
                  >
                    {blogContent.map((val, i) => (
                      <div className="col-xl-4 col-lg-4" key={i}>
                        <article className="ptf-post ptf-post--style-1">
                          <div className="ptf-post__media">
                            <img
                              src={`assets/img/blog/grid/${val.img}.jpg`}
                              alt="blog"
                              loading="lazy"
                              onClick={() => {
                                setOpen(true);
                                setVideoId(val.videoId);
                              }}
                            />
                          </div>
                          <div className="ptf-post__content">
                            <header className="ptf-post__header">
                              <div
                                className="ptf-post__meta"
                                style={{ textAlign: "center" }}
                              >
                                <span className="cat">{val.cat}</span>
                              </div>
                              <h3
                                className="ptf-post__title"
                                style={{ textAlign: "center" }}
                              >
                                <Link    onClick={() => {
                                setOpen(true);
                                setVideoId(val.videoId);
                              }}>{val.title}</Link>
                              </h3>
                            </header>
                          </div>
                        </article>
                      </div>
                    ))}
                  </div>
                </div>
                {/* End .ptf-animated-block */}

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "6rem", "--ptf-md": "5rem" }}
                ></div>
              </div>
              {/* End .container-xxl */}
            </section>
            {/* End blog gird */}

            <section>
              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div
                  className="ptf-divider"
                  style={{
                    "--ptf-height": "1px",
                    "--ptf-color": "var(--ptf-color-14)",
                  }}
                ></div>
              </div>
            </section>
          </div>
          {/* End .ptf-page */}
        </div>
      </div>
      {/* End .main */}

      {/* <!--Footer--> */}
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

    // End .ptf-is--blog-grid
  );
};

export default Agradecimientos;
