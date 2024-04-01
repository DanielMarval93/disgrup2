import React, { useState } from "react";
import { Helmet } from "react-helmet";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import HeaderDefault from "../../../components/header/HeaderDefault";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import Slider from "react-slick";

const blogContentOne = [
  {
    img: "hist-1",
    cat: "Noticias",
    date: "17 de abril de 2023",
    title: "Anna Millet",
    videoId: "GTXhRDOqiqM",
  },
  {
    img: "hist-2",
    cat: "Historias",
    date: "3 De Marzo De 2023",
    title: "Francisco Ribas",
    videoId: "WAq4aPjFAYU",
  },
  {
    img: "hist-3",
    cat: "Historias",
    date: "2 De Marzo De 2022",
    title: "Ada Luz",
    videoId: "2Ig0nEx0RGM",
  },
  {
    img: "hist-4",
    cat: "Historias",
    date: "3 De Marzo De 2023",
    title: "Tatiana",
    videoId: "32fUqM6BK5M",
  },
  {
    img: "hist-5",
    cat: "Historias",
    date: "3 De Marzo De 2023",
    title: "Maria Dolores",
    videoId: "PMAImUAKqJo",
  },
  {
    img: "hist-6",
    cat: "Historias",
    date: "26 De Febrero De 2023",
    title: "Roberta",
    videoId: "9ULGYbDR79g",
  },
];

const blogContentTwo = [
  {
    img: "hist-7",
    cat: "Noticias",
    date: "17 de abril de 2023",
    title: "Bayane",
    videoId: "12RBdsn4TSo",
  },
  {
    img: "hist-8",
    cat: "Historias",
    date: "3 De Marzo De 2023",
    title: "Juan Antonio Herrera",
    videoId: "w2NL-dSGcqg&t",
  },
  {
    img: "hist-9",
    cat: "Historias",
    date: "2 De Marzo De 2022",
    title: "Ada Luz",
    videoId: "2Ig0nEx0RGM",
  },
  {
    img: "hist-10",
    cat: "Historias",
    date: "3 De Marzo De 2023",
    title: "Tatiana",
    videoId: "32fUqM6BK5M",
  },
  {
    img: "hist-11",
    cat: "Historias",
    date: "3 De Marzo De 2023",
    title: "Maria Dolores",
    videoId: "g5TPeDQhz7rRlJSn",
  },
  {
    img: "hist-12",
    cat: "Historias",
    date: "26 De Febrero De 2023",
    title: "Roberta",
    videoId: "9ULGYbDR79g",
  },
];

const Test = () => {
  const [isOpen, setOpen] = useState(false);
  const [isVideoId, setVideoId] = useState("dQw4w9WgXcQ");

  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    fade: true,
    speed: 4500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: false,
  };

  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>Fundacion Disgrup - Historias</title>
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
                        Historias
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
                <Slider {...settings}>
                  <div className="ptf-showcase-slide">
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
                        {blogContentOne.map((val, i) => (
                          <div className="col-xl-4 col-lg-4" key={i}>
                            <article className="ptf-post ptf-post--style-1">
                              <div className="ptf-post__media">
                                <img
                                  src={`assets/img/blog/grid/${val.img}.png`}
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
                                    <span className="date">{val.date}</span>
                                  </div>
                                  <h3
                                    className="ptf-post__title"
                                    style={{ textAlign: "center" }}
                                  >
                                    <Link to="/blog-details">{val.title}</Link>
                                  </h3>
                                </header>
                              </div>
                            </article>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="ptf-showcase-slide">
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
                        {blogContentTwo.map((val, i) => (
                          <div className="col-xl-4 col-lg-4" key={i}>
                            <article className="ptf-post ptf-post--style-1">
                              <div className="ptf-post__media">
                                <img
                                  src={`assets/img/blog/grid/${val.img}.png`}
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
                                    <span className="date">{val.date}</span>
                                  </div>
                                  <h3
                                    className="ptf-post__title"
                                    style={{ textAlign: "center" }}
                                  >
                                    <Link to="/blog-details">{val.title}</Link>
                                  </h3>
                                </header>
                              </div>
                            </article>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
              
                </Slider>
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
      <footer className="ptf-footer ptf-footer--style-1">
        <div className="container-xxl">
          <div className="ptf-footer__top">
            <Footer />
          </div>
          <div className="ptf-footer__bottom">
            <CopyRight />
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

export default Test;
