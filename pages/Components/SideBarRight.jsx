import React from "react";
import Image from "next/image";
import sasuke from "../../public/sasuke.jpg";
import {
  BsFillSunFill,
  BsFillMoonFill,
  BsChevronDoubleUp,
} from "react-icons/bs";

const SideBarRight = ({ nightMode, setNightMode }) => {
  return (
    <div
      className={`hidden md:block overflow-y-hidden z-50 w-max h-screen absolute top-0 right-0 ${
        nightMode ? "bg-[#1e2732]" : "bg-white"
      }`}
    >
      <nav
        className={`md:w-20 lg:w-80 h-full border-l ${
          nightMode ? "border-gray-700" : "border-gray-200"
        } flex flex-col items-center gap-8 pt-2 relative`}
      >
        <div className="flex w-full items-center justify-center">
          <div className="relative hidden lg:block">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className={`block px-8 py-3 pl-10 w-11/12 text-sm rounded-full border border-gray-600 ${
                nightMode
                  ? "bg-gray-700 focus:border-gray-700"
                  : "bg-gray-200  text-black placeholder-gray-700"
              } focus:outline-none`}
              placeholder="Buscar en Twitter..."
              required
            />
          </div>
          <span
            onClick={() => setNightMode(!nightMode)}
            className={`ml-1 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer rounded-full h-12 w-12 flex justify-center items-center ${
              nightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
            }`}
          >
            {nightMode ? (
              <BsFillSunFill className="w-6 h-6" />
            ) : (
              <BsFillMoonFill className="w-6 h-6 fill-[#1e2732]" />
            )}
          </span>
        </div>

        <div
          className={`flex-col w-11/12 h-max rounded-lg border  hidden lg:flex ${
            nightMode ? "border-gray-700" : "bg-gray-200 border-gray-400"
          }`}
        >
          <h3
            className={`text-xl font-semibold ${
              nightMode
                ? "hover:bg-gray-700"
                : "hover:bg-gray-200 text-gray-700"
            } w-full py-1 px-2 cursor-pointer`}
          >
            Ultimos Twits
          </h3>
          <div
            className={`w-full ${
              nightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
            }`}
          >
            <div className="flex justify-center items-center w-full h-max py-2 px-2 cursor-pointer">
              <div className={`w-full ${!nightMode && "text-gray-700"}`}>
                <p>#aqui andamos creando</p>
                <p>SI PODEMOS CREARLO</p>
                <p>3000 Twitter</p>
              </div>

              <Image
                className="rounded-sm"
                src={sasuke}
                alt={"sasuke"}
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
        <div
          className={`px-4 justify-between items-center w-9/12 absolute -bottom-2 border-x border-t ${
            nightMode
              ? "border-gray-700 hover:bg-gray-700"
              : "border-gray-400 hover:bg-gray-200"
          }  rounded-xl py-3 cursor-pointer  hidden lg:flex`}
        >
          <h3 className={`text-xl w-max ${!nightMode && "text-gray-700"}`}>
            Mensajes
          </h3>
          <BsChevronDoubleUp
            className={`w-6 h-6 ${!nightMode && "fill-gray-700"}`}
          />
        </div>
      </nav>
    </div>
  );
};
export default SideBarRight;
