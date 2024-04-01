import React from "react";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

const portfolioContent = [
  {
    cat: "Web + Redes",
    title: "Concentración el 26 de Mayo de 2023",
    date: "2023",
    routerLink: "https://www.cathalobox.com/",
    dataId: "work-1",
  },
  {
    cat: "Web",
    title: "Existe un incumplimiento sistemático de la normativa legal",
    date: "2021",
    routerLink: "https://www.dvinemodels.com/",
    dataId: "work-2",
  },
  {
    cat: "Redes",
    title: "El Ayuntamiento de Tías en Lanzarote NO cumple la Ley",
    date: "2021",
    routerLink: "https://www.instagram.com/laperlaclub_bcn/",
    dataId: "work-3",
  },
  {
    cat: "Redes",
    title: "Lush Fresh Handmade Cosmetics dona lote de sus productos",
    date: "2021",
    routerLink: "/lush-fresh-handmade-cosmetics-dona-lote-de-sus-productos",
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
