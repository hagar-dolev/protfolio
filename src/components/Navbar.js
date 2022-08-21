import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

//ml-3 is spacing

export default function Navbar() {
  return (
    <header>
      {/*className="md:sticky object-top z-10 bg-rose-200">*/}
      <div>
        {/*className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">*/}
        <Link
          to="/about"
          className="font-press-start title-font font-medium mb-4 md:mb-0 ml-3 text-xl"
        >
          HAGAR
        </Link>
        <div className="font-oswold-g md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <Link to="/projects" className="mr-5 hover:text-white ml-3">
            Portfolio
          </Link>
          <Link to="/expirience" className="mr-5 hover:text-white ml-3">
            Expirience
          </Link>
        </div>
      </div>
    </header>
  );
}
