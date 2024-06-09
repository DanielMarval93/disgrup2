import React from "react";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

const portfolioContent = [
  {
    cat: "Web + Redes",
    title: "Jornada por el dia de la discpacidad en el cabildo de Lanzarote",
    date: "2023",
    routerLink: "/noticia/fundacion-disgrup-participa-en-jornada-conmemorativa-del-cabildo-de-Lanzarote",
    dataId: "work-1",
  },
  {
    cat: "Web",
    title: "Entrevista a Guillermo Egido, fundador de la Fundación Disgrup",
    date: "2023",
    routerLink: "/noticia/entrevista-a-guillermo-egido-fundador-de-la-fundacion-disgrup",
    dataId: "work-2",
  },
  {
    cat: "Redes",
    title: "Exigen al IMET que aumente la flota de taxis para discapacitados",
    date: "2023",
    routerLink: "/noticia/exigen-aumento-de-la-flota-de-taxis-para-discapacitados",
    dataId: "work-3",
  },
  {
    cat: "Redes",
    title: "Fundacion Disgrup completa el Camino de Santiago en silla de ruedas",
    date: "2023",
    routerLink: "/noticia/fundacion-disgrup-completa-el-camino-de-santiago",
    dataId: "work-4",
  },
];

const PortfolioTwo = () => {
  return (
    <>
      <div className=" grid-item ">
        {/* <!--Portfolio Item--> */}
        {portfolioContent.map((val, i) => (
          <article
            className="ptf-work ptf-work--style-4"
            data-tip
            data-for={val.dataId}
            key={i}
          >
            <Link className="ptf-work__link" to={`${val.routerLink}`}></Link>
            <ReactTooltip
              id={val.dataId}
              place="right"
              type="dark"
              effect="float"
            >
        
            </ReactTooltip>
            <div className="ptf-work__category">{val.date}</div>
            <h4 className="ptf-work__title">{val.title}</h4>
            {/*
            <div className="ptf-work__date">{val.date}</div>*/}
            <div className="ptf-work__date"></div>
          </article>
        ))}
      </div>
      {/* End .grid-item */}
      <div></div>
      {/* End .grid-item */}
    </>
  );
};

export default PortfolioTwo;
