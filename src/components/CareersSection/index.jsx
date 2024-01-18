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
    <section id="careers" className="px-10">
      {/* border top */}
      <div className="border-b border-dashed border-white h-20" />
      {/* heading section */}
      <section className="flex justify-between gap-4 flex-col md:flex-row text-6xl  lg:text-7xl xl:text-9xl mt-6">
        <h1 className="text-[#FA4C14]" style={{ fontFamily: "DotGothic16" }}>
          05
        </h1>
        <h1 className="text-white mr-auto md:ml-16 lg:ml-32 font-black">
          Careers<sup>##</sup>
        </h1>
        <div className="w-0 h-0 md:w-12 md:h-12 xl:w-20 xl:h-20">
          <svg
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M61 1v60H1V1h60Z"
              stroke="#FA4C14"
              strokeMiterlimit="10"
            ></path>
            <path
              d="M43.3 38H23.8V18.5"
              stroke="#FA4C14"
              strokeMiterlimit="10"
            ></path>
            <path d="M23.9 38 60.6 1.3" stroke="#FA4C14"></path>
          </svg>
        </div>
      </section>
      {/* descriptive section */}
      <section className="grid place-items-center sm:place-items-end mt-24">
        <div className="w-full sm:w-4/5 h-auto border-t border-dashed border-white flex flex-col gap-20 md:gap-0 md:flex-row justify-between pt-10 pb-40 text-balance">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-white w-full md:w-3/5 md:leading-10 text-balance">
            <span className="min-md:hidden max-lg:hidden">
              &emsp;&emsp;&emsp;&emsp;
            </span>
            VENTURE CAPITAL FIRM'S INVESTMENT PORTFOLIO ENCOMPASSES LEADING
            VENTURES. THESE COMPANIES ARE ACTIVELY SEEKING TOP TALENT TO JOIN
            THEIR TEAMS IN SOLVING COMPLEX CHALLENGES AND DEVELOPING INNOVATIVE
            PRODUCTS AND PROTOCOLS FOR THE FUTURE.
          </h2>
          {/* <h2 className="text-md w-full md:w-2/5 text-white md:pl-20 lg:pl-32 text-xs lg:text-sm xl:text-md">
            <span className="bg-black border-white border text-white p-1 md:p-2 text-[14px]">
              ETHOS
            </span>
            <br />
            <br />
            SUCCESSFUL FUNDS BEGIN WITH EXCEPTIONAL INDIVIDUALS. WE COMMIT TO
            LONG-TERM INVESTMENTS IN OUR COMPANIES, PARTNERS, AND TEAM MEMBERS.
          </h2> */}
        </div>
      </section>
      <div className="w-full flex justify-center pb-4">
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
            margin="0px"
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
      {/* fixed top-4 - removed these classes */}
      {/* <div className=" md:top-10 w-full border-b border-dotted border-gray-200 z-10"></div>
      <div id="careers" className="flex flex-col items-center justify-center min-h-screen overflow-hidden pt-4 relative">
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
      </div> */}
    </section>
  );
};

export default CareersSection;
