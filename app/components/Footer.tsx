import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { useDarkMode } from "./context/DarkModeContext";

const Footer = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div>
      <div>
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="logo"
          className="w-36 mx-auto mb-2"
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon : assets.mail_icon}
            alt="mail-icon"
            className="w-6"
          />
          bhavani9271@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Bhavani Murali. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li className="flex flex-row gap-1 items-center">
            <div>
              <Image
                src={assets.github}
                alt="github_logo"
                className="w-6"
              />
            </div>
            <a target="_blank" href="https://github.com/bhavani-2710">
              GitHub
            </a>
          </li>
          <li className="flex flex-row gap-1 items-center">
            <div>
              <Image
                src={isDarkMode ? assets.linkedin_dark : assets.linkedin}
                alt="linkedin_logo"
                className="w-6"
              />
            </div>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/bhavanimurali/"
            >
              LinkedIn
            </a>
          </li>
          <li className="flex flex-row gap-1 items-center">
            <div>
              <Image
                src={isDarkMode ? assets.twitter_dark : assets.twitter}
                alt="twitter_logo"
                className="w-6"
              />
            </div>
            <a href="#">Twitter</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
