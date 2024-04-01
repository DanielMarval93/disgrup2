import React, { useState } from "react";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../components/footer/FooterTwo";
import HeaderDefault from "../../../components/header/HeaderDefault";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

const blogContent = [
  {
    img: "santi-1",
    cat: "Camino de Santiago",
    date: "17 Junio 2023",
    title: "Presentación",
    route: "https://www.youtube.com/watch?v=uRINHRkbhqY",
    videoId: "uRINHRkbhqY",
  },
  {
    img: "santi-2",
    cat: "Camino de Santiago",
    date: "21 junio 2023",
    title: "Dia 1 - Barcelona - Madrid - Sarria",
    route: "https://www.youtube.com/watch?v=b-M9QsO9feU",
    videoId: "b-M9QsO9feU",
  },
  {
    img: "santi-3",
    cat: "Camino de Santiago",
    date: "23 Junio 2023",
    title: "Dia 2 - Sarria",
    route: "https://www.youtube.com/watch?v=tnLV_F9KVeE",
    videoId: "tnLV_F9KVeE",
  },
  {
    img: "santi-4",
    cat: "Camino de Santiago",
    date: "25 Junio 2023",
    title: "Dia 3 - Sarria Portomarin",
    route: "https://www.youtube.com/watch?v=54eM-cxvqT8",
    videoId: "54eM-cxvqT8",
  },
  {
    img: "santi-5",
    cat: "Camino de Santiago",
    date: "26 junio 2023",
    title: "Dia 4 - Portomarín - Palas de Rei - Arzúa",
    route: "https://www.youtube.com/watch?v=21TIfb2SSXY",
    videoId: "21TIfb2SSXY",
  },
  {
    img: "santi-6",
    cat: "Camino de Santiago",
    date: "29 Junio 2023",
    title: "Dia 5 - Arzua - Pedrouzo - Santiago",
    route: "https://www.youtube.com/watch?v=UyKOdfJLHP0",
    videoId: "UyKOdfJLHP0",
  },
];

const CaminoSantiago = () => {
  const [isOpen, setOpen] = useState(false);
  const [isVideoId, setVideoId] = useState(false);

  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>Fundacion Disgrup - Camino de Santiago</title>
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
                        Camino de <span className="has-black-color">Santiago </span>
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
                                <span className="date">{val.date}</span>
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

export default CaminoSantiago;
