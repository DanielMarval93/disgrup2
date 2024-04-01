import React from "react";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import Social from "../../social/Social";

const menuContent = [
  {
    name: "Conocenos",
    dropDownItems: [
      {
        name: "Que hace la fundacion?",
        routerPath: "/conocenos",
      },
      {
        name: "Boligrafo Solidario",
        routerPath: "/conocenos",
      },
      {
        name: "Charlas de concienciación",
        routerPath: "/conocenos",
      },
    ],
  },
  {
    name: "Dona",
    dropDownItems: [
      {
        name: "Beneficios de donar",
        routerPath: "/works-grid",
      },
      {
        name: "Dona por Bizum",
        routerPath: "/works-masonry",
      },
      {
        name: "Hacer Donacion",
        routerPath: "/works-listing",
      },
    ],
  },
  {
    name: "Videos",
    dropDownItems: [
      {
        name: "Agradecimientos",
        routerPath: "/videos-agradecimientos",
      },
      {
        name: "Ayudas a Personas con Discapacidad",
        routerPath: "/videos-ayudas",
      },
      {
        name: "Ejercicios Cognitivos  ",
        routerPath: "/videos-ejercicios",
      },
      {
        name: "Terapia Ocupacional",
        routerPath: "/videos-terapias",
      },
    ],
  },
  {
    name: "Noticias/Galeria",
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
];

const MobileMenu = () => {
  return (
    <>
      <div className="ptf-offcanvas-menu__navigation">
        <ProSidebar>
          <SidebarContent>
            <Menu className="sidebar-menu_wrapper">
              {menuContent.map((item, i) => (
                <SubMenu title={item.name} key={i}>
                  {item.dropDownItems.map((val, i) => (
                    <MenuItem key={i}>
                      <Link to={val.routerPath}>{val.name}</Link>
                    </MenuItem>
                  ))}
                </SubMenu>
              ))}
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
      {/* End .ptf-offcanvas-menu__navigation */}

      <div className="ptf-offcanvas-menu__footer">

        <Social />
      </div>
      {/* End .ptf-offcanvas-menu__footer */}
    </>
  );
};

export default MobileMenu;
