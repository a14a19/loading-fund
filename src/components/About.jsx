import React, { useState, useEffect } from 'react';
import cubes from '../assets/cubes.png'
import blocks from '../assets/blocks.png'
function About() {
    return (

    <div id="about" className="h-auto bg-black px-10"><br /> 
    {/*  dashed border  */}
    <div className="border-b  border-dashed border-white h-20" /> 
    {/* heading section */}
    <section className="flex justify-between gap-4 flex-col md:flex-row text-6xl  lg:text-7xl xl:text-9xl mt-6">
      <h1 className="text-[#FA4C14]" style={{ fontFamily: "DotGothic16" }}>
        01
      </h1>
      <h1 className="text-white mr-auto md:ml-16 lg:ml-32 font-black">
        ABOUT<sup>##</sup>
      </h1>
      
      <div className="w-0 h-0 md:w-12 md:h-12 xl:w-20 xl:h-20">
        <svg viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M61 1v60H1V1h60Z" stroke="#FA4C14" strokeMiterlimit="10"></path>
            <path d="M43.3 38H23.8V18.5" stroke="#FA4C14" strokeMiterlimit="10" ></path>
            <path d="M23.9 38 60.6 1.3" stroke="#FA4C14"></path>
        </svg>
      </div>
    </section>
  
      {/* start of about section */}
      <section className="grid place-items-center sm:place-items-end mt-24">
        <div className="w-full sm:w-4/5 h-auto border-t border-dashed border-black flex flex-col gap-20 md:gap-0 md:flex-row justify-between pt-10 pb-40 text-balance">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-white w-full md:w-3/5 md:leading-10 text-balance">
            <span className="min-md:hidden max-lg:hidden">
              &emsp;&emsp;&emsp;&emsp;
            </span>
            WE’RE CRYPTO-NATIVES WHO HAVE BEEN INVESTING AND BUILDING FOR 10+ YEARS. 
            FOUNDED IN 2018, DRAGONFLY BRINGS ACCESS AND INFLUENCE TO HELP CRYPTO 
            TEAMS WITH GLOBAL ASPIRATIONS FIND INNOVATION AND ADOPTION ANYWHERE.
          </h2>
        <h2 className="text-md w-full md:w-2/5 text-white md:pl-20 lg:pl-32 text-xs lg:text-sm xl:text-md">
          <span className="bg-white border-white border text-black p-1 md:p-2 text-[14px]">
            EMBLEM
          </span><br /><br />
          IN THE SPRING, THE DRAGONFLY IS THE FIRST TO EMERGE FROM 
          THE FROST INTO THE FRESH, GREEN WORLD. IT’S A HUMBLE 
          CREATURE, BUT THE DRAGONFLY HAS ONE OF THE HIGHEST 
          HUNT SUCCESS RATES IN THE ANIMAL KINGDOM.
        </h2>
        </div>
      </section>

      {/* cube image */}
      <img className="border white border-dashed" src={cubes} alt="stats-image"/><br/><br/>

      {/* stats */}
      <div className="text-4xl lg:text-6xl xl:text-8xl flex flex-col" >
        <h2 className="text-md w-full md:w-2/5 text-white text-xs lg:text-sm xl:text-md pb-5">
          <span className="bg-white border-white border text-black p-1 md:p-2 text-[14px]" style={{fontFamily: " "}}>
            STATS
          </span><br/><br/>
        </h2>

        <h2 className="text-md w-full md:w-full text-white">
          <ul className="text-white text-lg md:text-5xl space-y-2 w-full">
            <li className="border-t border-dashed border-white w-full h-15 flex items-center justify-between pt-5 pb-5"  style={{ fontFamily: "DotGothic16" }}>
              <span className="p-1">12</span><span>COUNTRIES</span> 
            </li>
            <li className="border-t border-dashed border-white w-full h-15 pt-5 pb-5 flex items-center justify-between"   style={{ fontFamily: "DotGothic16" }}>
              <span className="p-1 flex flex-col">48  </span><span> TEAM MEMBERS</span>
            </li>
            <li className="border-t border-b border-dashed border-white h-15 pt-5 pb-5 flex items-center justify-between"  style={{ fontFamily: "DotGothic16" }}>
              <span className="p-1 flex flex-col">2018  </span><span>  YEAR FOUNDED</span>
            </li>
          </ul>
        </h2>

      </div><br/><br/>


      {/* image  */}
      <img className="p-10 md:ml-5" src={blocks} alt="blocks-image"/><br/>

      {/* banner: tech is culture */}
      <div className="texts overflow-hidden w-full bg-black pb-28 text-[#FA4C14] text-4xl lg:text-6xl xl:text-8xl flex flex-row gap-4 font-medium uppercase">
        <div className="text-slide flex items-center space-x-8 ">
          <h1>Technology is culture &nbsp;
            <span style={{ fontFamily: "DotGothic16" }}>
              global from day one
            </span>
          </h1>
        </div>
        <div className="text-slide flex items-center space-x-8">
          <h1>
            Technology is culture &nbsp;
            <span style={{ fontFamily: "DotGothic16" }}>
              global from day one
            </span>
          </h1>
        </div>
      </div>
      
    </div>

    );
}

export default About;
