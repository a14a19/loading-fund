import React, { useState, useEffect } from 'react';

function About() {
    return (
     <div>
        <div class="left text-wrap" style={{alignSelf:"flex-start"}}>WE’RE CRYPTO-NATIVES WHO HAVE BEEN INVESTING AND BUILDING FOR 10+ YEARS. FOUNDED IN 2018, DRAGONFLY BRINGS ACCESS AND INFLUENCE TO HELP CRYPTO TEAMS WITH GLOBAL ASPIRATIONS FIND INNOVATION AND ADOPTION ANYWHERE.</div>
        <div class="bg-grey"  style={{textAlign:"right"}}>EMBLEM</div>
        <div class="right text-wrap" style={{textAlign:"right"}}>IN THE SPRING, THE DRAGONFLY IS THE FIRST TO EMERGE FROM THE FROST INTO THE FRESH, GREEN WORLD. IT’S A HUMBLE CREATURE, BUT THE DRAGONFLY HAS ONE OF THE HIGHEST HUNT SUCCESS RATES IN THE ANIMAL KINGDOM.</div><br/>
        <img src="cube" alt="stats-image"/><br/>

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
    <div class="container"> {/* grid grid-cols-4 gap-4 */}
    <ul>
        <div class="row">
            <div className="text-white col-span-1">
                <li>ZARTA</li>
                <li>WOO NETWORK</li>
                <li>UMA</li>
                <li>TWALI</li>
                <li>TRLAB</li>
                <li>THESIS</li>
                <li>TAXBIT</li>
                <li>SZNS</li>
            </div>
            <div className="col">
                <li>SYNFUTURES</li>
                <li>STARKWARE</li>
                <li>STABLEHOUSE</li>
                <li>SPINDL</li>
                <li>SPICYEST</li>
                <li>SPACEMESH</li>
                <li>SOLEND</li>
                <li>SOCEAN</li>
            </div><br/>
            <div class="col">
                <li>SKOLEM LABS</li>
                <li>SIPHER</li>
                <li>SHRAPNEL</li>
                <li>SHOWTIME</li>
                <li>SENSE FINANCE</li>
                <li>SAFFRON FINANCE</li>
                <li>SADDLE</li>
            </div><br/>
        </div>
    </ul>
    </div><br/>

      {/* banner */}
      <span>TECHNOLOGY IS CULTURE    GLOBAL FROM DAY ONE</span><br/>

      {/* end of about section */}




      
     </div>




    );
}

export default About;