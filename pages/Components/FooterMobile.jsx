import React from "react";
import { RiHome7Fill } from "react-icons/ri";
import { BiBell } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const FooterMobile = ({ nightMode }) => {
  return (
    <div
      className={`md:hidden absolute bottom-0 flex justify-between px-4 py-1 w-full h-max  ${
        nightMode ? "bg-[#1e2732]" : "bg-white"
      } border-t  border-gray-600`}
    >
      <div
        className={`flex justify-center items-center rounded-full hover:bg-[#465c78] cursor-pointer w-12 h-12 ${
          nightMode ? "hover:bg-[#465c78]" : "hover:bg-gray-200"
        }`}
      >
        <div className="flex w-full h-full items-center justify-center gap-2">
          <RiHome7Fill
            className={`w-7 h-7 ${nightMode ? "fill-white" : "fill-[#1e2732]"}`}
          />
        </div>
      </div>

      <div
        className={`flex justify-center items-center rounded-full hover:bg-[#465c78] cursor-pointer w-12 h-12 ${
          nightMode ? "hover:bg-[#465c78]" : "hover:bg-gray-200"
        }`}
      >
        <div className="flex items-center gap-2">
          <BsSearch
            className={`w-7 h-7 ${nightMode ? "fill-white" : "fill-[#1e2732]"}`}
          />
        </div>
      </div>

      <div
        className={`flex justify-center items-center rounded-full hover:bg-[#465c78] cursor-pointer w-12 h-12 ${
          nightMode ? "hover:bg-[#465c78]" : "hover:bg-gray-200"
        }`}
      >
        <div className="flex items-center gap-2">
          <BiBell
            className={`w-7 h-7 ${nightMode ? "fill-white" : "fill-[#1e2732]"}`}
          />
        </div>
      </div>

      <div
        className={`flex justify-center items-center rounded-full hover:bg-[#465c78] cursor-pointer w-12 h-12 ${
          nightMode ? "hover:bg-[#465c78]" : "hover:bg-gray-200"
        }`}
      >
        <div className="flex items-center gap-2">
          <AiOutlineMail
            className={`w-7 h-7 ${nightMode ? "fill-white" : "fill-[#1e2732]"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
