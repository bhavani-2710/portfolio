import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { useDarkMode } from "./context/DarkModeContext";
import { motion } from "motion/react";

const Work = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <motion.div
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20 font-outfit"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        My Projects
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        My Latest Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        Welcome to my portfolio! Here you will find a showcase of projects
        highlighting my skills in full-stack web development, from frontend
        design to backend logic.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="flex flex-col gap-8 my-10"
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="flex flex-col md:flex-row rounded-xl bg-white hover:bg-light-hover hover:shadow-black dark:bg-gray-900 dark:hover:bg-dark-hover dark:hover:shadow-white cursor-pointer"
          >
            {/* Project Image */}
            <div
              className="md:w-1/3 md:h-auto bg-cover bg-center"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            />

            {/* Project Info */}
            <div className="flex-1 p-4 md:p-5 flex flex-col justify-between">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">
                  {project.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mt-1 md:mt-2 text-sm md:text-base">
                  {project.description}
                </p>

                {/* Features */}
                {project.features && (
                  <div>
                    <h6 className=" mt-2 text-sm font-semibold">Features:</h6>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm">
                      {project.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-purple-300 dark:bg-purple-600 text-purple-800 dark:text-white px-2 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* View Code Button */}
              <div className="flex flex-row gap-2">
                {project.codeLink && (
                  <div className="flex flex-row items-center justify-evenly border border-gray-300 gap-2 mt-3 bg-gray-100 hover:bg-gray-200 dark:text-white dark:bg-slate-700 dark:hover:bg-slate-900 px-3 py-1.5 rounded-full transition self-start text-sm">
                    <a target="_blank" href={project.codeLink} className="">
                      View Code
                    </a>
                    <div className="border rounded-full bg-white border-black w-7 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000]">
                      {" "}
                      <Image
                        src={assets.send_icon}
                        alt="send-icon"
                        className="w-4"
                      />{" "}
                    </div>
                  </div>
                )}
                {project.liveLink && (
                  <div className="flex flex-row items-center justify-evenly border border-black gap-2 mt-3 hover:bg-lime-500 bg-lime-400 dark:text-white dark:hover:bg-lime-800 dark:bg-lime-700 px-3 py-1.5 rounded-full transition self-start text-sm">
                    <a target="_blank" href={project.liveLink} className="">
                      Live Demo
                    </a>
                    <div className="border rounded-full bg-black border-white w-7 aspect-square flex items-center justify-center shadow-[2px_2px_0_#fff]">
                      <Image
                        src={assets.send_icon_white}
                        alt="send-icon"
                        className="w-4"
                      />{" "}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;
