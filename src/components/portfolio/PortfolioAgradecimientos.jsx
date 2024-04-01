import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Masonry from "react-masonry-css";

import RefContext from "../context/RefContext";

const breakpointColumnsObj = {
  default: 1,
  1100: 1,
  768: 1,
  500: 1,
};

const portfolioMenu = ["1", "2"];

const portfolioContent = [
  {
    tabContent: [
      {
        img: "work-1",
        meta: "Fundador de la Casa del Tíbet",
        title: "Thubten Wangchen",
        route: "https://www.youtube.com/watch?v=KJK-mxNAotM",
        videoId: "KJK-mxNAotM?si=N7_BfKDrkrB0bxR8",
      },
      {
        img: "work-2",
        meta: "Subcampeón del Mundo",
        title: "Lionel Morales",
        route: "https://www.youtube.com/watch?v=ni3Hwc4JWWQ",
        videoId: "ni3Hwc4JWWQ?si=rlrHYRFeWOdml5VT",
      },
      {
        img: "work-3",
        meta: "Locutor Radio Mollet",
        title: "Josep Roca",
        route: "https://www.youtube.com/watch?v=aPv6sFioSEE",
        videoId: "aPv6sFioSEE?si=M4em6C6fVj5I7wfb",
      },
      {
        img: "work-4",
        meta: "Vice presidente de Barcelona Comerç",
        title: "Lluis Llanas",
        route: "https://www.youtube.com/watch?v=cGgBDyc5x74",
        videoId: "cGgBDyc5x74?si=UWH3tS2lvWf5e13s",
      },
    ],
  },
  {
    tabContent: [
      {
        img: "work-5",
        meta: "Activista social / Portavoz de COESPE",
        title: "Ramon Franquesa",
        route: "https://www.youtube.com/watch?v=cGgBDyc5x74",
        videoId: "FHAO7_SHFII?si=IwOR-2uoKcKaXuJf",
      },
      {
        img: "work-6",
        meta: "Fundación Esport Solidari Internacional",
        title: "Josep Maldonado",
        route: "https://www.youtube.com/watch?v=fwtHJCTLbF8",
        videoId: "fwtHJCTLbF8?si=6vXlefydguOAT4jA",
      },
      {
        img: "work-7",
        meta: "Critico de Moda / Presentador de Television",
        title: "Erik Putzbach",
        route: "https://www.youtube.com/watch?v=zIbm5690LKI",
        videoId: "zIbm5690LKI?si=9yYhc9ADHVU9V2d4",
      },
      {
        img: "work-8",
        meta: "Pizzero / YouTuber",
        title: "Pino Prestanizzi",
        route: "https://www.youtube.com/watch?v=XaB7dP-b2to",
        videoId: "XaB7dP-b2to?si=OAfCDLjEXFt3rSrY",
      },
    ],
  },
];

const PortfolioAgradecimientos = () => {
  const { ultimosVideosSection, scrollDown} = useContext(RefContext);

  return (
    <>
      <Tabs>
        {/* <!--Animated Block--> */}

        {/* <!--Spacer--> */}
        <div
          className="ptf-spacer"
          style={{ "--ptf-xxl": "0.55rem", "--ptf-md": "0.125rem" }}
        ></div>

        {portfolioContent.map((item, i) => (
          <TabPanel key={i}>
            {/* {/* <!--Animated Block--> */}

            <div
              className="ptf-animated-block"
              data-aos="fade"
              data-aos-delay="0"
            >
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid ptf-isotope-grid portfolio-isotope"
                columnClassName="my-masonry-grid_column"
              >
                <row>
                  <div className="col-xl-8 offset-xl-2">
                {item.tabContent.map((singleItem, i) => (
                  <article className="ptf-work ptf-work--style-1" key={i}>
                    <div className="ptf-work__meta">
                      <div className="ptf-work__category">
                        {singleItem.meta}
                      </div>
                      <h4 className="ptf-work__title has-accent-2">
                        <Link to={singleItem.route}>{singleItem.title}</Link>
                      </h4>
                    </div>

                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "1.25rem", "--ptf-md": "1.125rem" }}
                    ></div>
                    <div className="ptf-video">
                      <div class="ratio ratio-16x9">
                        <iframe
                          src={`https://www.youtube.com/embed/${singleItem.videoId}`}
                          title="YouTube video"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </article>

                  
                ))}
                </div>
                </row>
                {/* End .col */}
              </Masonry>
            </div>

            {/* End portfolio */}
          </TabPanel>
        ))}
        <div
          className="ptf-spacer"
          style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "2.5rem" }}
        ></div>
        <div>
          <TabList className="ptf-filters ptf-filters--style-1">
            {portfolioMenu.map((item, i) => (
              <Tab
                className="filter-item "
                key={i}
                onClick={() => {
                  setTimeout(() => {
                    scrollDown(ultimosVideosSection, -400);
                  }, 200); // Adjust the timeout duration as per your requirement
                }}
              >
                {item}
              </Tab>
            ))}
          </TabList>
        </div>
      </Tabs>
    </>
  );
};

export default PortfolioAgradecimientos;
