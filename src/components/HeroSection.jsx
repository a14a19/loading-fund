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


      {/* start of about section */}
      <div class="left text-wrap " style={{alignSelf:"flex-start"}}>WE’RE CRYPTO-NATIVES WHO HAVE BEEN INVESTING AND BUILDING FOR 10+ YEARS. FOUNDED IN 2018, DRAGONFLY BRINGS ACCESS AND INFLUENCE TO HELP CRYPTO TEAMS WITH GLOBAL ASPIRATIONS FIND INNOVATION AND ADOPTION ANYWHERE.</div>
      <div class="bg-grey"  style={{textAlign:"right"}}>EMBLEM</div>
      <div class="right text-wrap" style={{textAlign:"right"}}>IN THE SPRING, THE DRAGONFLY IS THE FIRST TO EMERGE FROM THE FROST INTO THE FRESH, GREEN WORLD. IT’S A HUMBLE CREATURE, BUT THE DRAGONFLY HAS ONE OF THE HIGHEST HUNT SUCCESS RATES IN THE ANIMAL KINGDOM.</div><br/>

      {/* image  */}
      <img src="cube" alt="stats-image"/><br/>

      {/* stats */}
      <div class="stats right">
        <p class="bg-white">STATS</p>
        <ul>
          <li class="top border dashed">12        COUNTRIES</li>
          <li class="top border dashed">48     TEAM MEMBERS</li>
          <li class="top border dashed">2018   YEAR FOUNDED</li>
        </ul>
      </div><br/>

      {/* image  */}
      <img src="blocks" alt="blocks-image"/><br/>

      {/* orange banner */}
      <div class="orange-banner left">
        <img src="triangle" alt="research-logo" />
        <p>DRAGONFLY RESEARCH</p>
        <p>INVESTING IS ALL ABOUT LOOKING INTO THE FUTURE. THROUGH OUR RESEARCH, WE DEVELOP A FUNDAMENTAL UNDERSTANDING OF THE PROBLEMS IN CRYPTO AND WHAT IT TAKES TO MAKE PROGRESS. WE SHARE OUR INSIGHTS INTO DIFFERENT AREAS OF THE CRYPTO WORLD WITH DATA-DRIVEN ANALYSIS AND A TECHNICAL APPROACH TO BREAKING DOWN BIG PROBLEMS AND OPPORTUNITIES.</p>
      </div><br/>

      {/* companies */}
      <ul>
        <li>ZARTA</li>
        <li>WOO NETWORK</li>
        <li>UMA</li>
        <li>TWALI</li>
        <li>TRLAB</li>
        <li>THESIS</li>
        <li>TAXBIT</li>
        <li>SZNS</li>
        <li>SYNFUTURES</li>
        <li>STARKWARE</li>
        <li>STABLEHOUSE</li>
        <li>SPINDL</li>
        <li>SPICYEST</li>
        <li>SPACEMESH</li>
        <li>SOLEND</li>
        <li>SOCEAN</li>
        <li>SKOLEM LABS</li>
        <li>SIPHER</li>
        <li>SHRAPNEL</li>
        <li>SHOWTIME</li>
        <li>SENSE FINANCE</li>
        <li>SAFFRON FINANCE</li>
        <li>SADDLE</li>
      </ul><br/>

      {/* banner */}
      <span>TECHNOLOGY IS CULTURE    GLOBAL FROM DAY ONE</span><br/>

      {/* end of about section */}


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
