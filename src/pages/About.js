import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="about">
      <div className="absolute top-1/2 w-full -translate-y-1/2 text-center">
        <h1 className="font-aboreto text-6xl">HAGAR</h1>
        <br />
        <a
          href="https://www.linkedin.com/in/hagardolev/"
          className="font-press-start text-sm text-orange-400"
        >
          linkedin
        </a>
      </div>
      {/*<div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">*/}
      {/*  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">*/}
      {/*    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-pink-600">*/}
      {/*      Hi, I'm Hagar.*/}
      {/*      <br className="lg:inline-block" />I love doing creative stuff.*/}
      {/*    </h1>*/}
      {/*    <p className="mb-8 leading-relaxed">*/}
      {/*      Engineer and Designer, aspiring science Researcher. A*/}
      {/*      multi-disciplinary person at nature. Strong in the k-wave*/}
      {/*    </p>*/}
      {/*    /!*<div className="flex justify-center">*!/*/}
      {/*    /!*    <Link*!/*/}
      {/*    /!*        to="/contact"*!/*/}
      {/*    /!*        className="inline-flex text-white bg-pink-600 border-0 py-2 px-6 focus:outline-none hover:bg-pink-700 rounded text-lg">*!/*/}
      {/*    /!*        Slide to dm me*!/*/}
      {/*    /!*    </Link>*!/*/}
      {/*    /!*    <Link*!/*/}
      {/*    /!*        to="/projects"*!/*/}
      {/*    /!*        className="ml-4 inline-flex text-white bg-pink-600 border-0 py-2 px-6 focus:outline-none hover:bg-pink-700 hover:text-white rounded text-lg">*!/*/}
      {/*    /!*        See My Past Work*!/*/}
      {/*    /!*    </Link>*!/*/}
      {/*    /!*</div>*!/*/}
      {/*  </div>*/}
      {/*  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">*/}
      {/*    <img*/}
      {/*      className="object-cover object-center rounded"*/}
      {/*      alt="hero"*/}
      {/*      src="./ex_libris_hd.svg"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</div>*/}
    </section>
  );
}
