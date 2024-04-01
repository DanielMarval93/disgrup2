import React from "react";
import { Link } from "react-router-dom";

const pricingContent = [
  {
    planName: "PRESS KIT",
    price: "250",
    priceStart: "Desde",
    priceDuration: "",
    pirceDescriptions: "10% taxed will include after make price",
    pricingFeatures: ["Presenta tu propuesta musical de manera adecuada. Cautiva y convence para que apuesten por ti. Cierra acuerdos de patrocinio y publicidad, muestra una marca sólida a las agencias de management y booking, y seduce con tu perfil y tu presentación"  ],
    badge: "",
    badgeClass: "",
    delayAnimation: "0",
  },
  {
    planName: "GASTROBOMBA",
    price: "500",
    priceStart: "Desde",
    priceDuration: "Mensual",
    pirceDescriptions: "10% taxed will include after make price",
    pricingFeatures: [
      "Atrae nuevos clientes a través de internet. Dale notoriedad y presencia a tu restaurante en redes sociales. Capta y fideliza nuevos comensales con nuestras estrategias combinadas de gastro-influencers y medios digitales."
    ],
    badge: "Popular",
    badgeClass: "badge",
    delayAnimation: "100",
  },
  {
    planName: "SOCIAL MEDIA MANAGER",
    price: "250",
    priceStart: "Desde",
    priceDuration: "Mensual",
    pirceDescriptions: "10% taxed will include after make price",
    pricingFeatures: [
      "Creamos un análisis y diagnóstico de las Redes Sociales. Establecemos una estrategia y un plan de contenidos, medimos métricas y te aportamos un plan mensual de resultados. Redactamos, diseñamos y publicamos post, gestiónamos comunidades y monitorizamos las redes, para que tu solo tengas que preocuparte por tu negocio. ",
    ],
    badge: "",
    badgeClass: "",
    delayAnimation: "200",
  },{
    planName: "WEB + POSICIONAMIENTO SEO",
    price: "990",
    priceStart: "Desde",
    priceDuration: "Mensual",
    pirceDescriptions: "10% taxed will include after make price",
    pricingFeatures: [
      " Diseñamos y creamos la página web que tu negocio necesita. Websites, e-commerce,páginas intuitivas, experiencia UI/UX….posicionamiento orgánico y con resultados demostrables",
    ],
    badge: "",
    badgeClass: "",
    delayAnimation: "0",
  },
  
];

const Pricing = () => {
  return (
    <>
      {pricingContent.map((val, i) => (
        <div className="col-xl-6 col-lg-6" key={i} style={{marginTop: "30px"}}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block h-100"
            data-aos="fade"
            data-aos-delay={val.delayAnimation}
          >
            {/* <!--Pricing Table--> */}
            <div className="ptf-pricing-table h-100">
              <div className={val.badgeClass}>{val.badge}</div>
              <div className="ptf-pricing-table__header">
                <h4 className="ptf-pricing-table__title">{val.planName}</h4>
              </div>
              <div className="ptf-pricing-table__price">
                <span className="period">{val.priceStart} </span>
                <span className="currency">€</span>
                <span className="price">{val.price}</span>
              </div>
              <div className="ptf-pricing-table__description">
                {val.priceDuration}
              </div>
              <div className="ptf-pricing-table__content">
                <ul>
                  {val.pricingFeatures.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="ptf-pricing-table__action">
                {/* <!--Button--> */}
                <Link
                  className="ptf-btn ptf-btn--primary ptf-btn--block"
                  to="/contact"
                >
                  Comienza tu proyecto
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pricing;
