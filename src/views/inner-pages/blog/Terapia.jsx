import React, { useState } from "react";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../components/footer/FooterTwo";
import HeaderDefault from "../../../components/header/HeaderDefault";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

const blogContent = [
  {
    img: "tera-9",
    cat: "Terapia Ocupacional",
    title: "Challenge Nº 9",
    route: "https://www.youtube.com/watch?v=EtFimAcpRdU",
    videoId: "EtFimAcpRdU?si=C7frKVxAmFVopWQ1",
  },
  {
    img: "tera-7",
    cat: "Terapia Ocupacional",
    title: "Challenge Nº 7",
    route: "https://www.youtube.com/watch?v=tn1o6DWGuSo",
    videoId: "tn1o6DWGuSo?si=p0DFrcgmX7mjyka6",
  },
  {
    img: "tera-6",
    cat: "Terapia Ocupacional",
    title: "Challenge Nº 6",
    route: "https://www.youtube.com/watch?v=YwyzgbyuEGI",
    videoId: "YwyzgbyuEGI?si=OXBez1rswH16Q86r",
  },

  {
    img: "tera-5",
    cat: "Terapia Ocupacional",
    title: "Challenge Nº 5",
    route: "https://www.youtube.com/watch?v=jCZlQTr_UJY",
    videoId: "jCZlQTr_UJY?si=N5diFoB7vaFC7rqC",
  },
  {
    img: "tera-4",
    cat: "Terapia Ocupacional",
    title: "Challenge Nº 4",
    route: "https://www.youtube.com/watch?v=IM3XN62aDdI",
    videoId: "IM3XN62aDdI?si=vFwRy10A5DHsULgc",
  },
  {
    img: "tera-3",
    cat: "Terapia Ocupacional",
    title: "Challenge Nº 3",
    route: "https://www.youtube.com/watch?v=t2xsNW3S7z0",
    videoId: "t2xsNW3S7z0?si=YwMngV_SYC417rvF",
  },
  {
    img: "tera-2",
    cat: "Terapia Ocupacional",
    title: "Challenge Nº 2",
    route: "https://www.youtube.com/watch?v=ExFkIFhBJBc",
    videoId: "ExFkIFhBJBc?si=fjs_yJkLx6NuXkjn",
  },
  {
    img: "tera-1",
    cat: "Terapia Ocupacional",
    title: "Challenge Nº 1",
    route: "https://www.youtube.com/watch?v=sNc2HkEJgLE",
    videoId: "sNc2HkEJgLE?si=tY9aNKc_0_XvHBoj",
  },
];

const Terapia = () => {
  const [isOpen, setOpen] = useState(false);
  const [isVideoId, setVideoId] = useState(false);

  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>Fundacion Disgrup - Terapia</title>
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
                  <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                    <h1 className="ptf-single-post__title">
                      Terapia Ocupacional
                    </h1>
                    <h1>
                      {" "}
                      <span className="has-accent-1">con Candi</span>
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
                            En la Fundación Disgrup nos preocupamos por la salud
                            mental y física de todo el colectivo de personas con
                            discapacidad, pero también de cualquier persona. Es
                            por ello, que en nuestra sección de vídeos «Terapia
                            ocupacional con Candi», que encontrarás en nuestro
                            canal youtube, te proponemos una serie de ejercicios
                            de Terapia ocupacional, para que puedas realizar en
                            casa o en cualquier lugar.
                          </p>
                        </div>
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
                    ></div>
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
                      <div className="col-xl-4 col-lg-4 col-md-6" key={i}>
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
                                <Link
                                  onClick={() => {
                                    setOpen(true);
                                    setVideoId(val.videoId);
                                  }}
                                >
                                  {val.title}
                                </Link>
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

export default Terapia;
