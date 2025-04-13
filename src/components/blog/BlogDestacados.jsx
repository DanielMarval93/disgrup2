import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

const blogContent = [
  {
    img: "dest-3",
    cat: "Noticias",
    date: "Eventos",
    title: "Halloween para personas con discapacidad en Lanzarote 2024 🎃👻",
    videoId: "LsxHaS35TP4",
  },
  {
    img: "dest-2",
    cat: "Noticias",
    date: "Camino de Santiago",
    title: "Camino De Santiago para personas con discapacidad 2024 ♿️",
    videoId: "z6xeytX4Li8",
  },
  {
    img: "thanks-1",
    cat: "Agradecimientos",
    date: "Fundador de la Casa del Tíbet",
    title: "Thubten Wangchen",
    videoId: "KJK-mxNAotM?si=N7_BfKDrkrB0bxR8",
  },
  {
    img: "dest-0",
    title: "Suscribete al canal de Youtube",
    videoId: "2Ig0nEx0RGM",
  },
];

const BlogHistorias = () => {
  const [isOpen, setOpen] = useState(false);
  const [isVideoId, setVideoId] = useState(null);

  return (
    <>
      <div
        className="ptf-spacer"
        style={{ "--ptf-xxl": "0rem", "--ptf-md": "0rem" }}
      ></div>
      <div className="row">
        {blogContent.slice(0, 4).map((val, i) => (
          <div
            className="col-xl-6 col-lg-6 col-md-6"
            key={i}
            style={{ marginBottom: "0.3rem", marginTop: i === 3 ? "2.7rem" : "0" }} // Adds space between rows and margin-top for the 4th item
          >
            {i === 3 ? (
              <a
                href="https://www.youtube.com/@fundaciondisgrup"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", textAlign: "center" }}
              >
                <img
                  src={`assets/img/blog/grid/${val.img}.jpg`}
                  alt={val.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
              </a>
            ) : (
              <article className="ptf-post ptf-post--style-1">
                <div className="ptf-post__content">
                  <header className="ptf-post__header">
                    <div
                      className="ptf-post__meta"
                      style={{ textAlign: "center" }}
                    >
                      <span className="cat">{val.cat}</span>
                      {(val.cat && val.date) ? ' ' : ''}
                      <span className="date">{val.date}</span>
                    </div>
                    <h3
                      className="ptf-post__title"
                      style={{ textAlign: "center", marginBottom: "1.5rem" }}
                    >
                      <Link to="/blog-details">{val.title}</Link>
                    </h3>
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "0.5rem", "--ptf-md": "0rem" }}
                    ></div>
                  </header>
                </div>
                <div className="ptf-post__media">
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      paddingBottom: "56.25%", // 16:9 aspect ratio
                      overflow: "hidden",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setOpen(true);
                      setVideoId(val.videoId);
                    }}
                  >
                    <img
                      src={`assets/img/blog/grid/${val.img}.jpg`}
                      alt={val.title}
                      loading="lazy"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </article>
            )}
          </div>
        ))}
      </div>

      {/* Modal Video */}
      {isVideoId && (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={isVideoId}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default BlogHistorias;
