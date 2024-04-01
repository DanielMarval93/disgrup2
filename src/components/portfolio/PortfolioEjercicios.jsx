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

const portfolioMenu = ["1", "2", "3", "4", "5", "6"];

const portfolioContent = [
  {
    tabContent: [
      {
        img: "work-1",
        meta: "Ejercicios Cognitivos",
        title: "Atencion",
        route: "https://www.youtube.com/watch?v=ZKbz7tRC_2w&t",
        videoId: "ZKbz7tRC_2w?si=NyzovLglyMkvcVeA",
      },
      {
        img: "work-2",
        meta: "Ejercicios Cognitivos",
        title: "Memoria",
        route: "https://www.youtube.com/watch?v=Adkd4vFX9CU",
        videoId: "Adkd4vFX9CU?si=JLYa4M-L75z5z_zE",
      },
      {
        img: "work-3",
        meta: "Ejercicios Cognitivos",
        title: "Paris",
        route: "https://www.youtube.com/watch?v=y7u2G0BbF_w",
        videoId: "y7u2G0BbF_w?si=gMc9_1-bllNQRKyZ",
      },
      {
        img: "work-4",
        meta: "Ejercicios Cognitivos",
        title: "Egipto",
        route: "https://www.youtube.com/watch?v=GUa-fy1rLf4",
        videoId: "GUa-fy1rLf4?si=HkYfy18GVwzGDT7i",
      },
    ],
  },
  {
    tabContent: [
      {
        img: "work-1",
        meta: "Ejercicios Cognitivos",
        title: "Tokyo",
        route: "https://www.youtube.com/watch?v=iXIkHbbVM4Y",
        videoId: "iXIkHbbVM4Y?si=ZkeiZSOte-sqMqnC",
      },
      {
        img: "work-2",
        meta: "Ejercicios Cognitivos",
        title: "Sidney",
        route: "https://www.youtube.com/watch?v=j-qqabiDswE",
        videoId: "j-qqabiDswE?si=nh8mSl6OjweQO-OL",
      },
      {
        img: "work-3",
        meta: "Ejercicios Cognitivos",
        title: "San Francisco",
        route: "https://www.youtube.com/watch?v=Q_vf5Q_LUBM",
        videoId: "Q_vf5Q_LUBM?si=xfp-44TA7Ez0bPkw",
      },
      {
        img: "work-4",
        meta: "Ejercicios Cognitivos",
        title: "Especial Carnaval",
        route: "https://www.youtube.com/watch?v=oM5jBd6Wkgo",
        videoId: "oM5jBd6Wkgo?si=agr6eQsdmwVeMIIs",
      },
    ],
  },
  {
    tabContent: [
      {
        img: "work-1",
        meta: "Ejercicios Cognitivos",
        title: "Boston",
        route: "https://www.youtube.com/watch?v=o5qZiEeVNqA",
        videoId: "o5qZiEeVNqA?si=rOtZH48h5_j_J8t5",
      },
      {
        img: "work-2",
        meta: "Ejercicios Cognitivos",
        title: "Munich",
        route: "https://www.youtube.com/watch?v=XNP_M23YXLo",
        videoId: "XNP_M23YXLo?si=KPUj_sB390DFYUXk",
      },
      {
        img: "work-3",
        meta: "Ejercicios Cognitivos",
        title: "Los Angeles",
        route: "https://www.youtube.com/watch?v=HiOf0McP358",
        videoId: "HiOf0McP358?si=W58nYvCEPe2vVFks",
      },
      {
        img: "work-4",
        meta: "Ejercicios Cognitivos",
        title: "Dinamarca",
        route: "https://www.youtube.com/watch?v=eMxpm5GFGic",
        videoId: "eMxpm5GFGic?si=KXWkQStSnQo6v0wy",
      },
    ],
  },
  {
    tabContent: [
      {
        img: "work-1",
        meta: "Ejercicios Cognitivos",
        title: "Hawai",
        route: "https://www.youtube.com/watch?v=j-qqabiDswE",
        videoId: "dEzG5ICKPy4?si=ro-ftEG53BH9qf8n",
      },
      {
        img: "work-2",
        meta: "Ejercicios Cognitivos",
        title: "Londres",
        route: "https://www.youtube.com/watch?v=2duADGhU8z8",
        videoId: "2duADGhU8z8?si=rQiqU5xFfbdfgTeo",
      },
      {
        img: "work-3",
        meta: "Ejercicios Cognitivos",
        title: "Tahiti",
        route: "https://www.youtube.com/watch?v=C31tXZ8q2vQ",
        videoId: "C31tXZ8q2vQ?si=UUepLOL76qJ7UML3",
      },
      {
        img: "work-4",
        meta: "Ejercicios Cognitivos",
        title: "Sevilla",
        route: "https://www.youtube.com/watch?v=75nXpBgod6I",
        videoId: "75nXpBgod6I?si=WgjkzCFChfhlD1Q2",
      },
    ],
  },
  {
    tabContent: [
      {
        img: "work-1",
        meta: "Ejercicios Cognitivos",
        title: "New York",
        route: "https://www.youtube.com/watch?v=y7NVrxFJPWQ",
        videoId: "y7NVrxFJPWQ?si=lAvhDVOCQtdznCvp",
      },
      {
        img: "work-2",
        meta: "Ejercicios Cognitivos",
        title: "San Francisco",
        route: "https://www.youtube.com/watch?v=K-EsrmgXuSg",
        videoId: "K-EsrmgXuSg?si=VRkQRFkkCqNb2D7G",
      },
      {
        img: "work-3",
        meta: "Ejercicios Cognitivos",
        title: "Petra",
        route: "https://www.youtube.com/watch?v=MfVrestizGk",
        videoId: "MfVrestizGk?si=6Yi1-xoO5RHwd9xi",
      },
      {
        img: "work-4",
        meta: "Ejercicios Cognitivos",
        title: "Roma",
        route: "https://www.youtube.com/watch?v=gk6vUb2qeys",
        videoId: "gk6vUb2qeys?si=y9eVb6uJjMyUA9AZ",
      },
    ],
  },
  {
    tabContent: [
      {
        img: "work-1",
        meta: "Ejercicios Cognitivos",
        title: "Creta",
        route: "https://www.youtube.com/watch?v=x6Q4qgxNeTg",
        videoId: "x6Q4qgxNeTg?si=yU7E-Ol7m5lFKtDe",
      },
      {
        img: "work-2",
        meta: "Ejercicios Cognitivos",
        title: "Santorini",
        route: "https://www.youtube.com/watch?v=90inxYMC_tE",
        videoId: "90inxYMC_tE?si=gAHmIPr111h0eBia",
      },
      {
        img: "work-3",
        meta: "Ejercicios Cognitivos",
        title: "Toronto",
        route: "https://www.youtube.com/watch?v=Pt2wgU31K9E",
        videoId: "Pt2wgU31K9E?si=AYjwtN68V28dSjPD",
      },
      {
        img: "work-4",
        meta: "Ejercicios Cognitivos",
        title: "Daca",
        route: "https://www.youtube.com/watch?v=2cTrbFOxKy8&t=2s",
        videoId: "2cTrbFOxKy8?si=OznjIWz-xb1UvzJq",
      },
    ],
  },
];

const PortfolioEjercicios = () => {
  const { ejerciciosSection, scrollDown} = useContext(RefContext);

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
                    scrollDown(ejerciciosSection, -400);
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

export default PortfolioEjercicios;
