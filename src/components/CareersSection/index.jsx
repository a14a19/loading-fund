import React, { useState, useEffect, useRef } from "react";
import YourImage from "../../Lorem_Ipsum.png";

const CareersSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const imageRef = useRef(null);

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      const { x, y } = mousePosition;
      if (x !== null && y !== null) {
        const imgRect = imageRef.current.getBoundingClientRect();
        const imgCenterX = imgRect.left + imgRect.width / 2;
        const imgCenterY = imgRect.top + imgRect.height / 2;
        const angleDeg =
          (Math.atan2(y - imgCenterY, x - imgCenterX) * 180) / Math.PI;

        imageRef.current.style.transform = `rotate(${angleDeg}deg)`;
      }
    }
  }, [mousePosition]);

  return (
    <div className="object-contain flex items-center justify-center h-screen">
      <div id="inner">
        <img
          ref={imageRef}
          src={YourImage}
          alt="Lorem Ipsum Image"
          className="transition-transform duration-300 ease-linear"
        />
      </div>
    </div>
  );
};

export default CareersSection;
