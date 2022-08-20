import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

//ml-3 is spacing

export default function Navbar() {
  return (
    <header className="md:sticky top-0 z-10 bg-rose-200">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/about"
          className="font-press-start title-font font-medium mb-4 md:mb-0 ml-3 text-xl"
        >
          HAGAR
        </Link>
        <nav className="font-oswold-g md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <Link to="/projects" className="mr-5 hover:text-white ml-3">
            Past Work
          </Link>
          <Link to="/skills" className="mr-5 hover:text-white ml-3">
            Skills
          </Link>
          <Link to="/expirience" className="mr-5 hover:text-white ml-3">
            Expirience
          </Link>
          <Link to="/testimonials" className="mr-5 hover:text-white ml-3">
            Testimonials
          </Link>
        </nav>
        <Link
          to="/contact"
          className="inline-flex items-center bg-pink-500 border-0 py-1 px-3 focus:outline-none hover:bg-pink-400 rounded text-base mt-4 md:mt-0"
        >
          Contact
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </header>
  );
}
