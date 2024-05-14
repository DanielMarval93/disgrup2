import React, { useState } from "react";
import { Helmet } from "react-helmet";
import CopyRightTwo from "../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../components/footer/FooterTwo";
import HeaderDefault from "../../../components/header/HeaderDefault";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

const blogContent = [
  {
    img: "ayudas-1",
    cat: "Ayudas a la discapacidad",
    title: "Bayane",
    route: "https://www.youtube.com/watch?v=12RBdsn4TSo",
    videoId: "12RBdsn4TSo",
    date:"",
  },
  {
    img: "ayudas-2",
    cat: "Ayudas a la discapacidad",
    title: "Saira",
    route: "https://www.youtube.com/watch?v=NJ9FaNohG9k",
    videoId: "NJ9FaNohG9k?si=W34jyArdR8NebFI2",
    date:"",
  },
  {
    img: "ayudas-3",
    cat: "Ayudas a la discapacidad",
    title: "Juan Antonio",
    route: "https://www.youtube.com/watch?v=w2NL-dSGcqg",
    videoId: "w2NL-dSGcqg?si=tLUyRYBEXtH50OAY",
    date:"",
  },
  {
    img: "ayudas-4",
    cat: "Ayudas a la discapacidad",
    title: "Anna Millet",
    route: "https://www.youtube.com/watch?v=GTXhRDOqiqM&t",
    videoId: "GTXhRDOqiqM?si=PHGlmI2Ue_6_2Zq1",
    date:"",
  },
  {
    img: "ayudas-5",
    cat: "Ayudas a la discapacidad",
    title: "David Rodriguez",
    route: "https://www.youtube.com/watch?v=ZDlwkH6EP1s",
    videoId: "ZDlwkH6EP1s?si=TY7EXRZkhIEja8I9",
    date:"",
  },
  {
    img: "ayudas-6",
    cat: "Ayudas a la discapacidad",
    title: "Roberta",
    route: "https://www.youtube.com/watch?v=9ULGYbDR79g&t",
    videoId: "9ULGYbDR79g?si=pP8KY5r4qAkNG0Ya",
    date:"",
  },
  {
    img: "ayudas-7",
    cat: "Ayudas a la discapacidad",
    title: "Tatiana",
    route: "https://www.youtube.com/watch?v=32fUqM6BK5M&t",
    videoId: "32fUqM6BK5M?si=veJkdtSdB0RZcpk_",
    date:"",
  },
  {
    img: "ayudas-8",
    cat: "Ayudas a la discapacidad",
    title: "Susana",
    route: "https://www.youtube.com/watch?v=xPmDGom-oFg",
    videoId: "xPmDGom-oFg?si=xRXgaqVrN4Xpsl2n",
    date:"",
  },
  {
    img: "ayudas-9",
    cat: "Ayudas a la discapacidad",
    title: "Jordi",
    route: "https://www.youtube.com/watch?v=qeRZ7x4Tz0E",
    videoId: "qeRZ7x4Tz0E?si=IHMK_25IgK4-QCCk",
    date:"",
  },
  {
    img: "ayudas-17",
    cat: "Ayudas a la discapacidad",
    title: "Betty",
    route: "https://www.youtube.com/watch?v=Pv8KP-bKd_M",
    videoId: "Pv8KP-bKd_M",
    date:"",
  },
  {
    img: "ayudas-18",
    cat: "Ayudas a la discapacidad",
    title: "Maria Dolores",
    route: "https://www.youtube.com/watch?v=PMAImUAKqJo",
    videoId: "PMAImUAKqJo",
    date:"",
  },
  {
    img: "ayudas-19",
    cat: "Ayudas a la discapacidad",
    title: "Anna",
    route: "https://www.youtube.com/watch?v=fGQWxG90VPo",
    videoId: "fGQWxG90VPo",
    date:"",
  },
  {
    img: "ayudas-10",
    cat: " a la discapacidad",
    title: "Carmen",
    route: "https://www.youtube.com/watch?v=PiMykbANYTQ",
    videoId: "PiMykbANYTQ?si=WnLoB_RF121nTJhd",
    date:"",
  },
  {
    img: "ayudas-11",
    cat: "Ayudas a la discapacidad",
    title: "Modibo",
    route: "https://www.youtube.com/watch?v=RnD-y0V8Lko",
    videoId: "RnD-y0V8Lko?si=JBiW_NtQWTxwi2gi",
    date:"",
  },
  {
    img: "ayudas-12",
    cat: "Ayudas a la discapacidad",
    title: "Ada Luz",
    route: "https://www.youtube.com/watch?v=2Ig0nEx0RGM&t",
    videoId: "2Ig0nEx0RGM?si=b6zcrL7NxEjxr3j-",
    date:"",
  },
  {
    img: "ayudas-13",
    cat: "Ayudas a la discapacidad",
    title: "Francisco Ribas",
    route: "https://www.youtube.com/watch?v=WAq4aPjFAYU",
    videoId: "WAq4aPjFAYU?si=7LYHOXJ21ujPExTz",
    date:"",
  },
  {
    img: "ayudas-14",
    cat: "Ayudas a la discapacidad",
    title: "Manel Martin",
    route: "https://www.youtube.com/watch?v=2Qzy3dsS0Xs",
    videoId: "2Qzy3dsS0Xs?si=sXKTPFcZB8_yrSdx",
    date:"",
  },
  {
    img: "ayudas-15",
    cat: "Ayudas a la discapacidad",
    title: "Aron",
    route: "https://www.youtube.com/watch?v=Ey-VoBDOg7Q",
    videoId: "Ey-VoBDOg7Q?si=QYWIIvDty8LaG1Q2",
    date:"",
  },

  {
    img: "ayudas-16",
    cat: "Ayudas a la discapacidad",
    title: "Manuel",
    route: "https://www.youtube.com/watch?v=_9zb9Q-If6E",
    videoId: "_9zb9Q-If6E?si=Cb4TktkoY8K1OZYD",
    date:"",
  },


];

const Agradecimientos = () => {
  const [isOpen, setOpen] = useState(false);
  const [isVideoId, setVideoId] = useState(false);

  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>Fundacion Disgrup - Ayudas</title>
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
                  Nuestras<span className="has-accent-1"> ayudas</span>{" "}
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
                          En la Fundación Disgrup ayudamos a personas con
                        discapacidad con grados diversos. Las ayudas que
                        proporcionamos son totalmente adaptadas a cada persona,
                        estudiando su caso y analizando de que mejor forma
                        podemos ayudarle, siempre intentando que la ayuda sea
                        efectiva y mejore sustancialemente su situación personal
                        y su día a día.
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

export default Agradecimientos;
