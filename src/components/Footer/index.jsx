const Footer = () => {
  return (
    <>
      <div className="relative w-full border-t-2 border-dotted border-gray-200 mt-96" />
      <div className="relative flex min-h-screen">
        <div className="flex-grow border-r-2 border-dotted border-gray-200 p-4">
          {/* 1st Quadrant content */}
          <div className="mt-4 flex flex-wrap">
            <div className="text-sm md:text-2xl ml-20 space-y-2">
              <p>00 HOME</p>
              <p>01 ABOUT</p>
              <p>02 RESEARCH</p>
              <p>03 TEAM</p>
              <p>04 PORTFOLIO</p>
            </div>
            <div className="text-sm md:text-2xl md:ml-20 ml-20 space-y-2">
              <p>05 CAREERS</p>
              <p>06 CONTACT</p>
              <p>07 TERMS</p>
              <p>08 DISCLOSURES</p>
            </div>
            <div className="ml-20 space-y-2 text-sm md:text-2xl"></div>
          </div>
        </div>

        {/* 2nd Quadrant content */}
        <div className="w-2/5 p-4">
          <div className="bg-gray-300 border-white border text-black w-min p-2 text-[14px] text-center mb-6">
            Info
          </div>
          <p>LOREM IPSEM ...</p>
        </div>
      </div>
      <div className="relative w-full border-b-2 border-dotted border-gray-200 -mt-96"></div>
      <div className="flex w-full">
        {/* 3rd Quadrant content */}
        <div className="w-1/2 p-4 text-2xl md:text-9xl ">
          <h1> GLOBAL FROM DAY ONE </h1>
        </div>

        {/* 4th Quadrant Content*/}
        <div className="w-2/12 p-4">
          <p className="text-right text-xs">LOGO GOES HERE!</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
