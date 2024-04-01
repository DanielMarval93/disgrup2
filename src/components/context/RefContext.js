import { createContext, useState } from "react";

const RefContext = createContext();

function Provider({ children }) {
  const [ayudasSection, setAyudasSection] = useState(null);
  const [contactSection, setContactSection] = useState(null);
  const [terapiaSection, setTerapiaSection] = useState(null);
  const [servicesSection, setServicesSection] = useState(null);
  const [ultimosVideosSection, setUltimosVideosSection] = useState(null);
  const [ejerciciosSection, setEjerciciosSection] = useState(null);

  const refs = {
    ultimosVideosSection,
    setUltimosVideosSection,
    ayudasSection,
    setAyudasSection,
    contactSection,
    setContactSection,
    terapiaSection,
    setTerapiaSection,
    servicesSection,
    setEjerciciosSection,
    ejerciciosSection,
    setServicesSection,
    scrollDown: (ref, yValue) => {
      window.scrollTo({
        top: ref.current.offsetTop - yValue,
        behavior: "smooth",
      });
    },
    goToTop: () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  };

  return <RefContext.Provider value={refs}>{children}</RefContext.Provider>;
}

export { Provider };
export default RefContext;
