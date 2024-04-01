import React from "react";

const serviceContent = [
  { icon: "lnil-cup", name: "Consultoria de Branding" },
  { icon: "lnil-website-rank", name: "Soluciones Web" },
  { icon: "lnil-3d", name: "Growth Partner" },
  { icon: "lnil-video-camera-alt-1", name: "Manejo de redes sociales" },
];

const ServiceListThree = () => {
  return (
    <>
      <ul>
        {serviceContent.map((val, i) => (
          <li key={i}>
            <a href="/">
              <i className={`lnil ${val.icon}`}></i> {val.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ServiceListThree;
