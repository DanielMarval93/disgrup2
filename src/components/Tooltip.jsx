import React, { useState } from "react";

const Tooltip = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  // Function to show the tooltip
  const showTooltip = (index) => {
    setHoveredImage(index);
  };

  // Function to hide the tooltip
  const hideTooltip = () => {
    setHoveredImage(null);
  };

  // Image data and tooltip texts with corresponding disability definitions in Spanish
  const images = [
    {
      src: "https://i.imgur.com/uJpJQ7U.png",
      alt: "Ceguera",
      text: "Ceguera: Una condición en la que una persona no tiene visión o tiene visión muy limitada.",
    },
    {
      src: "https://i.imgur.com/wk0vStY.png",
      alt: "Discapacidad auditiva",
      text: "Discapacidad auditiva: Una condición en la que una persona tiene incapacidad parcial o total para escuchar.",
    },
    {
      src: "https://i.imgur.com/p1aaELq.png",
      alt: "Discapacidad de movimiento parcial",
      text: "Discapacidad de movimiento parcial: Una condición en la que una persona tiene movilidad limitada en uno o más miembros.",
    },
    {
      src: "https://i.imgur.com/rOvp42J.png",
      alt: "Discapacidad de movimiento total",
      text: "Discapacidad de movimiento total: Una condición en la que una persona no tiene capacidad de movimiento en los miembros o partes del cuerpo.",
    },
    {
      src: "https://i.imgur.com/3XjILLk.png",
      alt: "Discapacidad mental",
      text: "Discapacidad mental: Una condición en la que una persona tiene discapacidades cognitivas o intelectuales que afectan su funcionamiento diario.",
    },
  ];

  return (
    <div className="carrousel-wrapper" style={{ position: "relative", display: "inline-block", marginTop: "5rem", marginLeft: "20px" }}>
      {images.map((image, index) => (
        <div
          key={index}
          style={{ display: "flex", alignItems: "center", marginBottom: "12px", position: "relative" }}
          onMouseEnter={() => showTooltip(index)}
          onMouseLeave={hideTooltip}
        >
          {/* Image */}
          <img
            src={image.src}
            alt={image.alt}
            style={{ width: "60px", height: "60px" }}
          />

          {/* Tooltip */}
          {hoveredImage === index && (
            <div
              style={{
                position: "absolute",
                left: "-270px", // Shifted 50px to the left
                backgroundColor: "var(--ptf-accent-1)",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                width: "260px", // 30% wider
                textAlign: "center",
                whiteSpace: "normal", // Allow wrapping of long text
                lineHeight: "1.2", // Reduced space between lines
                zIndex: 10,
              }}
            >
              {image.text}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Tooltip;
