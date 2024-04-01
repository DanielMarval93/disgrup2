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

const portfolioMenu = ["1", "2", "3", "4", "5"];

const portfolioContent = [
  {
    tabContent: [
      {
        img: "work-1",
        cat: "Ayudas a la discapacidad",
        title: "Saira",
        route: "https://www.youtube.com/watch?v=NJ9FaNohG9k",
        videoId: "NJ9FaNohG9k?si=W34jyArdR8NebFI2",
      },
      {
        img: "work-2",
        cat: "Ayudas",
        title: "Juan Antonio",
        route: "https://www.youtube.com/watch?v=w2NL-dSGcqg",
        videoId: "w2NL-dSGcqg?si=tLUyRYBEXtH50OAY",
      },
      {
        img: "work-3",
        cat: "Ayudas",
        title: "Anna Millet",
        route: "https://www.youtube.com/watch?v=GTXhRDOqiqM&t",
        videoId: "GTXhRDOqiqM?si=PHGlmI2Ue_6_2Zq1",
      },
      {
        img: "work-4",
        cat: "Ayudas",
        title: "David Rodriguez",
        route: "https://www.youtube.com/watch?v=ZDlwkH6EP1s",
        videoId: "ZDlwkH6EP1s?si=TY7EXRZkhIEja8I9",
      },
    ],
  },
  {
    tabContent: [
      {
        img: "work-1",
        cat: "Ayudas",
        title: "Roberta",
        route: "https://www.youtube.com/watch?v=9ULGYbDR79g&t",
        videoId: "9ULGYbDR79g?si=pP8KY5r4qAkNG0Ya",
      },
      {
        img: "work-2",
        cat: "Ayudas",
        title: "Tatiana",
        route: "https://www.youtube.com/watch?v=32fUqM6BK5M&t",
        videoId: "32fUqM6BK5M?si=veJkdtSdB0RZcpk_",
      },
      {
        img: "work-3",
        cat: "Ayudas",
        title: "Susana",
        route: "https://www.youtube.com/watch?v=xPmDGom-oFg",
        videoId: "xPmDGom-oFg?si=xRXgaqVrN4Xpsl2n",
      },
      {
        img: "work-4",
        cat: "Ayudas",
        title: "Jordi",
        route: "https://www.youtube.com/watch?v=qeRZ7x4Tz0E",
        videoId: "qeRZ7x4Tz0E?si=IHMK_25IgK4-QCCk",
      },
    ],
  },
  {
    tabContent: [
      {
        img: "work-1",
        meta: "Ayudas",
        title: "Carmen",
        route: "https://www.youtube.com/watch?v=PiMykbANYTQ",
        videoId: "PiMykbANYTQ?si=WnLoB_RF121nTJhd",
      },
      {
        img: "work-2",
        meta: "Ayudas",
        title: "Modibo",
        route: "https://www.youtube.com/watch?v=RnD-y0V8Lko",
        videoId: "RnD-y0V8Lko?si=JBiW_NtQWTxwi2gi",
      },
      {
        img: "work-3",
        meta: "Ayudas",
        title: "Ada Luz",
        route: "https://www.youtube.com/watch?v=2Ig0nEx0RGM&t",
        videoId: "2Ig0nEx0RGM?si=b6zcrL7NxEjxr3j-",
      },
      {
        img: "work-4",
        meta: "Ayudas",
        title: "Francisco Ribas",
        route: "https://www.youtube.com/watch?v=WAq4aPjFAYU",
        videoId: "WAq4aPjFAYU?si=7LYHOXJ21ujPExTz",
      },
    ],
  },
  {
    tabContent: [
      {
        img: "work-1",
        meta: "Ayudas",
        title: "Manel Martin",
        route: "https://www.youtube.com/watch?v=2Qzy3dsS0Xs",
        videoId: "2Qzy3dsS0Xs?si=sXKTPFcZB8_yrSdx",
      },
      {
        img: "work-2",
        meta: "Ayudas",
        title: "Aron",
        route: "https://www.youtube.com/watch?v=Ey-VoBDOg7Q",
        videoId: "Ey-VoBDOg7Q?si=QYWIIvDty8LaG1Q2",
      },
      {
        img: "work-3",
        meta: "Ayudas",
        title: "Manuel",
        route: "https://www.youtube.com/watch?v=_9zb9Q-If6E",
        videoId: "_9zb9Q-If6E?si=Cb4TktkoY8K1OZYD",
      },
      {
        img: "work-4",
        meta: "Ayudas",
        title: "Jorge",
        route: "https://www.youtube.com/watch?v=r1SGhIPd44o",
        videoId: "r1SGhIPd44o?si=QqjW5-hMnRtQLIbe",
      },
    ],
  },
  {
    tabContent: [
      {
        img: "work-2",
        meta: "Ayudas",
        title: "Eugenio Fernandez",
        route: "https://www.youtube.com/watch?v=ep_a1dyNqno",
        videoId: "ep_a1dyNqno?si=YczAVANXA3veM5ms",
      },

    ],
  },
  
];

const PortfolioAyudas = () => {
  const { ayudasSection, scrollDown} = useContext(RefContext);

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
                    scrollDown(ayudasSection, -400);
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

export default PortfolioAyudas;
