import React from "react";
import Slider from "react-slick";

const SecondCarrousel = () => {
  const photosCar = [
    [
        "https://disgrup.org/wp-content/uploads/2023/02/ajuntament-de-barcelona-limes_reduides-15_rgb-1-300x112-1.png",
        "https://disgrup.org/wp-content/uploads/2023/02/logo_1360597455-300x44-1.jpg"
    ],
    [
        "https://disgrup.org/wp-content/uploads/2023/02/logo-fundacion-miro-bcn.jpg",
        "https://disgrup.org/wp-content/uploads/2023/02/logo-poble-espanyol-Bcn-1.jpg"
    ],
    [
        "https://disgrup.org/wp-content/uploads/2023/02/Logo-TMB.svg_-300x139-1.png",
        "https://disgrup.org/wp-content/uploads/2023/04/Ferrocarrils-Generalitat-Cat.jpeg"
    ]
  ];

  const settings = {
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div>
      <Slider {...settings}>
        {photosCar.map((photos, index) => (
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

export default SecondCarrousel;