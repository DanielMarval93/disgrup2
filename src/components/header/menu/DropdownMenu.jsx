import React from "react";
import { Link } from "react-router-dom";

const menuContent = [
  {
    name: "Home",
    activeClass: "sf-with-ul",
    routerPath: "/",
    menuClass: "current-menu-item",
    dropDownItems: [
    ],
  },
  {
    name: "Conocenos",
    activeClass: "",
    menuClass: "",
    routerPath: "/conocenos",
    dropDownItems: [
    
    ],
  },
  {
    name: "Dona",
    activeClass: "",
    menuClass: "",
    routerPath: "/contact",
    dropDownItems: [
    ],
  },
  {
    name: "Noticias/Galeria",
    activeClass: "",
    menuClass: "",
    dropDownItems: [
      {
      name: "Noticias",
      routerPath: "/noticias",
    },
    {
      name: "Galeria",
      routerPath: "/galeria",
    },
    {
      name: "Camino de Santiago",
      routerPath: "/camino-de-santiago",
    },
    
    ],
  },
  {
    name: "Videos",
    activeClass: "",
    menuClass: "",
    dropDownItems: [
      {
        name: "Agradecimientos",
        routerPath: "/videos-agradecimientos",
      },
      {
        name: "Ayudas a personas con discapacidad",
        routerPath: "/videos-ayudas",
      },
      {
        name: "Ejercicios cognitivos con Guille",
        routerPath: "/videos-ejercicios",
      },
      {
        name: "Terapia ocupacional con Candi",
        routerPath: "/videos-terapias",
      },
    ],
  },
];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
   
};

const DropdownMenu = () => {
  return (
    <ul className="sf-menu">
      {menuContent.map((item, i) => (
        <li className={`menu-item-has-children ${item.menuClass}`} key={i}>
          <Link to={item.routerPath} onClick={scrollToTop}>
            <span>{item.name}</span>
          </Link>
{/* Conditionally render the dropdown only if there are items */}
{item.dropDownItems.length > 0 && (
            <ul className="sub-menu mega">
              {item.dropDownItems.map((val, j) => (
                <li key={j}>
                  <Link to={val.routerPath}>
                    {""}
                    <span>{val.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
