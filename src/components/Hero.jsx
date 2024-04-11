import React from "react";
import hero from "../assets/hero.jpeg";

function Hero() {
  return (
    
    <div className=" relative w-full pt-[70px] xl:h-[700px] md:h-[706px] h-[512px] xl:mb-[80px] md:mb-[80px] lg:h-[700px] lg:mb-[80px]">
      <img
        src={hero}
        alt="hero"
        
        className="w-full h-[218px] xl:h-[700px] lg:h-[700px] md:h-[448px] object-cover items-center "
      />
      <div
        style={{
          background: "linear-gradient(to right,#4DCA79, #1CBDDD)",
        }}
        className=" w-full px-5 py-7 xl:absolute xl:w-[670px] xl:bottom-12 xl:left-12 lg:absolute lg:w-[670px] lg:bottom-12 lg:left-12 "
      >
        <p className="text-[36px] text-white  font-bold leading-[36px] md:text-start md:text-[48px] md:leading-[48px] xl:w-[556px] lg:w-[556px] text-start ">
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </p>
        <button className=" bg-[#F28D35] mt-7 rounded-[4px] w-[214px] h-[38px] text-white font-bold text-sm text-center justify-center ">
          GET FREE CONSULTATION
        </button>
      </div>
    </div>
    
  );
}

export default Hero;
