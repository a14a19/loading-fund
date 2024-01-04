import React, { useState, useEffect } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { ScrollableText } from '../styles/style';

const MovingText = () => {
  const { scrollYProgress } = useScroll();
  const lr_coordinates = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rl_coordinates = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const characters = [",  ", "%  ", "(  ", ")  ", "@  ", "#  ", "$  ", "^  ", "&  ", "*  ", "/  ", ".  ", " "];
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

    const generateRandomText = (width) => {
      let randomText = '';
      do {
        randomText += characters[Math.floor(Math.random() * characters.length)];
      } while (getTextWidth(randomText) < width);

      return randomText.trim();
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

  return (
    <div style={{ overflowX: "clip", marginTop: "20px" }}>
      <div style={{ textAlign: "center", fontSize: "2em" }}>
        LoadingFUND_ICON
      </div>
      <div className='markee'>
        <p id="markeeLine1" style={{ overflow: "clip", whiteSpace: "nowrap" }}>{firstMarkee}</p>
        <div style={{ textAlign: "center", margin: "10px" }}>
          <p>A leading global crypto investment fund</p>
        </div>
        <p id="markeeLine2" style={{ overflow: "clip", whiteSpace: "nowrap" }}>{secondMarkee}</p>
      </div>
      <ScrollableText style={{ x: lr_coordinates }} >
        DRAGONFLY BACKS
      </ScrollableText>
      <ScrollableText style={{ x: rl_coordinates, textAlign: "right", color: "red" }} >
        YOUR FAVORITE
      </ScrollableText>
      <ScrollableText style={{ x: lr_coordinates }} >
        CRYPTO PROJECTS
      </ScrollableText>
      <ScrollableText style={{ x: rl_coordinates, textAlign: "right", color: "red" }} >
        GLOBAL FROM
      </ScrollableText>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui suscipit aliquid, 
        laboriosam dolores nesciunt animi aperiam, sint eaque debitis esse hic, nostrum asperiores! 
        Cumque non ullam nemo accusamus dignissimos.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui suscipit aliquid, 
        laboriosam dolores nesciunt animi aperiam, sint eaque debitis esse hic, nostrum asperiores! 
        Cumque non ullam nemo accusamus dignissimos.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui suscipit aliquid, 
        laboriosam dolores nesciunt animi aperiam, sint eaque debitis esse hic, nostrum asperiores! 
        Cumque non ullam nemo accusamus dignissimos.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui suscipit aliquid, 
        laboriosam dolores nesciunt animi aperiam, sint eaque debitis esse hic, nostrum asperiores! 
        Cumque non ullam nemo accusamus dignissimos.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui suscipit aliquid, 
        laboriosam dolores nesciunt animi aperiam, sint eaque debitis esse hic, nostrum asperiores! 
        Cumque non ullam nemo accusamus dignissimos.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui suscipit aliquid, 
        laboriosam dolores nesciunt animi aperiam, sint eaque debitis esse hic, nostrum asperiores! 
        Cumque non ullam nemo accusamus dignissimos.</div>

    </div>
  );
};

function HeroSection() {
  
  return (
    <div>
      <MovingText />
    </div>
  );
}

export default HeroSection;
