import React, { useState, useEffect, useRef } from "react";
import YourImage from "../../Lorem_Ipsum.png";
import { Button, ChakraProvider, Box } from "@chakra-ui/react";
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
      {/* fixed top-4 - removed these classes */}
      <div className=" md:top-10 w-full border-b border-dotted border-gray-200 z-10"></div>
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
            VENTURE CAPITAL FIRM'S INVESTMENT PORTFOLIO ENCOMPASSES LEADING
            VENTURES. THESE COMPANIES ARE ACTIVELY SEEKING TOP TALENT TO JOIN
            THEIR TEAMS IN SOLVING COMPLEX CHALLENGES AND DEVELOPING INNOVATIVE
            PRODUCTS AND PROTOCOLS FOR THE FUTURE.
          </p>
        </div>
        <div className="absolute bottom-0 w-full flex justify-center pb-4">
          <ChakraProvider theme={customTheme}>
            <Button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/loading-fund/jobs/"
                )
              }
              position="relative"
              backgroundColor="black"
              color="white"
              margin="24px"
              height="60px"
              width="420px"
              padding="20px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              overflow="hidden"
              _hover={{
                backgroundColor: "#fa4c14",
                "> .corner-element": {
                  transform: "translate(2px, 2px)",
                },
              }}
            >
              <Box
                className="corner-element"
                position="absolute"
                top="0"
                left="0"
                height="10px"
                width="100%"
                _before={{
                  content: '""',
                  position: "absolute",
                  left: "0",
                  borderLeft: "1px solid red",
                  borderTop: "1px solid red",
                  width: "10px",
                  height: "10px",
                  transition: "transform 0.2s ease",
                }}
                _after={{
                  content: '""',
                  position: "absolute",
                  right: "0",
                  borderTop: "1px solid red",
                  borderRight: "1px solid red",
                  width: "10px",
                  height: "10px",
                  transition: "transform 0.2s ease",
                }}
              />

              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                zIndex="1"
              >
                APPLY FOR A ROLE AT LOADING FUND
              </Box>

              <Box
                className="corner-element"
                position="absolute"
                bottom="0"
                left="0"
                height="10px"
                width="100%"
                _before={{
                  content: '""',
                  position: "absolute",
                  left: "0",
                  borderBottom: "1px solid red",
                  borderLeft: "1px solid red",
                  width: "10px",
                  height: "10px",
                  transition: "transform 0.2s ease",
                }}
                _after={{
                  content: '""',
                  position: "absolute",
                  right: "0",
                  borderBottom: "1px solid red",
                  borderRight: "1px solid red",
                  width: "10px",
                  height: "10px",
                  transition: "transform 0.2s ease",
                }}
              />
            </Button>
          </ChakraProvider>
        </div>
      </div>
    </>
  );
};

export default CareersSection;
