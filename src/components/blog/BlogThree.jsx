import React from "react";
import { Link } from "react-router-dom";

const blogContent = [
  {
    img: "post-23",
    cat: "Noticias",
    date: "20 de Febrero de 2025",
    title: "Conferencia con el molt honorable Josep Rull i Andreu",
    route:"/noticia/comida-conferencia-coloquio-con-el-molt-honorable-josep-rull-i-andreu"
  },
  {
    img: "post-22",
    cat: "Noticias",
    date: "29 de Diciembre de 2024",
    title: "Fundación Disgrup se une a la Cruz Roja en la recogida de juguetes para los Reyes Magos",
    route:"/noticia/recogida-de-juguetes-para-los-reyes-magos-junto-a-la-cruz-roja"
  },
  {
    img: "post-21",
    cat: "Noticias",
    date: "24 de Diciembre de 2024",
    title: "La Fundación Disgrup está en la Liga Canaria de Baloncesto Sin Límite",
    route:"/noticia/liga-canaria-de-baloncesto-sin-limites"
  },
  {
    img: "post-20",
    cat: "Noticias",
    date: "23 de Diciembre de 2024",
    title: "Felices Fiestas llenas de Inclusión y Solidaridad",
    route:"/noticia/felices-fiestas-2024"
  },
  {
    img: "post-19",
    cat: "Noticias",
    date: "2 de Noviembre de 2024",
    title: "Haz tu donación a la Fundación Disgrup y apoya a las personas con discapacidad",
    route:"/noticia/haz-tu-donacion-a-la-fundacion-disgrup"
  },
  {
    img: "post-18",
    cat: "Noticias",
    date: "30 de Octubre de 2024",
    title: "Halloween para personas con discapacidad en Lanzarote",
    route:"/noticia/halloween-para-personas-con-discapacidad-en-lanzarote"
  },
  {
    img: "post-17",
    cat: "Noticias",
    date: "18 de Octubre de 2024",
    title: "Volvemos a reactivar nuestra cuenta de Instagram!",
    route:"/noticia/volvemos-a-reactivar-nuestra-cuenta-de-instagram"
  },
  {
    img: "post-16",
    cat: "Noticias",
    date: "20 de Septiembre de 2024",
    title: "La Fundación Disgrup crea su himno: un canto a la inclusión y la superación",
    route:"/noticia/disgrup-crea-su-himno"
  },
  {
    img: "post-15",
    cat: "Noticias",
    date: "24 de Julio de 2024",
    title: "La Fundación Disgrup explica de manera sencilla la Ley de Dependencia y su aplicación",
    route:"/noticia/ley-de-dependencia-y-su-aplicacion"
  },
  {
    img: "post-14",
    cat: "Noticias",
    date: "27 de Junio de 2024",
    title: "Presentamos en la Casa del Tíbet de Barcelona proyecto de Camino de Santiago para personas con discapacidad",
    route:"/noticia/proyecto-inclusivo-del-camino-de-santiago-para-personas-con-discapacidad"
  },

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
    title: "Exigen al IMET que aumente la flota de taxis para discapacitados",
    route:"/noticia/exigen-aumento-de-la-flota-de-taxis-para-discapacitados"
  },
  {
    img: "post-12",
    cat: "Noticias",
    date: "27 de Junio de 2023",
    title: "Fundacion Disgrup completa el Camino de Santiago en silla de ruedas",
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
