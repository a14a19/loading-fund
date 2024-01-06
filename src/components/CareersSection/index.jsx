import React, { useState, useEffect, useRef } from "react";
import YourImage from "../../Lorem_Ipsum.png";
import { Button, ChakraProvider } from "@chakra-ui/react";
import customTheme from "./customTheme";

const CareersSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const imageRef = useRef(null);

  const handleCursorEvent = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleCursorEvent);

    return () => {
      window.removeEventListener("mousemove", handleCursorEvent);
    };
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      const { x, y } = mousePosition;
      if (x !== null && y !== null) {
        const imgRect = imageRef.current.getBoundingClientRect();
        const deltaX = (x - (imgRect.left + imgRect.width / 2)) / 50;
        const deltaY = (y - (imgRect.top + imgRect.height / 2)) / 50;

        imageRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      }
    }
  }, [mousePosition]);

  return (
    <>
      <div className="fixed top-4 md:top-10 w-full border-b border-dotted border-gray-200 z-10"></div>
      <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden pt-4 relative">
        <div id="inner" className="text-center relative px-4">
          <img
            ref={imageRef}
            src={YourImage}
            alt="Lorem Ipsum Image"
            className="absolute top-1/3 left-1 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-linear max-w-none"
            style={{ height: "auto", width: "auto", maxWidth: "90%" }}
          />
          <h2 className="text-6xl md:text-8xl lg:text-9xl text-orange-600 font-bold z-20 relative">
            05
          </h2>
          <h1 className="text-7xl md:text-8xl lg:text-9xl text-white font-bold z-10 relative">
            Careers
          </h1>
          <p className="text-xs md:text-sm  relative">
            SEE OPEN POSITIONS AND APPLY TODAY TO BE HAND-MATCHED TO QUALIFIED
            ROLES.
          </p>
        </div>
        <div className="w-full border-t border-dotted border-gray-200 mt-8 z-10"></div>
        <div className="pt-4 pb-10 px-4 text-center z-10">
          <p className=" lg:text-7xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
        </div>
        <div className="absolute bottom-0 w-full flex justify-center pb-4">
          {" "}
          {/* ChakraUI Button */}
          <ChakraProvider theme={customTheme}>
            <Button
              colorScheme="orange"
              size="lg"
              onClick={() =>
                window.open("https://www.linkedin.com/company/loading-fund/")
              }
            >
              Apply Here Button
            </Button>
          </ChakraProvider>
        </div>
      </div>
    </>
  );
};

export default CareersSection;
