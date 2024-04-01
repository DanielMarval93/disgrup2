import React from "react";
import { Link } from "react-router-dom";

const serviceContent = [
  {
    icon: "lnil lnil-cup",
    titlePart1: "CONSULTORIA",
    titlePart2: "DE BRANDING",
    descriptions: `Transforma tu marca, conectando emociones con estrategias sólidas para destacar en línea.`,
  },
  {
    icon: "lnil lnil-website-rank",
    titlePart1: "SOLUCIONES",
    titlePart2: "WEB",
    descriptions: ` Nuestras soluciones web maximizan la experiencia del usuario y la interfaz para crear sitios web impactantes.`,
  },
  {
    icon: "lnil lnil-3d",
    titlePart1: "GROWTH",
    titlePart2: "PARTNERSHIP",
    descriptions: ` Somos tu aliado de crecimiento, impulsando tu marca a nuevos niveles de éxito con estrategias probadas.`,
  },
  {
    icon: "lnil lnil-video-camera-alt-1",
    titlePart1: "PRESENCIA EN",
    titlePart2: "REDES SOCIALES",
    descriptions: `Potenciamos tu presencia en redes sociales con estrategias impactantes que conectan seguidores leales.`,
  },
];

const ServiceOne = () => {
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
              style={{pointerEvents:"none"}}
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



export default ServiceOne;
