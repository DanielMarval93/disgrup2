import React, { useState } from "react";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../components/footer/FooterTwo";
import HeaderDefault from "../../../components/header/HeaderDefault";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

const blogContent = [
  {
    img: "curio-12",
    cat: "Preguntas",
    date: "5 Octubre 2025",
    title: "100 Preguntas Cultura General GEOGRAFÍA - Parte 1",
    route: "https://www.youtube.com/watch?v=H6vBvPF6Ut8",
    videoId: "H6vBvPF6Ut8",
  },
  {
    img: "curio-11",
    cat: "Preguntas",
    date: "12 Julio 2025",
    title: "100 Preguntas Cultura General - Parte 3",
    route: "https://www.youtube.com/watch?v=s2qOTEP0Cp0",
    videoId: "s2qOTEP0Cp0",
  },
  {
    img: "curio-10",
    cat: "Preguntas",
    date: "11 Junio 2025",
    title: "100 Preguntas Cultura General - Parte 2",
    route: "http://youtube.com/watch?v=zIIHfrE6ssw",
    videoId: "zIIHfrE6ssw",
  },
  {
    img: "curio-9",
    cat: "Preguntas",
    date: "29 Mayo 2025",
    title: "100 Preguntas Cultura General - Parte 1",
    route: "https://www.youtube.com/watch?v=hdR8W_5hrao",
    videoId: "hdR8W_5hrao",
  },
  {
    img: "curio-8",
    cat: "Preguntas",
    date: "19 Abril 2025",
    title: "100 Preguntas celebridades con discapacidad - Parte 1",
    route: "https://www.youtube.com/watch?v=xE6_ZdxiHRk",
    videoId: "xE6_ZdxiHRk",
  },
  {
    img: "curio-7",
    cat: "Preguntas",
    date: "2 Abril 2025",
    title: "25 Preguntas celebridades con discapacidad - Parte 2",
    route: "https://www.youtube.com/watch?v=LwJF0TISnWA",
    videoId: "LwJF0TISnWA",
  },
  {
    img: "curio-6",
    cat: "Preguntas",
    date: "22 March 2025",
    title: "25 Preguntas celebridades con discapacidad - Parte 1",
    route: "https://www.youtube.com/watch?v=L2bul2GsJjg",
    videoId: "L2bul2GsJjg",
  },
  {
    img: "curio-5",
    cat: "Curiosidades",
    date: "13 March 2025",
    title: "Celebridades con discapacidad",
    route: "https://www.youtube.com/watch?v=Ox8cECjzwyU",
    videoId: "Ox8cECjzwyU",
  },
  {
    img: "curio-4",
    cat: "Preguntas",
    date: "1 Marzo 2025",
    title: "Banderas y Capitales - Parte 2",
    route: "https://www.youtube.com/watch?v=tvS00u3qgk8",
    videoId: "tvS00u3qgk8",
  },
  {
    img: "curio-3",
    cat: "Preguntas",
    date: "18 Febrero 2025",
    title: "Banderas y Capitales - Parte 1",
    route: "https://www.youtube.com/watch?v=6CIefLROp5o",
    videoId: "6CIefLROp5o",
  },
  {
    img: "curio-2",
    cat: "Preguntas",
    date: "1 Febrero 2025",
    title: "Cultura General - Parte 2",
    route: "https://www.youtube.com/watch?v=9-diObeKiDA",
    videoId: "9-diObeKiDA",
  },
  {
    img: "curio-1",
    cat: "Preguntas",
    date: "29 Enero 2025",
    title: "Cultura General - Parte 1",
    route: "https://www.youtube.com/watch?v=cjLJYQyi9Mc",
    videoId: "cjLJYQyi9Mc",
  },
];

const Curiosidades = () => {
  const [isOpen, setOpen] = useState(false);
  const [isVideoId, setVideoId] = useState(false);

  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>Fundacion Disgrup - 100 Preguntas y Curiosidades</title>
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
                <div className="row">
                  <div className="col-xl-8 col-lg-8">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1
                        className="large-heading has-accent-1"
                        style={{ marginLeft: "1.4rem" }}
                      >
                        100 Preguntas y <span className="has-black-color">Curiosidades </span>
                      </h1>
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
                          
                          <div className="ptf-post__content">
                            <header className="ptf-post__header">
                              <div
                                className="ptf-post__meta"
                                style={{ textAlign: "center" }}
                              >
                                <span className="cat">{val.cat}</span>
                                <span className="date">{val.date}</span>

                                <div className="ptf-post__media">
                                         {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
              ></div>
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

export default Curiosidades;
