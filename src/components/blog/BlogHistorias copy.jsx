import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import Slider from "react-slick";

const settings = {
  dots: true,
  arrow: false,
  infinite: true,
  fade: false,
  speed: 4500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
   adaptiveHeight: false,
};

const blogContent = [
  {
    img: "hist-1",
    cat: "Noticias",
    date: "17 de abril de 2023",
    title: "Anna Millet",
    videoId:"GTXhRDOqiqM"
  },
  {
    img: "hist-2",
    cat: "Historias",
    date: "3 De Marzo De 2023",
    title: "Francisco Ribas",
    videoId:"WAq4aPjFAYU"
  },
  {
    img: "hist-3",
    cat: "Historias",
    date: "2 De Marzo De 2022",
    title: "Ada Luz",
    videoId:"2Ig0nEx0RGM"
  },
  {
    img: "hist-4",
    cat: "Historias",
    date: "3 De Marzo De 2023",
    title: "Tatiana",
    videoId:"32fUqM6BK5M"
  },
  {
    img: "hist-5",
    cat: "Historias",
    date: "3 De Marzo De 2023",
    title: "Maria Dolores",
  },
  {
    img: "hist-6",
    cat: "Historias",
    date: "26 De Febrero De 2023",
    title: "Roberta",
    videoId: "9ULGYbDR79g"
  },
];

const BlogHistorias = () => {
  const [isOpen, setOpen,] = useState(false);
  const [isVideoId, setVideoId,] = useState(false);

  return (
    <>
      {blogContent.map((val, i) => (
        <div className="col-xl-4 col-lg-4" key={i}>
          <article className="ptf-post ptf-post--style-1">
            <div className="ptf-post__media">
              
              <img
                src={`assets/img/blog/grid/${val.img}.png`}
                alt="blog"
                loading="lazy"
                onClick={() => {setOpen(true);
                                setVideoId(val.videoId);
                              }}
              />
            </div>
            <div className="ptf-post__content">
              <header className="ptf-post__header">
                <div className="ptf-post__meta" style={{ textAlign: "center" }}>
                  <span className="cat">{val.cat}</span>
                  <span className="date">{val.date}</span>
                </div>
                <h3 className="ptf-post__title" style={{ textAlign: "center" }}>
                  <Link to="/blog-details">{val.title}</Link>
                </h3>
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  isVideoId={val.videoId}
                  videoId={isVideoId}
                  onClose={() => setOpen(false)}
                />
              </header>
            </div>
          </article>
        </div>
      ))}
    </>
  );
};

export default BlogHistorias;
