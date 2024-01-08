const Footer = () => {
  return (
    <>
      <div className="absolute top-2  w-full border-t-2 border-dotted border-gray-200 z-10"></div>
      <div className="absolute top-2 h-screen border-r-2 border-dotted border-gray-200 w-3/5 ml-4">
        <div className="text-xs mt-4 flex flex-wrap">
          <div className="space-y-2">
            <p> 00 HOME </p>
            <p> 01 ABOUT </p>
            <p> 02 RESEARCH </p>
            <p> 03 TEAM </p>
          </div>
          <div className="ml-20 space-y-2">
            <p> 04 PORTFOLIO </p>
            <p> 05 CAREERS </p>
            <p> 06 CONTACT </p>
            <p> 07 TERMS </p>
          </div>
          <div className="ml-20 space-y-2">
            <p> 08 DISCLOSURES </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-96 w-full border-b-2 border-dotted border-gray-200 z-10"></div>
    </>
  );
};

export default Footer;
