import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle scroll transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "About", href: "/" },
    { name: "Photography", href: "/photography" },
    { name: "Blog", href: "/blog" },
    { name: "Research", href: "/research" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm"
          : "bg-white/20 dark:bg-neutral-900/20 backdrop-blur-[1px]"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-cinzel font-bold text-neutral-900 dark:text-white">
                Hagar Dolev
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? "text-neutral-900 dark:text-white"
                    : "text-neutral-700/90 dark:text-neutral-300/90 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-neutral-700/90 dark:text-neutral-300/90 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700/90 dark:text-neutral-300/90 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
                aria-expanded={isMenuOpen}
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } fixed inset-y-0 right-0 w-60 bg-white dark:bg-neutral-900 transform transition-transform duration-300 ease-in-out md:hidden shadow-lg`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center px-4 py-4 border-b border-neutral-200 dark:border-neutral-800">
            <span className="text-lg font-medium text-neutral-900 dark:text-white">
              Menu
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-md text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
              aria-label="Close menu"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-1 py-6">
            <div className="space-y-2 px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? "text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800"
                      : "text-neutral-700 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-800/50 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
