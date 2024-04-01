import React from "react";
import { Link } from "react-router-dom";

const serviceContent = [
  {
    icon: "lnil lnil-cup",
    titlePart1: "MISION",
    titlePart2: "",
    descriptions: `Icy Media Agency tiene como misión brindar apoyo a
    sus clientes para crecer en las plataformas digitales a
    través de la creatividad e innovación. Para lograr esto,
    utilizan técnicas de marketing de crecimiento o growth
    marketing, que se centran en mejorar el crecimiento del
    negocio centrándose en la retención del cliente`,
  },
  {
    icon: "lnil lnil-website-rank",
    titlePart1: "VISION",
    titlePart2: "",
    descriptions: ` Nuestras soluciones web UI/UX maximizan la experiencia del usuario y la interfaz para crear sitios web impactantes y efectivos.`,
  },
  {
    icon: "lnil lnil-3d",
    titlePart1: "BRAND",
    titlePart2: "PERSON",
    descriptions: ` Somos tu aliado de crecimiento, impulsando tu marca a nuevos niveles de éxito con estrategias probadas y personalizadas.`,
  },
  {
    icon: "lnil lnil-video-camera-alt-1",
    titlePart1: "PRESENCIA EN",
    titlePart2: "REDES SOCIALES",
    descriptions: ` "Potenciamos tu presencia en redes sociales con estrategias impactantes que conectan, interactúan y crean seguidores leales.`,
  },
];

const ServiceThree = () => {
  return (
    <>
      {serviceContent.map((val, i) => (
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="0"
          key={i}
        >
          {/* <!--Services Box--> */}
          <div className="ptf-service-box">
            <Link
              to="/service-details"
              className="ptf-service-box__link"
            ></Link>
            <div className="ptf-service-box__icon">
              <i className={val.icon}></i>
            </div>
            <h5 className="ptf-service-box__title">
              {val.titlePart1} <br />
              {val.titlePart2}
            </h5>
            <div className="ptf-service-box__content">
              <p>{val.descriptions}</p>
            </div>
            <div className="ptf-service-box__arrow">
              <i className="lnil lnil-chevron-right"></i>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};



export default ServiceThree;
