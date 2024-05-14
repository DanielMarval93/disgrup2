import React from "react";
import { Link } from "react-router-dom";

const blogContent = [
  {
    img: "post-13",
    cat: "Noticias",
    date: "3 de Diciembre de 2023",
    title: "Jornada por el dia de la discpacidad en el cabildo de Lanzarote",
    route:"/noticia/fundacion-disgrup-participa-en-jornada-conmemorativa-del-cabildo-de-Lanzarote"
  },
  {
    img: "post-11",
    cat: "Noticias",
    date: "27 de Noviembre de 2023",
    title: "Entrevista a Guillermo Egido, fundador de la Fundación Disgrup",
    route:"/noticia/entrevista-a-guillermo-egido-fundador-de-la-fundacion-disgrup"
  },
 {
    img: "post-10",
    cat: "Noticias",
    date: "23 de Noviembre de 2023",
    title: "Exigen al IMET que aumente la flota de taxis para discapacitados.",
    route:"/noticia/exigen-aumento-de-la-flota-de-taxis-para-discapacitados"
  },
  {
    img: "post-12",
    cat: "Noticias",
    date: "27 de Junio de 2023",
    title: "Fundacion Disgrup completa el Camino de Santiago en silla de ruedas.",
    route:"/noticia/fundacion-disgrup-completa-el-camino-de-santiago"
  },
  {
    img: "post-1",
    cat: "Noticias",
    date: "17 de abril de 2023",
    title: "Concentración el 26 de mayo de 2023 a las 12 horas en Arrecife (Lanzarote)",
    route:"/noticia/concentracion-en-arrecife-lanzarote"
  },
  {
    img: "post-2",
    cat: "Noticias",
    date: "1 de diciembre de 2021",
    title: "«Existe un incumplimiento sistemático de la normativa legal»",
    route:"/noticia/inclumplimiento-normativa-legal-ambito-personas-con-discapacidad"
  },
  {
    img: "post-3",
    cat: "Noticias",
    date: "28 de julio de 2021",
    title: "El Ayuntamiento de Tías en Lanzarote NO cumple la Ley",
    route: "/noticia/el-ayuntamiento-de-tias-en-lanzarote-no-cumple-la-ley"
  },
  {
    img: "post-4",
    cat: "Noticias",
    date: "22 de marzo de 2021",
    title: "Lush Fresh Handmade Cosmetics dona sus productos",
    route:"/noticia/lush-fresh-handmade-cosmetics-dona-lote-de-sus-productos"
  },
  {
    img: "post-5",
    cat: "Noticias",
    date: "9 de febrero de 2021",
    title: "Los que en teoría defienden nuestros derechos",
    route: "/noticia/los-que-en-teoria-difienden-nuestros-derechos"
  },
  {
    img: "post-6",
    cat: "Noticias",
    date: "22 de diciembre de 2020",
    title: "Carta a la alcaldesa de Barcelona",
    route: "/noticia/carta-a-la-alcaldesa-de-barcelona/"
  },
  {
    img: "post-7",
    cat: "Noticias",
    date: "13 de septiembre de 2019",
    title: "Faltan más de 400 taxis adaptados en Barcelona",
    route: "/noticia/faltan-mas-de-400-taxis-adaptados-en-barcelona "
  },
  {
    img: "post-8",
    cat: "Noticias",
    date: "13 de septiembre de 2019",
    title: "Avanza el proyecto de una Residencia para Discapacitados en Lanzarote",
    route: "/noticia/avanza-el-proyecto-de-una-residencia-para-discapacitados-en-lanzarote"
  },
  {
    img: "post-9",
    cat: "Noticias",
    date: "31 de marzo de 2019",
    title: "Denunciamos al Ayuntamiento de Barcelona",
    route: "/noticia/denuncia-barcelona"
  },

];

const BlogThree = () => {
  return (
    <>
      {blogContent.map((val, i) => (
        <div className="col-xl-4 col-lg-4 col-md-6" key={i}>
          <article className="ptf-post ptf-post--style-1">

            <div className="ptf-post__content">
              <header className="ptf-post__header">
                <div className="ptf-post__meta">
                  <span className="cat">{val.cat}</span>
                  <span className="date">{val.date}</span>
                </div>
                <h3 className="ptf-post__title">
                  <Link to={val.route}>{val.title}</Link>
                </h3>
              </header>
                   {/* <!--Spacer--> */}
                   <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "1rem" }}
              ></div>
            </div>
            <div className="ptf-post__media">
              <Link className="ptf-work__link" to={val.route}></Link>
              <img
                src={`assets/img/blog/grid/${val.img}.jpg`}
                alt="blog"
                loading="lazy"
                className="image-resize"
              />
            </div>
          </article>
        </div>
      ))}
    </>
  );
};

export default BlogThree;
