import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

const imageList = [
  {
    img: "assets/img/blog/single-post/content-image-3.png",
    delayAnimation: "0",
  },
  {
    img: "assets/img/blog/single-post/content-image-4.png",
    delayAnimation: "100",
  },
];

const ImageGridFive = () => {
  return (
    <Gallery>
      <div className="row" style={{ "--bs-gutter-y": "2rem" }}>
        {imageList.map((val, i) => (
          <div className="col-6" key={i}>
            {/* <!--Animated Block--> */}
            <div
              className="ptf-animated-block"
              data-aos="fade"
              data-aos-delay={val.delayAnimation}
            >
              {/* <!--Simple Image--> */}
              <div className="ptf-simple-image">
                <Item
                  original={val.img}
                  thumbnail={val.img}
                  width={416}
                  height={335}
                >
                  {({ ref, open }) => (
                    <img
                      src={val.img}
                      alt="service"
                      role="button"
                      ref={ref}
                      
                    />
                  )}
                </Item>
              </div>
              {/* End  .ptf-simple-image */}
        
            </div>
          </div>
        ))}
      </div>
    </Gallery>
  );
};

export default ImageGridFive;
