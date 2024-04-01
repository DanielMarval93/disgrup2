import React from "react";
import { Link } from "react-router-dom";
//import FooterList from "../list/FooterList";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const FooterTwo = () => {
  return (
    <div className="row">
      <div className="col-12 col-lg-7">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <div className="ptf-widget ptf-widget-contacts has-white-color">
            <ul>
              <li>
                <span className="has-accent-1">Contacto:</span>
                <p> Calle Aragón 61, 3º 2ª, 08015 Barcelona (Spain)</p>
                <span></span>
                <p>info@disgrup.org </p>
                <span></span>
                <p>+34 932 265 050 </p>
                <span></span>
                <p>CIF: G65195430</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12 col-lg-5">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          <div className="ptf-widget ptf-widget-contacts has-white-color">
            <ul>
              <li>
                <span className="has-accent-1">Legal:</span>
                <Link to="/aviso-legal" onClick={scrollToTop}>
                  <p>Aviso legal</p>
                </Link>
                <span></span>
                <Link to="/cookies" onClick={scrollToTop}>
                  <p>Política de cookies</p>
                </Link>
                <span></span>
                <Link to="/politica-privacidad" onClick={scrollToTop}>
                  <p>Política de privacidad</p>
                </Link>
                <span></span>{" "}
                <Link to="/politica-devoluciones" onClick={scrollToTop}>
                  <p>Política de devoluciones y reembolsos</p>
                </Link>
              </li>
            </ul>
          </div>

          <div
                        className="ptf-spacer"
                        style={{
                          "--ptf-md": "2.5rem",
                        }}
                      ></div>
        </div>
      </div>
    </div>
  );
};

export default FooterTwo;
