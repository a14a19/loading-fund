import React, { useState, useEffect } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { ScrollableText } from '../styles/style';
import asset from "../assets/background_image.jpg";

const HeroSection = () => {

  const { scrollYProgress } = useScroll();
  const lr_coordinates = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rl_coordinates = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const characters = [",", "%", "(", ")", "@", "#", "$", "^", "&", "*", "/", ".", " "];
  const [firstMarkee, setFirstMarkee] = useState("");
  const [secondMarkee, setSecondMarkee] = useState("");

  useEffect(() => {
    const getTextWidth = (text) => {
      const dummyElement = document.createElement('span');
      dummyElement.style.whiteSpace = 'nowrap';
      dummyElement.style.visibility = 'hidden';
      dummyElement.innerHTML = text;
      document.body.appendChild(dummyElement);
      const width = dummyElement.offsetWidth;
      document.body.removeChild(dummyElement);
      return width;
    }

    const insertRandomSpaces = (inputString, numSpaces) => {
      if (numSpaces <= 0) {
        return inputString;
      }

      const m = inputString.length;
      const spacesArray = new Array(numSpaces).fill(" ");

      // Generate random indices to insert spaces
      const randomIndices = [];
      for (let i = 0; i < numSpaces; i++) {
        randomIndices.push(Math.floor(Math.random() * m));
      }

      // Sort the indices in ascending order
      randomIndices.sort((a, b) => a - b);

      // Insert spaces at the randomly generated indices
      let resultString = inputString;
      randomIndices.forEach((index, i) => {
        resultString = resultString.slice(0, index + i) + spacesArray[i] + resultString.slice(index + i);
      });

      return resultString;
    }

    const generateRandomText = (width) => {
      let randomText = "";
      do {
        randomText += characters[Math.floor(Math.random() * characters.length)];
      } while (getTextWidth(randomText) < width / 2);

      randomText = insertRandomSpaces(randomText, (width / 2) + 1);

      return randomText;
    }

    const timer = setInterval(() => {
      const container = document.getElementById('markeeLine1');
      const lineWidth = container.offsetWidth;
      const randomText_1 = generateRandomText(lineWidth);
      const randomText_2 = generateRandomText(lineWidth);
      setFirstMarkee(randomText_1);
      setSecondMarkee(randomText_2);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const containerStyle = {
    overflowX: "clip",
    marginTop: "20px",
  }

  return (
    <div className='bg-no-repeat bg-center' style={{ backgroundImage: `url(${asset})`,  backgroundSize: "contain" }}>
      <div style={containerStyle}>
        <div className='markee'>
          <div id="markeeLine1" style={{ overflow: "clip", whiteSpace: "pre", fontSize: "12px" }}>{firstMarkee}</div>
          <div style={{ textAlign: "center", textTransform: "uppercase" }}>
            <p>Unleashing Potential, One Investment at a Time.</p>
          </div>
          <div id="markeeLine2" style={{ overflow: "clip", whiteSpace: "pre", fontSize: "12px" }}>{secondMarkee}</div>
        </div>
        <ScrollableText style={{ x: lr_coordinates, lineHeight: "4.5rem", padding: "24px 8px 20px" }} >
          BRIDGING AMBITION
        </ScrollableText>
        <ScrollableText style={{ x: rl_coordinates, lineHeight: "4.5rem", textAlign: "right", padding: "0px 8px" }} >
          AND OPPORTUNITY
        </ScrollableText>
        <ScrollableText style={{ x: lr_coordinates, lineHeight: "4.5rem", padding: "24px 12px 20px", color: "red", fontFamily: "'DotGothic16', serif" }} >
          EMPOWERING INNOVATION
        </ScrollableText>
        <ScrollableText style={{ x: rl_coordinates, lineHeight: "4.5rem", padding: "8px 12px 48px", textAlign: "right", color: "red", fontFamily: "'DotGothic16', serif" }} >
          WITH PURPOSEFUL CAPITAL
        </ScrollableText>
      </div>
    </div>
  );
}

export default HeroSection;