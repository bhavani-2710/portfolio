import Image from "next/image";
import React from "react";
import { useDarkMode } from "./context/DarkModeContext";
import { assets } from "@/assets/assets";

const Hero = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 opacity-60">
      <Image
        src={isDarkMode ? assets.dark_bg_hero : assets.light_bg_hero}
        alt="Hero Background"
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );
};

export default Hero;
