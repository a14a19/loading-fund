import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const Team = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
    smooth: true,
  })
  const translateYProgress = useTransform(scrollYProgress, [0, 1], [300, -300])

  return (
    <div className="h-auto bg-white px-10">
      {/* border top */}
      <div className="border-b border-dashed border-black h-20" />
      {/* heading section */}
      <section className="flex justify-between gap-4 flex-col md:flex-row text-6xl  lg:text-7xl xl:text-9xl mt-6">
        <h1 className="text-red-500">03</h1>
        <h1 className="text-black mr-auto md:ml-16 lg:ml-32 font-black">
          TEAM<sup>##</sup>
        </h1>
        <div className="w-0 h-0 md:w-12 md:h-12 xl:w-20 xl:h-20">
          <svg
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M61 1v60H1V1h60Z"
              stroke="red"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M43.3 38H23.8V18.5"
              stroke="red"
              stroke-miterlimit="10"
            ></path>
            <path d="M23.9 38 60.6 1.3" stroke="red"></path>
          </svg>
        </div>
      </section>

      {/* descriptive section */}
      <section className="grid place-items-center sm:place-items-end mt-24">
        <div className="w-full sm:w-4/5 h-auto border-t border-dashed border-black flex flex-col gap-20 md:gap-0 md:flex-row justify-between pt-10 pb-40 text-balance">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-black w-full md:w-3/5 md:leading-10 text-balance">
            <span className="min-md:hidden max-lg:hidden">
              &emsp;&emsp;&emsp;&emsp;
            </span>
            DRAWING UPON OUR EXPERIENCE IN VENTURE CAPITAL, WE OFFER VALUABLE
            INSIGHTS GAINED FROM WORKING WITH AND NURTURING SOME OF THE MOST
            PROMISING STARTUPS. OUR MISSION IS TO OFFER STRATEGIC SUPPORT AT
            EVERY STAGE OF THE JOURNEY - FROM CONCEPTUALIZING DAY-ONE IDEAS TO
            ACHIEVING GLOBAL INFLUENCE.
          </h2>
          <h2 className="text-md w-full md:w-2/5 text-black md:pl-20 lg:pl-32">
            <span className="bg-black border-white border text-white p-2 text-[14px]">
              ETHOS
            </span>
            <br />
            <br />
            SUCCESSFUL FUNDS BEGIN WITH EXCEPTIONAL INDIVIDUALS. WE COMMIT TO
            LONG-TERM INVESTMENTS IN OUR COMPANIES, PARTNERS, AND TEAM MEMBERS.
          </h2>
        </div>
      </section>

      {/* photos section */}
      <section
        className="w-full grid place-content-center h-screen z-50"
        ref={ref}
      >
        <motion.div
          style={{ y: translateYProgress }}
          className="group h-[90vh]"
        >
          <div className="h-full w-full cursor-pointer hover:drop-shadow-[0_0px_25px_rgba(255,0,0,0.5)] hover:duration-500">
            <img
              src="./sridhar.jpeg"
              alt="profile_sridhar"
              className="w-full h-full block m-auto rounded-lg object-cover"
            />
            <div className="h-full w-full top-0 left-0 absolute bg-black/90 flex justify-center items-center flex-col gap-6 opacity-0 transition-all duration-500 hover:opacity-100 text-center m-auto px-10 rounded-lg">
              <h3 className="text-red-700 text-lg">BIO</h3>
              <p className="uppercase text-white">
                Founder and CEO, embarked on the entrepreneurial journey in 2020
                with Famwork in healthcare, later diversifying into various
                fields, and currently crafting innovative ventures in stealth
                mode.
              </p>
              <span className="px-2 border border-red-700 text-white uppercase mt-24">
                <a href="https://sridhar-a.vercel.app/" target="_blank">
                  about
                </a>
              </span>
            </div>
          </div>

          <h2 className="uppercase text-black text-xl sm:text-3xl md:text-4xl font-thin group-hover:text-red-500 hover:duration-500 pt-8">
            sridhar&nbsp;|&nbsp;
            <span className="text-md sm:text-lg md:text-2xl font-thin">
              Founder
            </span>
          </h2>
        </motion.div>
      </section>
    </div>
  )
}

export default Team
