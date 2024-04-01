import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Masonry from "react-masonry-css";

import RefContext from "../context/RefContext";

const breakpointColumnsObj = {
  default: 2,
  1100: 3,
  768: 2,
  500: 1,
};

const portfolioMenu = ["1", "2", "3"];

const portfolioContent = [
  {
    tabContent: [
      {
        img: "work-1",
        meta: "Terapia Ocupacional",
        title: "Challenge Nº 9",
        route: "https://www.youtube.com/watch?v=EtFimAcpRdU",
        videoId: "EtFimAcpRdU?si=C7frKVxAmFVopWQ1",
      },
      {
        img: "work-1",
        meta: "Terapia Ocupacional",
        title: "Challenge Nº 8",
        route: "https://www.youtube.com/watch?v=EtFimAcpRdU",
        videoId: "EtFimAcpRdU?si=C7frKVxAmFVopWQ1",
      },
      {
        img: "work-1",
        meta: "Terapia Ocupacional",
        title: "Challenge Nº 7",
        route: "https://www.youtube.com/watch?v=tn1o6DWGuSo",
        videoId: "tn1o6DWGuSo?si=p0DFrcgmX7mjyka6",
      },
      {
        img: "work-1",
        meta: "Terapia Ocupacional",
        title: "Challenge Nº 6",
        route: "https://www.youtube.com/watch?v=YwyzgbyuEGI",
        videoId: "YwyzgbyuEGI?si=OXBez1rswH16Q86r",
      },
    ],
  },
  {
    tabContent: [
      {
        img: "work-1",
        meta: "Terapia Ocupacional",
        title: "Challenge Nº 5",
        route: "https://www.youtube.com/watch?v=jCZlQTr_UJY",
        videoId: "jCZlQTr_UJY?si=N5diFoB7vaFC7rqC",
      },
      {
        img: "work-1",
        meta: "Terapia Ocupacional",
        title: "Challenge Nº 4",
        route: "https://www.youtube.com/watch?v=IM3XN62aDdI",
        videoId: "IM3XN62aDdI?si=vFwRy10A5DHsULgc",
      },
      {
        img: "work-1",
        meta: "Terapia Ocupacional",
        title: "Challenge Nº 3",
        route: "https://www.youtube.com/watch?v=t2xsNW3S7z0",
        videoId: "t2xsNW3S7z0?si=YwMngV_SYC417rvF",
      },
      {
        img: "work-1",
        meta: "Terapia Ocupacional",
        title: "Challenge Nº 2",
        route: "https://www.youtube.com/watch?v=ExFkIFhBJBc",
        videoId: "ExFkIFhBJBc?si=fjs_yJkLx6NuXkjn",
      },
    ],
  },  {
    tabContent: [
      {
        img: "work-1",
        meta: "Terapia Ocupacional",
        title: "Challenge Nº 1",
        route: "https://www.youtube.com/watch?v=sNc2HkEJgLE",
        videoId: "sNc2HkEJgLE?si=tY9aNKc_0_XvHBoj",
      },
    ],
  },
];

const PortfolioTerapia = () => {
  const { terapiaSection, scrollDown} = useContext(RefContext);

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
                    scrollDown(terapiaSection, -400);
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

export default PortfolioTerapia;
