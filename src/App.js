import React, { useEffect, useContext, useRef} from "react";
import AllRoutes from "./router/AllRoutes";
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "photoswipe/dist/photoswipe.css";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import AnimatedCursor from "react-animated-cursor";

import RefContext from "./components/context/RefContext";

const App = () => {

  const {
    setCharlaSection,
    setBoliSection,
    setHacemosSection,
  } = useContext(RefContext);

  setCharlaSection(useRef(null));
  setBoliSection(useRef(null));
  setHacemosSection(useRef(null));

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Fundacion Disgrup</title>
        <meta name="description" content="Portfolio & Agency" />
        <meta
          name="keywords"
          content="agency, bootstrap 5, business, clean, corporate, creative, fullpage, minimal, modern, multipurpose, parallax, personal, photography, portfolio, showcase"
        />
      </Helmet>
      {/* End React Helmet for SEO */}

      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="240, 1, 69"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      {/* End Animated Cursor */}


      <AllRoutes />
      {/* End All Routes */}
    </>
  );
};

export default App;
