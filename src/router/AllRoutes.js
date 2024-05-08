import React from "react";
/*import Preview from "../views/Preview";*/
// Homepage Demo

import HomeAgency from "../views/all-home-version/HomeAgency";

// Service
import Service from "../views/inner-pages/service/Service";
import ServiceDetails from "../views/inner-pages/service/ServiceDetails";

// About
import AboutUs from "../views/inner-pages/about/AboutUs";
import AboutMe from "../views/inner-pages/about/AboutMe";

// Blog
import BlogGrid from "../views/inner-pages/blog/BlogGrid";
import BlogMasonry from "../views/inner-pages/blog/BlogMasonry";
import BlogSidebar from "../views/inner-pages/blog/BlogSidebar";
import BlogDetails from "../views/inner-pages/blog/BlogDetails";
import BlogDetailsSidebar from "../views/inner-pages/blog/BlogDetailsSidebar";

// Videos

import Ayudas from "../views/inner-pages/blog/Ayudas";
import Agradecimientos from "../views/inner-pages/blog/Agradecimientos"
import Ejercicios from "../views/inner-pages/blog/Ejercicios";
import Terapia from "../views/inner-pages/blog/Terapia"

// Noticias

import Galeria from "../views/inner-pages/blog/Galeria";

import NoticiaDenunciaBarcelona from "../views/inner-pages/blog/Noticias/NoticiaDenunciaBarcelona";
import NoticiaProyectoLanzarote from "../views/inner-pages/blog/Noticias/NoticiaProyectoLanzarote";
import NoticiaTaxi from "../views/inner-pages/blog/Noticias/NoticiaTaxi";
import NoticiaCartaAlcaldesa from "../views/inner-pages/blog/Noticias/NoticiaCartaAlcaldesa";
import NoticiaTeoriaDefienden from "../views/inner-pages/blog/Noticias/NoticiaTeoriaDefienden";
import NoticiaLushCosmetics from "../views/inner-pages/blog/Noticias/NoticiaLushCosmetics"
import NoticiaAyuntamientoTias from "../views/inner-pages/blog/Noticias/NoticiaAyuntamientoTias";
import NoticiaSistematico from "../views/inner-pages/blog/Noticias/NoticiaSistematico";
import NoticiaConcentracionArrecife from "../views/inner-pages/blog/Noticias/NoticiaConcentracionArrecife";
import NoticiaFaltanTaxis from "../views/inner-pages/blog/Noticias/NoticiaFaltanTaxis";
import NoticiaEntrevista from "../views/inner-pages/blog/Noticias/NoticiaEntrevista";


// Portfolio
import WorksGrid from "../views/inner-pages/portfolio/WorksGrid";
import WorksMasonry from "../views/inner-pages/portfolio/WorksMasonry";
import WorksListing from "../views/inner-pages/portfolio/WorksListing";
import WorksCarousel from "../views/inner-pages/portfolio/WorksCarousel";
import WorksShowcase from "../views/inner-pages/portfolio/WorksShowcase";

// Others
import Contact from "../views/inner-pages/Contact";
import PricingInner from "../views/inner-pages/PricingInner";
import Team from "../views/inner-pages/Team";
import ComingSoon from "../views/inner-pages/ComingSoon";
import Faq from "../views/inner-pages/Faq";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

//legal
import AvisoLegal from "../views/inner-pages/blog/AvisoLegal";
import PoliticaCookies from "../views/inner-pages/blog/PoliticaCookies";
import PoliticaPrivacidad from "../views/inner-pages/blog/PoliticaPrivacidad";
import Devoluciones from "../views/inner-pages/blog/Devoluciones";

//Test


import Test from "../views/inner-pages/blog/Test";
import CaminoSantiago from "../views/inner-pages/blog/caminoSantiago";
import NoticiaFinalSantiago from "../views/inner-pages/blog/Noticias/NoticiaFinalSantiago";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/" element={<HomeAgency />} />
        {/*  Homepage Demo */}

        <Route path="/home-agency" element={<HomeAgency />} />

        {/* Service */}
        <Route path="/service" element={<Service />} />
        <Route path="/service-details" element={<ServiceDetails />} />

        {/* About */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-me" element={<AboutMe />} />

        {/* Blog */}
        <Route path="/blog-grid" element={<BlogGrid />} />
        <Route path="/blog-masonry" element={<BlogMasonry />} />
        <Route path="/blog-sidebar" element={<BlogSidebar />} />
        <Route path="/conocenos" element={<BlogDetails />} />
        <Route path="/blog-details-sidebar" element={<BlogDetailsSidebar />} />

        {/* Videos */}
        <Route path="/videos-ayudas" element={<Ayudas />} />
        <Route path="/videos-agradecimientos" element={<Agradecimientos />} />
        <Route path="/videos-ejercicios" element={<Ejercicios />} />
        <Route path="/videos-terapias" element={<Terapia />} />

        
        {/* Noticias */}
        <Route path="/noticias" element={<BlogGrid />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/camino-de-santiago" element={<CaminoSantiago />} />
        
        <Route path="/noticia/denuncia-barcelona" element={<NoticiaDenunciaBarcelona />} />
        <Route path="/noticia/avanza-el-proyecto-de-una-residencia-para-discapacitados-en-lanzarote" element={<NoticiaProyectoLanzarote />} />
        <Route path="/noticia/faltan-mas-de-400-taxis-adaptados-en-barcelona" element={<NoticiaTaxi />} />
        <Route path="/noticia/carta-a-la-alcaldesa-de-barcelona/" element={<NoticiaCartaAlcaldesa />} />
        <Route path="/noticia/los-que-en-teoria-difienden-nuestros-derechos" element={<NoticiaTeoriaDefienden />} />
        <Route path="/noticia/lush-fresh-handmade-cosmetics-dona-lote-de-sus-productos" element={<NoticiaLushCosmetics />} />
        <Route path="/noticia/el-ayuntamiento-de-tias-en-lanzarote-no-cumple-la-ley" element={<NoticiaAyuntamientoTias />} />
        <Route path="/noticia/inclumplimiento-normativa-legal-ambito-personas-con-discapacidad" element={<NoticiaSistematico />} />
        <Route path="/noticia/concentracion-en-arrecife-lanzarote" element={<NoticiaConcentracionArrecife />} />
        <Route path="/noticia/exigen-aumento-de-la-flota-de-taxis-para-discapacitados" element={<NoticiaFaltanTaxis />} />
        <Route path="/noticia/entrevista-a-guillermo-egido-fundador-de-la-fundacion-disgrup" element={<NoticiaEntrevista />} />
        <Route path="/noticia/fundacion-disgrup-completa-el-camino-de-santiago" element={<NoticiaFinalSantiago />} />


        


        {/* Test */}
        <Route path="/test" element={<Test />} />


        {/* Portfolio */}
        <Route path="/works-grid" element={<WorksGrid />} />
        <Route path="/works-masonry" element={<WorksMasonry />} />
        <Route path="/works-listing" element={<WorksListing />} />
        <Route path="/works-carousel" element={<WorksCarousel />} />
        <Route path="/works-showcase" element={<WorksShowcase />} />

        
        {/* Legal */}
        <Route path="/cookies" element={<PoliticaCookies/>} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/politica-devoluciones" element={<Devoluciones />} />

        

        {/* others */}
        <Route path="/team" element={<Team />} />
        <Route path="/pricing" element={<PricingInner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
