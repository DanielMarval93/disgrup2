import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./menu/DropdownMenu";
import MobileMenu from "./menu/MobileMenu";

const HeaderAgency = () => {
  /*const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click); */

  const [click1, setClick1] = useState(false);
  const handleClick1 = () => setClick1(!click1);

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <header className="ptf-header ptf-header--style-1">
        <div
          className={
            navbar
              ? "ptf-navbar ptf-navbar--main ptf-navbar--sticky ptf-navbar--transparent ptf-navbar--white-text-on-top ptf-navbar--fixed ptf-navbar--solid"
              : "ptf-navbar ptf-navbar--main ptf-navbar--sticky ptf-navbar--transparent ptf-navbar--white-text-on-top"
          }
        >
          <div className="container-xxl">
            <div className="ptf-navbar-inner">
              {/* <!--Logo--> */}
              <Link className="ptf-navbar-logo" to="/" onClick={scrollToTop} style={{marginLeft:"-0.2rem"}}>
                <img
                  className="black"
                  src="assets/img/root/logo-dark.png"
                  alt=""
                  loading="lazy"
                />
                <img
                  className="white"
                  src="assets/img/root/logo-white.png"
                  alt=""
                  loading="lazy"
                />
              </Link>
              {/* <!--Navigation--> */}
              <nav className="ptf-nav ptf-nav--default">
                {/* <!--Menu--> */}
                <DropdownMenu />
              </nav>
              {/* <!--Buttons--> */}

              {/* <!--Navbar Search--> 
              
              <div
                className={
                  click ? "ptf-navbar-search is-open" : "ptf-navbar-search"
                }
              >
                <div className="ptf-navbar-search__wrapper">
                   <Search /> 
                </div>
                

                <div
                  className="ptf-navbar-search__toggle"
                  onClick={handleClick}
                >
                  <i className="lnir lnir-search-alt"></i>
                  <i className="lnir lnir-close"></i>
                </div>
                
              </div>
              {/* <!--Offcanvas Menu Toggle--> */}

              <div
                className="ptf-offcanvas-menu-icon js-offcanvas-menu-toggle bar right"
                onClick={handleClick1}
              >
                <i className="lnir lnir-menu-alt-5"></i>
              </div>
              {/* Toggle bar icon */}
            </div>
          </div>
        </div>
      </header>
      {/* End header */}

      <div
        className={
          click1 ? "ptf-offcanvas-menu is-open" : "ptf-offcanvas-menu "
        }
      >
        <div className="ptf-offcanvas-menu__header">
          <div className="ptf-language-switcher ">
            <a className="is-active has-white-color" href="/">
              
            </a>
          </div>
          <span
            className="ptf-offcanvas-menu-icon js-offcanvas-menu-toggle"
            onClick={handleClick1}
          >
            <i className="lnir lnir-close"></i>
          </span>
        </div>

        {/* End .ptf-offcanvas-menu__header */}

        <MobileMenu />
      </div>
      {/* End sidebar menu */}
    </>
  );
};

export default HeaderAgency;
