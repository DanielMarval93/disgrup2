import React, { useContext } from "react";
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

import RefContext from "../../context/RefContext";

const MobileMenu = () => {
  const { charlaSection, boliSection, hacemosSection,} =
    useContext(RefContext);

  const menuContent = [
    {
      name: "Conocenos",
      dropDownItems: [
        {
          name: "Que hace la fundacion?",
          routerPath: "/conocenos",
          click: { hacemosSection },
        },
        {
          name: "Boligrafo Solidario",
          routerPath: "/conocenos",
          click: { boliSection },
        },
        {
          name: "Charlas de concienciación",
          routerPath: "/conocenos",
          click: { charlaSection },
        },
      ],
    },
    {
      name: "Dona",
      dropDownItems: [
        {
          name: "Beneficios de donar",
          routerPath: "/dona",
          click: "",
        },
        {
          name: "Hacer Donacion",
          routerPath: "/dona",
          click: "",
        },
      ],
    },
    {
      name: "Videos",
      dropDownItems: [
        {
          name: "Agradecimientos",
          routerPath: "/videos-agradecimientos",
          click: "",
        },
        {
          name: "Ayudas a Personas con Discapacidad",
          routerPath: "/videos-ayudas",
          click: "",
        },
        {
          name: "Ejercicios Cognitivos  ",
          routerPath: "/videos-ejercicios",
          click: "",
        },
        {
          name: "Terapia Ocupacional",
          routerPath: "/videos-terapias",
          click: "",
        },
        {
          name: "100 Preguntas Y Curiosidades",
          routerPath: "/videos-curiosidades",
          click: "",
        },
      ],
    },
    {
      name: "Noticias/Galeria",
      dropDownItems: [
        {
          name: "Noticias",
          routerPath: "/noticias",
          click: "",
        },
        {
          name: "Galeria",
          routerPath: "/galeria",
          click: "",
        },
        {
          name: "Camino de Santiago",
          routerPath: "/camino-de-santiago",
          click: "",
        },
      ],
    },
  ];

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
                      <Link to={val.routerPath}>
                        <div >
                          {val.name}
                        </div>
                      </Link>

                  
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
