import { createContext, useState } from "react";

const RefContext = createContext();

function Provider({ children }) {

  const [hacemosSection, setHacemosSection] = useState(null);
  const [boliSection, setBoliSection] = useState(null);
  const [charlaSection, setCharlaSection] = useState(null);




  const refs = {
    hacemosSection, setHacemosSection,
    boliSection, setBoliSection, 
    charlaSection, setCharlaSection,
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
