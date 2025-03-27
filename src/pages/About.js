import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="container mx-auto flex px-4 py-8 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-8 flex flex-col md:items-start md:text-left mb-4 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-pink-600">
              Hi, I'm Hagar.
              <br className="lg:inline-block" />I love doing creative stuff.
            </h1>
            <p className="mb-2 leading-relaxed text-gray-600 dark:text-gray-400">
              Engineer and Designer, aspiring science researcher. A
              multi-disciplinary person at nature. Strong in the k-wave
            </p>
            <div className="flex flex-col items-center md:items-start gap-2">
              <Link
                to="/projects"
                className="inline-flex text-white bg-pink-600 border-0 py-1.5 px-6 focus:outline-none hover:bg-pink-700 rounded text-lg"
              >
                See My Past Work
              </Link>
              <a
                href="https://www.linkedin.com/in/hagardolev/"
                className="font-press-start text-sm text-orange-400 hover:text-orange-500"
              >
                linkedin
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./ex_libris_hd.svg"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
