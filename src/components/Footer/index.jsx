import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div
        className=" w-full border-t-2 border-dotted border-gray-200 mt-20"
      />
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="lg:border-r-2 lg:border-b-0 border-b-2 border-dotted border-gray-200 p-4 min-w-[50%]">
          {/* 2nd Quadrant content */}
          <div className="text-left my-10 flex">
            <div className="text-sm md:text-2xl sm:ml-20 ml-10 space-y-2">
              <p><Link to="/">00 HOME</Link></p>
              <p><a href="/#about">01 ABOUT</a></p>
              <p><a href="/#team">02 TEAM</a></p>
              <p><a className="whitespace-nowrap" href="/#portfolio">03 PORTFOLIO</a></p>
            </div>
            <div className="text-sm md:text-2xl sm:ml-20 ml-10 space-y-2">
              <p><a href="/#careers">04 CAREERS</a></p>
              <p><Link to="/contact">06 CONTACT</Link></p>
              <p>07 TERMS</p>
              <p className="whitespace-nowrap">08 DISCLOSURES</p>
            </div>
            {/* <div className="ml-20 space-y-2 text-sm md:text-2xl "></div> */}
          </div>
        </div>

        {/* 1st Quadrant content */}
        <div className="p-4 flex flex-col items-center justify-center flex-shrink min-w-[50%]">
          <div className="bg-gray-300 border-white border text-black w-min p-2 text-[14px] text-center mb-6 ml-[-72px]">
            Info
          </div>
          <p className="text-sm">&#169; 2024 Loading Funds Inc. All Rights Reserved.</p>
        </div>
      </div>
      {/* <div className="w-full border-b-2 border-dotted border-gray-200 -mt-96"></div>
      <div className="flex w-full">
        3rd Quadrant content
        <div className="w-1/2 p-4 text-2xl md:text-9xl ">
          <h1> GLOBAL FROM </h1>
          <h1 className="text-orange-500"> DAY ONE</h1>
        </div>

        4th Quadrant Content
        <div className="w-1/2 p-4 flex justify-center">
          <p className="">LOGO GOES HERE!</p>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
