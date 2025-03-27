import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-4 px-4 bg-white/10 dark:bg-neutral-900/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-sm text-neutral-700 dark:text-neutral-300">
        <p className="font-press-start text-xs mb-1">
          © {currentYear} Hagar Dolev
        </p>
        <p className="text-center text-xs">
          All rights reserved. Created with ♥ in Tel Aviv
        </p>
      </div>
    </footer>
  );
};

export default Footer;
