import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

const blogContent = [
  {
    img: "dest-2",
    cat: "Noticias",
    date: "Eventos",
    title: "Halloween para personas con discapacidad en Lanzarote 2024 🎃👻",
    videoId: "LsxHaS35TP4",
  },
  {
    img: "dest-3",
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
    img: "dest-0", // The special 4th item (image without video)
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
            style={{ marginBottom: "0.3rem" }} // Adds space between rows
          >
            <article className="ptf-post ptf-post--style-1">
              <div className="ptf-post__content">
                <header className="ptf-post__header">
                  {val.cat && (
                    <div
                      className="ptf-post__meta"
                      style={{ textAlign: "center" }}
                    >
                      <span className="cat">{val.cat}</span>&nbsp;
                      <span className="date">{val.date}</span>
                    </div>
                  )}
                  {val.title && (
                    <h3
                      className="ptf-post__title"
                      style={{ textAlign: "center" }}
                    >
                      <Link to="/blog-details">{val.title}</Link>
                    </h3>
                  )}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "0.5rem", "--ptf-md": "0rem" }}
                  ></div>
                </header>
              </div>
              <div className="ptf-post__media">
                {i === 3 ? (
                  // For the 4th item: just an image with a link
                  <a
                    href="https://www.youtube.com/@fundaciondisgrup"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`assets/img/blog/grid/${val.img}.jpg`}
                      alt="Fundación Disgrup"
                      loading="lazy"
                      style={{
                        width: "100%",
                        borderRadius: "8px",
                        objectFit: "cover",
                      }}
                    />
                  </a>
                ) : (
                  // For other items: clickable image to open modal
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
                )}
              </div>
            </article>
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
