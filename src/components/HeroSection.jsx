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


      {/* START OF ABOUT SECTION */}
      <div class="left text-wrap " style={{alignSelf:"flex-start"}}>WE’RE CRYPTO-NATIVES WHO HAVE BEEN INVESTING AND BUILDING FOR 10+ YEARS. FOUNDED IN 2018, DRAGONFLY BRINGS ACCESS AND INFLUENCE TO HELP CRYPTO TEAMS WITH GLOBAL ASPIRATIONS FIND INNOVATION AND ADOPTION ANYWHERE.</div>
      <div class="bg-grey"  style={{textAlign:"right"}}>EMBLEM</div>
      <div class="right text-wrap" style={{textAlign:"right"}}>IN THE SPRING, THE DRAGONFLY IS THE FIRST TO EMERGE FROM THE FROST INTO THE FRESH, GREEN WORLD. IT’S A HUMBLE CREATURE, BUT THE DRAGONFLY HAS ONE OF THE HIGHEST HUNT SUCCESS RATES IN THE ANIMAL KINGDOM.</div>


      <div class="orange-banner">
        <p>DRAGONFLY RESEARCH</p>
        <p>INVESTING IS ALL ABOUT LOOKING INTO THE FUTURE. THROUGH OUR RESEARCH, WE DEVELOP A FUNDAMENTAL UNDERSTANDING OF THE PROBLEMS IN CRYPTO AND WHAT IT TAKES TO MAKE PROGRESS. WE SHARE OUR INSIGHTS INTO DIFFERENT AREAS OF THE CRYPTO WORLD WITH DATA-DRIVEN ANALYSIS AND A TECHNICAL APPROACH TO BREAKING DOWN BIG PROBLEMS AND OPPORTUNITIES.</p>
      </div>
      {/* <div>STATS</div>
      <ul>
        <li>12     COUNTRIES</li>
        <li>48     TEAM MEMBERS</li>
        <li>12     YEAR FOUNDED</li>
      </ul> */}
      
      {/* <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img class="rounded-lg md:w-56" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Woman paying for a purchase"/>
        </div> */}

        {/* <div class="mt-4 md:mt-0 md:ml-6">
          <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">Marketing</div>
            <a href="#" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Finding customers for your new business</a>
            <p class="mt-2 text-gray-600">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
          </div>
      </div> */}
      {/* END OF ABOUT SECTION */}


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
