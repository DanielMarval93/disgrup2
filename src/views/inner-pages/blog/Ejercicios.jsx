import React, { useState } from "react";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../components/footer/FooterTwo";
import HeaderDefault from "../../../components/header/HeaderDefault";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

const blogContent = [

  {
    img: "ejer-31",
    cat: "Ejercicios Cognitivos",
    title: "Francisco",
    route: "https://www.youtube.com/watch?v=2cTrbFOxKy8&t=2s",
    videoId: "Cbz_RZT7Meg",
  },
  {
    img: "ejer-30",
    cat: "Ejercicios Cognitivos",
    title: "Eugenio",
    route: "https://www.youtube.com/watch?v=2cTrbFOxKy8&t=2s",
    videoId: "-VCdrzMz9LY",
  },
  {
    img: "ejer-29",
    cat: "Ejercicios Cognitivos",
    title: "Emili",
    route: "https://www.youtube.com/watch?v=2cTrbFOxKy8&t=2s",
    videoId: "TnOVfdZNiXQ",
  },
  {
    img: "ejer-28",
    cat: "Ejercicios Cognitivos",
    title: "Esteva",
    route: "https://www.youtube.com/watch?v=2cTrbFOxKy8&t=2s",
    videoId: "CBXtn9RMuTE",
  },
  {
    img: "ejer-27",
    cat: "Ejercicios Cognitivos",
    title: "Guillem",
    route: "https://www.youtube.com/watch?v=2cTrbFOxKy8&t=2s",
    videoId: "0hkqf-u3WxU",
  },
  {
    img: "ejer-26",
    cat: "Ejercicios Cognitivos",
    title: "Manel",
    route: "https://www.youtube.com/watch?v=2cTrbFOxKy8&t=2s",
    videoId: "IzWmTWis0oM",
  },
  {
    img: "ejer-25",
    cat: "Ejercicios Cognitivos",
    title: "Guille",
    route: "https://www.youtube.com/watch?v=2cTrbFOxKy8&t=2s",
    videoId: "tRCKIGUB-9U",
  },
  {
    img: "ejer-24",
    cat: "Ejercicios Cognitivos",
    title: "Daca",
    route: "https://www.youtube.com/watch?v=2cTrbFOxKy8&t=2s",
    videoId: "2cTrbFOxKy8?si=OznjIWz-xb1UvzJq",
  },
  {
    img: "ejer-23",
    cat: "Ejercicios Cognitivos",
    title: "Toronto",
    route: "https://www.youtube.com/watch?v=Pt2wgU31K9E",
    videoId: "Pt2wgU31K9E?si=AYjwtN68V28dSjPD",
  },
  {
    img: "ejer-22",
    cat: "Ejercicios Cognitivos",
    title: "Santorini",
    route: "https://www.youtube.com/watch?v=90inxYMC_tE",
    videoId: "90inxYMC_tE?si=gAHmIPr111h0eBia",
  },
  {
    img: "ejer-21",
    cat: "Ejercicios Cognitivos",
    title: "Creta",
    route: "https://www.youtube.com/watch?v=x6Q4qgxNeTg",
    videoId: "x6Q4qgxNeTg?si=yU7E-Ol7m5lFKtDe",
  },
  {
    img: "ejer-20",
    cat: "Ejercicios Cognitivos",
    title: "Roma",
    route: "https://www.youtube.com/watch?v=gk6vUb2qeys",
    videoId: "gk6vUb2qeys?si=y9eVb6uJjMyUA9AZ",
  },
  {
    img: "ejer-19",
    cat: "Ejercicios Cognitivos",
    title: "Petra",
    route: "https://www.youtube.com/watch?v=MfVrestizGk",
    videoId: "MfVrestizGk?si=6Yi1-xoO5RHwd9xi",
  },
  {
    img: "ejer-18",
    cat: "Ejercicios Cognitivos",
    title: "San Francisco",
    route: "https://www.youtube.com/watch?v=K-EsrmgXuSg",
    videoId: "K-EsrmgXuSg?si=VRkQRFkkCqNb2D7G",
  },
  {
    img: "ejer-17",
    cat: "Ejercicios Cognitivos",
    title: "New York",
    route: "https://www.youtube.com/watch?v=y7NVrxFJPWQ",
    videoId: "y7NVrxFJPWQ?si=lAvhDVOCQtdznCvp",
  },
  {
    img: "ejer-16",
    cat: "Ejercicios Cognitivos",
    title: "Sevilla",
    route: "https://www.youtube.com/watch?v=75nXpBgod6I",
    videoId: "75nXpBgod6I?si=WgjkzCFChfhlD1Q2",
  },
  {
    img: "ejer-15",
    cat: "Ejercicios Cognitivos",
    title: "Tahiti",
    route: "https://www.youtube.com/watch?v=C31tXZ8q2vQ",
    videoId: "C31tXZ8q2vQ?si=UUepLOL76qJ7UML3",
  },
  {
    img: "ejer-14",
    cat: "Ejercicios Cognitivos",
    title: "Londres",
    route: "https://www.youtube.com/watch?v=2duADGhU8z8",
    videoId: "2duADGhU8z8?si=rQiqU5xFfbdfgTeo",
  },
  {
    img: "ejer-13",
    cat: "Ejercicios Cognitivos",
    title: "Hawai",
    route: "https://www.youtube.com/watch?v=j-qqabiDswE",
    videoId: "dEzG5ICKPy4?si=ro-ftEG53BH9qf8n",
  },
  {
    img: "ejer-12",
    cat: "Ejercicios Cognitivos",
    title: "Dinamarca",
    route: "https://www.youtube.com/watch?v=eMxpm5GFGic",
    videoId: "eMxpm5GFGic?si=KXWkQStSnQo6v0wy",
  },
  {
    img: "ejer-11",
    cat: "Ejercicios Cognitivos",
    title: "Los Angeles",
    route: "https://www.youtube.com/watch?v=HiOf0McP358",
    videoId: "HiOf0McP358?si=W58nYvCEPe2vVFks",
  },
  {
    img: "ejer-10",
    cat: "Ejercicios Cognitivos",
    title: "Munich",
    route: "https://www.youtube.com/watch?v=XNP_M23YXLo",
    videoId: "XNP_M23YXLo?si=KPUj_sB390DFYUXk",
  },
  {
    img: "ejer-9",
    cat: "Ejercicios Cognitivos",
    title: "Boston",
    route: "https://www.youtube.com/watch?v=o5qZiEeVNqA",
    videoId: "o5qZiEeVNqA?si=rOtZH48h5_j_J8t5",
  },
  {
    img: "ejer-8",
    cat: "Ejercicios Cognitivos",
    title: "Especial Carnaval",
    route: "https://www.youtube.com/watch?v=oM5jBd6Wkgo",
    videoId: "oM5jBd6Wkgo?si=agr6eQsdmwVeMIIs",
  },
  {
    img: "ejer-7",
    cat: "Ejercicios Cognitivos",
    title: "San Francisco",
    route: "https://www.youtube.com/watch?v=Q_vf5Q_LUBM",
    videoId: "Q_vf5Q_LUBM?si=xfp-44TA7Ez0bPkw",
  },
  {
    img: "ejer-6",
    cat: "Ejercicios Cognitivos",
    title: "Sidney",
    route: "https://www.youtube.com/watch?v=j-qqabiDswE",
    videoId: "j-qqabiDswE?si=nh8mSl6OjweQO-OL",
  },
  {
    img: "ejer-5",
    cat: "Ejercicios Cognitivos",
    title: "Tokyo",
    route: "https://www.youtube.com/watch?v=iXIkHbbVM4Y",
    videoId: "iXIkHbbVM4Y?si=ZkeiZSOte-sqMqnC",
  },
  {
    img: "ejer-4",
    cat: "Ejercicios Cognitivos",
    title: "Egipto",
    route: "https://www.youtube.com/watch?v=GUa-fy1rLf4",
    videoId: "GUa-fy1rLf4?si=HkYfy18GVwzGDT7i",
  },
  {
    img: "ejer-3",
    cat: "Ejercicios Cognitivos",
    title: "Paris",
    route: "https://www.youtube.com/watch?v=y7u2G0BbF_w",
    videoId: "y7u2G0BbF_w?si=gMc9_1-bllNQRKyZ",
  },
  {
    img: "ejer-2",
    cat: "Ejercicios Cognitivos",
    title: "Memoria",
    route: "https://www.youtube.com/watch?v=Adkd4vFX9CU",
    videoId: "Adkd4vFX9CU?si=JLYa4M-L75z5z_zE",
  },
  {
    img: "ejer-1",
    cat: "Ejercicios Cognitivos",
    title: "Atencion",
    route: "https://www.youtube.com/watch?v=ZKbz7tRC_2w&t",
    videoId: "ZKbz7tRC_2w?si=NyzovLglyMkvcVeA",
  },
  


];

const Ejercicios = () => {
  const [isOpen, setOpen] = useState(false);
  const [isVideoId, setVideoId] = useState(false);

  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>Fundacion Disgrup - Ejercicios</title>
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
                      <span className="has-accent-1"> Ejercicios</span>{" "}Cognitivos
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
                          por ello, que en nuestra sección de vídeos «Ejercicios
                          cognitivos con Guille», que encontrarás en nuestro
                          canal youtube, te proponemos una serie de ejercicios
                          de estimulación cognitiva, con diferentes propuestas
                          muy entretenidas y hasta divertidas. Ralizando estos
                          ejerciocios de forma regular, estarás en plena forma.
                          Atrévete!!
                          </p>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </header>

             
          {/* <!--Spacer--> */}
          <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "1.375rem" }}
              ></div>
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
                      <div className="col-xl-4 col-lg-4 col-md-6" key={i}>
                        <article className="ptf-post ptf-post--style-1">
                        <div className="ptf-post__content">
                            <header className="">
                              <div
                                className="ptf-post__meta"
                                style={{ textAlign: "center" }}
                              >
                                <span className="cat">{val.cat}</span>
                              </div>
                             
                            </header>
                          </div>
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

export default Ejercicios;
