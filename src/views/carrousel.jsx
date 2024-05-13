import React from "react";
import Slider from "react-slick";

const Carrousel = () => {
  const carrouselPhotos = [
    [
      "https://identitatcorporativa.gencat.cat/web/.content/Documentacio/descarregues/identificacio/BN/idb_c_blanc.png",
      "https://ccfundacions.cat/wp-content/uploads/2019/05/logo-white.png"
    ],
    [
      "https://disgrup.org/wp-content/uploads/2023/02/carrusel-web-fundacion-500-%C3%97-250-px-5.svg",
      "https://disgrup.org/wp-content/uploads/2023/02/carrusel-web-fundacion-500-%C3%97-250-px-6.svg"
    ],
    [
      "https://www.sanidad.gob.es/diseno/img/MSA.Gob-bn-positivo-gris.svg",
      "https://disgrup.org/wp-content/uploads/2023/05/14-1024x390.png",
      "https://upload.wikimedia.org/wikipedia/commons/0/00/Logotipo_del_Ministerio_de_Justicia.svg"
    ]
  ];

  const settings = {
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div>
      <Slider {...settings}>
        {carrouselPhotos.map((photos, index) => (
          <div key={index}>
            {photos.map((photo, photoIndex) => (
              <img key={photoIndex} src={photo} alt={`Slide ${index}-${photoIndex}`} style={{ width: "50%", marginRight: "10px" }} />
            ))}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carrousel;