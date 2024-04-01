import React from "react";

const approachContent = [
  {
    subTitle: "UNO",
    title: "Búsqueda",
    descriptions: `Buscamos  las mejores soluciones, analizamos el mercado y la competencia.`,
    delayAnimation: "0",
  },

  {
    subTitle: "DOS",
    title: "Concepto",
    descriptions: `Ideamos el concepto de marca y los objetivos a alcanzar.`,
    delayAnimation: "100",
  },
  {
    subTitle: "TRES",
    title: "Estrategia",
    descriptions: `Desarrollamos una estrategia conjunta con nuestros clientes, que nos permita aterrizar los conceptos y medir los resultados.`,
    delayAnimation: "200",
  },
  {
    subTitle: "CUATRO",
    title: "Desarrollo",
    descriptions: `Creamos e Implementamos los elementos necesarios para cumplir con nuestra estrategia marcada ( web, social media… )`,
    delayAnimation: "300",
  },
  {
    subTitle: "CINCO",
    title: "Test",
    descriptions: `Testeamos y comprobamos la viabilidad de la estrategia y los productos desarrollados.`,
    delayAnimation: "400",
  },
  {
    subTitle: "SEIS",
    title: "Entrega",
    descriptions: `Se entrega el proyecto al cliente con todo el material previamente acordado.`,
    delayAnimation: "500",
  },
];

const Approach = () => {
  return (
    <div
      className="row"
      style={{
        "--bs-gutter-x": "3.75rem",
        "--bs-gutter-y": "7.5rem",
      }}
    >
      {approachContent.map((val, i) => (
        <div className="col-xl-4 col-lg-6" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={val.delayAnimation}
          >
            {/* <!--Approach Box--> */}
            <div
              className="ptf-approach-box"
              style={{
                "--ptf-title-color": "var(--ptf-color-white)",
              }}
            >
              <div className="ptf-approach-box__subtitle">{val.subTitle}</div>
              <h3 className="ptf-approach-box__title h1">{val.title}</h3>
              <div className="ptf-approach-box__content">
                <p>{val.descriptions}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Approach;
