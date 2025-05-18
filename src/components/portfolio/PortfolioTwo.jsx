import React from "react";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

const portfolioContent = [
  {
    cat: "Web + Redes",
    title: "Conferencia con el molt honorable Josep Rull i Andreu",
    date: "2025",
    routerLink: "/noticia/comida-conferencia-coloquio-con-el-molt-honorable-josep-rull-i-andreu",
    dataId: "work-1",
  },
  {
    cat: "Web",
    title: "Nos unimos a la Cruz Roja en la recogida de juguetes para los Reyes Magos",
    date: "2024",
    routerLink: "/noticia/recogida-de-juguetes-para-los-reyes-magos-junto-a-la-cruz-roja",
    dataId: "work-2",
  },
  {
    cat: "Redes",
    title: "La Fundación Disgrup está en la Liga Canaria de Baloncesto Sin Límite",
    date: "2024",
    routerLink: "/noticia/liga-canaria-de-baloncesto-sin-limites",
    dataId: "work-3",
  },
  {
    cat: "Redes",
    title: "Felices Fiestas llenas de Inclusión y Solidaridad",
    date: "2024",
    routerLink: "/noticia/felices-fiestas-2024",
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
