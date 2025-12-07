import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

const blogContent = [

  {
    img: "dest-1",
    cat: "Actividades",
    date: "Curiosidades",
    title: "100 preguntas de cultura general 🧠 GEOGRAFÍA parte 1 🗺️🌎",
    videoId: "H6vBvPF6Ut8",
  },
  {
    img: "dest-2",
    cat: "Noticias",
    date: "Denuncias",
    title: "RENFE en 2025, no cumple la ley de accesibilidad de 2007",
    videoId: "xE6_ZdxiHRk",
  },
  {
    img: "dest-3",
    cat: "Noticias",
    date: "KHLIPPER",
    title: "KHLIPPER (perro robot), en Lanzarote.",
    videoId: "3L93hImQD1M",
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
                    <h4
                      className="ptf-post__title"
                      style={{ textAlign: "center", marginBottom: "1.5rem" }}
                    >
                      <Link to="/blog-details">{val.title}</Link>
                    </h4>
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
