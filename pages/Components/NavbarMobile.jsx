import React, { useState } from "react";
import { BsTwitter, BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useSession, signOut } from "next-auth/react";

const NavbarMobile = ({ nightMode, setNightMode }) => {
  const [showPopUpLogOut, setShowPopUpLogOut] = useState(false);
  const { data: session } = useSession();

  return (
    <div
      className={`md:hidden w-full h-14 flex absolute items-center justify-between top-0 ${
        nightMode ? "bg-[#1e2732]" : "bg-white "
      } md:hidden px-3 z-50 py-2`}
    >
      <div
        onClick={() => setShowPopUpLogOut(!showPopUpLogOut)}
        className="w-9 h-9 rounded-full cursor-pointer"
      >
        <picture>
          <img
            className="rounded-full"
            src={session.user?.image}
            alt={session.user?.name}
          />
        </picture>
      </div>

      <div className="flex justify-center items-center cursor-pointer">
        <BsTwitter className="w-8 h-8 fill-cyan-500" />
      </div>

      <span
        onClick={() => setNightMode(!nightMode)}
        className={`ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer rounded-full h-12 w-12 flex justify-center items-center ${
          nightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
        }`}
      >
        {nightMode ? (
          <BsFillSunFill className="w-6 h-6" />
        ) : (
          <BsFillMoonFill className="w-6 h-6 fill-[#1e2732]" />
        )}
      </span>

      {showPopUpLogOut && (
        <div
          onClick={() => signOut()}
          className={`w-max h-max p-4 flex justify-center absolute top-11 left-2 rounded-md ${
            nightMode
              ? "bg-gray-700 hover:bg-gray-200 text-white hover:text-black"
              : "bg-gray-200 text-black hover:bg-gray-700 hover:text-white"
          } z-50 cursor-pointer`}
        >
          Log Out
        </div>
      )}
    </div>
  );
};

export default NavbarMobile;
