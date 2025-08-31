"use client";
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import Image from "next/image";
import { useDarkMode } from "./components/context/DarkModeContext";
import { assets } from "@/assets/assets";

export default function Home() {
  const {isDarkMode}=useDarkMode()
  return (
    <>
      {/* Hero background */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10 opacity-60">
        <Image
          src={isDarkMode ? assets.dark_bg_hero : assets.light_bg_hero}
          alt="Hero Background"
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Page content */}
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
