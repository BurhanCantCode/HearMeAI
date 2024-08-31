"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll

const Header = () => {
  const pathUrl = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  const { theme, setTheme } = useTheme();

  return (
    <header
      className={`ud-header left-0 top-0 z-40 flex w-full items-center ${
        sticky
          ? "shadow-nav fixed z-[999] border-b border-stroke bg-white/80 backdrop-blur-[5px] dark:border-dark-3/20 dark:bg-dark/10"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <ScrollLink
              to="Hero"
              smooth={true}
              duration={500}
              className={`navbar-logo block w-full ${sticky ? "py-2" : "py-5"}`}
            >
              <Image
                src={
                  sticky || pathUrl !== "/"
                    ? "/images/favicon.ico"
                    : "/images/favicon.ico"
                }
                alt="logo"
                width={240}
                height={30}
                className="header-logo w-full dark:hidden"
              />
              <Image
                src="/images/favicon.ico"
                alt="logo"
                width={240}
                height={15}
                className="header-logo hidden w-full dark:block"
              />
            </ScrollLink>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                {/* Hamburger Icon */}
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                    navbarOpen ? " top-[7px] rotate-45" : ""
                  } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${
                    pathUrl === "/" && sticky
                      ? "bg-dark dark:bg-white"
                      : "bg-white"
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                    navbarOpen ? "opacity-0" : ""
                  } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${
                    pathUrl === "/" && sticky
                      ? "bg-dark dark:bg-white"
                      : "bg-white"
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                    navbarOpen ? " top-[-8px] -rotate-45" : ""
                  } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${
                    pathUrl === "/" && sticky
                      ? "bg-dark dark:bg-white"
                      : "bg-white"
                  }`}
                />
              </button>
              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark-2 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:dark:bg-transparent ${
                  navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                }`}
              >
                <ul className="block lg:ml-8 lg:flex lg:gap-x-8 xl:ml-14 xl:gap-x-12 cursor-pointer">
                  {/* Menu items hardcoded for smooth scrolling */}
                  {[
                    { id: 1, title: "Home", path: "Hero" },
                    { id: 2, title: "About", path: "Features" },
                    { id: 5, title: "FAQs", path: "Faq" },
                    { id: 6, title: "Team", path: "Team" },
                  ].map((menuItem) => (
                    <li key={menuItem.id} className="group relative">
                      <ScrollLink
                        onClick={navbarToggleHandler}
                        to={menuItem.path}
                        smooth={true}
                        duration={500}
                        className={`ud-menu-scroll flex py-2 text-base text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary lg:inline-flex lg:px-0 lg:py-6 ${
                          pathUrl === `#${menuItem.path}` && "text-primary"
                        }`}
                      >
                        {menuItem.title}
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex items-center">
              <button
                className="mr-4 flex items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-dark-3 lg:mr-2" // Adjusted margin for larger screens
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {/* Theme toggle icon */}
                {theme === "light" ? (
                  <svg
                    className="h-6 w-6 text-dark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m8.66-12.66l-.7.7M4.04 18.36l-.7.7M21 12h1M2 12H1m15.66-7.66l-.7-.7M6.34 17.66l-.7-.7M16.95 19.95l-.7-.7m-8.49-8.49l-.7-.7M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.49 13A9 9 0 018.9 3.51 7.5 7.5 0 0012 21a7.5 7.5 0 008.49-8z"
                    />
                  </svg>
                )}
              </button>
              {/* Other possible buttons or icons */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
