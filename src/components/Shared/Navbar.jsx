import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const [clicked, setClicked] = useState(false);

  const router = useRouter();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const navItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Me",
      link: "/about",
    },
    {
      title: "Experiences",
      link: "/experiences",
    },
    {
      title: "Resume",
      link: "/resume",
    },
  ];

  return (
    <div className="sticky bg-black bg-opacity-80 z-50 top-0 py-4 backdrop-filter backdrop-blur  flex flex-wrap xl:flex-nowrap items-center justify-between px-8 sm:px-6 text-white">
      <Link href="/">
        <a>
          <img
            src="images/a.png"
            className="max-h-12 sm:max-h-16 md:max-h-20 xl:max-h-16 transition duration-500 ease-in-out transform hover:scale-110 mt-3"
            alt="Logo"
          />
        </a>
      </Link>

      <button
        className="text-white inline-flex p-3 hover:bg-gray-800 rounded h-10 w-10 justify-center align-middle xl:hidden"
        onClick={handleClick}
      >
        <i className={clicked ? "fas fa-times fa-lg" : "fas fa-bars fa-lg"}></i>
      </button>

      <div
        className={
          clicked
            ? "transition ease-in-out duration-500 transform w-full xl:w-auto xl:flex"
            : "transition ease-in-out duration-500 transform hidden w-full xl:w-auto xl:flex"
        }
      >
        <div className="flex flex-col xl:flex xl:flex-row ">
          {navItems.map((item, index) => {
            return (
              <Link href={item.link} key={index}>
                <a
                  onClick={handleClick}
                  className={
                    router.pathname === item.link
                      ? `text-[#00e5ff] font-primary font-medium text-lg px-5 text-center mt-6 xl:my-auto `
                      : `text-white font-primary font-medium text-lg px-5 text-center transition duration-500 ease-in-out hover:text-[#00e5ff] mt-6 xl:my-auto`
                  }
                >
                  {item.title}
                </a>
              </Link>
            );
          })}

          <Link href="/contact" onClick={handleClick}>
            <button className="w-auto bg-[#00e5ff] text-black font-medium text-center transition duration-500 ease-in-out py-3 px-4 rounded font-primary text-lg mt-6 mb-4 mx-2 xl:mt-0 xl:mb-0 transition duration-500 ease-in-out transform hover:scale-105">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
